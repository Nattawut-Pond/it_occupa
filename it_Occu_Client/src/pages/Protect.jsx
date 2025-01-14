// สร้างระบบป้องกันโดยให้ล็อคอินก่อนเยี่ยมชมเว็บไซต์
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function Protect() {
  const navigate = useNavigate();
    const loginStatus = localStorage.getItem("isLogin");
    useEffect(() => {
        if (loginStatus == null) {
        toast.error("กรุณาเข้าสู่ระบบก่อน");
        navigate("/login");
        }
    }, []);
  return <Outlet />;
}


