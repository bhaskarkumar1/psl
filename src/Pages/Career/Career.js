import React from "react";
import "./Career.css";

const Career = () => {
  const jobList = [
    {
      title: "Junior Developer",
      logo: "https://via.placeholder.com/50", // Replace with actual logo URL
      description: `As a Junior Developer, you will collaborate with the development team to create,
        test, and maintain software applications. You will gain hands-on experience with
        coding, debugging, and delivering user-friendly solutions. A passion for learning
        and problem-solving is essential.`,
      responsibilities: [
        "Collaborate with senior developers on software development projects.",
        "Write clean and maintainable code.",
        "Debug and troubleshoot application issues.",
        "Participate in code reviews and team meetings.",
      ],
      location: "San Francisco, CA",
      lastDate: "December 31, 2024",
    },
    {
      title: "Backend Developer (C)",
      logo: "https://via.placeholder.com/50", // Replace with actual logo URL
      description: `We are seeking a Backend Developer skilled in C programming to build and maintain
        scalable server-side systems. You will design APIs, optimize performance, and
        ensure security while working on enterprise-level applications.`,
      responsibilities: [
        "Design and develop server-side systems and APIs.",
        "Optimize application performance for scalability.",
        "Ensure security and data protection best practices.",
        "Collaborate with front-end developers and stakeholders.",
      ],
      location: "Remote",
      lastDate: "January 15, 2025",
    },
    {
      title: "Data Analyst",
      logo: "https://via.placeholder.com/50", // Replace with actual logo URL
      description: `Join our team as a Data Analyst to uncover insights that drive decision-making.
        Analyze large datasets, create reports, and provide recommendations to enhance
        business performance. Strong analytical and technical skills are a must.`,
      responsibilities: [
        "Analyze and interpret complex data sets.",
        "Develop dashboards and visualizations using BI tools.",
        "Provide actionable insights to the business team.",
        "Ensure data integrity and accuracy.",
      ],
      location: "New York, NY",
      lastDate: "January 10, 2025",
    },
    {
      title: "Marketing Manager",
      logo: "https://via.placeholder.com/50", // Replace with actual logo URL
      description: `As a Marketing Manager, you will lead campaigns to promote our brand and
        drive engagement. Develop strategies, analyze campaign performance, and
        collaborate with cross-functional teams to achieve marketing goals.`,
      responsibilities: [
        "Plan and execute marketing campaigns.",
        "Analyze campaign data and optimize performance.",
        "Manage social media and digital marketing initiatives.",
        "Collaborate with product and sales teams.",
      ],
      location: "Chicago, IL",
      lastDate: "December 20, 2024",
    },
  ];

  return (
    <div className="career-page">
      <header className="career-header">
        <h1>Join Our Team</h1>
        <p>Explore exciting opportunities to grow your career with us.</p>
      </header>
      <div className="job-list">
        {jobList.map((job, index) => (
          <div className="job-card" key={index}>
            <div className="job-heading">
              <img src={job.logo} alt={`${job.title} logo`} className="job-logo" />
              <h2>{job.title}</h2>
            </div>
            <p className="job-description">{job.description}</p>
            <h4>Key Responsibilities:</h4>
            <ul>
              {job.responsibilities.map((responsibility, idx) => (
                <li key={idx}>{responsibility}</li>
              ))}
            </ul>
            <div className="job-details">
              <p>
                <strong>Location:</strong> {job.location}
              </p>
              <p>
                <strong>Last Date to Apply:</strong> {job.lastDate}
              </p>
            </div>
            <button className="apply-button">Apply Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Career;
