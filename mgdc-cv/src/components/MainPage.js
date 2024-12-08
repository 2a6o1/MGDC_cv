import React, { useState } from "react";
import img2 from '../../src/img/premio-diamante.png'
import img1 from '../../src/img/premio-ganador.png'

const MainPage = () => {
  const jobs = [
    {
      title: "IT Assistant",
      company: "Universidad La Salle Bajío",
      period: "2023 - Present",
      details: "Provides technical support and troubleshooting for hardware, software, and network-related issues.",
      moreDetail: "Collaborated with cross-functional teams and mentors junior developers to improve their skills."
    },
    {
      title: "IT consulting coordinator",
      company: "Grupo Inndex (IT Development and solutions)",
      period: "2022 - 2023",
      details: "Manages client relationships, coordinates IT consulting projects, and ensures effective communication and customer service throughout the process.",
      moreDetail: "Worked in an agile environment and participated in daily standups, sprint planning, and reviews."
    },
    {
      title: "Customer and supplier service",
      company: "Isana Health",
      period: "2022 - 2022",
      details: "Manages relationships with both customers and suppliers, ensuring smooth communication, timely support, and efficient resolution of issues for both parties.",
      moreDetail: "Sales, control and storage of medication, billing, maintenance and installation of hardware."
    },
    {
      title: "Hewlett Packard Latin America Warranty Advisor ",
      company: "Servicios Integrales, S. De R.L. de C.V. / TTEC CX Solutions México S.A. de C.V.",
      period: "2014 - 2015 / 2016 - 2022",
      details: "Assists customers with warranty claims, provides information on coverage, and helps facilitate the repair or replacement of products under warranty.",
      moreDetail: `5th Position: Warranty complaints advisor and trainer from Hewlett Packard Latin America.
4th Position: Technical mentor assistant for training and resolution of doubts of agents technical support from Hewlett Packard and Samsung.
3rd Position: Telephone Technical Support Advisor, customer service and sales of the warranty area Hewlett Packard Latin America.
2nd Position: Aux. mentor and healthcare trainer customer.
1st Position: Customer Service Telephone Advisor Hewlett Packard Latin America guarantees.`
    },
    {
      title: "Counter, sales and warehouse executive",
      company: "Global GOG Group, S.A. de C.V (DHL Express México S.A. de C.V.)",
      period: "2015 - 2016",
      details: "Manages customer transactions at the counter, drives sales, and oversees inventory and stock management in the warehouse.",

    },
    {
      title: "Aux. Warehouse, sales and administrative",
      company: "Grocery and cosmetics store",
      period: "2011 - 2012",
      details: "Aux. Warehouse, sales and administrative, Aguascalientes, Aguascalientes",
    },
    {
      title: "Aux. Warehouse, sales and administrative",
      company: "Ciber café Loma Bonita",
      period: "2011 - 2012",
      details: "Aux. Warehouse, sales and administrative, Aguascalientes, Aguascalientes",
    },
  ];

  const skills = [
    "Microsoft Word",
    "Microsoft Power Point",
    "Microsoft Excel",
    "Microsoft Publisher",
    "Corel Draw",
    "AutoCad",
    "Macromedia",
    "AdminPAQ",
    "ContPAQ Contabilidad",
    "ContPAQ Bancos",
    "ContPAQ Nóminas",
    "Facturación Electrónica (SUA)",
  ];

  const generalKnowledge = [
    {
      title: "2020 - 2023 | Universidad Virtual del Estado de Guanajuato (UVEG)",
      items: ["Engineering in Management of Information Technologies", "Professional Practices at the Institute of Criminal Behavior Research and Study A.C.", "Course on Social Media Advertising"],
    },
    {
      title: "2019 | American World Languajes (IVEI)",
      items: ["Accounting Diploma"],
    },
    {
      title: "2013 - 2014 | CBTis No- 225 “Diego Rivera”",
      items: ["Servicio social en Escuela Primaria León 400", "Prácticas profesionales en CBTIS 225.", "Certificado de Bachillerato Técnico en Programación"],
    },
  ];

  const aptitudes = ["Problem Solving", "Critical Thinking", "Time Management", "Team Collaboration", "Adaptability"];

  const [selectedJob, setSelectedJob] = useState(null);

  const openModal = (job) => setSelectedJob(job);
  const closeModal = () => setSelectedJob(null);

  return (
    <div className="flex flex-col lg:flex-row h-auto lg:h-screen">
      {/* Left Section: Personal Info */}
      <div className="w-full lg:w-1/3 bg-purple-400 text-white p-8 flex flex-col items-center relative">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="rounded-full mb-6 w-32 h-32 object-cover border-4 border-white"
        />
        <h1 className="text-2xl font-bold mb-4">María Guadalupe
          Díaz Castañeda</h1>
        <p className="text-center mb-6">
          Software Engineer with 7+ years of experience in building scalable web applications and managing development teams.
        </p>
        <div className="text-left w-full">
          <h2 className="text-lg font-semibold mb-2">Contact</h2>
          <p>Email: guadalupediaztt@gmail.com</p>
          <p>Phone: +52 477 444 3844</p>
          <p>Location: León, Gto.</p>
        </div>

        {/* Knowledge Section */}
        <div className="mt-6 text-left w-full max-h-96 overflow-y-auto p-4 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-100">General Knowledge</h3>
          <ul className="list-disc list-inside text-gray-300">
            <li>English: Basic-Intermediate</li>
            <li>Proficient in using Computers, Printers, Scanners, and Banking Terminals</li>
            <li>Social Media Management</li>
            <li>Knowledge in Inventory Management and Panamericano Procedures</li>
          </ul>
        </div>

        {/* Aptitudes Section */}
        <div className="mt-6 text-left w-full max-h-64 overflow-y-auto p-4 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-100">Aptitudes</h3>
          <ul className="list-disc list-inside text-gray-300">
            <li>Honest</li>
            <li>Empathetic</li>
            <li>Punctual</li>
            <li>Dynamic</li>
            <li>Respectful</li>
            <li>Responsible</li>
            <li>Leader</li>
            <li>Observant</li>
            <li>Multitasker</li>
            <li>Fast</li>
            <li>Learner</li>
          </ul>
        </div>


        {/* Social Media Buttons */}
        <div className="mt-6 flex justify-center gap-4">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-500 hover:bg-purple-600 text-white w-10 h-10 flex justify-center items-center rounded-full shadow-md"
          >
            <i className="fab fa-linkedin-in text-xl"></i>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 hover:bg-gray-900 text-white w-10 h-10 flex justify-center items-center rounded-full shadow-md"
          >
            <i className="fab fa-github text-xl"></i>
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-500 hover:bg-pink-600 text-white w-10 h-10 flex justify-center items-center rounded-full shadow-md"
          >
            <i className="fab fa-instagram text-xl"></i>
          </a>
        </div>

        {/* Developed by Maria Diaz */}
        <div className="absolute bottom-4 left-0 right-0 text-center text-sm text-gray-300">
          <p>Developed by Maria Diaz</p>
        </div>
      </div>

      {/* Right Section: Jobs & Skills */}
      <div className="w-full lg:w-2/3 p-8 overflow-y-auto">
        {/* Job Section */}
        <h2 className="text-3xl font-bold mb-6">Work Experience</h2>
        <h2 className="text-1xl font-bold mb-6">Click on the card for more details!</h2>
        <div className="space-y-8">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="bg-white shadow-md p-6 rounded-lg cursor-pointer hover:shadow-lg transition duration-300"
              onClick={() => openModal(job)}
            >
              <h3 className="text-xl font-semibold text-purple-700">{job.title}</h3>
              <p className="text-gray-600">{job.company}</p>
              <p className="text-gray-500">{job.period}</p>
              <p className="mt-2 text-gray-700">{job.details}</p>
            </div>
          ))}
        </div>

        {/* Skills Section */}
        <h2 className="text-3xl font-bold mt-12 mb-6">Skills</h2>
        <div className="flex flex-wrap gap-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* General Knowledge Section */}
        <h2 className="text-3xl font-bold mt-12 mb-6">Academic Record</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {generalKnowledge.map((knowledge, index) => (
            <div key={index} className="bg-white shadow-md p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-purple-700 mb-4">{knowledge.title}</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {knowledge.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Recognitions and Acknowledgements Section */}
        <div className="mt-8 w-full">
          <h3 className="text-xl font-semibold text-purple-600">Recognitions and Acknowledgements</h3>

          {/* Item 1 */}
          <div className="flex items-center mt-6">
            <img src={img1} alt="Recognition 1" className="w-1/4 h-auto rounded-lg mr-6" />
            <div className="flex-1 text-grey-500">
              <h4 className="text-lg font-semibold text-purple-800">Software Development Contest | State of Guanajuato - 2014</h4>
              <p>Sign Language Interpreter Software Prototype for People with Disabilities.</p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-center mt-6 flex-row-reverse">
            <img src={img2} alt="Recognition 2" className="w-1/4 h-auto rounded-lg ml-6" />
            <div className="flex-1 text-grey-500">
              <h4 className="text-lg font-semibold text-purple-800">Corporate Recognition from Hewlett Packard Costa Rica | Hewlett Packard - 201</h4>
              <p>Outstanding Performance and Exceptional Customer Service.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Job Details */}
      {selectedJob && (
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white p-8 rounded-lg max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold text-purple-700">{selectedJob.title}</h3>
            <p className="text-gray-600">{selectedJob.company}</p>
            <p className="text-gray-500">{selectedJob.period}</p>
            <p className="mt-4 text-gray-700">{selectedJob.details}</p>
            <p className="mt-4 text-gray-700 font-semibold">{selectedJob.moreDetail}</p>
            <button
              onClick={closeModal}
              className="mt-6 bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full"
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
