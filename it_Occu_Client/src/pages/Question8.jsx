import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { toast } from "react-hot-toast";
import { useScore } from "./ScoreContext";
import axios from "axios";



/**
 * @param rating 1 มากที่สุด
 * @param rating 2 มาก
 * @param rating 3 กลาง
 * @param rating 4 น้อย
 * @param rating 5 น้อยที่สุด
 * * selectedRatings คำตอบที่เลือก
*/

// * Project Manager 
function Question8() {
  const navigate = useNavigate();
  const { setProjectManagerScore } = useScore();

  const [selectedRatings, setSelectedRatings] = useState([]);
  const [question_list, setQuestion] = useState([]);

  const fetchQuestion = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/Question/8")
      console.log(response.data.results)
      setQuestion(response.data.results)
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    // เมื่อเกิดการ render ใหม่ในหน้า
    fetchQuestion();
    window.scrollTo(0, 0);
  }, []); // Empty dependency array to run only once on mount

  const handleRatingChange = (questionId, rating) => {
    setSelectedRatings((prev) => ({
      ...prev,
      [questionId]: rating,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.keys(selectedRatings).length === question_list.length) {
      const totalScore = Object.values(selectedRatings).reduce((sum, score) => sum + score, 0);
      const numQuestions = Object.keys(selectedRatings).length;
      const averageScore = totalScore / numQuestions;
      const suitabilityPercentage = ((5 - averageScore) / 4) * 100;

      // Store the submission with the current timestamp in the database
      try {
        await axios.post("http://localhost:3000/api/form-submissions", {
          submitted_at: new Date().toISOString(),
        });

        setProjectManagerScore(suitabilityPercentage.toFixed(2));
        navigate("/success");
      } catch (error) {
        console.error('Error submitting form:', error);
        toast.error("เกิดข้อผิดพลาดในการส่งแบบฟอร์ม");
      }

    } else {
      toast.error("กรุณาเลือกคำตอบให้ครบทุกข้อ");
    }
  };
  return (
    <>
      <div className="flex flex-col min-h-screen mt-12">
        <Navbar />
        <div className="flex flex-col items-center justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="text-center mt-10">
              <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-6x1">
                คำถาม 8/8
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
              เสร็จสิ้น
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}



export default Question8;

