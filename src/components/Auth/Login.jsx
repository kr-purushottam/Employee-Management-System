import { useEffect, useState } from "react"
import { getLocalStorage, setLocalStorage } from "../../utils/LocalStorage";
import { FaUserTie } from 'react-icons/fa';


const Login = ({handleLogin}) => {
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");



    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin(email,password);
        setEmail("");
        setPassword("");
    }

  return (
    <div className='min-h-screen w-screen flex items-center flex-col justify-start mx-auto'>
        <div className="bg-[#313131] p-16 m-10">
        <h1 className="text-4xl mt-8 font-semibold flex text-center gap-4"><FaUserTie />  Sign In | Admin</h1>
        <div className="mt-16">
            <form className='flex flex-col gap-8' onSubmit={handleSubmit}>
                <input
                    type='email'
                    placeholder='Email'
                    value={email}
                    className='border-2 border-orange-700 text-white rounded-xl p-1.5 text-xl placeholder:text-[#5e676e] outline-none'
                    onChange={handleEmail}
                    required
                />
                <input
                    type='password'
                    placeholder='Password'
                    value={password}
                    className='border-2 border-orange-700 text-white rounded-xl p-1.5 text-xl placeholder:text-[#5e676e] outline-none'
                    onChange={handlePassword}
                    required
                />

                <div className='flex gap-16 text-[#5e676e] text-lg'>
                    <label>
                    <input
                        type='checkbox'
                        className='text-[#5e676e]'
                    /> {" "}Remember me
                    </label>

                    <button type='button' className='cursor-pointer text-red-300 '>Forget Password</button>
                </div>

                <button className='bg-amber-600 cursor-pointer p-2 rounded-full hover:bg-amber-700 text-xl'>Log In</button>
                
            </form>
        </div>
        </div>
    </div>
  )
}

export default Login