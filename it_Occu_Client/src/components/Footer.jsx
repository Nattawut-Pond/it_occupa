import React from "react";
import { Link } from "react-router-dom";
import { ScrollToTop } from "../pages/utils/ScrollToTop";


const Footer_1 = [
  { name: "หน้าหลัก", href: "/" },
]

// สร้าง Footer สำหรับเรียกไปใช้ในทุกๆ หน้าเพื่อให้โค้ดนั้น clean มากยิ่งขึ้น
function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="flex space-x-4 mt-4">

          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>

            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/">
                  <h1 onClick={ScrollToTop}
                    className="hover:text-gray-300">
                    หน้าแรก
                  </h1>
                </Link>
              </li>

              <li>
                <Link to="/findmyself">
                  <h1 onClick={ScrollToTop}
                    className="hover:text-gray-300">
                    ค้นหาตัวเอง
                  </h1>
                </Link>
              </li>
            </ul>
          </div>

          <div>

            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/contact">
                  <h1 onClick={ScrollToTop}
                    className="hover:text-gray-300">
                    ศูนย์ช่วยเหลือ
                  </h1>
                </Link>
              </li>
            </ul>
          </div>

          <div>

            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/about">
                  <h1 onClick={ScrollToTop}
                    className="hover:text-gray-300">
                    เกี่ยวกับเรา
                  </h1>
                </Link>
              </li>
              

            </ul>
          </div>

          <div>

            <ul className="mt-4 space-y-2">
    
              <li>
                <Link to="/about">
                  <h1 onClick={ScrollToTop}
                    className="hover:text-gray-300">
                    นโยบายความเป็นส่วนตัว
                  </h1>
                </Link>
              </li>

            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 my-8"></div>
      <div className="text-center text-sm">
        © 2024 CareerPath BUIT, Inc. All rights reserved.
      </div>
    </footer>
  );
}

// ได้ Footer มาแล้วนำมาใส่ในตัวแปรของ Footer เพื่อนำไปใช้ในอีกหลาย ๆ Page
export default Footer;
