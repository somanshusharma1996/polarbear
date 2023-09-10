import { useRef } from "react";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Head from "next/head";
import Button from "../components/Button";
import Link from "next/link";
import Cursor from "../components/Cursor";
import css from "./index.module.css";
import classNames from "classnames";

// Local Data
import data from "../data/portfolio.json";

export default function Home() {
  // Ref
  const workRef = useRef();
  const aboutRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();

  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current, textFour.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);

  return (
    // <div className={`relative ${data.showCursor && "cursor-none"}`} style={{ animation: "gradientAnimation 15s ease infinite" }}>
    
<div className={`relative ${data.showCursor && "cursor-none"}`} style={{
  backgroundImage: "linear-gradient(135deg, #FFFAF0, #FFFFF0)", // Light cream gradient example
  backgroundSize: "200% 200%",
  animation: "gradientAnimation 10s linear infinite"
}}>
  {data.showCursor && <Cursor />}
  <Head>
    <title>{data.name}</title>
  </Head>

  <div className="gradient-circle"></div>
  <div className="gradient-circle-bottom"></div>

  <div className="container mx-auto mb-10">
    <Header
      handleWorkScroll={handleWorkScroll}
      handleAboutScroll={handleAboutScroll}
    />
    <div className="laptop:mt-20 mt-10">
      <div className="mt-5">
        <h1
          ref={textOne}
          className="text-3xl tablet:text-6xl laptop:text-6xl xl:text-8xl p-1 tablet:p-2 font-bold w-full tablet:w-4/5 laptop:w-4/5 xl:w-4/5 text-gray-900" // Adjust text color
        >
          {data.headerTaglineOne}
        </h1>
        <h1
          ref={textTwo}
          className="text-3xl tablet:text-6xl laptop:text-6xl xl:text-8xl p-1 tablet:p-2 font-bold w-full tablet:w-4/5 laptop:w-4/5 xl:w-4/5 text-gray-900" // Adjust text color
        >
          {data.headerTaglineTwo}
        </h1>
        <h1
          ref={textThree}
          className="text-3xl tablet:text-6xl laptop:text-6xl xl:text-8xl p-1 tablet:p-2 font-bold w-full tablet:w-4/5 laptop:w-4/5 xl:w-4/5 text-gray-900" // Adjust text color
        >
          {data.headerTaglineThree}
        </h1>
        <h1
          ref={textFour}
          className="text-3xl tablet:text-6xl laptop:text-6xl xl:text-8xl p-1 tablet:p-2 font-bold w-full tablet:w-4/5 laptop:w-4/5 xl:w-4/5 text-gray-900" // Adjust text color
        >
          {data.headerTaglineFour}
        </h1>
      </div>
    </div>
    <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={workRef}>
      <div class={classNames(css.centeredContainer)}>
        <h1 className="text-2xl text-bold expressive4 text-gray-900">Work.</h1> {/* Adjust text color */}
      </div>

      <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-4">
        {data.projects.map((project) => (
          <WorkCard
            key={project.id}
            img={project.imageSrc}
            name={project.title}
            // description={project.description}
            onClick={() => window.open(project.url)}
          />
        ))}
      </div>
    </div>

    <div className="mt-10 laptop:mt-30 p-2 laptop:p-0">
      <div class={classNames(css.centeredContainer)}>
        <h1 className="text-2xl text-bold expressive4 text-gray-900">Service & Expertise</h1> {/* Adjust text color */}
      </div>
      <div className="mt-5 tablet:m-10 grid grid-cols-1 laptop:grid-cols-2 gap-6">
        {/* {data.services.map((service, index) => ( */}
          <ServiceCard
          />
        {/* ))} */}
      </div>
    </div>
    <div className="mt-10 laptop:mt-40 p-2 laptop:p-0" ref={aboutRef}>
      <h1 className="tablet:m-10 text-3xl text-bold text-gray-900">About Me</h1> {/* Adjust text color */}
      <p className="tablet:m-10 mt-2 text-lg laptop:text-xl w-full laptop:w-3/5 text-gray-700"> {/* Adjust text color */}
      Himanshu Sharma is a Mumbai, India based professional Gimbal operator/technician and grip. Having been born and brought up in Bilaspur, Himachal Pradesh he always had a knack for landscapes and nature’s photography. While pursuing engineering in Electronics and communication from Amity University, the photographer in him grew as he participated and won many photography events. He put his passion of photography into action after securing diploma in cinematography from Digital Academy, Mumbai in 2018. 
While contributing in various blockbuster movies like Brahamastra, Yodha, Bhediya, The Archies, Chakda-xpress and many others, he has gained invaluable on set experience while keeping a sharp attention to details. Apart from movies he has proven his expertise in various Ad films like Parle G, Tata, Rapido, Carryall and web series like Crash course, Chor nikalkar bhaga and many more.

Some of the famous DOPs he has been associated with Nikos Andritsakis, Jishnu Bhattacharjee, Tushar Kanti Ray, Kevin Crasta, Rajeev Ravi, Mani Kandan and various others.

      </p>
      {/* <div className="mt-5">
        <img
          src="/profile-image.jpg"
          alt="My Profile"
          className="rounded-full border-4 border-pink-500 w-24 h-24 object-cover shadow-lg"
        />
      </div> */}
    </div>
    <Footer />
  </div>
</div>
    // </div>
  );
}
