import React from "react";

const PrivacyPolicy = () => {

    const body={
        fontFamily: 'Arial, sans-serif',
        color: '#333',
        padding: '20px',
        margin: '0 auto',
        maxWidth: '1200px',
        fontSize: '14px', // Reduced font size
    }
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
    const webName= "Online Services";
    const webNamestyle ={
        color:'red',
    }

  return (
    <div className="max-w-4xl mx-auto p-6 text-sm text-gray-700" style={body}>
      <h1 className="text-2xl font-bold mb-4">
        Privacy Policy for <span style={webNamestyle}>{webName}</span>
      </h1>
      <p className="mb-6">
        <strong>Effective Date:</strong> {formattedDate}
      </p>
      <p className="mb-6">
        Welcome to <span style={webNamestyle}>{webName}</span> ("we," "us," or "our"). We value your
        privacy and are committed to protecting your personal information. This
        Privacy Policy outlines how we collect, use, disclose, and safeguard
        your information when you visit our website and use our services.
      </p>
      <p className="mb-6 font-semibold">
        Disclaimer: <span style={webNamestyle}></span>{<span style={webNamestyle}>{webName}</span>} is a private platform offering services
        similar to government-related digital services, but it is not
        affiliated, associated, authorized, endorsed by, or in any way
        officially connected with any government body.
      </p>

      <hr className="my-6" />

      <h2 className="text-xl font-semibold mb-4">1. Information We Collect</h2>

      <h3 className="text-lg font-medium mb-2">1.1 Personal Information:</h3>
      <ul className="list-disc pl-6 mb-4">
        <li>Full Name</li>
        <li>Aadhaar Number</li>
        <li>Mobile Number</li>
        <li>Email Address</li>
        <li>Residential Address</li>
        <li>Date of Birth</li>
      </ul>

      <h3 className="text-lg font-medium mb-2">1.2 Device Information:</h3>
      <ul className="list-disc pl-6 mb-4">
        <li>IP Address</li>
        <li>Browser Type</li>
        <li>Operating System</li>
        <li>Device Type</li>
      </ul>

      <h3 className="text-lg font-medium mb-2">1.3 Usage Data:</h3>
      <ul className="list-disc pl-6 mb-4">
        <li>Pages visited</li>
        <li>Time spent on pages</li>
        <li>Click patterns</li>
      </ul>

      <h3 className="text-lg font-medium mb-2">1.4 Location Information:</h3>
      <p className="mb-6">GPS or IP-based location data (with user consent)</p>

      <h2 className="text-xl font-semibold mb-4">2. Data Encryption and Security</h2>
      <p className="mb-6">
        All sensitive personal information including Aadhaar numbers, mobile
        numbers, and addresses are encrypted using AES-256 encryption. We
        implement industry-standard security protocols:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>SSL/TLS encryption for all data transmission</li>
        <li>Encrypted database storage</li>
        <li>Access control and authentication mechanisms</li>
        <li>Regular security audits and penetration testing</li>
      </ul>
      <p className="mb-6">
        Despite our best efforts, no method of transmission over the internet is
        100% secure. Therefore, while we strive to protect your data, we cannot
        guarantee absolute security.
      </p>

      <h2 className="text-xl font-semibold mb-4">3. How We Use Your Information</h2>
      <ul className="list-disc pl-6 mb-6">
        <li>Provide services requested by you</li>
        <li>Verify your identity</li>
        <li>Process transactions and service requests</li>
        <li>Improve our website and user experience</li>
        <li>Comply with legal obligations</li>
        <li>Communicate updates and notifications</li>
      </ul>

      <h2 className="text-xl font-semibold mb-4">4. Sharing and Disclosure of Information</h2>
      <p className="mb-4">
        We do <strong>not</strong> sell your personal data. We may share data under the following
        circumstances:
      </p>
      <ul className="list-disc pl-6 mb-6">
        <li>
          <strong>With Service Providers:</strong> Trusted third parties that assist us in
          delivering our services
        </li>
        <li>
          <strong>For Legal Reasons:</strong> To comply with legal requirements or protect rights
        </li>
        <li>
          <strong>With Your Consent:</strong> In case of referrals or third-party integrations
        </li>
      </ul>

      <h2 className="text-xl font-semibold mb-4">5. Cookies and Tracking Technologies</h2>
      <p className="mb-4">
        We use cookies and similar technologies to:
      </p>
      <ul className="list-disc pl-6 mb-6">
        <li>Remember user preferences</li>
        <li>Analyze traffic and usage patterns</li>
        <li>Deliver targeted advertisements (if any)</li>
      </ul>
      <p className="mb-6">
        You can control or disable cookies through your browser settings.
      </p>

      <h2 className="text-xl font-semibold mb-4">6. User Rights and Controls</h2>
      <p className="mb-4">
        You have the right to:
      </p>
      <ul className="list-disc pl-6 mb-6">
        <li>Access the personal data we hold about you</li>
        <li>Request correction or deletion of your data</li>
        <li>Withdraw consent at any time</li>
        <li>Lodge a complaint with a data protection authority</li>
      </ul>
      <p className="mb-6">
        To exercise these rights, contact us at [Insert Contact Email].
      </p>

      <h2 className="text-xl font-semibold mb-4">7. Children’s Privacy</h2>
      <p className="mb-6">
        Our services are not intended for individuals under 18 years of age. We do not knowingly
        collect data from children.
      </p>

      <h2 className="text-xl font-semibold mb-4">8. Third-Party Links</h2>
      <p className="mb-6">
        Our website may contain links to third-party sites. We are not responsible for the privacy
        practices of such websites. Please review their policies separately.
      </p>

      <h2 className="text-xl font-semibold mb-4">9. Data Retention Policy</h2>
      <p className="mb-6">
        We retain personal data only as long as necessary to:
      </p>
      <ul className="list-disc pl-6 mb-6">
        <li>Fulfill service requests</li>
        <li>Comply with legal and regulatory obligations</li>
        <li>Resolve disputes and enforce our agreements</li>
      </ul>

      <h2 className="text-xl font-semibold mb-4">10. International Data Transfers</h2>
      <p className="mb-6">
        Your data may be stored and processed in countries other than your own. We ensure that such
        transfers are compliant with applicable data protection laws.
      </p>

      <h2 className="text-xl font-semibold mb-4">11. Changes to This Privacy Policy</h2>
      <p className="mb-6">
        We may update this policy from time to time. The updated version will be posted on this
        page with the effective date.
      </p>

      <h2 className="text-xl font-semibold mb-4">12. Contact Us</h2>
      <p className="mb-2">If you have any questions or concerns about this Privacy Policy, please contact us:</p>
      <ul className="list-disc pl-6 mb-6">
        <div><li>Email: <a href="mailto:phagwara.deepak33@gmail.com">{webName}</a></li></div>
        <li>
          <strong>Address:</strong> Chainpur Ward No. 5, Near Anganwadi Centre, Bihar – 841226
        </li>
      <div style={{ marginTop: "1rem" }}>
        <iframe
          title="Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2533.937991418305!2d84.87154038893698!3d26.08176984342145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3992cde5f00fd5fb%3A0xb0cc9bc0c48dc22c!2sAANGANWADI%20CODE%20128%20CHAINPUR%20WADR%2005!5e0!3m2!1sen!2sin!4v1748504068331!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      </ul>

      <p className="mb-6 font-semibold">
        By using our services, you consent to the terms of this Privacy Policy.
      </p>
      <blockquote style={{ fontStyle: "italic", color: "#666" }}>
      Disclaimer: <a href="/"><span style={webNamestyle}>{webName}</span> </a>is not affiliated with any official government agency. We only assist users in the application and form submission process through our secure platform.
      </blockquote>
    
    </div>
  );
};

export default PrivacyPolicy;
