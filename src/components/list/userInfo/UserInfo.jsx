const UserInfo = () => {
    return (
        <div className="p-5 flex items-center justify-between">

            <div className="user flex items-center gap-5">
                <img className = "w-12 rounded-[50%] object-cover" src="./avatar.png" alt="" />
                <h2 className="font-bold">Tato Naranjo</h2>
            </div>
            
            
            <div className="icons flex gap-5 ">
                <img className = "w-5 h-5 cursor-pointer" src="./more.png" alt="" />
                <img className = "w-5 h-5 cursor-pointer" src="./video.png" alt="" />
                <img className = "w-5 h-5 cursor-pointer" src="./edit.png" alt="" />
            </div>
        </div>

    );
}

export default UserInfo