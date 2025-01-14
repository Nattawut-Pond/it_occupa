import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { ScrollToMid } from "../pages/utils/ScrollToMid";

function About() {
  return (
    <>
      <div className="flex flex-col min-h-screen">


        {/* A Component Navbar */}
        <Navbar />


        <div className="welcome-sec about-sec flex flex-col items-center justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h1 className="welcome-sec-slow mt-20 text-center text-2xl/9 font-bold tracking-tight text-white">
              เกี่ยวกับเรา
            </h1>
          </div>

          <div className="text-center">
            <p className="welcome-sec-slow mt-5 text-pretty text-lg font-medium text-gray-100 sm:text-xl/8">
              มาทำความรู้จักเกี่ยวกับเว็บไซต์ของเรา และองค์กรของเรา
            </p>
          </div>
          <button
            type="submit"
            onClick={ScrollToMid}
            className="welcome-sec-slow grid mt-10 w-36 justify-items-center rounded-md bg-orange-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
          >
            สำรวจเลย
          </button>

        </div>

        {/* Team Project Icon */}
        <div className="welcome-sec-slow2 team-box flex rounded-md h-56 p-6">
          <div className="Ourteam mx-auto flex flex-col">
            <h1 className="mt-10 text-center text-4xl font-bold tracking-tight text-gray-900">
              ทีมพัฒนาของเรา
            </h1>
          </div>
        </div>

        <div className="welcome-sec-slow3 mx-auto grid gap-x-8 gap-y-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-items-center ">
          <div className="flex flex-col flex-wrap border-spacing-1 border border-gray-100 rounded-md w-auto py-10 px-10 shadow-2xl">
            <div className="mx-auto">
              <img src="https://cdn.discordapp.com/attachments/997478506189561897/1328801377228558390/Nattawut.jpg?ex=67880638&is=6786b4b8&hm=68ec224228e1cb025dcc0abaeeb15a70c37d7c80a76a4b79c2d6205c391e5ecf&" alt="Nattawut" className="rounded-md bg-gray-50 size-64 object-cover" />
            </div>
            <h1 className="text-pretty text-2xl text-center mt-5">
              ณัฐวฒิ พูนมะลัง
            </h1>
            <p className="text-center text-gray-600 mt-2">
              CPBUIT, Developer & UX / UI Designer
            </p>
          </div>

          <div className="flex flex-col flex-wrap relative border-spacing-1 border border-gray-100 rounded-md w-auto py-10 px-10 shadow-2xl">
            <div className="mx-auto">
              <img src="https://cdn.discordapp.com/attachments/997478506189561897/1328801376758661201/Siwakon.jpg?ex=67880638&is=6786b4b8&hm=43c774a0d1b8b1eb8b1fd0f163421e28e33fb7a468ceb2db5225a5eb2e51bcd5&" alt="Siwakon" className="rounded-md bg-gray-50 size-64 object-cover" />
            </div>
            <h1 className="text-pretty text-2xl text-center mt-5">
              ศิวกร เอ็มประโคน
            </h1>
            <p className="text-center text-gray-600 mt-2">
              CPBUIT, IT Support & Documentary
            </p>
          </div>

          <div className="flex flex-col flex-wrap border-spacing-1 border border-gray-100 rounded-md w-auto py-10 px-10 shadow-2xl">
            <div className="mx-auto">
              <img src="https://cdn.discordapp.com/attachments/997478506189561897/1328801376075120743/Ramil.jpg?ex=67880637&is=6786b4b7&hm=7e746da91f5fdcc3779a5af9bce1bdc26cad4123e8fc1d173772b190e8f2253c&" alt="Ramil" className="rounded-md bg-gray-50 size-64 object-cover" />
            </div>
            <h1 className="text-pretty text-2xl text-center mt-5">
              รามิล งามพิทยพร
            </h1>
            <p className="text-center text-gray-600 mt-2">
              CPBUIT, Video Creator
            </p>
          </div>

        </div>

        <div className="border-b border-gray-300 mt-20"></div>

      </div>

      {/* Main Content */}


      <div className="Main-container mx-auto mt-20">
        <h1 className="text-center text-pretty text-3xl">เกี่ยวกับ "เว็บไซต์เส้นทางอาชีพ" </h1>
      </div>

      <div className="mt-20 mx-auto grid lg:grid-cols-2 sm:grid-cols-1 justify-items-center">
        <div className="w-auto px-10">
          <img src="./public/LOGOWEB1-removebg-preview.png" alt="Logo" className="justify-items-center object-cover" />
          <h1></h1>
        </div>
        <div className="w-auto px-10 justify-items-start">

          <h1 className="text-start ">เว็บไซต์เส้นทางอาชีพเป็นแพลตฟอร์มที่ออกแบบมาเพื่อช่วยผู้ใช้งานค้นหาแนวทางอาชีพที่เหมาะสมกับตนเอง โดยภายในเว็บไซต์มีฟังก์ชันสำคัญที่ช่วยให้การค้นหาอาชีพเป็นเรื่องง่ายและสะดวกสบาย

            ฟีเจอร์หลัก
            แบบฟอร์มประเมินความสนใจและความถนัด
            ผู้ใช้งานสามารถกรอกข้อมูลที่เกี่ยวข้อง เช่น ความสนใจส่วนตัว ทักษะที่มี หรือเป้าหมายในชีวิต ระบบจะประมวลผลข้อมูลและแนะนำอาชีพที่สอดคล้องกับตัวเลือกของผู้ใช้

            ผลลัพธ์อาชีพแนะนำ
            หลังจากกรอกข้อมูล ระบบจะนำเสนอผลลัพธ์เป็นรายการอาชีพที่เหมาะสม พร้อมคำอธิบายเกี่ยวกับลักษณะงาน ทักษะที่จำเป็น และข้อมูลที่ช่วยให้ผู้ใช้ตัดสินใจได้ง่ายขึ้น

            แหล่งข้อมูลเพิ่มเติม
            นอกจากการแนะนำอาชีพ เว็บไซต์ยังมีลิงก์หรือบทความเสริม เช่น เคล็ดลับในการพัฒนาทักษะสำหรับงานเฉพาะด้าน หรือแนวทางศึกษาต่อในสาขาที่เกี่ยวข้อง

            ประสบการณ์ผู้ใช้งาน
            สามารถดูเรื่องราวและคำแนะนำจากผู้ที่ประสบความสำเร็จในเส้นทางอาชีพต่าง ๆ เพื่อสร้างแรงบันดาลใจและมุมมองใหม่ ๆ

            เว็บไซต์นี้เหมาะสำหรับผู้ที่กำลังมองหาเส้นทางอาชีพ ไม่ว่าจะเป็นนักเรียนที่ยังไม่แน่ใจในทิศทางในอนาคต หรือผู้ที่ต้องการเปลี่ยนสายงาน เพื่อให้สามารถค้นหาเส้นทางที่ตรงกับความสนใจและเป้าหมายของตัวเองมากที่สุด!</h1>

        </div>
      </div>

      <div className="py-40 mx-auto grid sm:grid-cols-1 justify-items-center bg-slate-200">
        <div className="text-center text-pretty text-3xl">
          <h1>เป้าหมายของเรา</h1>
        </div>
        <div className="my-10 text-2xl text-balance text-center">
          <p>"เพื่อที่จะให้นักเรียน นักศึกษา หรือผู้ที่สนใจในสายอาชีพของเทคโนโลยีสารสนเทศได้รับรู้และได้เข้าถึงบทบาทของอาชีพที่ตนเองชื่นชอบ"</p>

        </div>
      </div>

      
      


      {/* Comment Section */}



      <Footer />
    </>
  );
}

export default About;
