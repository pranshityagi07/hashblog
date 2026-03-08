import React, { useState } from "react";
import { useAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";
import { assets } from "../../assets/assets";

const Login = () => {

  const { axios, setToken } = useAppContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const { data } = await axios.post("/api/admin/login", {
        email,
        password,
      });

      if (data.success) {

        setToken(data.token);
        localStorage.setItem("token", data.token);
        axios.defaults.headers.common["Authorization"] = data.token;

      } else {
        toast.error(data.message);
      }

    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#5bb0f1] via-[#5aa9e6] to-[#ffffff] px-6">

      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-10">

        <div className="flex flex-col items-center  mb-10">

          <img src={assets.logo} alt="" className='w-40' />

          <p className="text-gray-500 mt-2">
            <i class="ri-lock-2-line mr-2 text-lg"></i>
            Login to Admin panel safely and securely .
          </p>

        </div>


        <form onSubmit={handleSubmit} className="space-y-6">

          <div>

            <label className="text-sm text-gray-600">
              Email Address
            </label>

            <input
              type="email"
              required
              placeholder="admin email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2183cf]/40 focus:border-[#2183cf]"
            />

          </div>


          <div>

            <label className="text-sm text-gray-600">
              Password
            </label>

            <input
              type="password"
              required
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2183cf]/40 focus:border-[#2183cf]"
            />

          </div>


          <button
            type="submit"
            className="w-full py-3 bg-[#2183cf] text-white rounded-lg font-medium hover:shadow-xl hover:shadow-[#2183cf]/40 transition duration-300"
          >
            Login to Dashboard
          </button>

        </form>

      </div>

    </div>
  );
};

export default Login;