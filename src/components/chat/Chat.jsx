import EmojiPicker from "emoji-picker-react";
import "./chat.css";
import { useRef, useState, useEffect } from "react";
import {
  arrayUnion,
  doc,
  getDoc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../lib/firebase";
import { useChatStore } from "../../lib/chatStore";
import { useUserStore } from "../../lib/userStore";
import upload from "../../lib/upload";

const Chat = () => {
  const [chat, setChat] = useState();
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [img, setImg] = useState({
    file: null,
    url: "",
  });

  const { currentUser } = useUserStore();
  const { chatId, user, isCurrentUserBlocked, isReceiverBlocked } =
    useChatStore();

  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", chatId), (res) => {
      setChat(res.data());
    });

    return () => {
      unSub();
    };
  }, [chatId]);

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
  };

  const handleImg = (e) => {
    if (e.target.files[0]) {
      setImg({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  const handleSend = async () => {
    if (text === "") return;
    let imgUrl = null;

    try {
      if (img.file) {
        imgUrl = await upload(img.file);
      }

      await updateDoc(doc(db, "chats", chatId), {
        messages: arrayUnion({
          senderId: currentUser.id,
          text,
          createdAt: new Date(),
          ...(imgUrl && { img: imgUrl }),
        }),
      });

      const userIDs = [currentUser.id, user.id];
      userIDs.forEach(async (id) => {
        const userChatsRef = doc(db, "userchats", id);
        const userChatsSnapshot = await getDoc(userChatsRef);

        if (userChatsSnapshot.exists()) {
          const userChatsData = userChatsSnapshot.data();

          const chatIndex = userChatsData.chats.findIndex(
            (c) => c.chatId === chatId
          );

          userChatsData.chats[chatIndex].lastMessage = text;
          userChatsData.chats[chatIndex].isSeen =
            id === currentUser.id ? true : false;
          userChatsData.chats[chatIndex].updatedAt = Date.now();

          await updateDoc(userChatsRef, {
            chats: userChatsData.chats,
          });
        }
      });
    } catch (err) {
      console.log(err);
    }

    setImg({
      file: null,
      url: "",
    });

    setText("");
  };

  // Función para formatear la hora en formato de 12 horas
const formatTime = (timestamp) => {
  const date = new Date(timestamp * 1000); // Convertir timestamp a milisegundos
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12; // Convertir las 0 horas a 12 en formato de 12 horas
  const formattedTime = `${hours}:${minutes < 10 ? '0' + minutes : minutes} ${ampm}`;
  return formattedTime;
};



  return (
    <div className="chat flex flex-col flex-[2] solid border-l-[1px] border-r-[1px] border-[#dddddd35] h-[100%]">
      <div className="top p-5 flex items-center justify-between border-b-[1px] border-[#dddddd35]">
        <div className="user flex items-center gap-5">
          <img
            className="w-[60px] h-[60px] rounded-[50%] object-cover"
            src={user?.avatar || "./avatar.png"}
            alt=""
          />
          <div className="texts flex flex-col gap-[5px]">
            <span className="text-[18px] font-bold">{user?.username}</span>
            <p className="text-[14px] font-[300] text-[#e7e7e7]">
              But i'm a Creep, I'm a Weirdo...
            </p>
          </div>
        </div>

        <div className="icons flex gap-5">
          <img
            className="w-[20px] h-[20px] cursor-pointer"
            src="./phone.png"
            alt=""
          />
          <img
            className="w-[20px] h-[20px] cursor-pointer"
            src="./video.png"
            alt=""
          />
          <img
            className="w-[20px] h-[20px] cursor-pointer"
            src="./info.png"
            alt=""
          />
        </div>
      </div>

      {/*Center Component */}
      <div className="center p-5 flex-[1] overflow-scroll flex flex-col gap-5">
        {chat?.messages?.map((message) => (
          <div
            className={
              message.senderId === currentUser?.id ? "message own" : "message"
            }
            key={message?.createAt}
          >
            <div className="texts">
              {message.img && <img src={message.img} alt="" />}

              <p>{message.text}</p>
              {

                
                <span>{formatTime(message.createdAt.seconds)}</span>
              }
            </div>
          </div>

          
        ))
        }
        {img.url && (
          <div className="message own">
            <div className="texts">
              <img src={img.url} alt="" />
            </div>
          </div>
        )}

        <div ref={endRef}></div>
        
      </div>

      {/*Bottom Component */}
      <div className="bottom p-5 flex gap-5 items-center justify-between border-t-[1px] border-[#dddddd35] mt-auto">
        <div className="icons flex gap-5">
          <label htmlFor="file">
            <img
              className="w-[20px] h-[20px] cursor-pointer"
              src="./img.png"
              alt=""
            />
          </label>
          <input
            type="file"
            id="file"
            style={{ display: "none" }}
            onChange={handleImg}
          />
          <img
            className="w-[20px] h-[20px] cursor-pointer"
            src="./camera.png"
            alt=""
          />
          <img
            className="w-[20px] h-[20px] cursor-pointer"
            src="./mic.png"
            alt=""
          />
        </div>
        <input
          className="flex-[1] bg-lime-900/50 p-[15px] flex rounded-[10px] border-none outline-none text-white"
          placeholder={
            isCurrentUserBlocked || isReceiverBlocked
              ? "You can't send a message"
              : "Type a message..."
          }
          value={text}
          type="text"
          onChange={(e) => setText(e.target.value)}
          disabled={isCurrentUserBlocked || isReceiverBlocked}
        />

        <div className="emoji w-[20px] h-[20px] cursor-pointer relative">
          <img
            src="./emoji.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
          <div className="picker absolute left-0 bottom-[50px]">
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>

        <button
          onClick={handleSend}
          type="submit"
          className="sendButton cursor-pointer px-[20px] py-[10px] bg-lime-950 rounded-[10px]"
          disabled={isCurrentUserBlocked || isReceiverBlocked}
        >
          Send
        </button>
      </div>
    </div>
  );
};
export default Chat;
