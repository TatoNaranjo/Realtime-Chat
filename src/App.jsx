/* Importing Components */
import List from "./components/list/List"
import Chat from "./components/chat/Chat"
import Detail from "./components/detail/Detail"

const App = () => {
  return (
    <div className='container flex backdrop-blur bg-lime-950/50 saturate-[180%] w-[80vw] h-[90vh] rounded-xl text-white font-bold '>
      <List/>
      <Chat/>
      <Detail/>
      </div>
  )
}

export default App