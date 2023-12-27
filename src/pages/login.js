import { useRef } from "react";
import { useContext } from "react";
import { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import logo from "../Images/LFT-Logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../context/Context";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";

// const IMAGE_BASE_URL = process.env.REACT_APP_IMAGE_BASE_URL;

const images = [
  `man_with_laptop.png`,
  `man_with_laptop.png`,
  `man_with_laptop.png`,
];

const Login = () => {
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");
  const [currentImage, setCurrentImage] = useState(0);
  const userRef = useRef(); // email fetching refrence
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);
  const [passwordShown, setPasswordShown] = useState(false);
  const [loading, setLoading] = useState(false);

  const baseURL = process.env.REACT_APP_BASE_URL
  const port= process.env.REACT_APP_BACKEND_PORT

  const togglePasswordVisiblity = () => {
    setPasswordShown(!passwordShown);
    passwordRef.current.focus();
  };

  const handleSignin = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    setLoading(true); // Set loading state to true
    console.log("Email", userRef.current.value);
    console.log("Pass", passwordRef.current.value);
    try {
      const res = await axios.post(`http://${baseURL}:${port}/users/login`, {
        email: userRef.current.value,
        password: passwordRef.current.value,
      });
      console.log("response from backend", res);
      console.log(res.data);
      const token = res.data;
      console.log(token);
      const decodedToken = jwtDecode(token);
      console.log(decodedToken);
      //Accessimg user data from decoded token
      const userData = decodedToken;
      console.log("UserData", userData);

      dispatch({ type: "LOGIN_SUCCESS", payload: userData });
      console.log(userData);
      console.log(userData.role);
      return navigate("/");
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE" });
      setErrorMsg("*Incorrect email or password.");
    } finally {
      setLoading(false); // Set loading state back to false
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) =>
        prevImage === images.length - 1 ? 0 : prevImage + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleSlideChange = (index) => {
    setCurrentImage(index);
  };

  return (
    <div className="flex h-screen">
      <div className="w-[50%] bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center m-4 rounded-md">
        <div className="relative">
          <div className="slideshow-container">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Slide ${index}`}
                className={`slide ${index === currentImage ? "active" : ""}`}
                style={{
                  maxWidth: "80%",
                  maxHeight: "80%",
                  margin: "auto",
                }}
              />
            ))}
          </div>
          <div className="indicators flex justify-center mt-2">
            {images.map((_, index) => (
              <button
                key={index}
                className={`indicator ${
                  index === currentImage ? "activeIndicator" : ""
                }`}
                onClick={() => handleSlideChange(index)}
              ></button>
            ))}
          </div>
        </div>
      </div>
      <div className="w-1/2 flex items-center justify-center">
        <div className="w-[60%] h-[96%] bg-white p-10 rounded-xl shadow-2xl">
          <div className="w-full mx-28 mt-4">
            <img src={logo} alt="Logo" className="h-56 w-56 cursor-pointer" />
          </div>
          <div className="text-3xl font-bold mb-6 text-center -mt-8  flex items-center">
            <hr className="flex-grow font-semibold border-t-2 border-blue-400 rounded-lg shadow-md mb-4 mt-4" />
            <span className="px-4">Welcome</span>
            <hr className="flex-grow font-semibold border-t-2 border-blue-400 rounded-lg shadow-md mb-4 mt-4" />
          </div>

          <h2 className="text-4xl font-bold mb-8">Login</h2>
          <form>
            <div className="mb-4">
              <label className="block mb-4 text-2xl font-bold" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                ref={userRef}
                autoComplete="email"
                required
                className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 text-2xl"
              />
            </div>
            <div className="mb-4">
              <label
                className="block mb-4 text-2xl font-bold"
                htmlFor="password"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={passwordShown ? "text" : "password"}
                  id="password"
                  ref={passwordRef}
                  autoComplete="current-password"
                  required
                  className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 text-2xl "
                />
                <button
                  type="button"
                  className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-500 focus:outline-none text-2xl"
                  onClick={togglePasswordVisiblity}
                >
                  {passwordShown ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>
            </div>
            <div className="mb-6 mt-4 flex justify-between items-center">
              <div className="box-1 flex items-center">
                <input type="checkbox" id="remember" className="mr-2" />
                <label htmlFor="remember" className="text-xl">
                  Remember me
                </label>
              </div>
              <div className="box-2 font-bold text-blue-600 text-xl">
                <Link to="/user/forgot-password">Forgot Password</Link>
              </div>
            </div>
            <p className="text-red-500 text-xl font-bold mb-2">{errorMsg}</p>
            <button
              type="submit"
              disabled={isFetching || loading}
              onClick={handleSignin}
              className={`w-full py-3 rounded-md text-2xl ${
                isFetching || loading
                  ? "bg-red-300 cursor-not-allowed"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              }`}
            >
              {loading ? "Loading...." : "Login"}
            </button>
            <div className="box-2 font-bold text-xl mt-4">
              Facing issues?{" "}
              <Link to="" className="text-blue-500 hover:text-blue-800">
                Contact Us
              </Link>
            </div>
          </form>
        </div>
      </div>
      <style jsx>{`
        .slideshow-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          overflow: hidden;
        }

        .slide {
          flex: 0 0 100%;
          transition: transform 0.5s ease-in-out;
          opacity: 0;
        }

        .active {
          opacity: 1;
          transform: translateX(-100%);
        }

        .carousel-control-prev,
        .carousel-control-next {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          width: 40px;
          height: 40px;
          background-color: rgba(0, 0, 0, 0.5);
          border-radius: 50%;
          color: #fff;
          transition: opacity 0.3s;
        }

        .carousel-control-prev-icon,
        .carousel-control-next-icon {
          display: inline-block;
          width: 20px;
          height: 20px;
          background-position: center;
          background-repeat: no-repeat;
          background-size: 100% 100%;
        }

        .carousel-control-prev {
          left: 10px;
        }

        .carousel-control-prev-icon {
          background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E");
        }

        .carousel-control-next {
          right: 10px;
        }

        .carousel-control-next-icon {
          background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E");
        }

        .indicators {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .indicator {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.5);
          margin: 0 5px;
          cursor: pointer;
        }

        .activeIndicator {
          background-color: #fff;
        }
      `}</style>
    </div>
  );
};

export default Login;
