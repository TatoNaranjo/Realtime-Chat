const Chat = () => {
    return (
        <div className="flex-[2] solid border-l-[1px] border-r-[1px] border-[#dddddd35] h-[100%]">
            <div className="top p-5 flex items-center justify-between border-b-[1px] border-[#dddddd35]">
                <div className="user flex items-center gap-5">
                    <img className = "w-[60px] h-[60px] rounded-[50%] object-cover" src="./avatar.png" alt="" />
                    <div className="texts flex flex-col gap-[5px]">
                        <span className="text-[18px] font-bold">Hikaru Nakamura</span>
                        <p className="text-[14px] font-[300] text-[#e7e7e7]">Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>

                <div className="icons flex gap-5">
                    <img className="w-[20px] h-[20px]" src="./phone.png" alt="" />
                    <img className="w-[20px] h-[20px]" src="./video.png" alt="" />
                    <img className="w-[20px] h-[20px]" src="./info.png" alt="" />
                </div>
            </div>
            
            <div className="center">

            </div>
            
            <div className="bottom">

            </div>

        </div>
    );


}
export default Chat