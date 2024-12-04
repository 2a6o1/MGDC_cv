import React, { useState, useEffect } from "react";

const MainPage = () => {
  // Dummy data for jobs and skills
  const sections = [
    [
      {
        title: "Software Engineer",
        company: "Tech Corp",
        period: "Jan 2020 - Present",
        details: "Developed web applications using React and Node.js. Led a team of developers to build scalable solutions."
      },
      {
        title: "Web Developer",
        company: "Web Solutions",
        period: "Jul 2018 - Dec 2019",
        details: "Built and maintained several websites using HTML, CSS, and JavaScript. Worked closely with designers."
      },
      {
        title: "Frontend Developer",
        company: "Frontend Masters",
        period: "Feb 2017 - Jun 2018",
        details: "Specialized in building interactive front-end features and user interfaces with modern JavaScript frameworks."
      },
      {
        title: "Backend Developer",
        company: "Backend Solutions",
        period: "Mar 2016 - Jan 2017",
        details: "Designed and built REST APIs using Node.js and MongoDB."
      },
      {
        title: "Junior Developer",
        company: "DevStart",
        period: "Jun 2015 - Feb 2016",
        details: "Assisted senior developers with bug fixes and feature additions."
      },
      {
        title: "Intern Developer",
        company: "Tech Interns",
        period: "Jan 2015 - May 2015",
        details: "Learned front-end development with a focus on HTML, CSS, and JavaScript."
      },
      {
        title: "Project Manager",
        company: "ProjectMasters",
        period: "Feb 2022 - Present",
        details: "Managing client projects and ensuring timely delivery."
      }
    ]
  ];

  const [selectedJob, setSelectedJob] = useState(null); // State to track selected job
  const [currentSection, setCurrentSection] = useState(0); // State to track the current section
  const [dotIndex, setDotIndex] = useState(0); // State for the current dot index (section indicator)

  const openModal = (job) => {
    setSelectedJob(job); // Set selected job to open in modal
  };

  const closeModal = () => {
    setSelectedJob(null); // Close the modal by resetting the selected job
  };

  const handleScroll = () => {
    const sectionHeight = window.innerHeight;
    const scrollY = window.scrollY;
    const sectionIndex = Math.floor(scrollY / sectionHeight);
    setCurrentSection(sectionIndex);
    setDotIndex(sectionIndex);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* Dots Indicator */}
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2">
        {sections[0].map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-500 ${
              dotIndex === index ? "bg-blue-600 scale-150" : "bg-gray-400"
            }`}
          />
        ))}
      </div>

      {/* Job Cards */}
      <div className="space-y-12">
        {sections[0].map((job, index) => (
          <div
            key={index}
            className={`bg-white shadow-2xl p-10 rounded-xl max-w-3xl mx-auto text-center cursor-pointer transition-all duration-300 transform hover:scale-105 opacity-0 transition-opacity duration-1000 ${
              currentSection === index ? "opacity-100" : "opacity-0"
            }`}
            onClick={() => openModal(job)} // Open modal when clicked
          >
            <h3 className="text-3xl font-bold text-blue-700">{job.title}</h3>
            <p className="text-lg text-gray-600">{job.company}</p>
            <p className="text-lg text-gray-500">{job.period}</p>
            <p className="mt-4 text-lg text-gray-700">{job.details}</p>
          </div>
        ))}
      </div>

      {/* Modal for showing job details */}
      {selectedJob && (
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white p-10 rounded-xl max-w-3xl mx-auto transition-transform transform scale-0 opacity-0 animate-modal"
            onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside modal
          >
            <h3 className="text-3xl font-bold text-blue-700">{selectedJob.title}</h3>
            <p className="text-lg text-gray-600">{selectedJob.company}</p>
            <p className="text-lg text-gray-500">{selectedJob.period}</p>
            <p className="mt-4 text-lg text-gray-700">{selectedJob.details}</p>
            <button
              className="mt-6 px-4 py-2 bg-red-500 text-white rounded-full"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainPage;
