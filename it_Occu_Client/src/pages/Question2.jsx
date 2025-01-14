import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { toast } from "react-hot-toast";
import { useScore } from "./ScoreContext";
import axios from "axios";

const question_list = [
  {
    id: 1,
    question: "คุณรู้สึกตื่นเต้นที่จะเรียนรู้และพัฒนาเทคโนโลยีใหม่ ๆ ด้านเว็บหรือไม่?",
  },
  {
    id: 2,
    question: "คุณสนุกกับการแก้ปัญหาทางเทคนิคและหาทางแก้ไขข้อผิดพลาดในโค้ดหรือไม่?",
  },
  {
    id: 3,
    question: "คุณชอบการทำงานร่วมกับทีม และปรับปรุงเว็บไซต์จากข้อเสนอแนะของผู้อื่นหรือไม่?",
  },
  {
    id: 4,
    question: "คุณรู้สึกท้าทายและชอบการออกแบบประสบการณ์ผู้ใช้ (User Experience) หรือไม่?",
  },
  {
    id: 5,
    question: "คุณมีความสามารถในการเรียนรู้ภาษาโปรแกรม เช่น HTML, CSS, JavaScript หรือไม่?",
  },
  {
    id: 6,
    question: "คุณสามารถจัดการเวลาได้ดีและทำงานภายใต้แรงกดดันจากเดดไลน์ได้หรือไม่?",
  },
  {
    id: 7,
    question: "คุณมีความตั้งใจในการเรียนรู้สิ่งใหม่ ๆ อย่างสม่ำเสมอในอาชีพ Web Developer หรือไม่?",
  },

];


/**
 * @param rating 1 มากที่สุด
 * @param rating 2 มาก
 * @param rating 3 กลาง
 * @param rating 4 น้อย
 * @param rating 5 น้อยที่สุด
 * * selectedRatings คำตอบที่เลือก
*/
// * SOFTWARE DEVELOPER
function Question2() {
  const navigate = useNavigate();
  const { setSoftwareDevScore } = useScore();
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [question_list, setQuestion] = useState([]);

  const fetchQuestion = async () => {
    try {
      const response = await axios.get("itoccupa-production.up.railway.app/api/Question/2")
      console.log(response.data.results)
      setQuestion(response.data.results)
    } catch (error) {
        console.log(error)
    }
  }

  useEffect(() => {
    fetchQuestion();
    window.scrollTo(0, 0);
  }, []); // Empty dependency array to run only once on mount

  const handleRatingChange = (questionId, rating) => {
    setSelectedRatings((prev) => ({
      ...prev,
      [questionId]: rating,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(selectedRatings).length === question_list.length) {
      

      // คำนวณคะแนนรวม
      const totalScore = Object.values(selectedRatings).reduce((sum, score) => sum + score, 0);

      // จำนวนคำถามทั้งหมด
      const numQuestions = Object.keys(selectedRatings).length;

      // คำนวณคะแนนเฉลี่ย
      const averageScore = totalScore / numQuestions;

      // คำนวณเปอร์เซ็นต์ความเหมาะสม (เปอร์เซ็นต์สูงแสดงถึงความเหมาะสมมาก)
      const suitabilityPercentage = ((5 - averageScore) / 4) * 100; // ช่วงคะแนน (5-1) = 4


      // toast.success(`คะแนนรวม: ${totalScore}`);
      // toast.success(`คะแนนเฉลี่ย: ${averageScore.toFixed(2)}`);

      setSoftwareDevScore(suitabilityPercentage.toFixed(2));
      navigate("/question3");
    } else {
      toast.error("กรุณาเลือกคำตอบให้ครบทุกข้อ");
    }
    console.log(selectedRatings);
  }
  return (
    <>
      <div className="flex flex-col min-h-screen mt-12">
        <Navbar />
        <div className="flex flex-col items-center justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="text-center mt-10">
              <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-6x1">
                คำถาม 2/8
              </h1>
              <p className="mt-8 text-pretty text-sm font-medium text-gray-900 sm:text-md lg:text-lg">
                หากคุณต้องการค้นหาว่าตัวเองถนัดอะไร หรือ
                ต้องการคำแนะนำในการเลือกอาชีพ สามารถทำเเบบสอบถามได้เลย
              </p>
            </div>
          </div>

          <div>
            <p className="text-balance text-2xl font-semibold tracking-tight text-gray-900 sm:text-6x1 mt-10">
              จงตอบคำถามต่อไปนี้ โดยเลือกคำตอบที่ถูดต้องที่สุดเพียงข้อเดียว
            </p>
          </div>

          <div className="mt-10"></div>
          <form onSubmit={handleSubmit} className="w-5/6 justify-items-center">
            {question_list.map((data, key) => (
              <div key={key} className="flex w-full flex-col my-5 transition-opacity duration-500">
                <div className="card bg-white shadow-xl border-2 rounded-box grid p-12 place-items-center">
                  <div className={`text-4xl text-center text-black ${selectedRatings[data.id] ? "opacity-100" : "opacity-100"} `}>
                    {data.question}
                  </div>
                  {selectedRatings[data.id] ? (
                    <div className="text-green-300 font-bold ">เลือกเเล้ว</div>
                  ) : null}
                  <div className={`rating rating-lg flex justify-center my-2 gap-2 ${selectedRatings[data.id] ? "opacity-100" : "opacity-100"}`}>
                    <div className="flex items-center mt-8 lg:gap-x-8 sm:gap-x-6">
                      {["มากที่สุด", "มาก", "กลาง", "น้อย", "น้อยมาก"].map((label, key) => {
                        const sizeClasses = [
                          "radio-lg border-2 border-green-400",
                          "radio-lg border-2 border-green-300",
                          "radio-lg border-2 border-gray-400",
                          "radio-lg border-2 border-red-300",
                          "radio-lg border-2 border-red-400",
                        ];
                        return (
                          <div key={key} className="flex flex-col items-center">
                            <span className="text-lg text-black font-semibold mb-1">{label}</span>
                            <input
                              type="radio"
                              name={`radio-${data.id}`}
                              className={`radio ${sizeClasses[key]} bg-white rounded-full checked:bg-blue-950`}
                              onChange={() => handleRatingChange(data.id, key + 1)}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <button type="submit" className={`btn ${Object.keys(selectedRatings).length === question_list.length ? "btn-success text-white" : "btn-disabled"}`}>
              หน้าถัดไป
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}



export default Question2;

