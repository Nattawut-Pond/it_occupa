import { useState, useEffect } from "react";
import {
  Dialog,
  DialogPanel,
} from "@headlessui/react";
import { } from "@headlessui/react";
import {
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const navigation = [
  { name: "หน้าหลัก", href: "/" },
  { name: "เกี่ยวกับเรา", href: "/about" },
  { name: "ค้นหาตัวเอง", href: "/findmyself" },
  { name: "ช่องทางการติดต่อ", href: "/contact" },
];

function Navbar() {
  const loginStatus = localStorage.getItem("isLogin");
  const [userInfo, setUserInfo] = useState([]);
  const [name, setName] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  async function checkLogin() {
    if (loginStatus === "true") {
      setIsLogin(true);
      const userInfo = localStorage.getItem("userInfo");
      if (userInfo) {
        const data = JSON.parse(userInfo);
        setUserInfo(data);
        setName(data.fname + " " + data.lname);
      }

    }
  }

  useEffect(() => {
    checkLogin();
  }, []);

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-50">
        <div className="navbar bg-slate-50 ">
          <div className="navbar-start ">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                className="gap-3 menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {navigation.map((item, key) => (
                  <li key={key}>
                    <Link

                      to={item.href}
                      className="text-sm/6 font-semibold text-gray-900"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="btn btn-ghost text-2xl mt-2 h-20">

              <Link to="/">
                <img
                  alt="Nav-logo"
                  src="public/LOGOWEB1-removebg-preview.png"
                  className="h-20 w-auto"
                />
              </Link>

            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal gap-2 px-1">
              {navigation.map((item, key) => (
                <li key={key}>
                  <Link

                    to={item.href}
                    className="text-sm/6 font-semibold text-gray-900"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="navbar-end gap-1">
            {!isLogin ? (
              <>
                {/* ปุ่มล็อคอิน */}
                <Link
                  to="/login"
                  className="text-sm/6 font-semibold text-gray-900 self-center"
                >
                  <div className="btn">

                    เข้าสู่ระบบ
                  </div>
                </Link>

                {/* ปุ่มสมัครสมาชิก */}
                <Link
                  to="/register"
                  className="text-sm/6 font-semibold text-gray-900 self-center"
                >
                  <div className="btn bg-orange-600 ">

                    <p className="text-slate-50">สมัครสมาชิก</p>
                  </div>
                </Link>

              </>
            ) : (
              <>
                <div className="btn bg-orange-500 ">
                  <p className="text-slate-50">คุณ {name}</p>
                </div>
                <div className="btn bg-orange-500 ">
                  <Link
                    to="/logout"
                    className="text-sm/6 font-semibold text-gray-900 self-center"
                  >
                    <p className="text-slate-50">ออกจากระบบ</p>
                  </Link>
                </div>

              </>
            )}
          </div>
        </div>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                  className="h-8 w-auto"
                />
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  {!isLogin ? (
                    <>
                      <div className="btn">
                        <Link
                          to="/login"
                          className="text-sm/6 font-semibold text-gray-900 self-center"
                        >
                          เข้าสู่ระบบ
                        </Link>
                      </div>
                      <div className="btn bg-orange-400 ">
                        <Link
                          to="/register"
                          className="text-sm/6 font-semibold text-gray-900 self-center"
                        >
                          <p className="text-slate-50">สมัครสมาชิก</p>
                        </Link>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="btn bg-orange-400 ">
                        <Link
                          to="/logout"
                          className="text-sm/6 font-semibold text-gray-900 self-center"
                        >
                          <p className="text-slate-50">ออกจากระบบ</p>
                        </Link>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header >
    </>
  );
}

export default Navbar;
