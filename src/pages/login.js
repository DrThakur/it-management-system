import { useState, useEffect } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const images = ["manwithlaptop.png", "manwithlaptop.png", "manwithlaptop.png"];

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  // const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMsg("**Fill all the fields");
      return;
    }
    setErrorMsg("");
    // setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, email, password)
      .then(async (res) => {
        // setSubmitButtonDisabled(false);
        console.log(res);
        // const user = res.user;
        // if (user.email === "sachinsharma@gmail.com") {
        //   navigate("/assets");
        // } else {
        //   navigate("/admin-rights");
        // }

        // Reset the form fields
        setEmail("");
        setPassword("");
        navigate("/");
        console.log(res);
      })
      .catch((err) => {
        // setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
        console.log("Error-", err.message);
      });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) =>
        prevImage === images.length - 1 ? 0 : prevImage + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  //   const handlePrevSlide = () => {
  //     setCurrentImage((prevImage) =>
  //       prevImage === 0 ? images.length - 1 : prevImage - 1
  //     );
  //   };

  //   const handleNextSlide = () => {
  //     setCurrentImage((prevImage) =>
  //       prevImage === images.length - 1 ? 0 : prevImage + 1
  //     );
  //   };
  const handleSlideChange = (index) => {
    setCurrentImage(index);
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
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
        <div className="w-80 bg-white p-8 rounded-md shadow-lg">
          <h1 className="text-2xl font-bold mb-6 text-center">
            Welcome to Logic Fruit Technologies!
          </h1>
          <h2 className="text-3xl font-semibold mb-4">Login</h2>
          <form>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                onChange={handleEmailChange}
                autoComplete="email"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-medium"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                onChange={handlePasswordChange}
                autoComplete="current-password"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>
            <div className="mb-4 flex items-center">
              <input type="checkbox" id="remember" className="mr-2" />
              <label htmlFor="remember" className="text-sm">
                Remember me
              </label>
            </div>
            <p>{errorMsg}</p>
            <button
              type="submit"
              // disabled={submitButtonDisabled}
              onClick={handleSignin}
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
            >
              Login
            </button>
          </form>
        </div>
      </div>
      <style jsx>{`
        .slideshow-container {
          display: flex;
          justify-content: center;
          height: 100%;
          overflow: hidden;
        }

        .slide {
          flex: 0 0 100%;
          transition: transform 0.5s ease-in-out;
          opacity: 0;
          visibility: hidden;
        }

        .active {
          opacity: 1;
          visibility: visible;
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
