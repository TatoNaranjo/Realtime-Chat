import { useState } from "react";
import { toast } from "react-toastify";

const Login = () => {
    const [avatar,setAvatar] = useState({
        file:null,
        url:""
    })

    const handleAvatar = (e) => {
        if(e.target.files[0]){

            setAvatar({
                file:e.target.files[0],
                url:URL.createObjectURL(e.target.files[0])
            })
        }
     }


     const handleLogin = (e) => {
      e.preventDefault()
      toast.success("Hello")
     }

  return (
    <div className="login w-[100%] h-[100%] flex items-center gap-[100px] ">
      <div className="item flex-[1] flex flex-col items-center gap-5">
        <h2>Welcome Back,</h2>

        <form action="" onSubmit={handleLogin} className= "flex flex-col items-center justify-center gap-5 border-none">
          <input type="text" className = "border-none outline-none text-white bg-green-950/50 p-5 rounded-[5px]" placeholder="Email" name="email" />
          <input type="text" className = "border-none outline-none text-white bg-green-950/50 p-5 rounded-[5px]" placeholder="Password" name="password" />
          <button className = "w-[100%] p-5 border-none bg-green-950 text-white rounded-[5px] cursor-pointer font-[500]">Sign In</button>
        </form>
      </div>

      <div className="separator h-[80%] w-[2px] bg-[#dddddd35]"></div>

      <div className="item flex-[1] flex flex-col items-center gap-5">
        <h2>Create An Account</h2>

        <form action="" className= "flex flex-col items-center justify-center gap-5 border-none">
            <label htmlFor="file" className="w-[100%] flex items-center gap-5 cursor-pointer underline">
                <img className ="w-[50px] h-[50px] solid rounded-[10px] object-cover opacity-[0.6]" src={avatar.url || "./avatar.png"} alt="" />
                Upload an Image
                </label>
          <input type="file" id = "file" className="hidden" onChange={handleAvatar}/>
          <input type="text" className = "border-none outline-none text-white bg-green-950/50 p-5 rounded-[5px]" placeholder="Username" name="Username" />
          <input type="text" className = "border-none outline-none text-white bg-green-950/50 p-5 rounded-[5px]" placeholder="Email" name="email" />
          <input type="text" className = "border-none outline-none text-white bg-green-950/50 p-5 rounded-[5px]" placeholder="Password" name="password" />
          <button className = "w-[100%] p-5 border-none bg-green-950 text-white rounded-[5px] cursor-pointer font-[500]">Sign Up</button>
        </form>
      </div>
    </div>
  );
};
export default Login;
