"use client";
// src/pages/AccountDeletion.jsx
import React, { useEffect } from 'react';
import '../styles/AccountDeletion.css';

const AccountDeletion = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="account-deletion">
      <div className="account-deletion__container">
        <div className="account-deletion__header">
          <span className="account-deletion__badge">Legal</span>
          <h1>Account Deletion Request</h1>
          <p className="account-deletion__date">
            Effective Date: November 12, 2026 · Last Updated: November 12, 2026
          </p>
          <div className="account-deletion__line"></div>
        </div>

        <div className="account-deletion__content">
          <p className="account-deletion__intro">
            This page explains how users of <strong>KXBYTE</strong> products
            and services can request deletion of their account and associated
            personal data, what may be deleted, and what may be retained.
          </p>

          {/* ── 1. Overview ────────────────────────────────── */}
          <section className="deletion-section">
            <h2>1. Overview</h2>
            <p>
              KXBYTE Digital Solutions provides connected software products
              and services for businesses and individuals.
            </p>
            <p>
              We respect your privacy and provide users with a way to request
              deletion of their accounts and associated personal data across
              KXBYTE products.
            </p>
            <p>
              This page explains how to submit a deletion request, what
              information may be deleted, and what information may need to be
              retained.
            </p>
          </section>

          {/* ── 2. How to request ──────────────────────────── */}
          <section className="deletion-section">
            <h2>2. How to request account deletion</h2>
            <p>To request deletion of your KXBYTE account:</p>
            <ol className="deletion-list deletion-list--ordered">
              <li>
                Send an email to{' '}
                <a href="mailto:support@kxbyte.co.ke">support@kxbyte.co.ke</a>.
              </li>
              <li>
                Use the subject line <strong>Account Deletion Request</strong>.
              </li>
              <li>
                Include the email address or phone number associated with
                your account.
              </li>
              <li>Specify the KXBYTE product you use.</li>
              <li>
                If your account belongs to an organization, include the
                organization name.
              </li>
            </ol>
            <p>
              Our support team may request additional information to verify
              your identity and authority to make the request.
            </p>
            <p>
              You can submit a request even if you can no longer access the
              application.
            </p>
          </section>

          {/* ── 3. Data that may be deleted ────────────────── */}
          <section className="deletion-section">
            <h2>3. Information that may be deleted</h2>
            <p>
              Depending on the product and your account relationship, deletion
              may include:
            </p>
            <ul className="deletion-list">
              <li>
                Personal account information, including name, email address,
                and phone number
              </li>
              <li>Profile information and user preferences</li>
              <li>
                Authentication credentials and associated account information
              </li>
              <li>Device registration tokens</li>
              <li>
                Personal information associated with your use of KXBYTE
                products
              </li>
              <li>
                Other personal data that is no longer required for legitimate
                business or legal purposes
              </li>
            </ul>
          </section>

          {/* ── 4. Data that may be retained ───────────────── */}
          <section className="deletion-section">
            <h2>4. Information that may be retained</h2>
            <p>
              Certain information may need to be retained for legitimate
              business, legal, financial, security, or regulatory purposes.
              This may include:
            </p>
            <ul className="deletion-list">
              <li>Financial and transaction records</li>
              <li>Sales and business records</li>
              <li>Audit logs and security records</li>
              <li>
                Information required for accounting, tax compliance, or
                dispute resolution
              </li>
              <li>Records associated with other users or organizations</li>
            </ul>
            <p>
              Where retention is necessary, information will be retained only
              for the applicable purpose and period, with appropriate
              safeguards.
            </p>
          </section>

          {/* ── 5. Organization accounts ───────────────────── */}
          <section className="deletion-section">
            <h2>5. Organization accounts and business data</h2>
            <p>
              Some KXBYTE products operate using organization-based accounts.
            </p>
            <p>
              Deleting an individual user account does not automatically
              delete the organization, its branches, or business records.
            </p>
            <p>
              Organization deletion and individual user deletion are separate
              processes.
            </p>
            <p>
              Requests to delete an entire organization must be submitted by
              an authorized organization representative. Such requests may
              require additional verification and consideration of outstanding
              obligations, other users' rights, and applicable data-retention
              requirements.
            </p>
          </section>

          {/* ── 6. Processing ──────────────────────────────── */}
          <section className="deletion-section">
            <h2>6. Request processing</h2>
            <p>
              KXBYTE will review and process verified deletion requests within
              a reasonable period, generally within <strong>30 days</strong>.
            </p>
            <p>
              If additional verification or legal requirements affect the
              processing time, we will communicate this where appropriate.
            </p>
          </section>

          {/* ── 7. Contact ─────────────────────────────────── */}
          <section className="deletion-section">
            <h2>7. Contact</h2>
            <p>
              For account deletion requests and questions about your personal
              data, contact:
            </p>
            <div className="deletion-contact">
              <p><strong>KXBYTE Digital Solutions</strong></p>
              <p>
                Email:{' '}
                <a href="mailto:support@kxbyte.co.ke">support@kxbyte.co.ke</a>
              </p>
              <p>
                Website:{' '}
                <a href="https://kxbyte.co.ke">https://kxbyte.co.ke</a>
              </p>
              <p>Products: KXBYTE software products and services</p>
            </div>
          </section>

          {/* ── 8. Final note ──────────────────────────────── */}
          <section className="deletion-section deletion-final">
            <div className="deletion-final-note">
              <h2>Final note</h2>
              <p>
                KXBYTE Digital Solutions reserves the right to retain
                information where necessary to fulfil legal obligations,
                protect legitimate interests, and maintain the integrity of
                its services.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AccountDeletion;