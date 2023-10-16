import React from 'react';
import './AboutMe.css'; // Import your CSS for this component

function AboutMe() {
  return (
    <div className="about-me-container">
      <div className="content-container">
        <h2>About Me</h2>
        <p>Mohit Neerukonda</p>
        <p>Computer Science Student</p>
        <p>
          I am a highly motivated and adaptable individual with the ability to work both independently and in a team environment.
          I am proactive in seeking out new opportunities for learning and growth, and I am always looking for ways to apply my skills
          and knowledge to solve real-world problems.
        </p>
        <p>Email: nmsk3219@gmail.com</p>
        <p>Phone: 8106596945</p>
        <p>Location: Hyderabad</p>
        <p>GitHub: <a href="https://github.com/Mohit6304" target="_blank" rel="noopener noreferrer">github.com/Mohit6304</a></p>
        <h2>Skills</h2>
        <p>
          <strong>Languages:</strong> C, Java, Python
        </p>
        <p>
          <strong>Web Technologies:</strong> HTML, CSS, JavaScript
        </p>
        <p>
          <strong>Database:</strong> SQL, MySQL,Firebase
        </p>
        <p>
          <strong>Written and Verbal Communication, Analytical Thinking, Team-Oriented, Adaptability</strong>
        </p>
        <h2>Education</h2>
        <p>
          <strong>Bachelor of Engineering - Computer Science and Engineering</strong>
          <br />
          Vasavi College Of Engineering
          <br />
          11/2021 - Present
        </p>

        <h2>Personal Projects</h2>
        <p>
          <strong>Aurum Smart Tech Website (09/2023 - Present)</strong>
          <br />
          Led development of a dynamic website for Aurum Smart Tech, an offline company specializing in embedded systems, mechatronics,
          microcontroller programming, sensor integration, and real-time operating systems. Designed and implemented a responsive web
          platform (HTML, CSS, JavaScript) for an engaging user experience. Launched and hosted the site on Bigrock, expanding the company's
          online reach and showcasing its expertise.
        </p>
        <p>
          <strong>Blog Website (05/2023 - 06/2023)</strong>
          <br />
          Created a blog website using React, Node.js, and MySQL. Created a system that includes user registration, login, content creation, and
          offers various sections for user engagement.
        </p>
        <p>
          <strong>Gaming Website (12/2022 - 01/2023)</strong>
          <br />
          Developed a gaming website with HTML, CSS, Python Flask, and Firebase. Integrated a variety of games through an API for user enjoyment.
        </p>
        <p>
          <strong>Employee Management System (07/2022 - 08/2022)</strong>
          <br />
          Designed an employee management system in Python. Includes an employee database, time tracking, and integration with payroll systems.
        </p>
        <h2>Interests</h2>
        <p>Reading Novels, Solving Puzzles</p>
      </div>
    </div>
  );
}

export default AboutMe;
