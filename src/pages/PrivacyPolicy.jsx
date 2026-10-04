"use client";
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
        <div className="privacy-policy__header">
          <span className="privacy-policy__badge">Legal</span>
          <h1>Privacy Policy</h1>
          <p className="privacy-policy__date">
            Effective Date: January 1, 2025 · Last Updated: January 1, 2025
          </p>
          <div className="privacy-policy__line"></div>
        </div>

        <div className="privacy-policy__content">
          <p className="privacy-policy__intro">
            This Privacy Policy explains how <strong>KXBYTE</strong> collects,
            uses, stores, and protects information when you use our website,
            our software platform, and our products.
          </p>
          <p>
            KXBYTE operates a business software platform. That means two things:
            we run our own website and services, and we provide software that
            businesses use to run their own operations. This policy covers both.
          </p>
          <p>
            It also explains the roles clearly — because the data your business
            puts into our products isn't the same as the data we collect about
            you as a KXBYTE user.
          </p>

          {/* ── 1. Who we are ──────────────────────────────── */}
          <section className="privacy-section">
            <h2>Who we are</h2>
            <p>
              KXBYTE ("we", "us", "our") is a business technology company based
              in Nairobi, Kenya. We build and operate software products for
              businesses.
            </p>
            <p>This policy applies to:</p>
            <ul className="privacy-list">
              <li>
                <strong>The KXBYTE website</strong> — kxbyte.co.ke, and any
                related domains or subdomains
              </li>
              <li>
                <strong>KXBYTE Suite</strong> — our organization-level software
                platform
              </li>
              <li>
                <strong>Individual products</strong> — including KxTill, and
                any other products we build, operate, or make available
              </li>
              <li>
                <strong>Communications</strong> — email, SMS, WhatsApp, and
                in-app notifications we send or receive in connection with
                our services
              </li>
            </ul>
            <p>
              Throughout this policy, "Services" means all of the above.
            </p>
          </section>

          {/* ── 2. Two kinds of information ─────────────────── */}
          <section className="privacy-section">
            <h2>Two kinds of information</h2>
            <p>
              Because KXBYTE operates software that businesses use to run their
              own operations, information flows in two distinct directions.
              Understanding the difference matters.
            </p>

            <h3>1. Information about you, the KXBYTE user</h3>
            <p>
              This is information we collect when you visit our website, create
              an account, subscribe to a product, or contact us. It includes
              things like your name, email, organization details, and billing
              information. We collect this as the operator of the Services.
            </p>

            <h3>2. Information your business processes through our products</h3>
            <p>
              When your business uses KxTill (or any other KXBYTE product) to
              manage its own customers, sales, inventory, or staff, the data
              you enter belongs to <strong>your business</strong>, not to KXBYTE.
            </p>
            <p>
              For example: if a retail shop enters 3,000 of its customers into
              KxTill, those customer records belong to the shop. KXBYTE provides
              the infrastructure that stores and processes them, but does not
              own them and does not use them for our own purposes.
            </p>
            <p>
              This distinction shapes the entire policy below. In legal terms:
              for the data you enter into our products, <strong>your business
              is the controller</strong> and <strong>KXBYTE is the processor</strong>.
              For the data we collect directly through our website and account
              system, KXBYTE is the controller.
            </p>
          </section>

          {/* ── 3. Information we collect ──────────────────── */}
          <section className="privacy-section">
            <h2>Information we collect</h2>

            <h3>Account and organization information</h3>
            <p>When you create a KXBYTE account or use our Services, we collect:</p>
            <ul className="privacy-list">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Organization name and business details</li>
              <li>Country or location</li>
              <li>Role and permissions within an organization</li>
              <li>Authentication credentials (stored securely)</li>
            </ul>

            <h3>Billing and subscription information</h3>
            <p>
              To manage subscriptions and process payments, we collect:
            </p>
            <ul className="privacy-list">
              <li>Subscription plan and billing history</li>
              <li>Invoice and payment records</li>
              <li>Payment method reference (via our payment processor)</li>
              <li>Tax identification where required</li>
            </ul>
            <p>
              We do not store full card details. Payment information is handled
              by PCI-compliant payment processors and mobile money providers.
            </p>

            <h3>Business data entered into our products</h3>
            <p>
              When your business uses a KXBYTE product, you and your team may
              enter information such as:
            </p>
            <ul className="privacy-list">
              <li>Product catalogues and inventory data</li>
              <li>Sales and transaction records</li>
              <li>Customer records (belonging to your business)</li>
              <li>Staff and shift records</li>
              <li>Branch and organizational structure</li>
              <li>Payment and reconciliation data</li>
              <li>Credit and Deni records</li>
            </ul>
            <p>
              This data belongs to your business. KXBYTE processes it on your
              behalf and only for the purpose of providing the Services.
            </p>

            <h3>Transaction and payment data</h3>
            <p>
              Transactions processed through our products may include:
            </p>
            <ul className="privacy-list">
              <li>Sale amounts, items, and timestamps</li>
              <li>Payment methods used (cash, M-Pesa, card, credit)</li>
              <li>M-Pesa transaction references</li>
              <li>Split payment allocations</li>
              <li>Refund and reversal records</li>
            </ul>
            <p>
              Where mobile money or payment integrations are enabled, we work
              with the relevant providers (such as M-Pesa) to process payments.
              Those providers handle payment credentials under their own terms
              and privacy policies.
            </p>

            <h3>Device, usage, and log information</h3>
            <p>
              When you access our website or software, we automatically
              collect technical information:
            </p>
            <ul className="privacy-list">
              <li>IP address</li>
              <li>Device and browser type</li>
              <li>Operating system</li>
              <li>Pages or screens accessed</li>
              <li>Timestamps and session duration</li>
              <li>Referral source</li>
              <li>Error logs and diagnostic information</li>
            </ul>
            <p>
              We use this to operate the Services securely, diagnose issues,
              and improve the product.
            </p>

            <h3>Cookies and analytics</h3>
            <p>
              Our website uses cookies and similar technologies to remember
              preferences, understand usage, and improve the experience. You
              can disable cookies in your browser; some features may not work
              as expected if you do.
            </p>

            <h3>Communications</h3>
            <p>
              When you contact us or receive communications from us, we retain
              the content and metadata of those exchanges — including email,
              SMS, WhatsApp messages, and in-app notifications — to provide
              support and maintain records.
            </p>
          </section>

          {/* ── 4. How we use information ─────────────────── */}
          <section className="privacy-section">
            <h2>How we use information</h2>
            <p>We use information to:</p>
            <ul className="privacy-list">
              <li>Create and manage your account</li>
              <li>Provide, operate, and maintain the Services</li>
              <li>Process subscriptions and payments</li>
              <li>Send transactional communications (receipts, invoices, alerts)</li>
              <li>Send service updates about our products</li>
              <li>Respond to support requests and inquiries</li>
              <li>Monitor security and detect fraud or abuse</li>
              <li>Diagnose technical issues and improve the Services</li>
              <li>Comply with legal obligations</li>
            </ul>
            <p>
              We do not sell your personal information. We do not use your
              business data — the data you enter into our products — for
              advertising, marketing, or any purpose other than providing
              the Services to you.
            </p>
          </section>

          {/* ── 5. Roles and responsibilities ─────────────── */}
          <section className="privacy-section">
            <h2>Roles and responsibilities</h2>
            <p>
              Because KXBYTE provides software that businesses use to process
              their own information, the responsibilities are divided.
            </p>

            <h3>Your business as the controller</h3>
            <p>
              For any personal data your business enters into a KXBYTE product
              — including your customers, staff, or suppliers — your business
              is the data controller. You are responsible for:
            </p>
            <ul className="privacy-list">
              <li>Collecting that information lawfully</li>
              <li>Obtaining any necessary consents</li>
              <li>Informing your customers and staff about how their data is used</li>
              <li>Responding to their data rights requests</li>
            </ul>

            <h3>KXBYTE as the processor</h3>
            <p>
              For that same data, KXBYTE acts as a data processor. We process
              it only according to your instructions and only to provide the
              Services. We do not use it for our own purposes.
            </p>

            <h3>When KXBYTE is the controller</h3>
            <p>
              For information we collect directly — through our website,
              account system, billing, and support — KXBYTE is the controller.
              This policy describes how we handle that information.
            </p>
          </section>

          {/* ── 6. Legal basis ─────────────────────────────── */}
          <section className="privacy-section">
            <h2>Legal basis for processing</h2>
            <p>
              Where required by law, we process personal information on the
              following bases:
            </p>
            <ul className="privacy-list">
              <li>
                <strong>Contract</strong> — to provide the Services you have
                subscribed to
              </li>
              <li>
                <strong>Legitimate interest</strong> — to operate, secure, and
                improve our Services
              </li>
              <li>
                <strong>Consent</strong> — where you have explicitly agreed
                (for example, marketing communications)
              </li>
              <li>
                <strong>Legal obligation</strong> — to comply with applicable law
              </li>
            </ul>
          </section>

          {/* ── 7. Sharing information ─────────────────────── */}
          <section className="privacy-section">
            <h2>Sharing information</h2>
            <p>
              We do not sell, rent, or trade personal information. We share
              information only in the following limited situations:
            </p>
            <ul className="privacy-list">
              <li>
                <strong>Service providers</strong> — hosting, infrastructure,
                email delivery, analytics, and payment processors that help us
                operate the Services
              </li>
              <li>
                <strong>Payment and mobile money providers</strong> — such as
                M-Pesa, where payment processing requires it
              </li>
              <li>
                <strong>Legal compliance</strong> — when required by law,
                regulation, or valid legal process
              </li>
              <li>
                <strong>Business transfers</strong> — in connection with a
                merger, acquisition, or sale of assets, with appropriate
                protections
              </li>
              <li>
                <strong>With your instruction</strong> — when you ask us to
                share information with a third party
              </li>
            </ul>
            <p>
              Service providers receive only the information necessary to
              perform their function and are bound by confidentiality and
              data protection obligations.
            </p>
          </section>

          {/* ── 8. Third-party services ────────────────────── */}
          <section className="privacy-section">
            <h2>Third-party services</h2>
            <p>
              Our Services rely on third parties, including:
            </p>
            <ul className="privacy-list">
              <li>Cloud hosting and infrastructure providers</li>
              <li>Payment processors and mobile money providers</li>
              <li>Email and SMS delivery services</li>
              <li>Analytics and monitoring tools</li>
              <li>Authentication and security services</li>
            </ul>
            <p>
              Each of these providers operates under its own privacy policy.
              We choose providers that meet appropriate standards, but we
              encourage you to review their terms where relevant.
            </p>
          </section>

          {/* ── 9. Data retention and deletion ─────────────── */}
          <section className="privacy-section">
            <h2>Data retention and deletion</h2>
            <p>
              We retain information only for as long as necessary for the
              purposes described in this policy, or as required by law.
            </p>
            <ul className="privacy-list">
              <li>
                <strong>Account information</strong> — retained while your
                account is active, and for a reasonable period after closure
                for legal and accounting purposes
              </li>
              <li>
                <strong>Business data</strong> — retained according to your
                instructions; deleted or exported on request, subject to any
                legal retention obligations
              </li>
              <li>
                <strong>Billing records</strong> — retained as required by
                tax and accounting law
              </li>
              <li>
                <strong>Logs and diagnostics</strong> — retained for a limited
                period for security and troubleshooting
              </li>
            </ul>
            <p>
              When information is no longer needed, we delete it or anonymize
              it where deletion is not technically possible.
            </p>
          </section>

          {/* ── 10. Security ───────────────────────────────── */}
          <section className="privacy-section">
            <h2>Security</h2>
            <p>
              We use appropriate technical and organizational measures to
              protect information, including:
            </p>
            <ul className="privacy-list">
              <li>Encrypted connections (HTTPS/TLS)</li>
              <li>Access controls and authentication</li>
              <li>Password hashing and secure credential storage</li>
              <li>Regular software updates and patching</li>
              <li>Monitoring and logging for security incidents</li>
              <li>Restricted access to personal and business data</li>
            </ul>
            <p>
              No system is completely immune to risk. We continuously work to
              protect the information entrusted to us, but we cannot guarantee
              absolute security.
            </p>
          </section>

          {/* ── 11. Data breaches ──────────────────────────── */}
          <section className="privacy-section">
            <h2>Data breaches and incidents</h2>
            <p>
              If we become aware of a security incident that affects personal
              information, we will:
            </p>
            <ul className="privacy-list">
              <li>Investigate and contain the incident promptly</li>
              <li>
                Notify affected users and, where required, relevant authorities,
                within the timeframes required by applicable law
              </li>
              <li>Take steps to prevent recurrence</li>
            </ul>
            <p>
              We maintain internal procedures for detecting, responding to,
              and reporting security incidents.
            </p>
          </section>

          {/* ── 12. International data processing ──────────── */}
          <section className="privacy-section">
            <h2>International data processing</h2>
            <p>
              KXBYTE is based in Kenya. Some of our service providers — hosting,
              cloud infrastructure, or payment processing — may operate in other
              countries.
            </p>
            <p>
              When information is processed internationally, we take reasonable
              steps to ensure it receives appropriate protection consistent
              with this policy and applicable law.
            </p>
          </section>

          {/* ── 13. Your rights ────────────────────────────── */}
          <section className="privacy-section">
            <h2>Your rights</h2>
            <p>
              Depending on your location and applicable law, you may have the
              right to:
            </p>
            <ul className="privacy-list">
              <li>Access the personal information we hold about you</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Restrict or object to certain processing</li>
              <li>Request a copy of your information in a portable format</li>
              <li>Withdraw consent where consent is the legal basis</li>
              <li>Lodge a complaint with a supervisory authority</li>
            </ul>
            <p>
              To exercise these rights, contact us at{' '}
              <a href="mailto:info@kxbyte.co.ke">info@kxbyte.co.ke</a>.
            </p>
            <p>
              If you are a customer, employee, or supplier of a business that
              uses our products — and you want to exercise rights over data
              that business has entered — please contact that business directly.
              They are the controller of that data, and we act on their
              instructions.
            </p>
          </section>

          {/* ── 14. Children ───────────────────────────────── */}
          <section className="privacy-section">
            <h2>Children's privacy</h2>
            <p>
              Our Services are intended for businesses and individuals aged 18
              or older, or those legally able to enter into agreements.
            </p>
            <p>
              We do not knowingly collect personal information from children.
              If we become aware that information belonging to a child has been
              submitted without appropriate authorization, we will take
              reasonable steps to remove it.
            </p>
          </section>

          {/* ── 15. Marketing ──────────────────────────────── */}
          <section className="privacy-section">
            <h2>Marketing communications</h2>
            <p>We may send:</p>
            <ul className="privacy-list">
              <li>Product updates and release notes</li>
              <li>Service announcements</li>
              <li>Company news</li>
              <li>Educational content</li>
            </ul>
            <p>
              You can unsubscribe from marketing communications at any time.
              Transactional messages (receipts, invoices, security alerts) are
              separate and are sent as part of the Services.
            </p>
          </section>

          {/* ── 16. Confidentiality ────────────────────────── */}
          <section className="privacy-section">
            <h2>Confidentiality</h2>
            <p>
              Everything entrusted to KXBYTE — business data, customer
              information, project details — is treated as confidential.
            </p>
            <p>
              We do not disclose customer data publicly without permission,
              and we do not use it for any purpose other than providing the
              Services.
            </p>
          </section>

          {/* ── 17. Changes ────────────────────────────────── */}
          <section className="privacy-section">
            <h2>Changes to this policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect
              changes in our Services, legal requirements, or operational
              practices.
            </p>
            <p>
              When we make significant changes, we will update the Effective
              Date at the top of this page and, where appropriate, notify
              account holders.
            </p>
          </section>

          {/* ── 18. Contact ────────────────────────────────── */}
          <section className="privacy-section">
            <h2>Contact</h2>
            <p>
              For questions about this policy, privacy requests, or data
              protection matters, contact us.
            </p>
            <div className="privacy-contact">
              <p><strong>KXBYTE</strong></p>
              <p>Nairobi, Kenya</p>
              <p>
                Email:{' '}
                <a href="mailto:info@kxbyte.co.ke">info@kxbyte.co.ke</a>
              </p>
              <p>
                Website:{' '}
                <a href="https://kxbyte.co.ke">https://kxbyte.co.ke</a>
              </p>
            </div>
          </section>

          {/* ── 19. Final note ─────────────────────────────── */}
          <section className="privacy-section privacy-final">
            <div className="privacy-final-note">
              <h2>Final note</h2>
              <p>
                Privacy isn't just a legal requirement for us — it's the
                foundation of the trust businesses place in our software.
              </p>
              <p>
                Whether you're running a single shop, operating multiple
                branches, or managing a large organization on KXBYTE, you can
                expect your information and your customers' information to be
                handled with care.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;