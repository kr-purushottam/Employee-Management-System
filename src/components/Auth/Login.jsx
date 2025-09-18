import { useState } from "react"


const Login = () => {

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
        // console.log("Id is : " , email)
        // console.log("Password is : " , password)
        setEmail("");
        setPassword("");
    }

  return (
    <div className='h-screen w-screen flex items-center flex-col justify-center'>
        <h1 className="text-3xl">Login</h1>
        <div>
            <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
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

                <div className='flex gap-16 text-[#5e676e]'>
                    <label>
                    <input
                        type='checkbox'
                        className='text-[#5e676e]'
                    /> {" "}Remember me
                    </label>

                    <button type='button' className='cursor-pointer text-red-300 '>Forget Password</button>
                </div>

                <button className='bg-amber-700 cursor-pointer p-2 rounded-full'>Log In</button>
                
            </form>
        </div>
    </div>
  )
}

export default Login