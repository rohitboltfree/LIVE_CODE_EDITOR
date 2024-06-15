import { useRef } from 'react'
import { auth, logInWithEmailAndPassword, registerWithEmailAndPassword, signInWithGoogle } from '../../config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Auth = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const nameRef = useRef();
    const register = (e) => {
        if(emailRef.current.value === "" || passwordRef.current.value === "") return alert("Please fill in the fields");
        e.preventDefault();
        registerWithEmailAndPassword(
            "aman",
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser);
        }).catch((error) => {
            console.log(error);
        });
    }
    
  return (
    <div className="w-full max-w-md mx-auto my-auto">
    <form className="bg-white shadow-lg rounded px-12 pt-6 pb-8 mb-4">
    <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
          Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="Name"
          ref={nameRef}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="Email"
          ref={emailRef}
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
          Password
        </label>
        <input
          className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
          id="password"
          type="password"
          placeholder="******************"
          ref={passwordRef}
        />
        <p className="text-red-500 text-xs italic">Please choose a password.</p>

</div>
<div className="flex items-center justify-between">
<button

  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
  type="button"
  onClick={register}
> 
  Register
</button>
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      type="button"
      onClick={signInWithGoogle}
    >
      Sign in with Google
    </button>
</div>
</form>

<p className="text-center text-gray-500 text-xs">
&copy;2020 Acme Corp. All rights reserved.
</p>
</div>
  )
}

const Login=()=>{
  const emailRef = useRef();
  const passwordRef  = useRef();

  const handleLogin=()=>{
    if(!emailRef.current?.value && !passwordRef.current?.value) return;

    logInWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    )
  }

    return(
        <div>
        <div className="container">
        <div className="flex justify-center items-center h-screen">
          <div className="w-full max-w-md">
            <form className="bg-white shadow-lg rounded px-12 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Email"
                  ref={emailRef}
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="******************"
                  ref={passwordRef}
                />
                <p className="text-red-500 text-xs italic">Please choose a password.</p>
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={handleLogin}
                >
                  Sign In
                </button>
                
                <a
                  className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                  href="#"
                >
                  Forgot Password?
                </a>
              </div>
              
            </form>
            
            <p className="text-center text-gray-500 text-xs">
              &copy;2020 Acme Corp. All rights reserved.
            </p>
          </div>
        </div>
      </div>
        </div>
    )
}

export default Auth