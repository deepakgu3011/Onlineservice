import React,{useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const imageStyle = {
  width: '-webkit-fill-available',
  margintop: '2rem',
  borderRadius: '8px',
};
const webName = "Online Services";
  const webNamestyle = {
    color: "red",
  };
const body = {
  fontFamily: 'Arial, sans-serif',
  color: '#333',
  padding: '20px',
  margin: '0 auto',
  maxWidth: '1200px',
}
const button = {
  backgroundColor: '#4CAF50',
  color: 'white',
  padding: '10px 20px',
  borderRadius: '8px',
  border: 'none',
  cursor: 'pointer',
  fontSize: '16px',
  transition: 'background-color 0.3s ease',
}
const services = [
  {
    title: 'Voter ID Card',
    image: '/images/voter-card.png',
    description: `A Voter ID card (EPIC) is issued by the Election Commission of India. It serves as identity proof and enables Indian citizens to vote in elections. It contains name, gender, DOB, photo, EPIC number, and constituency.......`,
  },
  {
    title: 'PAN Card',
    image: '/images/pan-card.png',
    description: `Apply for an Instant PAN card online. It is required for filing taxes, opening bank accounts, and other financial transactions. Available for individuals and businesses......`,
  },
  {
    title: 'Residence Certificate',
    image: '/images/residence.png',
    description: `Obtain an official residence certificate quickly and easily. It serves as address proof and is required for school admissions, government schemes, and job applications.........`,
  },
];

export default function WelcomePage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8" style={body}>
      <div className="text-center mb-12 px-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-4">
          Welcome to Online Service Portal
        </h1>
        <p className="text-md sm:text-lg text-gray-600">
          Apply for essential government documents from the comfort of your home.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-2 sm:px-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-transform transform hover:-translate-y-1"
          >
            <div className="p-5 flex flex-col justify-between h-full">
              <h3 className="text-lg sm:text-xl font-semibold text-blue-800 mb-2">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                {service.description}
              <div data-aos="fade-right">  <img
                  alt={service.title}
                  src={service.image}
                  style={imageStyle}
                  className="w-50 h-48 sm:h-56 md:h-60 lg:h-64 object-cover"
                />
                </div>
              </p>
              <button
  className="w-fit bg-blue-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-700 transition"
  style={button}
  onClick={() => {
    const confirmed = window.confirm(`Read more about ${service.title}?`);
    if (confirmed) {
      alert(`You chose to read more about ${service.title}`);
      const slug = service.title; 
      window.location.href = `/services`;    } 
  }}
>
  Read More...
</button>


            </div>
          </div>
        ))}
      </div>
      <blockquote style={{ fontStyle: "italic", color: "#666" }}>
      Disclaimer: <a href="/"><span style={webNamestyle}>{webName}</span> </a>is not affiliated with any official government agency. We only assist users in the application and form submission process through our secure platform.
      </blockquote>
    </div>
  );
}
