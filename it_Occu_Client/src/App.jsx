import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

/**
 * ส่วนของการ import หน้าเว็บทั้งหมด folder pages
*/
import Landding from './pages/Landding.jsx'
import About from './pages/About.jsx'
import FindMyself from './pages/findMyself.jsx'
import Contact from './pages/Contact.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Notfound from './pages/Notfound.jsx'
import Logout from './pages/Logout.jsx'
import Question from './pages/Question.jsx'
import Question2 from './pages/Question2.jsx'
import Question3 from './pages/Question3.jsx'
import Question4 from './pages/Question4.jsx'
import Question5 from './pages/Question5.jsx'
import Question6 from './pages/Question6.jsx'
import Question7 from './pages/Question7.jsx'
import Question8 from './pages/Question8.jsx'
import Protect from './pages/Protect.jsx'
import Success from './pages/Success.jsx'

import { ScoreProvider } from './pages/ScoreContext'

// คำถามแยก

import Cyber from './pages/NewQuestion/Cyber.jsx'
import ITSupport from './pages/NewQuestion/ITSupport.jsx'
import Network from './pages/NewQuestion/Network.jsx'
import ProjectManager from './pages/NewQuestion/ProjectManager.jsx'
import Software from './pages/NewQuestion/Software.jsx'
import System from './pages/NewQuestion/System.jsx'
import UXUI from './pages/NewQuestion/UXUI.jsx'
import Web from './pages/NewQuestion/Web.jsx'
import Successes from './pages/NewQuestion/Successes.jsx'

function App() {
    const [loginStatus, setLogin] = useState();
    return (
        <>

            <Toaster position="top-right" />
            <ScoreProvider>
                <Routes>
                    {/* หน้าหลัก */}
                    
                    <Route element={<Landding />} path='/'></Route>
                    <Route element={<About />} path='/about'></Route>
                    <Route element={<Contact />} path='/contact'></Route>
                    <Route element={<Login setLogin={setLogin} status={loginStatus} />} path='/login'></Route>
                    <Route element={<Register />} path='/register'></Route>
                    <Route element={<Logout setLogin={setLogin} />} path='/logout'></Route>
                    <Route element={<Protect loginStatus={loginStatus} setLogin={setLogin} />}>

                        {/* หลัง Login */}

                        <Route element={<FindMyself />} path='/findmyself'></Route>
                        <Route element={<Question />} path='/question'></Route>
                        <Route element={<Question2 />} path='/question2'></Route>
                        <Route element={<Question3 />} path='/question3'></Route>
                        <Route element={<Question4 />} path='/question4'></Route>
                        <Route element={<Question5 />} path='/question5'></Route>
                        <Route element={<Question6 />} path='/question6'></Route>
                        <Route element={<Question7 />} path='/question7'></Route>
                        <Route element={<Question8 />} path='/question8'></Route>
                        <Route element={<Success />} path='/success'></Route>

                        {/* คำถามแยก */}

                        <Route element={<Cyber />} path='/cyber'></Route>
                        <Route element={<ITSupport />} path='/itsupport'></Route>
                        <Route element={<Network />} path='/network'></Route>
                        <Route element={<ProjectManager />} path='/projectmanager'></Route>
                        <Route element={<Software />} path='/software'></Route>
                        <Route element={<System />} path='/system'></Route>
                        <Route element={<UXUI />} path='/uxui'></Route>
                        <Route element={<Web />} path='/web'></Route> 
                        <Route element={<Successes />} path='/successes'></Route> 

                      
                    </Route>

                    <Route element={<Notfound />} path='*'></Route>
                </Routes>
            </ScoreProvider>


        </>
    )
}

export default App