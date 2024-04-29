import { auth } from "../../../lib/firebase";
import { useUserStore } from "../../../lib/userStore";

const UserInfo = () => {

    const {currentUser}  = useUserStore()

    return (
        <div className="p-5 flex items-center justify-between">

            <div className="user flex items-center gap-5">
                <img className = "w-12 rounded-[50%] object-cover" src={currentUser.avatar || "./avatar.png"} alt="" />
                <h2 className="font-bold">{currentUser.username}</h2>
            </div>
            
            
            <div className="icons flex gap-5 ">
                <img className = "w-5 h-5 cursor-pointer" src="./more.png" alt="" />
                <img className = "w-5 h-5 cursor-pointer" src="./video.png" alt="" />
                <img className = "w-5 h-5 cursor-pointer" src="./edit.png" alt="" />
                <img className = "w-5 h-5 text-white cursor-pointer" src="./logout.svg" onClick={()=>auth.signOut()}/>

            </div>
        </div>

    );
}

export default UserInfo