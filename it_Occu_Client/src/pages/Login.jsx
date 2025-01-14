import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import toast from "react-hot-toast";

function Login({ setLogin, status }) {
  const notify = () => toast.success("login success");
  const [inputs, setInputs] = useState([]);
  const [checkStatus, setCheckStatus] = useState(false);
  const navigate = useNavigate();
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handdleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      email: inputs.email,
      password: inputs.password,
    }

    const toastId = toast.promise(
      axios.post("itoccupa-production.up.railway.app/api/login", body),
      {
        loading: "กำลังเข้าสู่ระบบ...",
        success: (data) => `เข้าสู่ระบบสำเร็จ ยินดีต้อนรับ ${(JSON.stringify(data.data.results[0].fname + " " + data.data.results[0].lname))}`,
        error: (data) => `เข้าสู่ระบบไม่สำเร็จ ${data.response.data.message}`,
      },
      {
        success: {
          duration: 5000,
        },
        error: {
          duration: 4000,
          style: {
            borderRadius: '10px',
            background: '#FF0000',
            color: '#fff',
          },
        },

      }
    )
      .then((response) => {
        const data = response.data;
        if (data.message == "Login success") {
          localStorage.setItem("userInfo", JSON.stringify(data.results[0]));
          localStorage.setItem("isLogin", true);
          setLogin(true);
          navigate("/findmyself");
        } else {
          toast.error("เข้าสู่ระบบไม่สำเร็จ");
        }
      })
      .catch((error) => {
        toast.remove(toastId);
        toast.dismiss(toastId);
        if (error.response) {
          console.log("Server responded with an error:", error.response.status);
        } else if (error.request) {
          setCheckStatus(true);
          toast.error("เกิดข้อผิดพลาดในการเชื่อมต่อกับเซิร์ฟเวอร์");
        } else {
          console.log("Error:", error.message);
        }
      });

  };

  useEffect(() => {
    console.log("Status : " + status);
  }, []);

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="welcome-sec flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="text-center text-2xl/9 font-bold tracking-tight text-gray-900">
              เข้าสู่ระบบ
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            {checkStatus && (
              <>
                <div
                  className="mb-8 bg-yellow-50 border border-yellow-400 text-sm text-yellow-800 rounded-lg p-4 dark:bg-yellow-800/10 "
                  role="alert"
                  tabindex="-1"
                  aria-labelledby="hs-with-description-label"
                >
                  <div className="flex">
                    <div className="shrink-0">
                      <svg
                        className="shrink-0 size-4 mt-0.5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
                        <path d="M12 9v4"></path>
                        <path d="M12 17h.01"></path>
                      </svg>
                    </div>
                    <div className="ms-4">
                      <h3
                        id="hs-with-description-label"
                        className="text-sm font-semibold"
                      >
                        warning
                      </h3>
                      <div className="mt-1 text-sm text-yellow-700">
                        เกิดข้อผิดพลาดในการเชื่อมต่อกับเซิร์ฟเวอร์
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
            <form onSubmit={handdleSubmit} className="space-y-6">
              <div>

                <label className="input input-bordered input-md flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                  >
                    <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                    <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                  </svg>
                  <input
                    type="email"
                    className="grow"
                    placeholder="อีเมล"
                    id="email"
                    name="email"
                    onChange={handleChange}
                    value={inputs.email || ""}
                    required
                  />
                </label>
              </div>

              <div>
                
                <label className="input input-bordered flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <input className="grow" placeholder="รหัสผ่าน"
                    id="password"
                    name="password"
                    type="password"
                    onChange={handleChange}
                    value={inputs.password || ""}
                    autoComplete="password"
                    required />
                </label>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-orange-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                >
                  เข้าสู่ระบบ
                </button>
              </div>

              <div>
                <Link to="/register">
                <a href="#"><button className="btn-outline  flex w-full justify-center rounded-md bg-orange-500 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">
                  <p> สมัครสมาชิก</p>

                </button>
                </a>
                </Link>
              </div>

            </form>
          </div>
        </div>
      </div>
      <Footer />

    </>
  );
}

export default Login;
