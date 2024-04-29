/* Importing Components */
import List from "./components/list/List"
import Chat from "./components/chat/Chat"
import Detail from "./components/detail/Detail"
import Login from "./components/login/Login"
import Notification from "./components/notification/Notification"
import { useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth"
import {auth} from "./lib/firebase"
import { useUserStore } from "./lib/userStore"
import { useChatStore } from "./lib/chatStore"

const App = () => {

  const {currentUser, isLoading, fetchUserInfo}  = useUserStore()
  const {chatId} = useChatStore()

  useEffect(()=>{
    const unSub = onAuthStateChanged(auth,(user)=>{
     fetchUserInfo(user?.uid);
    })

    return()=>{
      unSub();
    }
  },[fetchUserInfo])


  if(isLoading)return <div className="loading p-[50] text-[36px] rounded-[10px] bg-[rgba(17,25,40,0.9)]">Loading... </div>

  return (
    <div className='container flex backdrop-blur bg-lime-950/50 saturate-[180%] w-[80vw] h-[90vh] rounded-xl text-white font-bold '>
      
      {
        currentUser ? (
          <>
          <List/>
          {chatId && <Chat/>}
          {chatId && <Detail/>}
          </>

        ) : (<Login/>)
      }
      <Notification/>
      </div>
  )
}

export default App