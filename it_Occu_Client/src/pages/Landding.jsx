import { useEffect, useState } from "react";
import Axios from "axios";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { ScrollToTop } from "./utils/ScrollToTop";

const stats = [
  { id: 1, name: "ยอดผู้เข้าชมเว็บของเรา", value: "n" },
  { id: 2, name: "ยอด...", value: "119 ล้าน" },
  { id: 3, name: "ยอด", value: "46k" },
];

export default function Landding() {

  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // API Url
  const NEWS_API_URL = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=a97d7594cb794ea68098161f95cf4065";
  // const API_KEY = "a97d7594cb794ea68098161f95cf4065"; 

  // ทำการ
  useEffect(() => {
    Axios.get(`${NEWS_API_URL}`)
      .then((response) => {
        
        // ทำให้โชว์ข่าวแค่ 3 อย่างเท่านั้น
        const limitedArticles = response.data.articles.slice(0, 6)
        setNews(limitedArticles);
        setLoading(false);
      })
      .catch((error) => {
        setError("โหลดข้อมูลข่าวไม่สำเร็จ");
        setLoading(false);
      });
  }, []);


  return (
    <>
      <Navbar />

      <link rel="stylesheet" href="src/index.css" />

      <div className="mx-auto max-w-2xl sm:container pt-40 ">

        <section className="welcome-sec">
          <div className="text-center" alt="welcome-div">
            <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-6x1 lg:pt-10">
              ยินดีต้อนรับ
            </h1>
            <img src="" alt="" className="Welcome-Bg" />
            <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
              ยินดีต้อนรับเข้าสู่เว็บไซต์ของเรา
            </p>
          </div>
        </section>

        {/* For Decoration */}
        <div className="border-b border-gray-300 mt-10"></div>

        <section className="welcome-sec-slow about-sec py-10 my-10">
          <div className="my-40 text-center">
            <h1 className="welcome-sec-slow2 text-balance text-5xl font-semibold tracking-tight text-white ">
              เกี่ยวกับเรา
            </h1>
            <p className="welcome-sec-slow3 mt-8 mb-6 text-pretty text-lg font-medium text-white sm:text-xl/8">
              มาทำความรู้จักกับเรา เพื่อให้เข้าใจถึงจุดหมายของเรา
            </p>
            <Link
              to="/about"
              onClick={ScrollToTop}
              className="welcome-sec-slow3 rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm transform transition duration-100 hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              อ่านเพิ่มเติม
            </Link>
          </div>
        </section>

        {/* For Decoration */}
        <div className="border-b border-gray-300 mt-20"></div>


        <section className="find-sec py-40 my-10">

          <div className="text-center">
            <h1 className="text-balance text-5xl font-semibold tracking-tight text-white">
              ค้นหาตัวเองดูไหม ?
            </h1>
            <p className="mt-8 mb-6 text-pretty text-lg font-medium text-white sm:text-xl/8">
              การค้นหาตัวเองก็เป็นอีกหนึ่งปัจจัยในการทำงาน
            </p>

            <Link
              to="/findmyself"
              onClick={ScrollToTop}
              className="rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm transform transition duration-100 hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              เริ่มเลย
            </Link>
          </div>

        </section>


        {/* For Decoration */}
        <div className="border-b border-gray-300"></div>
      </div>

      <h1 className="text-center text-pretty md:text-3xl mx-auto mt-20">ข่าวสารไอทีรายวัน</h1>

        {error ? (<div>{error}</div>) : (
          <div className="flex bg-white py-1 rounded-md">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-x-8 text-center lg:grid-cols-3 md:grid-cols-2">
              {news.map((article, index) => (
                <div className="flex flex-col text-center text-clip place-items-center mx-auto mt-20 mb-10 shadow-sm shadow-gray-500" key={index}>
                  <h2 className="font-semibold sm:text-1xl tracking-tight text-balance mx-2 my-2">{article.title}</h2>
  
                  <div className="my-5 mx-10">
                    {article.urlToImage && (
  
                      <img className="object-cover rounded-md bg-gray-50"
                        src={article.urlToImage}
                        alt={article.title}
                      />
                    )}</div>
  
                  <p className="my-4 mx-3 text-balance">{article.description}</p>
                  <a href={article.url} target="_blank" rel="noopener noreferrer">
                    <button className="btn hover:bg-orange-200 text-white bg-orange-400 shadow-sm shadow-orange-500 rounded-lg justify-start mx-5 border relative my-4">อ่านเพิ่มเติม</button>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        )}
      <Footer />
    </>
  );
}
