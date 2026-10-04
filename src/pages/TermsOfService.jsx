"use client";
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
        <div className="terms-service__header">
          <span className="terms-service__badge">Legal</span>
          <h1>Terms of Service</h1>
          <p className="terms-service__date">
            Effective Date: January 1, 2025 · Last Updated: January 1, 2025
          </p>
          <div className="terms-service__line"></div>
        </div>

        <div className="terms-service__content">
          <p className="terms-service__intro">
            These Terms of Service ("Terms") govern your access to and use of
            the <strong>KXBYTE</strong> website, KXBYTE Suite, and the
            individual KXBYTE products, including KxTill.
          </p>
          <p>
            KXBYTE operates a business software platform. These Terms apply to
            anyone who visits our website, creates an account, subscribes to a
            product, or engages us for custom software work.
          </p>
          <p>
            By using our Services, you agree to these Terms. If you do not
            agree, please do not use the Services.
          </p>

          {/* ── 1. About KXBYTE ────────────────────────────── */}
          <section className="terms-section">
            <h2>About KXBYTE</h2>
            <p>
              KXBYTE is a business technology company based in Nairobi, Kenya.
              We build and operate software products for businesses, including
              KxTill, KXBYTE Suite, and other products in development.
            </p>
            <p>
              In addition to our products, we take on custom software work
              when a business needs something our products don't cover.
            </p>
            <p>
              We may add, change, or discontinue products and features as our
              platform evolves.
            </p>
          </section>

          {/* ── 2. Acceptance ──────────────────────────────── */}
          <section className="terms-section">
            <h2>Acceptance of these Terms</h2>
            <p>
              By accessing our website, creating an account, or subscribing
              to any KXBYTE product, you confirm that you have read,
              understood, and agree to be bound by these Terms.
            </p>
            <p>
              If you are using the Services on behalf of an organization, you
              confirm that you have the authority to bind that organization
              to these Terms.
            </p>
          </section>

          {/* ── 3. Accounts ────────────────────────────────── */}
          <section className="terms-section">
            <h2>KXBYTE accounts and organizations</h2>
            <p>
              Access to our products is provided through a KXBYTE organization
              account. When you create an organization:
            </p>
            <ul className="terms-list">
              <li>
                You are responsible for the accuracy of the information you
                provide.
              </li>
              <li>
                You are responsible for maintaining the security of your
                account credentials.
              </li>
              <li>
                You are responsible for the actions of members you invite into
                your organization.
              </li>
              <li>
                You must notify us promptly if you become aware of unauthorized
                access to your account.
              </li>
            </ul>
            <p>
              We may suspend or terminate accounts that violate these Terms or
              are used for unlawful activity.
            </p>
          </section>

          {/* ── 4. KXBYTE Suite and product access ─────────── */}
          <section className="terms-section">
            <h2>KXBYTE Suite and product access</h2>
            <p>
              KXBYTE Suite is the organizational layer that connects your
              account, members, permissions, and subscribed products.
            </p>
            <p>
              When you subscribe to a product such as KxTill, access is granted
              through your organization account in Suite. Product access may be
              modified if your subscription changes, or if a product is
              discontinued.
            </p>
            <p>
              We may add, remove, or modify individual features within a
              product at any time as part of ongoing improvement.
            </p>
          </section>

          {/* ── 5. Subscriptions, pricing, billing ─────────── */}
          <section className="terms-section">
            <h2>Subscriptions, pricing, and billing</h2>
            <p>
              Subscriptions are billed on the terms agreed at the time of
              signup — typically monthly, unless otherwise agreed.
            </p>
            <ul className="terms-list">
              <li>
                Your subscription price is confirmed with you directly and
                recorded on your billing page.
              </li>
              <li>
                All subscription changes, adjustments, and payments are
                recorded on your billing page with a full audit trail.
              </li>
              <li>
                Payments may be processed through our payment providers,
                including mobile money services such as M-Pesa.
              </li>
              <li>
                Applicable taxes and transaction fees are your responsibility
                unless agreed otherwise.
              </li>
            </ul>
            <p>
              We may update our pricing. Where changes affect your subscription,
              we will notify you before they take effect.
            </p>
          </section>

          {/* ── 6. Trials and cancellations ────────────────── */}
          <section className="terms-section">
            <h2>Trials and cancellations</h2>
            <p>
              New KXBYTE accounts may be eligible for a free trial period, with
              full access to the product during the trial.
            </p>
            <p>
              After a trial ends, there is a short grace period during which
              you can activate your subscription. After the grace period,
              write operations are disabled until an active subscription is in
              place. Your data remains accessible for reading.
            </p>
            <p>
              You may cancel your subscription at any time. Cancellation takes
              effect at the end of the current billing period. Details of any
              refund policy are described in our Refund and Cancellation Policy
              or your subscription agreement.
            </p>
          </section>

          {/* ── 7. Data ownership ──────────────────────────── */}
          <section className="terms-section">
            <h2>Data ownership</h2>
            <p>
              Because KXBYTE provides software that businesses use to run
              their own operations, the ownership of data is divided.
            </p>
            <ul className="terms-list">
              <li>
                <strong>Your business data</strong> — including your products,
                sales, customers, staff, and operational records — belongs to
                your organization. KXBYTE processes it only to provide the
                Services to you.
              </li>
              <li>
                <strong>Your customers' data</strong> — including any customer
                records your business enters into our products — also belongs
                to your business, not to KXBYTE. You are responsible for how it
                is collected and used.
              </li>
              <li>
                <strong>Account information</strong> — data we collect directly
                through our website and account system — is managed by KXBYTE
                as described in our Privacy Policy.
              </li>
            </ul>
            <p>
              You can export your business data at any time. On request, and
              subject to applicable retention requirements, we will delete your
              business data after account closure.
            </p>
          </section>

          {/* ── 8. Acceptable use ──────────────────────────── */}
          <section className="terms-section">
            <h2>Acceptable use</h2>
            <p>You agree to use KXBYTE responsibly and lawfully.</p>
            <p>You must not:</p>
            <ul className="terms-list">
              <li>
                Attempt to gain unauthorized access to our systems or another
                customer's data.
              </li>
              <li>
                Use the Services for illegal, fraudulent, or harmful activities.
              </li>
              <li>
                Upload malware, conduct denial-of-service attacks, or interfere
                with the operation of the Services.
              </li>
              <li>
                Attempt to reverse engineer, copy, or redistribute our software.
              </li>
              <li>
                Use automated tools to scrape or extract data from our Services
                without permission.
              </li>
              <li>
                Misrepresent yourself or impersonate another person or
                organization.
              </li>
            </ul>
            <p>
              We may suspend or terminate access for violations of this section.
            </p>
          </section>

          {/* ── 9. Organization owner responsibilities ─────── */}
          <section className="terms-section">
            <h2>Responsibilities as an organization owner or admin</h2>
            <p>
              If you own or administer a KXBYTE organization, you are
              responsible for:
            </p>
            <ul className="terms-list">
              <li>Inviting and managing members of your organization</li>
              <li>
                Assigning appropriate roles and permissions to staff members
              </li>
              <li>
                Ensuring your use of the Services complies with applicable laws,
                including data protection laws
              </li>
              <li>
                Informing your own customers and staff about how their data is
                used within our products
              </li>
              <li>
                Responding to data requests from your own customers and staff
                where required
              </li>
            </ul>
            <p>
              As described in the Data Ownership section, your business is the
              controller of the data entered into our products.
            </p>
          </section>

          {/* ── 10. Third-party integrations ───────────────── */}
          <section className="terms-section">
            <h2>Third-party integrations</h2>
            <p>
              Some KXBYTE features rely on third-party providers, including:
            </p>
            <ul className="terms-list">
              <li>Mobile money and payment providers such as M-Pesa</li>
              <li>Cloud hosting and infrastructure</li>
              <li>Email and SMS delivery services</li>
              <li>Analytics and monitoring tools</li>
              <li>Any other integrations we offer within our products</li>
            </ul>
            <p>
              These providers operate under their own terms and privacy
              policies. We are not responsible for outages, pricing changes,
              policy changes, or service interruptions caused by third-party
              providers. Where a third-party service is required to use a
              KXBYTE feature, that requirement is disclosed in the product.
            </p>
          </section>

          {/* ── 11. Service availability ───────────────────── */}
          <section className="terms-section">
            <h2>Service availability and maintenance</h2>
            <p>
              We work to keep the Services available and reliable, but we
              cannot guarantee uninterrupted availability.
            </p>
            <p>Occasional unavailability may occur due to:</p>
            <ul className="terms-list">
              <li>Scheduled or emergency maintenance</li>
              <li>Technical failures</li>
              <li>Internet or network disruptions</li>
              <li>Security incidents</li>
              <li>Circumstances beyond our reasonable control</li>
            </ul>
            <p>
              We will make reasonable efforts to minimize disruption and
              restore service promptly.
            </p>
          </section>

          {/* ── 12. Offline functionality ──────────────────── */}
          <section className="terms-section">
            <h2>Offline functionality</h2>
            <p>
              Certain KXBYTE products — notably KxTill — are designed to
              continue operating when the internet connection is unavailable.
            </p>
            <ul className="terms-list">
              <li>
                During offline operation, supported actions (such as completing
                a sale) are stored locally and synchronized when connectivity
                returns.
              </li>
              <li>
                Some operations — including opening or closing a shift, and
                other server-confirmed actions — require an active internet
                connection.
              </li>
              <li>
                During extended offline periods, features that depend on
                server-side processing will not be available.
              </li>
            </ul>
            <p>
              We do not guarantee uninterrupted offline operation in every
              scenario. Local device state, storage capacity, and hardware
              failure can affect offline behavior.
            </p>
          </section>

          {/* ── 13. Data backup and recovery ───────────────── */}
          <section className="terms-section">
            <h2>Data backup and recovery</h2>
            <p>
              We maintain regular backups of platform data. However, backups
              are not a substitute for a business's own record-keeping.
            </p>
            <ul className="terms-list">
              <li>
                You are responsible for maintaining your own records where
                legally or operationally required.
              </li>
              <li>
                If data loss occurs, we will make reasonable efforts to restore
                from available backups, but we cannot guarantee recovery to any
                specific point in time.
              </li>
              <li>
                We are not liable for data loss caused by events beyond our
                reasonable control, including device failure, cyber-attack, or
                force majeure.
              </li>
            </ul>
          </section>

          {/* ── 14. Intellectual property ──────────────────── */}
          <section className="terms-section">
            <h2>Intellectual property</h2>
            <p>
              The KXBYTE name, logo, website, software, and product design are
              owned by KXBYTE and protected by applicable law. You may not
              copy, modify, distribute, or reverse engineer our software
              without permission.
            </p>
            <p>
              You retain ownership of any content, data, or materials you
              provide to us or enter into our products.
            </p>
            <p>
              For custom software work, ownership of deliverables is described
              in the applicable agreement. Unless otherwise agreed, upon full
              payment ownership of custom deliverables transfers to the client.
              KXBYTE retains ownership of its internal tools, reusable
              frameworks, libraries, and development processes.
            </p>
          </section>

          {/* ── 15. Custom work (when applicable) ──────────── */}
          <section className="terms-section">
            <h2>Custom software work</h2>
            <p>
              From time to time, KXBYTE takes on custom software projects
              alongside its products. When we do, the following applies:
            </p>
            <ul className="terms-list">
              <li>
                Scope, timeline, and pricing are defined in a written proposal
                or agreement.
              </li>
              <li>
                Payment schedules are set out in the agreement.
              </li>
              <li>
                The client is responsible for providing accurate information,
                required materials, and timely feedback.
              </li>
              <li>
                Changes to scope may require adjustments to timeline, pricing,
                or a separate phase, agreed by both parties.
              </li>
            </ul>
            <p>
              Custom work is provided under these Terms unless a separate
              agreement applies. Where a separate agreement exists, its terms
              prevail for that project.
            </p>
          </section>

          {/* ── 16. Suspension and termination ─────────────── */}
          <section className="terms-section">
            <h2>Suspension and termination</h2>
            <p>
              We may suspend or terminate your access to the Services if:
            </p>
            <ul className="terms-list">
              <li>You violate these Terms</li>
              <li>You use the Services for unlawful activity</li>
              <li>Your account is used in a way that harms other users</li>
              <li>Payment for a subscription remains overdue beyond applicable grace periods</li>
              <li>Required by law or regulatory authority</li>
            </ul>
            <p>
              You may close your account at any time. On closure, your
              subscription ends, and your data will be handled according to our
              retention practices. Where required by law, certain records may
              be retained for a defined period.
            </p>
          </section>

          {/* ── 17. Limitation of liability ────────────────── */}
          <section className="terms-section">
            <h2>Limitation of liability</h2>
            <p>
              To the fullest extent permitted by law, KXBYTE is not liable for
              indirect, incidental, special, or consequential damages arising
              from your use of the Services, including:
            </p>
            <ul className="terms-list">
              <li>Loss of profits or business opportunities</li>
              <li>Business interruption</li>
              <li>Loss of data</li>
              <li>Reputational damage</li>
            </ul>
            <p>
              Our total liability relating to the Services will not exceed the
              amount you paid for the Services in the twelve months preceding
              the event giving rise to the claim, unless otherwise required by
              applicable law.
            </p>
          </section>

          {/* ── 18. Indemnification ────────────────────────── */}
          <section className="terms-section">
            <h2>Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless KXBYTE, its officers,
              employees, and partners against claims, damages, or expenses
              arising from:
            </p>
            <ul className="terms-list">
              <li>Your violation of these Terms</li>
              <li>Your misuse of the Services</li>
              <li>
                Your business data or the data your customers provide, where
                you have not complied with applicable law
              </li>
              <li>Any third-party claims arising from your use of the Services</li>
            </ul>
          </section>

          {/* ── 19. Changes to the Services or Terms ───────── */}
          <section className="terms-section">
            <h2>Changes to the Services or these Terms</h2>
            <p>
              We may update the Services and these Terms from time to time.
              When we make material changes to these Terms, we will:
            </p>
            <ul className="terms-list">
              <li>Update the Effective Date at the top of this page</li>
              <li>Notify account holders of significant changes</li>
            </ul>
            <p>
              Continued use of the Services after changes take effect
              constitutes acceptance of the updated Terms.
            </p>
          </section>

          {/* ── 20. Governing law ──────────────────────────── */}
          <section className="terms-section">
            <h2>Governing law and dispute resolution</h2>
            <p>
              These Terms are governed by the laws of Kenya. Any dispute
              arising in connection with the Services will be subject to the
              exclusive jurisdiction of the courts of Kenya, unless otherwise
              agreed in writing.
            </p>
            <p>
              Where possible, we encourage resolving disputes directly through
              discussion before pursuing formal proceedings.
            </p>
          </section>

          {/* ── 21. Contact ────────────────────────────────── */}
          <section className="terms-section">
            <h2>Contact</h2>
            <p>
              For questions about these Terms, contact us:
            </p>
            <div className="terms-contact">
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

          {/* ── 22. Final note ─────────────────────────────── */}
          <section className="terms-section terms-final">
            <div className="terms-final-note">
              <h2>Final note</h2>
              <p>
                These Terms exist so that both sides know what to expect. If
                something is unclear, or you think a term doesn't fit your
                situation, contact us — we would rather clarify than leave you
                guessing.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;