import uniqid from 'uniqid'
import AnimatedText from "@/components/AnimatedText";
import stylesCSS from '@/styles/Home.module.css';

const Skills = () => {
  const skills = [
    'Java',
    'Python',
    'JavaScript',
    'C/C++',
    'SQL',
    'HTML/CSS',
    'Bash',
    'Python Flask',
    'Java Spring Boot',
    'Node.js',
    'React',
    'Express',
    'Firebase',
    'MongoDB',
    'Docker',
    'AWS Lambda',
    'Serverless',
    'RabbitMQ',
    'Git',
    'Microservices'
  ]
  if (!skills.length) return null

  const styles = {
    skillsList: {
      maxWidth: "550px",
      width: "95%",
      margin: "0 auto",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
    },
    skillsListItem: {
      margin: "0.5em",
    },
    section: {
      id: 'skills'
    },
    sectionTitle: {
      className: 'section__title'
    },
  };


  return (
    <>
      <AnimatedText
        text="My Skills"
        className="mt-16 mb-16 !leading-tight lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
      />
      <section className='section skills' style={styles.section}>
        <ul style={styles.skillsList}>
          {skills.map((skill) => (
            <li key={uniqid()} style={styles.skillsListItem} className={`${stylesCSS.btn} ${stylesCSS['btn--plain']}`}>
            {skill}
          </li>          
          ))}
        </ul>
      </section>
    </>
  )
}

export default Skills

