import React from "react";
import { Link as LinkR } from "react-router-dom";
import Footer from "../../components/Footer/index";
import HeroSection from "../../components/HeroSection";
import Navbar from "../../components/Navbar";
import About from "../../components/About";

import Partners from "../../components/partners/partner";

import Enduser from "../../components/endusere/enduser";

import Blog from "../../components/blog/blog";
import Process from "../../components/process/process";

import Pricing from "../../components/pricing/pricing";

import Review from "../../components/review/review";

import Gamecategory from "../../components/gamecategory";
import Quote from "../../components/quote";
import Newsletter from "../../components/newsletter";
import Eventnumber from "../../components/eventnumber/eventnumber";
import Features from "../../components/Features";
import Testimonials from "../../components/testimonials";
import Service from "../../components/Service";
import ImageCardio from "../../images/surface.jpg";
// import ImageRun from "../../images/run.jpg";
import ImageRun from "../../images/warming-up.jpg";
// import ImageTrainer from "../../images/trainer.jpg";
import ImageTrainer from "../../images/sports-events.jpg";
import ArticleOne from "../../images/post.jpg";
import ArticleTwo from "../../images/post2.jpg";
import ArticleThree from "../../images/post3.jpg";
import Article from "../../components/Article/Article";
import Sidebar from "../../components/Sidebar";
import { useStateValue } from "../../services/StateProvider";
import "./Home.css";
import Countdown from "../../components/countdown";

const Home = () => {
  const [{ isSidebarOpen }, dispatch] = useStateValue();
  return (
    <>
      {/* <Sidebar isOpen={isSidebarOpen} toggle={()=>dispatch({type :'TOGGLE_SIDEBAR'})} isHome={true}/> */}
      <Navbar
        toggle={() => dispatch({ type: "TOGGLE_SIDEBAR" })}
        isHome={true}
      />
      <HeroSection />
      <main>
        {/* <About /> */}

        {/* <Features />
         */}

        <Process />

        <Quote />
        {/* <Eventnumber/> */}
        {/* <Testimonials />
         */}
        {/* <section className="services">
          <Service title="High-Quality Surfaces" imgUrl={ImageCardio} />
          <Service title="Training and warm-up Area" imgUrl={ImageRun} />
          <Service title="Sports Events" imgUrl={ImageTrainer} />
        </section> */}

        {/* BLOG ENTRIES 
        <section className="container blog">
          <h2>Read Our Blog</h2>
          <div className="blog__entries">
            <Article
              bgImg={ArticleOne}
              title="How to create your fitness routine"
              author="John Smith"
            />
            <Article
              bgImg={ArticleTwo}
              title="Living a healthy lifestyle is easy"
              author="Carla Harvis"
            />
            <Article
              bgImg={ArticleThree}
              title="Marathon Event rocked last sunday"
              author="Joshua Arreola"
            />
          </div>
        </section> */}
        {/* <Gamecategory /> */}
        <Countdown />

        <Pricing />

        <Partners />
        <Blog />
        {/* <Contactus/> */}
        {/* <Testimonials /> */}
        <Enduser />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
};

export default Home;
