const AddUser = ()=>{

return (
    <div className="addUser absolute p-[30px] bg-[rgba(40,70,52,0.82)] rounded-[10px] top-0 bottom-0 left-0 right-0 m-auto w-max h-max">
        <form action="" className="flex p-5 gap-5">
            <input type="text" className = "p-5 rounded-[10px] border-none outline-none text-black" placeholder="Username" name = "username" />
            <button className = "p-5 rounded-[10px] bg-black text-white border-none cursor-pointer">Search</button>
        </form>

        <div className="user mt-[50px] flex items-center justify-between">
            <div className="detail flex items-center gap-5">
                <img src="./avatar.png" className = "w-[50px] h-[50px] border-[50%] object-cover" alt="" />
                <span>Hikaru Nakamura</span>
            </div>
            <button className="p-5 rounded-[10px] bg-black text-white border-none cursor-pointer">Add User</button>
        </div>
    </div>
)
}

export default AddUser