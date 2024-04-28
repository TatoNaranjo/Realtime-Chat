import ChatList from "./chatList/chatList";
import UserInfo from "./userInfo/UserInfo";

const List = () => {
    return (
        <div className="flex-[1] flex flex-col">
        <UserInfo />    
        <ChatList />
        
        </div>
    );


}
export default List