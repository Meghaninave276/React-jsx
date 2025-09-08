import React, { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import Watch from "../../components/Watch/Watch";
import Perfume from "../../components/Perfume/Perfume";
import About from "../../components/About/About";
import axios from "axios";
import Contact from "../../components/Contact/Contact";




export default function Home() {
  const [watchs, setWatchs] = useState([]);
  const [perfs, setPerfs] = useState([]);

  const fetchWatches = async () => {
    const res = await axios.get("http://localhost:3000/watchlist");
    return res.data;
  };

  const fetchPerfumes = async () => {
    const res = await axios.get("http://localhost:3000/Perfumelist");
    return res.data;
  };

  useEffect(() => {
    fetchWatches().then(setWatchs);
    fetchPerfumes().then(setPerfs);
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <Watch watchs={watchs} />
      <Perfume perfs={perfs} />
      <About />
      <Contact />

    </div>
  );
}
