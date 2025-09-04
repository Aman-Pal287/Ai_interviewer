import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";   

const Register: React.FC = () => {
    const [EyeOn, setEyeOn] = useState<boolean>(false);
    const [firstName, setfirstName] = useState<string>("")
    const [lastName, setlastName] = useState<string>("")
    const [email, setemail] = useState<string>("")
    const [password, setpassword] = useState<string>("")
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const newObj = {
            firstName,
            lastName,
            email,
            password
        }
        console.log(newObj);
        
    }
  return (
    <div className="w-full h-screen px-16 py-10">
      <div className="w-[65rem] rounded-2xl h-[34rem] p-3 flex gap-2 bg-zinc-800">
        {/* Left Section */}
        <div className="w-1/2 rounded-md bg-red-500">
        <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1720315631175-dfc1e36d3b09?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></div>

        {/* Right Section */}
        <div className="flex-1 bg-zinc-800">
          <div className="mt-10 mx-16">
            {/* Heading */}
            <div className="flex flex-col gap-2">
              <h1 className="font-semibold text-4xl tracking-tight text-zinc-50">
                Create an account
              </h1>
              <p className="text-sm text-zinc-400">
                Already have an account? <Link to="/login" className="text-purple-400 cursor-pointer">Login</Link>
              </p>
            </div>

            {/* Form */}
            <form className="mt-8 flex flex-col gap-4" onSubmit={handleSubmit}>
             <div className="flex gap-4">
                 <input
                 value={firstName}
                 onChange={(e)=> setfirstName(e.target.value)}
                type="text"
                placeholder="First Name"
                className="w-44 h-12 px-4 rounded-md bg-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
               <input
                type="text"
                value={lastName}
                onChange={(e)=> setlastName(e.target.value)}
                placeholder="last Name"
                className="w-44 h-12 px-4 rounded-md bg-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
             </div>
              <input
                type="email"
                value={email}
                onChange={(e)=> setemail(e.target.value)}
                placeholder="Email"
                className="w-96 h-12 px-4 rounded-md bg-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <div className="w-96 flex bg-zinc-700 rounded-md items-center px-2">
                  <input
                  type={ EyeOn ? "text" : "password"}
                  value={password}
                  onChange={(e)=>setpassword(e.target.value)}
                placeholder="Password"
                className="w-96 h-12 px-2 rounded-md bg-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              {/* { EyeOn ? <EyeOff size={16} color="#ffffff" /> : <Eye size={16} color="#fff"/>} */}
              <div onClick={()=>setEyeOn(!EyeOn)}> { EyeOn ? <EyeOff size={16} color="#ffffff" /> : <Eye size={16} color="#fff"/>}</div>
              </div>

              {/* Main Button */}
              <button
                type="submit"
                className="w-96 h-12 rounded-lg bg-purple-500 text-white font-medium hover:bg-purple-600 transition"
              >
                Create Account
              </button>

              {/* Divider */}
              <div className="flex items-center gap-3 w-96">
                <div className="flex-1 h-px bg-zinc-600"></div>
                <span className="text-zinc-400 text-sm">or</span>
                <div className="flex-1 h-px bg-zinc-600"></div>
              </div>

              {/* Google Button */}
              <button
                type="button"
                className="w-96 h-12 rounded-lg border border-zinc-600 bg-zinc-700 flex items-center justify-center gap-3 text-white hover:bg-zinc-600 transition"
              >
                <FcGoogle size={22} />
                Continue with Google
              </button>
            </form>
          </div>
        </div>
      </div>
      </div>
  );
};

export default Register;
