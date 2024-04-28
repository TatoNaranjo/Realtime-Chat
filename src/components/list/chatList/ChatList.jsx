import { useState } from "react";
import "./chatList.css";
import AddUser from "./addUser/AddUser";

const chatList = () => {
  const [addMode, setAddMode] = useState(false);
  
  return (
    <div className="chatList flex-[1] overflow-scroll">
      <div className="search flex items-center gap-5 p-5">
        <div className="searchBar flex-[1] bg-lime-900/50 items-center gap-5 flex rounded-[10px] p-[10px]">
          <img className="w-5 h-5" src="./search.png" alt="" />
          <input
            className="bg-transparent text-white border-none outline-none flex-[1]"
            type="text"
            placeholder="search"
          />
        </div>
        <img
          className="w-9 h-9 bg-lime-900/50 p-[10px] rounded-xl cursor-pointer"
          src={addMode ? "./minus.png" : "./plus.png"}
          alt=""
          onClick={() => setAddMode((prev) => !prev)}
        />
      </div>

      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>Hikaru Nakamura</span>
          <p>I'm Out Now</p>
        </div>
      </div>

      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>Hikaru Nakamura</span>
          <p>I'm Out Now</p>
        </div>
      </div>


      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>Hikaru Nakamura</span>
          <p>I'm Out Now</p>
        </div>
      </div>

      {addMode && <AddUser/>}
    </div>


    
  );
};

export default chatList;
