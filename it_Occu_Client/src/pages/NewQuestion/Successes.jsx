import { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useScore } from "../ScoreContext";
import toast from "react-hot-toast";
import JSConfetti from 'js-confetti'
import { Link } from "react-router-dom";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function Successes() {
  const navigate = useNavigate();
  const {
    itscore,
    softscore,
    datascore,
    cyberscore,
    webscore,
    uiscore,
    netscore,
    projectscore,
    setItscore,
    setSoftscore,
    setDatascore,
    setCyberscore,
    setWebscore,
    setUiscore,
    setNetscore,
    setProjectscore
  } = useScore();

  useEffect(() => {
    console.log("Scores:", {
      itscore,
      softscore,
      datascore,
      cyberscore,
      webscore,
      uiscore,
      netscore,
      projectscore
    });
  }, [itscore, softscore, datascore, cyberscore, 
      webscore, uiscore, netscore, projectscore]);

   useEffect(() => {
     const jsConfetti = new JSConfetti();
    
    if (
      itscore === 0 &&
      softscore === 0 &&
      datascore === 0 &&
      cyberscore === 0 &&
      webscore === 0 &&
      uiscore === 0 &&
      netscore === 0 &&
      projectscore === 0
    ) {
      navigate("/findmyself");
      toast.error("กรุณาทำเเบบสอบถามก่อนทำการประเมิน");
    } else {
      window.scrollTo(0, 0);
      toast.success("ยินดีด้วยคุณได้รับการประเมินเรียบร้อยแล้ว");
      jsConfetti.addConfetti();
    }
  }, [navigate, itscore, softscore, datascore, cyberscore, 
      webscore, uiscore, netscore, projectscore]);

  useEffect(() => {
    return () => {
      setItscore(0);
      setSoftscore(0);
      setDatascore(0);
      setCyberscore(0);
      setWebscore(0);
      setUiscore(0);
      setNetscore(0);
      setProjectscore(0);
    };
  }, []);

  const getMaxScore = useMemo(() => {
    try {
      const scores = [
        { role: "IT Supporter", score: itscore || 0 },
        { role: "Software Developer", score: softscore || 0 },
        { role: "Data Analyst", score: datascore || 0 },
        { role: "Cybersecurity Specialist", score: cyberscore || 0 },
        { role: "Web Developer", score: webscore || 0 },
        { role: "UX/UI Designer", score: uiscore || 0 },
        { role: "Network Engineering", score: netscore || 0 },
        { role: "Project Manager", score: projectscore || 0 },
      ];
      console.log("Calculated scores:", scores);
      const sorted = scores.sort((a, b) => b.score - a.score);
      console.log("Sorted scores:", sorted);
      return sorted[0];
    } catch (error) {
      console.error("Error in getMaxScore:", error);
      return { role: "Error calculating", score: 0 };
    }
  }, [itscore, softscore, datascore, cyberscore, 
      webscore, uiscore, netscore, projectscore]);

  const jobDetails = useMemo(() => ({
    "IT Supporter": {
      image: "https://cdn-icons-png.flaticon.com/512/2942/2942789.png",
      description: "IT Supporter เป็นผู้เชี่ยวชาญในการแก้ไขปัญหาด้านเทคโนโลยีและให้การสนับสนุนผู้ใช้งาน",
      skills: ["การแก้ไขปัญหา", "การสื่อสาร", "ความรู้ด้านฮาร์ดแวร์และซอฟต์แวร์"]
    },
    "Software Developer": {
      image: "https://cdn-icons-png.flaticon.com/512/1688/1688400.png",
      description: "Software Developer เป็นผู้พัฒนาโปรแกรมและแอปพลิเคชันต่างๆ",
      skills: ["การเขียนโปรแกรม", "การแก้ไขปัญหา", "การทำงานเป็นทีม"]
    },
    "System Analyst": {
      image: "https://cdn-icons-png.flaticon.com/512/1925/1925044.png", 
      description: "System Analyst เป็นผู้วิเคราะห์และออกแบบระบบเทคโนโลยีสารสนเทศให้ตรงตามความต้องการขององค์กร",
      skills: ["การวิเคราะห์ระบบ", "การออกแบบระบบ", "การจัดการโครงการ"]
    },
    "Cybersecurity Specialist": {
      image: "https://cdn-icons-png.flaticon.com/512/2716/2716652.png",
      description: "Cybersecurity Specialist เป็นผู้เชี่ยวชาญด้านความปลอดภัยทางไซเบอร์",
      skills: ["ความปลอดภัยระบบ", "การวิเคราะห์ภัยคุกคาม", "การป้องกันการโจมตี"]
    },
    "Web Developer": {
      image: "https://cdn-icons-png.flaticon.com/512/2282/2282188.png",
      description: "Web Developer เป็นผู้พัฒนาเว็บไซต์และแอปพลิเคชันบนเว็บ",
      skills: ["HTML/CSS", "JavaScript", "การออกแบบ UI/UX"]
    },
    "UX/UI Designer": {
      image: "https://cdn-icons-png.flaticon.com/512/1187/1187595.png",
      description: "UX/UI Designer เป็นผู้ออกแบบประสบการณ์และส่วนต่อประสานผู้ใช้",
      skills: ["การออกแบบ UI", "UX Research", "Prototyping"]
    },
    "Network Engineering": {
      image: "https://cdn-icons-png.flaticon.com/512/2885/2885417.png",
      description: "Network Engineering เป็นผู้ดูแลและออกแบบระบบเครือข่าย",
      skills: ["การจัดการเครือข่าย", "ความปลอดภัยเครือข่าย", "การแก้ไขปัญหา"]
    },
    "Project Manager": {
      image: "https://cdn-icons-png.flaticon.com/512/2910/2910791.png",
      description: "Project Manager เป็นผู้บริหารจัดการโครงการด้านไอที",
      skills: ["การบริหารโครงการ", "การสื่อสาร", "การจัดการทีม"]
    }
  }), []);

  const currentJobDetails = useMemo(() => {
    const defaultDetails = {
      image: "https://cdn-icons-png.flaticon.com/512/5511/5511415.png",
      description: "ยินดีด้วยกับอาชีพที่เหมาะสมกับคุณ",
      skills: []
    };
    return jobDetails[getMaxScore?.role] || defaultDetails;
  }, [getMaxScore?.role, jobDetails]);

  if (!getMaxScore) {
    console.error("getMaxScore is undefined");
    return <div>Error loading results</div>;
  }

  return (
    <>
      <div className="flex flex-col min-h-screen mt-4">
        <Navbar />
        <div className="flex flex-col items-center justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="text-center mt-20">
              <h1 className="text-balance text-xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                ยินดีด้วย !!
              </h1>
              <p className="mt-8 text-pretty text-sm font-medium text-gray-500 sm:text-2xl">
                นี่คือผลลัพธ์ของคุณตามอาชีพที่คุณเลือก
              </p>
            </div>
          </div>

          <div className="mt-10 justify-items-center w-full">
            <div className="card bg-base-100 w-6/10 shadow-xl border-2">
              <figure>
                <img
                  src={currentJobDetails.image}
                  alt={getMaxScore?.role}
                  className="w-2/4 h-auto p-10 object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  <div className="text-center w-full text-2xl">
                    ประเมินความเหมาะสมของอาชีพได้คะแนนทั้งหมด
                  </div>
                </h2>
                <div className="text-center">
                  <p className="text-xl mb-3">{getMaxScore?.role || 'Loading...'}</p>
                  <p className="text-3xl mb-4">ความเหมาะสม: {getMaxScore?.score || 0}%</p>
                  <p className="text-lg mb-4">{currentJobDetails.description}</p>
                  {currentJobDetails.skills.length > 0 && (
                    <div className="mt-4">
                      <p className="text-xl font-semibold mb-2">ทักษะที่สำคัญ:</p>
                      <div className="flex flex-wrap justify-center gap-2 mt-5">
                        {currentJobDetails.skills.map((skill, index) => (
                          <span key={index} className="btn bg-orange-500 hover:bg-orange-400 text-white h-10 w-24 mx-5 border-2 border-orange-400 shadow-sm">{skill}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="card-actions justify-center mt-4 mb-10">
                <Link to="/findmyself" onClick={() => window.scrollTo(0, 0)}>
                  <button className="btn bg-white hover:bg-gray-100 text-gray-800 border border-gray-400">กลับสู่หน้าค้นหา</button>
                </Link>
              </div>
            </div>
          </div>

        </div>
        <Footer />
      </div>
    </>
  );
}

export default Successes;
