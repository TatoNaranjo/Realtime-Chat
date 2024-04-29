import {arrayUnion,
    collection,
    doc,
    getDoc,
    getDocs,
    query,
    serverTimestamp,
    setDoc,
    updateDoc,
    where,} from "firebase/firestore";
import { useState,useEffect } from "react";
import {db} from "../../../../lib/firebase"
import {useUserStore} from "../../../../lib/userStore"

const AddUser = () => {
    const [user,setUser] = useState(null)
    const {currentUser} = useUserStore();

  const handleSearch = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get("username");

    try {
      const userRef = collection(db, "users");

      const q = query(userRef, where("username", "==", username));

      const querySnapShot = await getDocs(q)

      if(!querySnapShot.empty){
        setUser(querySnapShot.docs[0].data());
      }

    } catch (err) {
      console.log(err);
    }
  };

  const handleAdd = async()=>{
    const chatRef = collection(db,"chats")
    const userChatsRef = collection(db,"userchats")

    try{
        const newChatRef = doc(chatRef)

         await setDoc(newChatRef,{
            createdAt: serverTimestamp(),
            messages:[],
        })

        await updateDoc(doc(userChatsRef, user.id),{
            chats:arrayUnion({
                chatId: newChatRef.id,
                lastMessage:"",
                receiverId:currentUser.id,
                updatedAt:Date.now(),
            }),
        })

        await updateDoc(doc(userChatsRef, currentUser.id),{
            chats:arrayUnion({
                chatId: newChatRef.id,
                lastMessage:"",
                receiverId:user.id,
                updatedAt:Date.now(),
            }),
        })

    } catch (err){
        console.log(err);
    }
  }

  return (
    <div className="addUser absolute p-[30px] bg-[rgba(40,70,52,0.82)] rounded-[10px] top-0 bottom-0 left-0 right-0 m-auto w-max h-max">
      <form onSubmit={handleSearch} className="flex p-5 gap-5">
        <input
          type="text"
          className="p-5 rounded-[10px] border-none outline-none text-black"
          placeholder="Username"
          name="username"
        />
        <button className="p-5 rounded-[10px] bg-black text-white border-none cursor-pointer">
          Search
        </button>
      </form>
        {user && 
        
      <div className="user mt-[50px] flex items-center justify-between">
        <div className="detail flex items-center gap-5">
          <img
            src={user.avatar || "./avatar.png"}
            className="w-[50px] h-[50px] border-[50%] object-cover"
            alt=""
            />
          <span>{user.username}</span>
        </div>
        <button onClick={handleAdd} className="p-5 rounded-[10px] bg-black text-white border-none cursor-pointer">
          Add User
        </button>
      </div>
        }
    </div>
  );
};

export default AddUser;
