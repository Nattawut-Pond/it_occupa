// ScoreContext.js
import React, { createContext, useState, useContext } from "react";

const ScoreContext = createContext();

export function ScoreProvider({ children }) {
  const [itSupportScore, setItSupportScore] = useState(0);
  const [softwareDevScore, setSoftwareDevScore] = useState(0);
  const [dataAnalystScore, setDataAnalystScore] = useState(0);
  const [cyberSecurityScore, setCyberSecurityScore] = useState(0);
  const [webDevScore, setWebDevScore] = useState(0);
  const [uxuiScore, setUxuiScore] = useState(0);
  const [networkScore, setNetworkScore] = useState(0);
  const [projectManagerScore, setProjectManagerScore] = useState(0);

  const [itscore, setItscore] = useState(0);
  const [softscore, setSoftscore] = useState(0);
  const [datascore, setDatascore] = useState(0);
  const [cyberscore, setCyberscore] = useState(0);
  const [webscore, setWebscore] = useState(0);
  const [uiscore, setUiscore] = useState(0);
  const [netscore, setNetscore] = useState(0);
  const [projectscore, setProjectscore] = useState(0);


  return (
    <ScoreContext.Provider
      value={{
        itSupportScore,
        setItSupportScore,
        softwareDevScore,
        setSoftwareDevScore,
        dataAnalystScore,
        setDataAnalystScore,
        cyberSecurityScore,
        setCyberSecurityScore,
        webDevScore,
        setWebDevScore,
        uxuiScore,
        setUxuiScore,
        networkScore,
        setNetworkScore,
        projectManagerScore,
        setProjectManagerScore,
        
        // แยกตามหน้า
        itscore, //1
        setItscore,
        softscore, //2
        setSoftscore,
        datascore, //3
        setDatascore,
        cyberscore, //4
        setCyberscore, 
        webscore, //5
        setWebscore,
        uiscore, //6
        setUiscore,
        netscore, //7
        setNetscore,
        projectscore, //8
        setProjectscore,


      }}
    >
      {children}
    </ScoreContext.Provider>
  );
}

export function useScore() {
  return useContext(ScoreContext);
}