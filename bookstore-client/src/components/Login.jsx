import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthNContext } from "../context/AuthNProvider";
import googleLogo from "../assets/Google-Symbol.png";

const Login = () => {
  const { login, loginWithGoogle } = useContext(AuthNContext);
  const { error, setError } = useState("error");
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError("Error Signing Up");
      });
    // console.log(email, password);
  };
  const handleRegister = () => {
    loginWithGoogle().then((result) => {
      const user = result.user;
      navigate(from, { replace: true });
    });
  };
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-300 to-emerald-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold">Log In Form</h1>
            </div>
            <div className="divide-y divide-gray-200">
              <form
                onSubmit={handleLogin}
                className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
              >
                <div className="relative">
                  <input
                    id="email"
                    name="email"
                    type="text"
                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Email address"
                  />
                </div>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Password"
                  />
                </div>
                {error ? (
                  <p className="text-red-600 text-base">
                    Credentials wrong, please try again.
                  </p>
                ) : (
                  ""
                )}
                <p>
                  <Link
                    to="/sign-up"
                    className="text-green-500 font-bold underline"
                  >
                    Sing Up
                  </Link>{" "}
                  here if you don't have an account!
                </p>
                <div className="relative">
                  <button className="bg-green-500 text-white rounded-md px-2 py-1">
                    Welcome Back!
                  </button>
                </div>
              </form>
            </div>
            <hr />
            <div className="flex w-full item flex-col mt-5 gap-3">
              <button
                onClick={handleRegister}
                className="block bg-gradient-to-r from-blue-300 to-green-400 text-blue-800 font-semibold"
              >
                <img
                  src={googleLogo}
                  alt=""
                  className="w-12 h-8 inline-block mt-1"
                />
                With Google?
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
