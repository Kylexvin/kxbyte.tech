// src/pages/PrivacyPolicy.jsx
import React, { useEffect } from 'react';
import '../styles/PrivacyPolicy.css';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="privacy-policy">
      <div className="privacy-policy__container">


        {/* Header */}
        <div className="privacy-policy__header">
          <span className="privacy-policy__badge">Legal</span>
          <h1>Privacy Policy</h1>
          <p className="privacy-policy__date">Effective Date: July 3, 2026</p>
          <div className="privacy-policy__line"></div>
        </div>

        {/* Content */}
        <div className="privacy-policy__content">
          <p className="privacy-policy__intro">
            Welcome to <strong>KXBYTE</strong>.
          </p>
          <p>
            At KXBYTE, we believe privacy is a fundamental right. Whether you're browsing our website, 
            contacting us about a project, or using software we've built, we are committed to handling 
            your personal information responsibly, transparently, and securely.
          </p>
          <p>
            This Privacy Policy explains what information we collect, why we collect it, how we use it, 
            and the choices you have regarding your information.
          </p>
          <p>
            By using our website or services, you agree to the practices described in this Privacy Policy.
          </p>

          {/* Section */}
          <section className="privacy-section">
            <h2>Who We Are</h2>
            <p>
              KXBYTE is a technology company specializing in designing and building digital solutions 
              that solve real-world problems.
            </p>
            <p>Our services include, but are not limited to:</p>
            <ul className="privacy-list">
              <li>Custom Software Development</li>
              <li>Website Design & Development</li>
              <li>Mobile Application Development</li>
              <li>UI/UX Design</li>
              <li>Branding & Graphic Design</li>
              <li>Search Engine Optimization (SEO)</li>
              <li>API Development & Integration</li>
              <li>Cloud Solutions</li>
              <li>Technical Consulting</li>
              <li>Software Maintenance & Support</li>
            </ul>
            <p>Our mission is simple: build reliable technology that helps businesses grow.</p>
          </section>

          {/* Section */}
          <section className="privacy-section">
            <h2>Information We Collect</h2>
            <p>Depending on how you interact with us, we may collect different types of information.</p>

            <h3>Personal Information</h3>
            <p>When you contact us or request our services, we may collect:</p>
            <ul className="privacy-list">
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Company or organization name</li>
              <li>Country or location</li>
              <li>Job title (where applicable)</li>
            </ul>
            <p>This information helps us communicate with you and provide our services.</p>

            <h3>Project Information</h3>
            <p>If you hire us, we may receive information related to your project such as:</p>
            <ul className="privacy-list">
              <li>Business requirements</li>
              <li>Technical documentation</li>
              <li>Brand assets</li>
              <li>Logos</li>
              <li>Images</li>
              <li>Content</li>
              <li>Existing source code</li>
              <li>Design files</li>
              <li>API credentials (only when necessary)</li>
            </ul>
            <p>All client information is treated as confidential.</p>

            <h3>Technical Information</h3>
            <p>Whenever you visit our website, certain technical information may be collected automatically, including:</p>
            <ul className="privacy-list">
              <li>IP address</li>
              <li>Browser type</li>
              <li>Operating system</li>
              <li>Device information</li>
              <li>Screen resolution</li>
              <li>Pages visited</li>
              <li>Time spent on pages</li>
              <li>Referral source</li>
              <li>Date and time of visits</li>
            </ul>
            <p>This helps us understand how visitors use our website and improve user experience.</p>

            <h3>Cookies</h3>
            <p>Our website may use cookies and similar technologies to:</p>
            <ul className="privacy-list">
              <li>Remember your preferences</li>
              <li>Improve website performance</li>
              <li>Analyze website traffic</li>
              <li>Understand visitor behavior</li>
              <li>Enhance security</li>
            </ul>
            <p>
              You can disable cookies through your browser settings, although some website features 
              may not function properly afterward.
            </p>
          </section>

          {/* Section */}
          <section className="privacy-section">
            <h2>How We Use Your Information</h2>
            <p>We only collect information that helps us provide better services.</p>
            <p>Your information may be used to:</p>
            <ul className="privacy-list">
              <li>Respond to inquiries</li>
              <li>Prepare quotations and proposals</li>
              <li>Deliver software development services</li>
              <li>Improve our website</li>
              <li>Improve customer support</li>
              <li>Communicate project updates</li>
              <li>Send invoices</li>
              <li>Process payments</li>
              <li>Maintain security</li>
              <li>Detect fraud</li>
              <li>Comply with legal obligations</li>
            </ul>
            <p>We do not collect information simply because we can.</p>
          </section>

          {/* Section */}
          <section className="privacy-section">
            <h2>How We Protect Your Information</h2>
            <p>Protecting client information is one of our highest priorities.</p>
            <p>We use appropriate technical and organizational measures, including:</p>
            <ul className="privacy-list">
              <li>Secure servers</li>
              <li>Encrypted connections (HTTPS)</li>
              <li>Password protection</li>
              <li>Access controls</li>
              <li>Regular software updates</li>
              <li>Secure cloud infrastructure</li>
              <li>Limited access to confidential data</li>
            </ul>
            <p>
              While no online system is completely immune from security risks, we continuously work 
              to protect the information entrusted to us.
            </p>
          </section>

          {/* Section */}
          <section className="privacy-section">
            <h2>Sharing Your Information</h2>
            <p>
              We do <strong>not</strong> sell, rent, or trade your personal information.
            </p>
            <p>
              In limited situations, information may be shared with trusted service providers that 
              help us operate our business, such as:
            </p>
            <ul className="privacy-list">
              <li>Cloud hosting providers</li>
              <li>Domain registrars</li>
              <li>Payment processors</li>
              <li>Email service providers</li>
              <li>Analytics platforms</li>
            </ul>
            <p>
              These providers only receive the information necessary to perform their services and 
              are expected to protect your information appropriately.
            </p>
            <p>We may also disclose information if required by law or to protect our legal rights.</p>
          </section>

          {/* Section */}
          <section className="privacy-section">
            <h2>Third-Party Services</h2>
            <p>
              Our website or software may integrate with third-party services, including but not limited to:
            </p>
            <ul className="privacy-list">
              <li>Google services</li>
              <li>Microsoft services</li>
              <li>GitHub</li>
              <li>Payment gateways</li>
              <li>Social media platforms</li>
              <li>Cloud infrastructure providers</li>
              <li>Authentication providers</li>
            </ul>
            <p>
              These services operate under their own privacy policies, and we encourage users to 
              review them before providing personal information.
            </p>
          </section>

          {/* Section */}
          <section className="privacy-section">
            <h2>Client Data</h2>
            <p>
              When building software for clients, KXBYTE acts as a technology service provider.
            </p>
            <p>Any customer data stored within client systems belongs entirely to the respective client.</p>
            <p>We do not access, modify, or use client data unless:</p>
            <ul className="privacy-list">
              <li>Requested by the client</li>
              <li>Required for maintenance</li>
              <li>Required for troubleshooting</li>
              <li>Required to fulfill contractual obligations</li>
            </ul>
          </section>

          {/* Section */}
          <section className="privacy-section">
            <h2>Data Retention</h2>
            <p>We retain information only for as long as necessary.</p>
            <p>The retention period depends on:</p>
            <ul className="privacy-list">
              <li>Active projects</li>
              <li>Legal obligations</li>
              <li>Accounting requirements</li>
              <li>Customer support needs</li>
              <li>Security requirements</li>
            </ul>
            <p>
              When information is no longer needed, we securely delete or anonymize it where 
              reasonably possible.
            </p>
          </section>

          {/* Section */}
          <section className="privacy-section">
            <h2>International Users</h2>
            <p>KXBYTE works with clients from different countries.</p>
            <p>
              By using our services, you understand that your information may be processed in 
              countries where our hosting providers, cloud services, or technical infrastructure 
              are located.
            </p>
            <p>
              Regardless of where processing occurs, we aim to maintain appropriate safeguards 
              for your information.
            </p>
          </section>

          {/* Section */}
          <section className="privacy-section">
            <h2>Your Rights</h2>
            <p>Depending on your location and applicable laws, you may have the right to:</p>
            <ul className="privacy-list">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Restrict certain processing activities</li>
              <li>Object to specific uses of your information</li>
              <li>Request a copy of your personal data</li>
              <li>Withdraw consent where consent is the basis for processing</li>
            </ul>
            <p>If you would like to exercise any of these rights, please contact us.</p>
          </section>

          {/* Section */}
          <section className="privacy-section">
            <h2>Children's Privacy</h2>
            <p>
              Our services are intended for individuals aged 18 and above or those legally able 
              to enter into agreements.
            </p>
            <p>We do not knowingly collect personal information from children.</p>
            <p>
              If we discover that personal information belonging to a child has been submitted 
              without appropriate authorization, we will take reasonable steps to remove it.
            </p>
          </section>

          {/* Section */}
          <section className="privacy-section">
            <h2>Marketing Communications</h2>
            <p>From time to time, we may send:</p>
            <ul className="privacy-list">
              <li>Product updates</li>
              <li>Service announcements</li>
              <li>Company news</li>
              <li>Educational content</li>
              <li>Special offers</li>
            </ul>
            <p>
              You may unsubscribe from marketing communications at any time using the unsubscribe 
              option provided or by contacting us directly.
            </p>
          </section>

          {/* Section */}
          <section className="privacy-section">
            <h2>Confidentiality</h2>
            <p>Every project entrusted to KXBYTE is treated with professionalism and discretion.</p>
            <p>
              Unless we receive your permission, confidential project information will never be 
              publicly shared.
            </p>
            <p>
              We respect intellectual property, trade secrets, and client confidentiality throughout 
              every stage of a project.
            </p>
          </section>

          {/* Section */}
          <section className="privacy-section">
            <h2>Changes to This Privacy Policy</h2>
            <p>Technology and privacy regulations continue to evolve.</p>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our services, 
              legal requirements, or operational practices.
            </p>
            <p>
              When significant updates are made, we will revise the Effective Date at the top of this page.
            </p>
            <p>We encourage users to review this page periodically to stay informed.</p>
          </section>

          {/* Section */}
          <section className="privacy-section">
            <h2>Contact Us</h2>
            <p>If you have any questions about this Privacy Policy or how your information is handled, please contact us.</p>
            <div className="privacy-contact">
              <p><strong>KXBYTE</strong></p>
              <p>Email: <a href="mailto:kxbyte.tech@gmail.com">kxbyte.tech@gmail.com</a></p>
              <p>Website: <a href="https://kxbyte.co.ke">https://kxbyte.co.ke</a></p>
            </div>
            <p>We are committed to addressing your questions promptly and transparently.</p>
          </section>

          {/* Final Note */}
          <section className="privacy-section privacy-final">
            <div className="privacy-final-note">
              <h2>Final Note</h2>
              <p>
                Trust is the foundation of every successful partnership.
              </p>
              <p>
                Whether you're a startup, business, organization, or individual, you can expect 
                KXBYTE to handle your information with care, integrity, and respect. We believe 
                privacy isn't just about compliance—it's about earning and keeping your confidence 
                every day.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;