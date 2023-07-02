import React, { useRef } from "react";
import {motion, useScroll } from "framer-motion"
import LiIcon from "./LiIcon";
import AnimatedText from "@/components/AnimatedText";
import techToColorMapping from "@/utils/TechToColor.js";



const Details = ({ position, company, companyLink, time, address, work, tech }) => {
  const ref = useRef(null);
  
  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">
      
      <LiIcon reference={ref}/>
      <motion.div
      initial={{y:50}}
      whileInView={{y:0}}
      transition={{duration:0.5, type:"spring"}}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
        <br></br>
        
        <p className="font-medium w-full md:text-md">
          {tech.map((t, index) => 
            <span key={index} className={`text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full ${techToColorMapping[t]}`} style={{whiteSpace: 'normal', display: 'inline-block'}}>
              {t}     
            </span>
          )}
        </p>
      </motion.div>
    </li>
  );
};


const Experience = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
  return (
    <div className="my-16">
      <AnimatedText
            text="Experience"
            className="mb-16 !leading-tight lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
      />

      <div ref={ref} className="w-[85%] mx-auto relative lg:w-[90%] md:w-full">

<motion.div
style={{scaleY: scrollYProgress}}
  className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top 
  md:w-[2px] md:left-[30px] xs:left-[20px] dark:bg-primaryDark dark:shadow-3xl
  "  />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
        <Details
              position="Software Engineer Intern"
              company="HustleHuts"
              companyLink="https://hustlehuts.com"
              time="Jan 2023 - Jun 2023 (Part-time)"
              address="Singapore"
              work="Integrated backend models and dataflows with front-end systems for an early stage startup developing a co-working space booking
               solution. Developed Google authentication protocol for seamless and secure logins."
               tech={["Node.js", "TypeScript", "Next.js", "React", "MongoDB", "Express.js"]}
               />

            <Details
              position="Teaching Assistant"
              company="National University of Singapore"
              companyLink="https://www.nus.edu.sg"
              time="Aug 2022 - Nov 2022"
              address="Singapore"
              work="Facilitated lessons in DAO2702 Programming for Business Analytics, a Python data analytics module. Guided students in analytics 
              projects aimed at solving real-world business problems. Mentored over 50 students and 10 groups in tutorials and projects."
              tech={["Python", "Pandas", "SciKit", "NumPy", "Data Analytics"]}

            />

            <Details
              position="Software Engineer Intern"
              company="Autodesk"
              companyLink="https://www.autodesk.com"
              time="Jan 2022 - Jun 2022"
              address="Singapore"
              work="Worked with API Management team to design automated pipelines for proxy and API services to 
              streamline internal operations. Developed platform to streamline addition of API proxies and whitelisting
              of client IDs to Autodesk Forge. Remodeled proxy lookup service to support Apigee system migrations."
              tech={["Node.js", "Python", "AWS Lambda", "Serverless", "Autodesk Forge API", "GitHub API"]}
              />

            <Details
              position="Software Developer Intern"
              company="Acumino"
              companyLink="https://www.acumino.com"
              time="May 2021 - Dec 2021"
              address="Singapore"
              work="Developed a SaaS digital human interviewer to create a human-like and bias-free recruitment process in an 
              early-stage startup setting. Implemented dynamic response and answer protocol with Google Dialogflow to detect intents.
              Prototype was featured on Channel News Asia."
              tech={["Node.js", "Flask", "GCP", "Google DialogFlow", "UneeQ Digital Human APIs", "Express.js"]}
              />

        </ul>
      </div>
    </div>
  );
};

export default Experience;
