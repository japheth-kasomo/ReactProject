import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth  from "../hooks/useAuth";
import { login } from "../sdk/auth/auth";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const { setAuth } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const result = await login(email, password);
      console.log('result',result?.status);
      let user = result?.data?.user;
      let tokens = result?.data?.tokens;
      setAuth({ user, tokens });
  
      // Check if login was successful
      if (result?.status === true) {
        // Directly navigate to "/dashboard"
        navigate("/dashboard");
        toast.success("Login successful");
      } else {
        // Handle invalid credentials or other login errors
        toast.error(result?.message);
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error?.response?.data?.message);
      toast.error(error?.response?.data?.message);
      setIsLoading(false);
    }
  };


  const gradientStyle = {
    background: "linear-gradient(113deg, #031322 -0.58%, #074073 100%)",
  };

  const backgroundStyle = {
    background: "linear-gradient(213deg, #19C1E4 0.73%, #074073 100.59%)",
  };
  return (
    <>
      <div
        className="w-[100%] h-screen bg-[#F7FBFF] relative"
        style={gradientStyle}
      >
        <div className="absolute top-[-100px] z-50 right-[0px]">
          <svg
            width="502"
            height="457"
            viewBox="0 0 502 457"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g style={{ mixBlendMode: "lighten" }}>
              <path
                d="M325.872 76.2466C329.453 79.8275 329.453 85.6331 325.872 89.2139L73.5094 341.576C69.9286 345.157 64.1229 345.157 60.5421 341.576C56.9612 337.996 56.9612 332.19 60.5421 328.609L312.904 76.2467C316.485 72.6658 322.291 72.6658 325.872 76.2466Z"
                fill="url(#paint0_linear_7601_3910)"
              />
              <path
                d="M496.96 4.39531C499.388 6.82275 499.388 10.7584 496.96 13.1859L133.507 376.639C131.08 379.066 127.144 379.066 124.717 376.639C122.289 374.211 122.289 370.276 124.717 367.848L488.17 4.39531C490.597 1.96786 494.533 1.96786 496.96 4.39531Z"
                fill="url(#paint1_linear_7601_3910)"
              />
              <path
                d="M302.981 153.356C310.92 161.295 310.92 174.166 302.981 182.104L43.1222 441.964C35.1836 449.902 22.3125 449.902 14.3739 441.963C6.43527 434.025 6.43528 421.154 14.3739 413.215L274.233 153.356C282.172 145.418 295.043 145.418 302.981 153.356Z"
                fill="url(#paint2_linear_7601_3910)"
              />
              <path
                d="M190.974 167.345C196.072 172.443 196.072 180.709 190.974 185.807L106.744 270.037C101.646 275.135 93.381 275.135 88.283 270.037C83.1851 264.939 83.1851 256.673 88.283 251.575L172.513 167.345C177.611 162.247 185.876 162.247 190.974 167.345Z"
                fill="url(#paint3_linear_7601_3910)"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_7601_3910"
                x1="303.499"
                y1="101.254"
                x2="48.1106"
                y2="334.884"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#074073" />
                <stop offset="1" stop-color="#19C1E4" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_7601_3910"
                x1="464.617"
                y1="38.5246"
                x2="92.4106"
                y2="347.963"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#074073" />
                <stop offset="1" stop-color="#19C1E4" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_7601_3910"
                x1="280.134"
                y1="182.046"
                x2="7.95909"
                y2="442.591"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#074073" />
                <stop offset="1" stop-color="#19C1E4" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_7601_3910"
                x1="183.681"
                y1="178.39"
                x2="87.7279"
                y2="272.05"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#074073" />
                <stop offset="1" stop-color="#19C1E4" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="flex items-center h-full justify-center  relative">
          <div className="w-[70%] h-[80%] flex items-center">
            <div
              style={backgroundStyle}
              className="w-[50%] bg-[#041422] relative h-[100%] flex flex-col items-center justify-center"
            >
              <div className="absolute bottom-[0px] left-[0px] z-0">
                <svg
                  width="425"
                  height="538"
                  viewBox="0 0 425 538"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g style={{ mixBlendMode: "luminosity" }} opacity="0.7">
                    <path
                      d="M82 260.836L335.888 6.94785C339.725 3.11066 345.946 3.11066 349.784 6.94785C353.621 10.785 353.621 17.0064 349.784 20.8435L95.8957 274.732L82 260.836Z"
                      fill="url(#paint0_linear_7601_3931)"
                    />
                    <path
                      d="M-49.0977 505.934L331.783 125.053C348.933 107.903 376.739 107.903 393.889 125.053C411.038 142.203 411.038 170.008 393.889 187.158L13.0077 568.039L-49.0977 505.934Z"
                      fill="url(#paint1_linear_7601_3931)"
                    />
                    <path
                      d="M82 329.836L339.279 72.5568C341.243 70.5924 344.428 70.5924 346.393 72.5568C348.357 74.5211 348.357 77.706 346.393 79.6703L89.1136 336.949L82 329.836Z"
                      fill="url(#paint2_linear_7601_3931)"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_7601_3931"
                      x1="110.825"
                      y1="243.083"
                      x2="361.083"
                      y2="12.4543"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#074073" />
                      <stop offset="1" stop-color="#19C1E4" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_7601_3931"
                      x1="12.4248"
                      y1="493.896"
                      x2="398.191"
                      y2="119.1"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#1D6675" />
                      <stop offset="1" stop-color="#19C1E4" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_7601_3931"
                      x1="108.123"
                      y1="309.381"
                      x2="366.528"
                      y2="89.1412"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#074073" />
                      <stop offset="1" stop-color="#19C1E4" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              {/* <img
                src="/ground.png"
                alt="background"
                className="w-[90%] z-50 h-[60%]"
              /> */}
              {/* <p className="text-white font-bold">Login to access Anansi</p> */}
            </div>
            <div className="w-[50%] z-50 bg-white h-[100%] flex px-[20px] flex-col justify-center">
              <p className="text-[18px] text-[#074073] mb-[20px]">
                Login in to Fleet
              </p>
              {/* <form onSubmit={handleSubmit}> */}
              <form onSubmit={handleSubmit}>
                <div className="flex gap-[10px] flex-col mb-[30px]">
                  <label className="text-[#000]" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email"
                    className="border rounded-[5px] h-[50px] px-[20px] focus:outline-none"
                  />
                </div>
                <div className="flex gap-[10px] w-full flex-col">
                  <label className="text-[#000]" htmlFor="password">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter password"
                      className="border w-full rounded-[5px] h-[50px] px-[20px] focus:outline-none"
                    />
                    <span
                      onClick={togglePasswordVisibility}
                      className="absolute top-[50%] right-[10px] transform translate-y-[-50%] cursor-pointer"
                    >
                      {showPassword ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M21.92 11.6C19.9 6.91 16.1 4 12 4s-7.9 2.91-9.92 7.6a1 1 0 0 0 0 .8C4.1 17.09 7.9 20 12 20s7.9-2.91 9.92-7.6a1 1 0 0 0 0-.8M12 18c-3.17 0-6.17-2.29-7.9-6C5.83 8.29 8.83 6 12 6s6.17 2.29 7.9 6c-1.73 3.71-4.73 6-7.9 6m0-10a4 4 0 1 0 4 4a4 4 0 0 0-4-4m0 6a2 2 0 1 1 2-2a2 2 0 0 1-2 2"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 32 32"
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M21 16a5 5 0 0 1-5 5m-5-5a5 5 0 0 1 5-5m-3 13.654A13.38 13.38 0 0 0 16 25c7.18 0 13-6 13-9c0-1.336-1.155-3.268-3.071-5M19.5 7.47A13.49 13.49 0 0 0 16 7C8.82 7 3 13 3 16c0 1.32 1.127 3.22 3 4.935M7 25L25 7"
                          />
                        </svg>
                      )}
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-start mt-2 text-[#19C1E4] cursor-pointer">
                  Forgot password
                </div>
                <button className="bg-[#074073] mt-[30px] flex items-center justify-center gap-[10px] text-white rounded-[5px] w-[100%] h-[44px]">
                  {isLoading && (
                    <svg
                      aria-hidden="true"
                      className="w-[20px] h-[20px] text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                  )}
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
