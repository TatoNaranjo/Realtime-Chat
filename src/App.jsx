/* Importing Components */
import List from "./components/list/List"
import Chat from "./components/chat/Chat"
import Detail from "./components/detail/Detail"
import Login from "./components/login/Login"
import Notification from "./components/notification/Notification"

const App = () => {

  const user = true;
  return (
    <div className='container flex backdrop-blur bg-lime-950/50 saturate-[180%] w-[80vw] h-[90vh] rounded-xl text-white font-bold '>
      
      {
        user ? (
          <>
          <List/>
          <Chat/>
          <Detail/>
          </>

        ) : (<Login/>)
      }
      <Notification/>
      </div>
  )
}

export default App