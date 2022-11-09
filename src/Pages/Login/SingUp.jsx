import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AuthContext from "../../Context/Context";
import useTitle from "../../hooks/useTitle";

const SingUp = () => {
  const { crateUser, updateUser,googleLogin } = useContext(AuthContext);
  const [error, setError] = useState("");
  useTitle('Sing Up')
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    if (password.length < 6) {
      setError("Password Must Be > 6");
      return;
    }
    if (password !== confirmPassword) {
      setError("Password Are Not Same");
      return;
    }
    if (password === "123456") {
      setError("Very Week Password");
      return;
    }
    crateUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser(name, photoUrl);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        const error = err.message;
        setError(error);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
    .then(result =>{
      navigate(from, { replace: true });
    })
    .catch(err=>{
        const errorMessaage = err.message;
        setError(errorMessaage);

    })
  };


  return (
    <div>
      <div className="max-w-xl mx-auto mb-6">
        <div className="flex items-center ">
          <div className="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
            <span className="block w-full text-xl uppercase font-bold mb-4 text-center">
              Sing Up
            </span>
            <form className="mb-4" onSubmit={handleSubmit}>
              <div className="mb-4 md:w-full">
                <label htmlFor="email" className="block text-xs mb-1">
                  Name
                </label>
                <input
                  className="w-full border rounded p-2 outline-none focus:shadow-outline"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-4 md:w-full">
                <label htmlFor="email" className="block text-xs mb-1">
                  Photo Url
                </label>
                <input
                  className="w-full border rounded p-2 outline-none focus:shadow-outline"
                  type="text"
                  name="photoUrl"
                  id="photoUrl"
                  placeholder="Photo Url"
                  required
                />
              </div>
              <div className="mb-4 md:w-full">
                <label htmlFor="email" className="block text-xs mb-1">
                  Email
                </label>
                <input
                  className="w-full border rounded p-2 outline-none focus:shadow-outline"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="mb-6 md:w-full">
                <label htmlFor="password" className="block text-xs mb-1">
                  Password
                </label>
                <input
                  className="w-full border rounded p-2 outline-none focus:shadow-outline"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  required
                />
              </div>
              <div className="mb-6 md:w-full">
                <label htmlFor="confirmPassword" className="block text-xs mb-1">
                  Confirm Password
                </label>
                <input
                  className="w-full border rounded p-2 outline-none focus:shadow-outline"
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="confirm Password"
                  required
                />
              </div>
              <input
                type="submit"
                className="bg-primary hover:bg-red-700 text-white uppercase text-sm font-semibold px-4 py-2 rounded w-full"
                value="Sing Up"
              />
            </form>

            <p className="text-red-600">{error}</p>

            <div className="flex items-center pt-4 space-x-1">
              <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
              <p className="px-3 text-sm dark:text-gray-400">
                Login with social accounts
              </p>
              <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
            </div>
            <div className="flex justify-center space-x-4">
              <button
                aria-label="Log in with Google"
                onClick={handleGoogleLogin}
                className="p-3 rounded-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                </svg>
              </button>
            </div>
            <p className="text-xs text-center sm:px-6 py-2 dark:text-gray-400">
              All Ready have an account?
              <Link
                rel="noopener noreferrer"
                to="/login"
                className="underline text-red-600 px-2"
              >
                Sign In
              </Link>
            </p>
          </div>
          {/* <Toaster position="top-center" reverseOrder={false} /> */}
        </div>
      </div>
    </div>
  );
};

export default SingUp;
