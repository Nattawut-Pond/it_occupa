import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { toast } from "react-hot-toast";
import { useScore } from "../ScoreContext";
import axios from "axios";
import { API_URL } from '../../config';



/**
 * @param rating 1 มากที่สุด
 * @param rating 2 มาก
 * @param rating 3 กลาง
 * @param rating 4 น้อย
 * @param rating 5 น้อยที่สุด
 * * selectedRatings คำตอบที่เลือก
*/
// * Network
function Network() {
  const navigate = useNavigate();
  const { setNetscore } = useScore();
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [question_list, setQuestion] = useState([]);

  const fetchQuestion = async () => {
    try {
      const response = await axios.get(`https://itoccupa-production.up.railway.app/api/newquestion/7`);
      if (response.data.results) {
        setQuestion(response.data.results);
      }
    } catch (error) {
      console.log(error);
      toast.error("Error loading questions");
    }
  }
  useEffect(() => {
    // เมื่อเกิดการ render ใหม่ในหน้า
    fetchQuestion();
    window.scrollTo(0, 0);
  }, []); // Empty dependency array to run only once on mount


  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if all 10 questions are answered
    if (Object.keys(selectedRatings).length === 10) {
      const totalScore = Object.values(selectedRatings).reduce((sum, score) => sum + score, 0);
      const averageScore = totalScore / 10; // Always divide by 10
      const suitabilityPercentage = ((5 - averageScore) / 4) * 100;

      setNetscore(suitabilityPercentage.toFixed(2));
      navigate("/successes");
    } else {
      const unanswered = 10 - Object.keys(selectedRatings).length;
      toast.error(`กรุณาตอบคำถามให้ครบ (เหลืออีก ${unanswered} ข้อ)`);
    }
  };

  const progress = (Object.keys(selectedRatings).length / 10) * 100;

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex flex-col items-center justify-center px-6 py-12 lg:px-8">
          {/* Add progress bar */}
          <div className="w-full max-w-xl mb-8">
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="text-center mt-2">
              {Object.keys(selectedRatings).length}/10 คำถาม
            </p>
          </div>

          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="text-center mt-10">
              <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-6x1">
                แบบทดสอบความเหมาะสม
              </h1>
              <p className="mt-8 text-pretty text-xl font-medium text-gray-500 sm:text-md">
                กรุณาตอบคำถามทั้ง 10 ข้อเพื่อวัดความเหมาะสมในสายงาน Network Engineering
              </p>
            </div>
            <div>
              <p className="text-balance text-2xl font-semibold tracking-tight text-gray-900 sm:text-6x1 mt-10">
                จงตอบคำถามต่อไปนี้ โดยเลือกคำตอบที่ถูกต้องที่สุดเพียงข้อเดียว
              </p>
            </div>
          </div>

          {/* Rest of form */}
          <form onSubmit={handleSubmit} className="w-5/6 justify-items-center">
            {question_list.map((data, index) => (
              <div key={data.id} className="card w-full bg-base-100 shadow-xl my-4">
                <div className="card-body text-center">
                  <h2 className="card-title">คำถามที่ {index + 1}</h2>
                  <p className="text-4xl">{data.question}</p>
                  <div className="grid grid-cols-5 gap-4 mt-4">
                    {[
                      { value: 1, label: "มากที่สุด" },
                      { value: 2, label: "มาก" },
                      { value: 3, label: "ปานกลาง" },
                      { value: 4, label: "น้อย" },
                      { value: 5, label: "น้อยที่สุด" }
                    ].map(({ value, label }) => (
                      <label
                        key={value}
                        className={`flex items-center justify-center p-3 border rounded-lg cursor-pointer hover:bg-green-100 ${selectedRatings[index] === value ? 'bg-green-100 border-green-500' : ''
                          }`}
                      >
                        <input
                          type="radio"
                          name={`rating-${index}`}
                          className="hidden"
                          checked={selectedRatings[index] === value}
                          onChange={() => {
                            setSelectedRatings({
                              ...selectedRatings,
                              [index]: value,
                            });
                          }}
                        />
                        <span>{label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            <button
              type="submit"
              className={`btn w-full mt-4 ${Object.keys(selectedRatings).length === 10
                  ? "btn-success text-white"
                  : "btn-disabled"
                }`}
            >
              ส่งคำตอบ ({Object.keys(selectedRatings).length}/10)
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Network;
