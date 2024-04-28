import EmojiPicker from "emoji-picker-react";
import "./chat.css";
import { useRef, useState, useEffect } from "react";

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const endRef = useRef(null);

  useEffect(()=>{
    endRef.current?.scrollIntoView({behavior:"smooth"})
  },[])

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
  };

  return (
    <div className="chat flex flex-col flex-[2] solid border-l-[1px] border-r-[1px] border-[#dddddd35] h-[100%]">
      <div className="top p-5 flex items-center justify-between border-b-[1px] border-[#dddddd35]">
        <div className="user flex items-center gap-5">
          <img
            className="w-[60px] h-[60px] rounded-[50%] object-cover"
            src="./avatar.png"
            alt=""
          />
          <div className="texts flex flex-col gap-[5px]">
            <span className="text-[18px] font-bold">Hikaru Nakamura</span>
            <p className="text-[14px] font-[300] text-[#e7e7e7]">
              Lorem ipsum dolor sit amet.
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

        <div className="message">
            <img src="./avatar.png" alt="" />
            <div className="texts">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ipsa dolores ea repudiandae magni quisquam impedit. Excepturi, voluptas et. Magni alias temporibus iusto, beatae voluptates ducimus suscipit exercitationem quod officia.

                </p>
            <span>1 min ago</span>
            </div>
        </div>

        <div className="message own">
            
            <div className="texts">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ipsa dolores ea repudiandae magni quisquam impedit. Excepturi, voluptas et. Magni alias temporibus iusto, beatae voluptates ducimus suscipit exercitationem quod officia.

                </p>
            <span>1 min ago</span>
            </div>
        </div>

        <div className="message">
            <img src="./avatar.png" alt="" />
            <div className="texts">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ipsa dolores ea repudiandae magni quisquam impedit. Excepturi, voluptas et. Magni alias temporibus iusto, beatae voluptates ducimus suscipit exercitationem quod officia.

                </p>
            <span>1 min ago</span>
            </div>
        </div>

        <div className="message own">
            
            <div className="texts">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC0iRcAba0WlMN8YzX0TNuzjK4Y7PXV6eWFkv259cv3w&s" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ipsa dolores ea repudiandae magni quisquam impedit. Excepturi, voluptas et. Magni alias temporibus iusto, beatae voluptates ducimus suscipit exercitationem quod officia.

                </p>
            <span>1 min ago</span>
            </div>
        </div>

        <div ref = {endRef}></div>
      </div>


    {/*Bottom Component */}
      <div className="bottom p-5 flex gap-5 items-center justify-between border-t-[1px] border-[#dddddd35] mt-auto">
        <div className="icons flex gap-5">
          <img
            className="w-[20px] h-[20px] cursor-pointer"
            src="./img.png"
            alt=""
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
          placeholder="Type a message..."
          value={text}
          type="text"
          onChange={(e) => setText(e.target.value)}
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

        <button className="sendButton cursor-pointer px-[20px] py-[10px] bg-lime-950 rounded-[10px]">
          Send
        </button>
      </div>
    </div>
  );
};
export default Chat;
