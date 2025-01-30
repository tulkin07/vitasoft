import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import About from '../components/About'
import Service from '../components/Service'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Portfolio from '../components/Portfolio'
import Loader from '../components/Loader'

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000)); 
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <Navbar />
      <Header />
      <About/>
      <Service />
      <Portfolio/>
      <Contact/>
      <Footer/>
    </>
  )
}
