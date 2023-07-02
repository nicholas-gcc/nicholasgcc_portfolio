import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";
import AnimatedText from "@/components/AnimatedText";


const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">{type}</h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-16">
      <AnimatedText
            text="Education"
            className="mb-16 !leading-tight lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
      />

      <div ref={ref} className="w-[85%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
          md:w-[2px] md:left-[30px] xs:left-[20px] dark:bg-primaryDark dark:shadow-3xl"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
        <Details
            type="Bachelors of Computing in Computer Science"
            time="Aug 2019 - Jul 2023"
            place="National University of Singapore"
            info="Focus Area: Software Engineering"
          />

          <Details
            type="Relevant Coursework"
            time="Aug 2019 - Jul 2023"
            place="National University of Singapore"
            info="Formal Methods in Software Engineering | Software Engineering Principles and Patterns | Parallel and Distributed Algorithms | 
            Machine Learning | Artificial Intelligence | Computer Networks | Operating Systems | Database Systems | Software Testing"
          />

        </ul>
      </div>
    </div>
  );
};

export default Education;
