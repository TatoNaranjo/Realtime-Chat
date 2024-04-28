import { useState } from "react";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {auth,db} from "../../lib/firebase.js"
import {doc,setDoc} from "firebase/firestore"
import upload from "../../lib/upload.js";

const Login = () => {
    const [avatar,setAvatar] = useState({
        file:null,
        url:""
    })

    const [loading, setLoading] = useState(false)

    const handleAvatar = (e) => {
        if(e.target.files[0]){

            setAvatar({
                file:e.target.files[0],
                url:URL.createObjectURL(e.target.files[0])
            })
        }
     }
     const handleRegister = async (e) => {
      e.preventDefault()
      setLoading(true)
      const formData = new FormData(e.target)

      const {username, email, password} = Object.fromEntries(formData);
      
      try{
        const res = await createUserWithEmailAndPassword(auth,email,password)

        const imgUrl = await upload(avatar.file)
        await setDoc(doc(db, "users", res.user.uid), {
          username: username,
          email,
          avatar:imgUrl,
          id: res.user.uid,
          blocked:[],
        });


        await setDoc(doc(db, "userchats", res.user.uid), {
          chats:[],
        });

        toast.success("Account Created Successfully, you can Login Now")

      } catch (err){
        console.log(err)
        toast.error(err.message)
      } finally {
        setLoading(false)
      }
     }

     const handleLogin = async (e) => {  
      e.preventDefault()

      const formData = new FormData(e.target)

      const {email, password} = Object.fromEntries(formData);
      setLoading(true)

      try {
        await signInWithEmailAndPassword(auth, email,password)
      } catch (err){
        console.log(err)
        toast.error(err.message)
      }
      finally{
        setLoading(false)
      }
     }



  return (
    <div className="login w-[100%] h-[100%] flex items-center gap-[100px] ">
      <div className="item flex-[1] flex flex-col items-center gap-5">
        <h2>Welcome Back,</h2>

        <form action="" onSubmit={handleLogin} className= "flex flex-col items-center justify-center gap-5 border-none">
          <input type="text" className = "border-none outline-none text-white bg-green-950/50 p-5 rounded-[5px]" placeholder="Email" name="email" />
          <input type="password" className = "border-none outline-none text-white bg-green-950/50 p-5 rounded-[5px]" placeholder="Password" name="password" />
          <button className = "w-[100%] p-5 border-none bg-green-950 text-white rounded-[5px] cursor-pointer font-[500]" disabled={loading}>{loading ? "Loading": "Sign In"}</button>
        </form>
      </div>

      <div className="separator h-[80%] w-[2px] bg-[#dddddd35]"></div>

      <div className="item flex-[1] flex flex-col items-center gap-5">
        <h2>Create An Account</h2>

        <form onSubmit={handleRegister} className= "flex flex-col items-center justify-center gap-5 border-none">
            <label htmlFor="file" className="w-[100%] flex items-center gap-5 cursor-pointer underline">
                <img className ="w-[50px] h-[50px] solid rounded-[10px] object-cover opacity-[0.6]" src={avatar.url || "./avatar.png"} alt="" />
                Upload an Image
                </label>
          <input type="file" id = "file" className="hidden" onChange={handleAvatar}/>
          <input type="text" className = "border-none outline-none text-white bg-green-950/50 p-5 rounded-[5px]" placeholder="Username" name="username" />
          <input type="text" className = "border-none outline-none text-white bg-green-950/50 p-5 rounded-[5px]" placeholder="Email" name="email" />
          <input type="password" className = "border-none outline-none text-white bg-green-950/50 p-5 rounded-[5px]" placeholder="Password" name="password" />
          <button className = "w-[100%] p-5 border-none bg-green-950 text-white rounded-[5px] cursor-pointer font-[500]" disabled={loading}>{loading ? "Loading": "Sign Up"}</button>
        </form>
      </div>
    </div>
  );
};
export default Login;
