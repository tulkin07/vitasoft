import React, { useEffect } from 'react'
import AllPage from './pages/AllPage'
import AOS from "aos";
import "aos/dist/aos.css";
export default function App() {
  useEffect(() => {
    AOS.init({
      offset: 20, // Animatsiya boshlanish masofasi (pikselda)
      duration: 1000, // Animatsiya davomiyligi (millisekundda)
      once: true, // Har bir element faqat bir marta animatsiyalanadi
    });
  }, []);
  return <AllPage />
}
