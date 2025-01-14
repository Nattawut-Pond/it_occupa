import { useEffect, useState } from "react";
import { useScore } from "./ScoreContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import JSConfetti from 'js-confetti'

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Success() {
  // const [career, setCareer] = useState([]);
  // const [image, setImage] = useState();
  const jsConfetti = new JSConfetti()
  const navigate = useNavigate();
  const {
    itSupportScore,
    softwareDevScore,
    dataAnalystScore,
    cyberSecurityScore,
    webDevScore,
    uxuiScore,
    networkScore,
    projectManagerScore,
  } = useScore();

  // const getCarrer = async () => {
  //     const response = await axios.get("itoccupa-production.up.railway.app/api/occupation");
  //     const data = response.data.results;
  //     setCareer(data);
  //     data.map((item) => {
  //         setImage({Title: item.title, Image: item.image});
  //     });

  // };

  useEffect(() => {
    if (
      itSupportScore === 0 &&
      softwareDevScore === 0 &&
      dataAnalystScore === 0 &&
      cyberSecurityScore === 0 &&
      webDevScore === 0 &&
      uxuiScore === 0 &&
      networkScore === 0 &&
      projectManagerScore === 0
    ) {
      navigate("/question");
      toast.error("กรุณาทำเเบบสอบถามก่อน");
    } else {
      window.scrollTo(0, 0);
      toast.success("ยินดีด้วยคุณได้รับการประเมินเรียบร้อยแล้ว");
      jsConfetti.addConfetti()
    }

    // getCareer();
  }, []);

  const getMaxScore = () => {
    const scores = [
      { role: "IT Supporter", score: itSupportScore },
      { role: "Software Developer", score: softwareDevScore },
      { role: "Data Analyst", score: dataAnalystScore },
      { role: "Cybersecurity Specialist", score: cyberSecurityScore },
      { role: "Web Developer", score: webDevScore },
      { role: "UX/UI Designer", score: uxuiScore },
      { role: "Network Engineering", score: networkScore },
      { role: "Project Manager", score: projectManagerScore },
    ];
    const topScores = scores.sort((a, b) => b.score - a.score).slice(0, 1);
    return topScores;
  };

  const calculateScore = () => {
    const scores = [
      { role: "IT Supporter", score: itSupportScore },
      { role: "Software Developer", score: softwareDevScore },
      { role: "Data Analyst", score: dataAnalystScore },
      { role: "Cybersecurity Specialist", score: cyberSecurityScore },
      { role: "Web Developer", score: webDevScore },
      { role: "UX/UI Designer", score: uxuiScore },
      { role: "Network Engineering", score: networkScore },
      { role: "Project Manager", score: projectManagerScore },
    ];
    const topScores = scores.sort((a, b) => b.score - a.score).slice(1, 4);
    return topScores;
  };

  return (
    <>
      <div className="flex flex-col min-h-screen mt-10">
        <Navbar />
        <div className="flex flex-col items-center justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="text-center mt-20">
              <h1 className="text-balance text-xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                ยินดีด้วย !!
              </h1>
              <p className="mt-8 text-pretty text-sm font-medium text-gray-500 sm:text-2xl">
                คุณเหมาะสมกับอาชีพด้าน
              </p>
            </div>
          </div>

          <div className="mt-10 justify-items-center w-full">
            <div className="card bg-base-100 w-6/10 shadow-xl border-2">
              <figure>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/5511/5511415.png "
                  alt="Shoes"
                  className="w-2/4 h-auto p-10 object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title ">
                  <div className="text-center w-full text-2xl">สายงานที่เหมาะกับคุณก็คือ</div>
                </h2>
                <p className="text-center">
                  {getMaxScore().map((item, index) => (
                    <div key={index} className="w-full justify-items-center">
                      <p className="text-4xl mb-3">{item.role}</p>
                      <p className="text-lg">คะแนน: {item.score}%</p>
                    </div>
                  ))}
                </p>

              </div>
            </div>
          </div>

          <div className="my-16 w-full ">
            <div className="card bg-base-100 shadow-xl border-2">
              <div className="card-body">
                <h2 className="card-title justify-center text-2xl">
                  อาชีพอื่น ๆ ที่คุณอาจสนใจ !!
                </h2>
              </div>
            </div>
          </div>

          <div className="my-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {calculateScore().map((item, index) => (
              <div
                className="card bg-base-100 w-64 shadow-xl border-2"
                key={index}
              >
                <div className="card-body ">
                  <h2 className="card-title justify-center text-center">
                    {item.role}
                  </h2>
                  <div className="justify-center text-center"></div>
                  <div className="card-actions justify-center align-baseline">
                    <p className="text-center">คะแนน: {item.score} %</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Success;
