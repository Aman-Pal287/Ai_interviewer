import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react"; // 👈 import icons

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newObj = {
      email,
      password,
    };
    console.log(newObj);
  };

  return (
    <div className="w-full h-screen px-16 py-10">
      <div className="w-[65rem] rounded-2xl h-[34rem] p-3 flex gap-2 bg-zinc-800">
        {/* Left Section */}
        <div className="w-1/2 rounded-md bg-red-500">
          <img
            className="w-full h-full object-cover rounded-md"
            src="https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Login Illustration"
          />
        </div>

        {/* Right Section */}
        <div className="flex-1 bg-zinc-800">
          <div className="mt-10 mx-16">
            {/* Heading */}
            <div className="flex flex-col gap-2">
              <h1 className="font-semibold text-4xl tracking-tight text-zinc-50">
                Login to your account
              </h1>
              <p className="text-sm text-zinc-400">
                Don’t have an account?{" "}
                <Link to="/register" className="text-purple-400 cursor-pointer">
                  Register
                </Link>
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
              {/* Email Input */}
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-96 h-12 px-4 rounded-md bg-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />

              {/* Password Input with toggle */}
              <div className="relative w-96">
                <input
                  type={isOpen ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="w-full h-12 px-4 pr-10 rounded-md bg-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button
                  type="button"
                  onClick={() => setIsOpen((prev) => !prev)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white"
                >
                  {isOpen ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              {/* Main Button */}
              <button
                type="submit"
                className="w-96 h-12 rounded-lg bg-purple-500 text-white font-medium hover:bg-purple-600 transition"
              >
                Login
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

export default Login;
