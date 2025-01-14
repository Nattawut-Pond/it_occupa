import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function FindMyself() {
  const [stats, setStats] = useState([]); // Initialize stats as state

  // Fetch the submission counts
  const fetchSubmissionCounts = async () => {
    try {
      const response = await axios.get('https://itoccupa-production.up.railway.app//api/form-submission-counts');
      setStats([
        { id: 1, name: "ผู้ร่วมทดสอบวันนี้", value: response.data.today },
        { id: 2, name: "ผู้ร่วมทดสอบเมื่อวาน", value: response.data.yesterday },
        { id: 3, name: "รวมผู้ทำแบบทดสอบ", value: response.data.allTime },
      ]);
    } catch (error) {
      console.error('Error fetching form submission counts:', error);
    }
  };

  useEffect(() => {
    fetchSubmissionCounts(); // Fetch submission counts on component mount
  }, []);

  const [videoTitle, setVideoTitle] = useState("");
  const [description, setDescription] = useState("");
  const [videoPath, setVideoPath] = useState("");
  const [image, setImage] = useState("");
  const [careers, setCareer] = useState([]);

  const getCareer = async () => {
    try {
      const response = await axios.get("https://itoccupa-production.up.railway.app//api/occupation");
      setCareer(response.data.results);
    } catch (error) {
      console.error(error);
    }
  }

  const [videos, setVideo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openModalId, setOpenModalId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getYouTubeVideoId = (url) => {
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|\S+\/|(?:v|e(?:mbed)?)\/|.*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;  // Returns the video ID or null if invalid URL
  };

  const getVideos = async () => {
    try {
      const response = await axios.get('https://itoccupa-production.up.railway.app//api/videospath');
      console.log('Video Data:', response.data);
      setVideo(response.data.results);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching videos:', error);
      setError('Failed to load videos.');
      setLoading(false);
    }
  };

  useEffect(() => {
    getVideos(); // Fetch videos on component mount
  }, []);

  useEffect(() => {
    getCareer(); // Fetch careers on component mount
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-white to-orange-100">
      {/* Background Animation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <svg
          className="absolute bottom-0 left-0 w-full opacity-100"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#fb923c"
            fillOpacity="1"
            className="animate-wave"
            d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
        <svg
          className="absolute bottom-0 left-0 w-full opacity-40 translate-y-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#fdba74"
            fillOpacity="1"
            className="animate-wave-slow"
            d="M0,256L48,261.3C96,267,192,277,288,277.3C384,277,480,267,576,234.7C672,203,768,149,864,138.7C960,128,1056,160,1152,165.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
        <svg
          className="absolute bottom-0 left-0 w-full opacity-50 translate-y-10"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#fed7aa"
            fillOpacity="1"
            className="animate-wave-slow2"
            d="M0,128L48,144C96,160,192,192,288,186.7C384,181,480,139,576,149.3C672,160,768,224,864,229.3C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-white/50"></div>
      </div>

      {/* หน้าเว็บไซต์ */}
      <div className="flex flex-col min-h-screen mb-10 mt-12">
        <Navbar />
        <div className="flex flex-col items-center justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">

            <div className="welcome-sec text-center mt-24">
              <h1 className="text-balance font-semibold tracking-tight text-gray-900 sm:text-2xl lg:text-4xl">
                ค้นหาตัวเอง
              </h1>
              <h3 className="mt-8 text-pretty text-lg text-gray-500 ">
                ลองค้นหาตัวเองดูสิว่าเรานั้นสามารถไปทางด้านใดกันได้บ้าง
              </h3>
            </div>
            <div className="absolute inset-0 bg-[url('/path/to/subtle-pattern.png')] opacity-5 pointer-events-none"></div>
          </div>
          <Link
            to="/question"
            className="welcome-sec-slow rounded-md mt-5 bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xl transform transition duration-100 hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            เริ่มสำรวจกับคำถาม 40 ข้อ
          </Link>

          {/* จำนวนการกรอกฟอรม์ */}
          <div className="welcome-sec-slow2 bg-white mt-5 rounded-xl p-10 shadow-xl">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <dl className="grid grid-cols-1 gap-x-32 gap-y-1 text-center lg:grid-cols-3">
                {stats.map((stat) => (
                  <div
                    key={stat.id}
                    className="mx-auto flex max-w-xs flex-col gap-y-4 gap-x-10"
                  >
                    <dt className="text-base/7 text-gray-600">{stat.name}</dt>
                    <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div className="welcome-sec-slow3 text-2xl text-start mx-12 lg:mt-60 sm:mt-60 col-span-3">
            <p>แบบทดสอบอื่น ๆ ที่คุณอาจสนใจ</p>
          </div>

          <section className="welcome-sec-slow3 text-2xl text-start mx-12 mt-10 col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link to="/network" className="group">
                <div className="bg-white overflow-hidden shadow-lg rounded-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Network Engineer</h3>
                    <p className="text-sm text-gray-600">ค้นหาความเหมาะสมในการเป็น Network Engineer</p>
                  </div>
                </div>
              </Link>

              <Link to="/projectmanager" className="group">
                <div className="bg-white overflow-hidden shadow-lg rounded-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Project Manager</h3>
                    <p className="text-sm text-gray-600">ค้นหาความเหมาะสมในการเป็น Project Manager</p>
                  </div>
                </div>
              </Link>

              <Link to="/software" className="group">
                <div className="bg-white overflow-hidden shadow-lg rounded-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Software Developer</h3>
                    <p className="text-sm text-gray-600">ค้นหาความเหมาะสมในการเป็น Software Developer</p>
                  </div>
                </div>
              </Link>

              <Link to="/system" className="group">
                <div className="bg-white overflow-hidden shadow-lg rounded-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">System Admin</h3>
                    <p className="text-sm text-gray-600">ค้นหาความเหมาะสมในการเป็น System Administrator</p>
                  </div>
                </div>
              </Link>

              <Link to="/uxui" className="group">
                <div className="bg-white overflow-hidden shadow-lg rounded-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">UX/UI Designer</h3>
                    <p className="text-sm text-gray-600">ค้นหาความเหมาะสมในการเป็น UX/UI Designer</p>
                  </div>
                </div>
              </Link>

              <Link to="/web" className="group">
                <div className="bg-white overflow-hidden shadow-lg rounded-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Web Developer</h3>
                    <p className="text-sm text-gray-600">ค้นหาความเหมาะสมในการเป็น Web Developer</p>
                  </div>
                </div>
              </Link>

              <Link to="/itsupport" className="group">
                <div className="bg-white overflow-hidden shadow-lg rounded-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">IT Support</h3>
                    <p className="text-sm text-gray-600">ค้นหาความเหมาะสมในการเป็น IT Support</p>
                  </div>
                </div>
              </Link>

              <Link to="/cyber" className="group">
                <div className="bg-white overflow-hidden shadow-lg rounded-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Cyber Security</h3>
                    <p className="text-sm text-gray-600">ค้นหาความเหมาะสมในการเป็น Cyber Security</p>
                  </div>
                </div>
              </Link>
            </div>
          </section>

          <div className="welcome-sec-slow3 text-2xl text-start mx-12 mt-10 col-span-3">
            <p>อาชีพที่เกี่ยวข้องกับไอที</p>
          </div>

          {/* Grid of videos */}
          <div className="welcome-sec-slow3 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 mx-10 rounded-xl">
            {videos.map((video) => (
              <div
                key={video.id}
                className="bg-white shadow-md rounded-lg p-6 border"
              >
                <img
                  src={video.image}
                  alt={video.title}
                  className="rounded-lg mb-4 h-64 mx-auto bg-cover object-cover"
                />
                <h3 className="text-lg font-semibold text-gray-900 px-auto mx-auto text-center mb-10">
                  {video.video_title}
                </h3>
                <p className="text-gray-600 mt-2 text-balance text-center">{video.description}</p>

                <div className="grid text-right mt-4 justify-items-center">
                  <button
                    className="btn bg-orange-600 transition-opacity duration-500 text-white rounded-md px-10 py-2 text-sm font-semibold hover:bg-orange-400"
                    onClick={() => setOpenModalId(video.id)}
                  >
                    ดูวิดีโอ
                  </button>
                </div>

                {openModalId === video.id && (
                  <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                    onClick={() => setOpenModalId(null)} // Close modal
                  >
                    <div
                      className="modal-box mx-auto max-w-2xl bg-white rounded-lg shadow-xl p-4"
                      onClick={(e) => e.stopPropagation()} // Prevent modal closing when clicking inside
                    >
                      <iframe
                        className="rounded-lg shadow-lg mx-auto"
                        width="560"
                        height="315"
                        src={`https://www.youtube.com/embed/${getYouTubeVideoId(video.video_path)}`}
                        title={video.video_title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>

                      <div className="text-right mt-4">
                        <button
                          className="btn bg-red-500 text-white px-3 py-2 rounded-md"
                          onClick={() => setOpenModalId(null)} // Close modal
                        >
                          ปิด
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
