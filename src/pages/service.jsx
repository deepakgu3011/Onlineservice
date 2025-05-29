import React, { useState, useEffect } from "react";

const ServicePage = () => {
    const webName = "Online Services";
    const webNamestyle = { color: "red" };

    // Helper to convert title to URL slug
    const toSlug = (text) =>
        text.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "");

    // Function to generate a simple unique ID string
    const generateUniqueId = () => {
        return (
            Date.now().toString(36) + Math.random().toString(36).substring(2, 8)
        );
    };

    // State for unique IDs mapped by service slug
    const [uniqueIds, setUniqueIds] = useState({});

    // Generate unique IDs once when component mounts
    useEffect(() => {
        const ids = {};
        services.forEach((service) => {
            ids[toSlug(service.title)] = generateUniqueId();
        });
        setUniqueIds(ids);
    }, []);

    const services = [
        {
            title: "Voter ID Application Assistance",
            description:
                "We guide you through the process of applying for your Voter ID, ensuring all forms are correctly filled.",
            baseUrl: "/contact",
            // add later url 
        },
        {
            title: "PAN Card Services",
            description:
                "Helping you apply for a PAN card quickly and accurately, with step-by-step instructions.",
            baseUrl: "/contact",
            // add later url 

        },
        {
            title: "Residence Certificate Forms",
            description:
                "Support in preparing and submitting your Residence Certificate applications hassle-free.",
            baseUrl: "/contact",
            // add later url 

        },
        {
            title: "Government Form Filling Help",
            description:
                "Assistance with various government forms to make the process smooth and error-free.",
            baseUrl: "/contact",
        },
        {
            title: "Other Citizen Services",
            description:
                "Additional services designed to simplify your interactions with government processes.",
            baseUrl: "/contact",
        },
    ];

    const [searchTerm, setSearchTerm] = useState("");

    const filteredServices = services.filter((service) =>
        service.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const composeUrl = (service) => {
        const slug = toSlug(service.title);
        if (service.baseUrl.startsWith("http")) {
            const uniqueId = uniqueIds[slug] || "default-id";
            return `${service.baseUrl}/${slug}/${uniqueId}`;
        } else {
            return service.baseUrl;
        }
    };

    const handleApplyClick = (service) => {
        const url = composeUrl(service);
        if (url.startsWith("http")) {
            window.open(url, "_blank");
        } else {
            window.location.href = url;
        }
    };

    const alert = {
        color: "red",
        display: "flex",
        alignItems: "center",
        marginTop: "1rem",
      };

    return (
        <div
            style={{
                padding: "2rem",
                fontFamily: "Arial, sans-serif",
                maxWidth: "800px",
                margin: "auto",
            }}
        >
            <h1>
                Our Services at <span style={webNamestyle}>{webName}</span>
            </h1>
            <p>
                At <span style={webNamestyle}>{webName}</span>, we are dedicated to providing easy access to
                a wide range of essential digital services to help you with your daily government-related needs.
            </p>

            <input
                type="text"
                placeholder="Search services by name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                    width: "100%",
                    padding: "10px",
                    marginBottom: "1.5rem",
                    fontSize: "1rem",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                }}
            />

            <div>
                {filteredServices.length > 0 ? (
                    filteredServices.map((service, index) => {
                        const url = composeUrl(service);
                        return (
                            <div key={index} style={{ marginBottom: "1.5rem" }}>
                                <h3 style={{ color: "darkred" }}>
                                    <a
                                        href={url}
                                        target={url.startsWith("http") ? "_blank" : "_self"}
                                        rel="noopener noreferrer"
                                        style={{ color: "darkred", textDecoration: "underline" }}
                                    >
                                        {service.title}
                                    </a>
                                </h3>
                                <p>{service.description}</p>
                                <div style={alert}>
                                    <img
                                        src="/images/alert.gif"
                                        alt=""
                                        style={{ width: '2rem', height: '2rem', verticalAlign: 'middle', marginRight: '8px' }}
                                    />
                                    <strong style={webNamestyle}>Note:</strong> You have to pay for the assistance.
                                </div>

                                <button
                                    style={{
                                        backgroundColor: "green",
                                        color: "white",
                                        padding: "10px 15px",
                                        borderRadius: "5px",
                                        border: "none",
                                        cursor: "pointer",
                                    }}
                                    onClick={() => handleApplyClick(service)}
                                >
                                    {url.startsWith("http" || "https")
                                        ? "Apply Online"
                                        : "Contact Us"}
                                </button>
                            </div>
                        );
                    })
                ) : (
                    <p>No services found matching "{searchTerm}".</p>
                )}
            </div>

            <p>
                For assistance with any of these services or if you have questions, feel free to{" "}
                <a href="/contact" style={{ color: "red", textDecoration: "underline" }}>
                    contact us
                </a>
                .
            </p>
        </div>
    );
};

export default ServicePage;
