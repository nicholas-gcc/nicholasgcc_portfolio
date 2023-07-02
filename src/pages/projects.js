import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import techToColorMapping from "@/utils/TechToColor.js"
import project1 from "../../public/images/projects/Saku.png";
import project2 from "../../public/images/projects/Favours4Uni.png";
import project3 from "../../public/images/projects/floodopedia.jpg";
import project4 from "../../public/images/projects/orbital.jpg";
import project5 from "../../public/images/projects/JavaShell.jpg";
import project6 from "../../public/images/projects/ecommerce.jpg";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github, hasRepo, tech }) => {

  return (
    <article
      className="w-full flex items-center justify-between relative  rounded-br-2xl
        rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light
        lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
    >
    <Head>
        <link rel="preload" as="image" href={img} />
    </Head>
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light
    rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]
    "
      />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light lg:text-3xl xs:text-2xl">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
        {hasRepo && (
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
        )}
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold
            dark:bg-light dark:text-dark
            sm:px-4 sm:text-base
            "
          >
            Visit Project
          </Link>
          <br></br>
          
        </div>
        <div className="font-medium w-full md:text-md flex flex-wrap">
          {tech && tech.map((t, index) => 
            <span key={index} className={`text-xs mt-3 font-medium mr-2 px-2.5 py-0.5 rounded-full ${techToColorMapping[t]}`}>
              {t}     
            </span>
          )}
        </div>


      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github, desc, tech }) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-center rounded-2xl 
    border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4
    "
    >
    <Head>
      <link rel="preload" as="image" href={img} />
    </Head>
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark
    rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]
    "
      />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>

        
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>

        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {desc}
        </p>

        <div className="w-full flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline md:text-base"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />
          </Link>
        </div>
        <div className="font-medium w-full md:text-md flex flex-wrap mt-4">
          {tech && tech.map((t, index) => 
            <span key={index} className={`text-xs mt-4 font-medium mr-2 px-2.5 py-0.5 rounded-full ${techToColorMapping[t]}`}>
              {t}     
            </span>
          )}
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Nicholas Canete Portfolio | Projects Page</title>
        <meta
          name="description"
          content="Project highlights from Nicholas Canete, a Software Engineer with 
        backend development. Browse a variety of systems for your inspiration."
        />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="My Favourites"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                type="Internship Project"
                title="Digital Human Interviewer"
                summary="Saku is a digital human avatar that conducts HR interviews with dynamic questions and responses based on verbal inputs. Using DialogFlow's NLP capabilities and UneeQ's digital human APIs, it aims to create an interactive, human-like interview experience that is free from human bias. Featured on Channel News Asia."
                img={project1}
                link="https://drive.google.com/file/d/1eAf_IOP_LY0trOZ-Yz1TsUU3ZkjlzIE4/view?usp=share_link"
                tech={["Node.js", "GCP", "Google DialogFlow", "UneeQ Digital Human APIs", "Express.js"]}

              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Full Stack Web App"
                title="Platform to Exchange Favours"
                img={project2}
                link="https://favours4uni.web.app/dashboard"
                github="https://github.com/nicholas-gcc/favours4uni"
                desc="Full stack microservice web app for users to request and fulfil favours, complete with authentication, messaging and leaderboard features"
                tech={["Node.js", "Express.js", "Firebase", "Angular"]}

              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Full Stack Web App"
                title="Live Urban Flood Prediction"
                img={project3}
                link="https://floodopedia-710d10e3e279.herokuapp.com"
                github="https://github.com/nicholas-gcc/xylem-flood-prediction"
                desc="Live urban flooding predictions for Fanno Creek, Oregon. Features server-side prediction using Random Forest and web-scraping from US Geological Services."
                tech={["Python", "Flask", "SciKit", "HTML/CSS", "Web Scraping"]}

              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                type="Augmented Reality Mobile App"
                title="Visual Chemistry App"
                summary="Android App to visualise 3D chemical molecules and reactions. The app renders 3D animations when it detects a unique marker in the live camera feed. This project also features
                virtual buttons, sliders and conceptual explanations."
                img={project4}
                link="https://github.com/nicholas-gcc/ARBital/releases/download/v1.0/ARbital.apk"
                github="https://github.com/nicholas-gcc/ARBital"
                hasRepo={true}
                tech={["Unity", "C#", "Vuforia"]}

              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Desktop Application"
                img={project5}
                title="Java Bash Shell"
                link="https://github.com/nicholas-gcc/java-bash-shell"
                github="https://github.com/nicholas-gcc/java-bash-shell"
                tech={["Java", "JUnit", "Bash"]}
                desc="Java app that mimics a subset of Bash scripting capabilities. Includes common commands and features like redirection, substitution, sequence commands and piping."

              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Backend Project Template"
                img={project6}
                title="E-Commerce Microservice"
                link="https://medium.com/@nicholasgcc/building-scalable-e-commerce-backend-with-microservices-exploring-design-decisions-node-js-b5228080403b"
                github="https://github.com/nicholas-gcc/nodejs-ecommerce-microservice"
                tech={["Node.js", "MongoDB", "Docker", "Mocha/Chai", "RabbitMQ"]}
                desc="A microservice template for building an e-commerce backend, applying salient software architecture patterns and AMQP."

              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
