import "./detail.css"

const Detail = () => {
    return (
        <div className="flex-[1]">
        <div className="user px-[20px] py-[30px] flex flex-col items-center gap-[15px] border-[#dddddd35] border-b-[1px] solid">
            <img src="./avatar.png" alt="" />
            <h2>Hikaru Nakamura</h2>
            <p>Lorem ipsum dolor sit amet.</p>
        </div>    
        <div className="info p-5 flex flex-col gap-[25px]">

            <div className="option">
                <div className="title">
                    <span>Chat Settings</span>
                    <img src="./arrowUp.png" alt="" />
                </div>
            </div>

            <div className="option">
                <div className="title">
                    <span>Privacy & Help</span>
                    <img src="./arrowUp.png" alt="" />
                </div>
            </div>
            
            <div className="option">
                <div className="title">
                    <span>Shared Photos</span>
                    <img src="./arrowDown.png" alt="" />
                </div>
                <div className="photos">

                    <div className="photoItem">
                        <div className="photoDetail">

                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC0iRcAba0WlMN8YzX0TNuzjK4Y7PXV6eWFkv259cv3w&s" alt="" />
                        <span>Photo_2024_2.png</span>
                        </div>
                        <img src="./download.png" alt="" className="icon" />
                    </div>


                    <div className="photoItem">
                        <div className="photoDetail">

                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC0iRcAba0WlMN8YzX0TNuzjK4Y7PXV6eWFkv259cv3w&s" alt="" />
                        <span>Photo_2024_2.png</span>
                        </div>
                        <img src="./download.png" alt="" className="icon" />
                    </div>


                    <div className="photoItem">
                        <div className="photoDetail">

                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC0iRcAba0WlMN8YzX0TNuzjK4Y7PXV6eWFkv259cv3w&s" alt="" />
                        <span>Photo_2024_2.png</span>
                        </div>
                        <img src="./download.png" alt="" className="icon" />
                    </div>


                    <div className="photoItem">
                        <div className="photoDetail">

                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC0iRcAba0WlMN8YzX0TNuzjK4Y7PXV6eWFkv259cv3w&s" alt="" />
                        <span>Photo_2024_2.png</span>
                        </div>
                        <img src="./download.png" alt="" className="icon" />
                    </div>
                    
                </div>
            </div>


            <div className="option">
                <div className="title">
                    <span>Shared Files</span>
                    <img src="./arrowUp.png" alt="" />
                </div>
            </div>

        <button className="px-[15px] py-[10px] text-white bg-[rgba(230,74,105,0.553)] border-none rounded-[5px] cursor-pointer hover:bg-red-900">Block User</button>
        <button className="px-5 py-[10px] text-white bg-[rgba(35,77,51,0.81)] border-none rounded-[5px] cursor-pointer hover:bg-green-900">Logout</button>
        </div>
        </div>
    );


}
export default Detail