// src/pages/TermsOfService.jsx
import React, { useEffect } from 'react';

import '../styles/TermsOfService.css';

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="terms-service">
      <div className="terms-service__container">


        {/* Header */}
        <div className="terms-service__header">
          <span className="terms-service__badge">Legal</span>
          <h1>Terms of Service</h1>
          <p className="terms-service__date">Effective Date: July 3, 2026</p>
          <div className="terms-service__line"></div>
        </div>

        {/* Content */}
        <div className="terms-service__content">
          <p className="terms-service__intro">
            Welcome to <strong>KXBYTE</strong>.
          </p>
          <p>
            Thank you for choosing KXBYTE. These Terms of Service ("Terms") govern your access to 
            and use of our website, products, software, and professional services. By accessing our 
            website or engaging us for a project, you agree to these Terms.
          </p>
          <p>
            Our goal is to build long-lasting relationships based on transparency, trust, and 
            professionalism. These Terms simply explain what you can expect from us—and what we 
            expect from you.
          </p>

          {/* Section */}
          <section className="terms-section">
            <h2>About KXBYTE</h2>
            <p>
              KXBYTE is a technology company that designs and develops digital solutions for 
              businesses, organizations, startups, and individuals.
            </p>
            <p>Our services include:</p>
            <ul className="terms-list">
              <li>Custom Software Development</li>
              <li>Website Design & Development</li>
              <li>Mobile Application Development</li>
              <li>UI/UX Design</li>
              <li>Branding & Graphic Design</li>
              <li>Search Engine Optimization (SEO)</li>
              <li>API Development & Integration</li>
              <li>Cloud Solutions</li>
              <li>Technical Consulting</li>
              <li>Software Maintenance & Technical Support</li>
            </ul>
            <p>
              We reserve the right to expand, modify, or discontinue services as our business evolves.
            </p>
          </section>

          {/* Section */}
          <section className="terms-section">
            <h2>Acceptance of These Terms</h2>
            <p>
              By using our website or purchasing any of our services, you acknowledge that you have 
              read, understood, and agreed to these Terms.
            </p>
            <p>
              If you do not agree with these Terms, please refrain from using our website or services.
            </p>
          </section>

          {/* Section */}
          <section className="terms-section">
            <h2>Use of Our Website</h2>
            <p>You agree to use our website responsibly and lawfully.</p>
            <p>You must not:</p>
            <ul className="terms-list">
              <li>Attempt to gain unauthorized access to our systems.</li>
              <li>Distribute malware, viruses, or harmful software.</li>
              <li>Use automated tools to scrape or copy our content without permission.</li>
              <li>Disrupt or interfere with the operation of our website.</li>
              <li>Misrepresent yourself or impersonate another person or organization.</li>
              <li>Use our services for illegal or fraudulent purposes.</li>
            </ul>
            <p>We reserve the right to suspend access to anyone who violates these Terms.</p>
          </section>

          {/* Section */}
          <section className="terms-section">
            <h2>Project Engagement</h2>
            <p>Before work begins, we may require:</p>
            <ul className="terms-list">
              <li>A written agreement or proposal.</li>
              <li>Approval of project scope.</li>
              <li>A quotation or estimate.</li>
              <li>An agreed payment schedule.</li>
              <li>Required project materials from the client.</li>
            </ul>
            <p>
              Project timelines begin only after all required information and initial payments 
              (where applicable) have been received.
            </p>
          </section>

          {/* Section */}
          <section className="terms-section">
            <h2>Client Responsibilities</h2>
            <p>To help projects run smoothly, clients are responsible for:</p>
            <ul className="terms-list">
              <li>Providing accurate information.</li>
              <li>Supplying required content and assets.</li>
              <li>Reviewing deliverables within agreed timelines.</li>
              <li>Giving timely feedback.</li>
              <li>Ensuring they have permission to use any content they provide.</li>
            </ul>
            <p>Delays in communication or approvals may affect project timelines.</p>
          </section>

          {/* Section */}
          <section className="terms-section">
            <h2>Payments</h2>
            <p>Payment terms are outlined in each project proposal or agreement.</p>
            <p>Unless otherwise agreed:</p>
            <ul className="terms-list">
              <li>Payments should be made according to the agreed schedule.</li>
              <li>Deposits may be required before work begins.</li>
              <li>Outstanding balances should be settled upon project completion.</li>
              <li>Late payments may result in delays, suspension of work, or delayed delivery.</li>
            </ul>
            <p>
              Any applicable taxes, transfer charges, or transaction fees remain the client's 
              responsibility unless stated otherwise.
            </p>
          </section>

          {/* Section */}
          <section className="terms-section">
            <h2>Changes to Project Scope</h2>
            <p>
              Software projects naturally evolve, but significant changes may require additional work.
            </p>
            <p>
              If a client requests features or requirements beyond the originally agreed scope, 
              KXBYTE may:
            </p>
            <ul className="terms-list">
              <li>Revise the timeline.</li>
              <li>Adjust project pricing.</li>
              <li>Issue a new quotation.</li>
              <li>Create a separate project phase.</li>
            </ul>
            <p>No additional work will begin until both parties agree.</p>
          </section>

          {/* Section */}
          <section className="terms-section">
            <h2>Intellectual Property</h2>
            <p>Unless otherwise agreed in writing:</p>
            <ul className="terms-list">
              <li>
                Clients retain ownership of content, logos, branding materials, and data they provide.
              </li>
              <li>
                Upon full payment, ownership of the final deliverables transfers to the client.
              </li>
              <li>
                KXBYTE retains ownership of its internal tools, reusable frameworks, libraries, 
                methodologies, templates, and development processes.
              </li>
            </ul>
            <p>
              We may reuse our general technical knowledge and experience gained from projects, 
              but never confidential client information.
            </p>
          </section>

          {/* Section */}
          <section className="terms-section">
            <h2>Portfolio Rights</h2>
            <p>We are proud of the work we create.</p>
            <p>
              Unless restricted by a confidentiality agreement or requested otherwise by the client, 
              KXBYTE may showcase completed projects in our:
            </p>
            <ul className="terms-list">
              <li>Portfolio</li>
              <li>Website</li>
              <li>Social media</li>
              <li>Presentations</li>
              <li>Marketing materials</li>
            </ul>
            <p>
              We will not publicly share confidential information or unpublished work without permission.
            </p>
          </section>

          {/* Section */}
          <section className="terms-section">
            <h2>Third-Party Services</h2>
            <p>Some projects rely on third-party platforms or services such as:</p>
            <ul className="terms-list">
              <li>Hosting providers</li>
              <li>Payment gateways</li>
              <li>Domain registrars</li>
              <li>Email providers</li>
              <li>Cloud platforms</li>
              <li>APIs</li>
              <li>Analytics services</li>
            </ul>
            <p>
              KXBYTE is not responsible for outages, pricing changes, policy updates, or service 
              interruptions caused by third-party providers.
            </p>
          </section>

          {/* Section */}
          <section className="terms-section">
            <h2>Maintenance and Support</h2>
            <p>
              Unless explicitly included in a project agreement, ongoing maintenance, updates, 
              monitoring, or technical support are not automatically included after project delivery.
            </p>
            <p>Support plans may be offered separately.</p>
          </section>

          {/* Section */}
          <section className="terms-section">
            <h2>Service Availability</h2>
            <p>We strive to provide reliable services, but we cannot guarantee uninterrupted availability.</p>
            <p>Occasionally, our website or systems may be unavailable due to:</p>
            <ul className="terms-list">
              <li>Scheduled maintenance</li>
              <li>Technical failures</li>
              <li>Internet disruptions</li>
              <li>Security incidents</li>
              <li>Circumstances beyond our control</li>
            </ul>
            <p>We will make reasonable efforts to restore services as quickly as possible.</p>
          </section>

          {/* Section */}
          <section className="terms-section">
            <h2>Limitation of Liability</h2>
            <p>
              While we work diligently to deliver high-quality solutions, KXBYTE cannot guarantee 
              that every service or software product will be completely free from defects or interruptions.
            </p>
            <p>
              To the fullest extent permitted by law, KXBYTE shall not be liable for indirect, 
              incidental, special, or consequential damages, including but not limited to:
            </p>
            <ul className="terms-list">
              <li>Loss of profits</li>
              <li>Business interruption</li>
              <li>Loss of data</li>
              <li>Loss of business opportunities</li>
              <li>Reputational damage</li>
            </ul>
            <p>
              Our total liability relating to a specific project will not exceed the amount paid 
              by the client for that project, unless otherwise required by applicable law.
            </p>
          </section>

          {/* Section */}
          <section className="terms-section">
            <h2>Warranties</h2>
            <p>We provide our services professionally and with reasonable care.</p>
            <p>
              However, except where required by law, services are provided "as available" and "as is," 
              without guarantees that they will meet every expectation or remain error-free indefinitely.
            </p>
          </section>

          {/* Section */}
          <section className="terms-section">
            <h2>Confidentiality</h2>
            <p>
              Both KXBYTE and our clients agree to respect confidential information shared during a project.
            </p>
            <p>
              Confidential information includes business strategies, technical documentation, 
              credentials, proprietary processes, source code, financial information, and any 
              information clearly identified as confidential.
            </p>
            <p>This obligation continues even after a project has been completed.</p>
          </section>

          {/* Section */}
          <section className="terms-section">
            <h2>Termination</h2>
            <p>Either party may terminate a project under agreed conditions.</p>
            <p>If termination occurs:</p>
            <ul className="terms-list">
              <li>The client will pay for work completed up to the termination date.</li>
              <li>Completed deliverables corresponding to paid work will be provided where applicable.</li>
              <li>Outstanding invoices remain payable.</li>
            </ul>
            <p>
              KXBYTE reserves the right to terminate services if these Terms are violated or if 
              unlawful activity is detected.
            </p>
          </section>

          {/* Section */}
          <section className="terms-section">
            <h2>Governing Law</h2>
            <p>
              These Terms shall be governed by and interpreted in accordance with the laws applicable 
              in the jurisdiction where KXBYTE operates, unless otherwise agreed in writing between 
              both parties.
            </p>
          </section>

          {/* Section */}
          <section className="terms-section">
            <h2>Changes to These Terms</h2>
            <p>
              We may update these Terms from time to time to reflect changes in our business, services, 
              or legal requirements.
            </p>
            <p>
              When significant updates are made, we will revise the Effective Date at the top of this page.
            </p>
            <p>
              Continued use of our website or services after updates constitutes acceptance of the 
              revised Terms.
            </p>
          </section>

          {/* Section */}
          <section className="terms-section">
            <h2>Contact Us</h2>
            <p>
              If you have questions about these Terms or any of our services, we'd be happy to help.
            </p>
            <div className="terms-contact">
              <p><strong>KXBYTE</strong></p>
              <p>Email: <a href="mailto:kxbyte.tech@gmail.com">kxbyte.tech@gmail.com</a></p>
              <p>Website: <a href="https://kxbyte.co.ke">https://kxbyte.co.ke</a></p>
            </div>
          </section>

          {/* Final Note */}
          <section className="terms-section terms-final">
            <div className="terms-final-note">
              <h2>Thank You</h2>
              <p>
                At KXBYTE, we value every client relationship. Whether we're building a simple 
                website or a complex software platform, our commitment remains the same: deliver 
                reliable solutions, communicate openly, and build technology that creates lasting value.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;