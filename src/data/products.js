// src/data/products.js

const LOGO = "/icons/logo.png"; // temp shared logo on cards

export const products = [
  {
    slug: "kxtill",
    name: "KxTill",
    logo: LOGO,
    status: "live",
    tagline: "Run your retail operations.",
    description:
      "A complete point-of-sale system for growing retailers. Sales, stock, customers, payments, branches, and daily store operations in one place.",
    url: "https://kxtill.kxbyte.co.ke",
    ctaLabel: "Open KxTill",
    hero: {
      heading: "Point of sale, built for how retail actually works.",
      sub:
        "KxTill is an offline-first point-of-sale system for growing retailers. Ring up sales, track stock, manage customers, and run daily store operations — even when the internet isn’t cooperating.",
    },
    features: [
      {
        title: "Fast checkout",
        body:
          "Scan, tap, or search. Sell in seconds with a till designed for high-volume counters.",
      },
      {
        title: "Offline-first",
        body:
          "Keep selling when the network drops. KxTill syncs automatically the moment you’re back online.",
      },
      {
        title: "Stock that stays honest",
        body:
          "Every sale reduces stock. Every restock is recorded. No spreadsheets, no guessing.",
      },
      {
        title: "Customer records",
        body:
          "Attach customers to sales, track repeat buyers, and see who your business depends on.",
      },
      {
        title: "Payments in one place",
        body:
          "Cash, card, and M-Pesa recorded against every sale — reconciled at close of day.",
      },
      {
        title: "Multi-branch ready",
        body:
          "Run one shop or twenty. See sales, stock, and staff across every branch from one account.",
      },
    ],
    howItWorks: [
      {
        step: "01",
        title: "Set up your business",
        body:
          "Add your business, branches, and staff. Takes minutes, no training required.",
      },
      {
        step: "02",
        title: "Load your products",
        body:
          "Import your catalogue or add items as you go. Prices, categories, stock — all in one place.",
      },
      {
        step: "03",
        title: "Start selling",
        body:
          "Ring up sales from any device. KxTill keeps stock, customers, and payments in sync automatically.",
      },
      {
        step: "04",
        title: "See the whole picture",
        body:
          "Daily sales, top products, stock alerts, and branch performance — visible the moment you need them.",
      },
    ],
    suiteNote:
      "KxTill works on its own. Connect it to KXBYTE Suite and your sales data joins the rest of your business — people, branches, invoicing, and reporting in one place.",
    seo: {
      title: "KxTill — Offline-first point of sale for growing retailers",
      description:
        "KxTill is an offline-first POS for retail businesses. Manage sales, stock, customers, payments, and branches — works without internet. Part of the KXBYTE platform.",
      keywords: [
        "KxTill",
        "POS Kenya",
        "point of sale",
        "offline POS",
        "retail software",
        "inventory management",
      ],
    },
  },
  {
    slug: "kxwork",
    name: "KxWork",
    logo: LOGO,
    status: "soon",
    tagline: "Keep work moving.",
    description:
      "Manage tasks, teams, shifts, and daily work. Give people clarity on what needs to be done, and management visibility into what is happening.",
    hero: {
      heading: "Work, tasks, and teams in one place.",
      sub:
        "KxWork is a workforce and task management system for businesses with people in the field, on the floor, or across branches. Assign work, track progress, and see what’s actually happening.",
    },
    features: [
      { title: "Task assignment", body: "Assign work to people, teams, or branches with clear ownership." },
      { title: "Progress tracking", body: "See what’s done, in progress, and stuck — without asking." },
      { title: "Shift management", body: "Plan shifts and rosters across teams and locations." },
      { title: "Manager visibility", body: "Give management a live view of work across the business." },
    ],
    howItWorks: [
      { step: "01", title: "Set up your teams", body: "Add people, roles, and branches." },
      { step: "02", title: "Assign work", body: "Create tasks and assign them to the right people." },
      { step: "03", title: "Track progress", body: "See status updates as work moves." },
      { step: "04", title: "Review and report", body: "Understand what happened, and where time went." },
    ],
    suiteNote:
      "KxWork connects into KXBYTE Suite, so your teams, tasks, and shifts sit alongside the rest of your business data.",
    seo: {
      title: "KxWork — Workforce and task management for growing teams",
      description:
        "KxWork helps businesses assign work, track progress, and give management visibility across teams and branches. Part of the KXBYTE platform.",
      keywords: ["KxWork", "workforce management", "task management", "shift management"],
    },
  },
  {
    slug: "kxcrm",
    name: "KxCRM",
    logo: LOGO,
    status: "soon",
    tagline: "Know your customers.",
    description:
      "Keep customer information, interactions, and follow-ups organized — so important conversations don’t get buried across channels.",
    hero: {
      heading: "Customer relationships, finally organized.",
      sub:
        "KxCRM keeps customer information, conversations, and follow-ups in one place. No more losing customers in WhatsApp threads or notebooks.",
    },
    features: [
      { title: "Customer profiles", body: "Names, contacts, history, and notes in one record." },
      { title: "Interaction log", body: "Every call, message, and meeting — timestamped and searchable." },
      { title: "Follow-ups", body: "Never lose a lead to a forgotten callback again." },
      { title: "Segments", body: "Group customers by value, activity, or whatever matters to you." },
    ],
    howItWorks: [
      { step: "01", title: "Import customers", body: "Bring your existing list in." },
      { step: "02", title: "Log interactions", body: "Record every conversation as it happens." },
      { step: "03", title: "Set follow-ups", body: "Assign reminders to the right people." },
      { step: "04", title: "Grow relationships", body: "See who your business depends on, and who’s slipping away." },
    ],
    suiteNote:
      "KxCRM connects into KXBYTE Suite, linking customers to sales, invoices, and payments in one place.",
    seo: {
      title: "KxCRM — Customer management for growing businesses",
      description:
        "KxCRM keeps customer information, interactions, and follow-ups organized — so important conversations don’t get buried. Part of the KXBYTE platform.",
      keywords: ["KxCRM", "customer relationship management", "CRM Kenya", "customer software"],
    },
  },
  {
    slug: "kxinvoice",
    name: "KxInvoice",
    logo: LOGO,
    status: "soon",
    tagline: "Keep invoicing connected.",
    description:
      "Create invoices and track payments, with financial records connected to the work and sales that created them.",
    hero: {
      heading: "Invoices that stay connected to your sales.",
      sub:
        "KxInvoice generates invoices directly from sales and tracks payments against them — so your records stay clean and your money stays visible.",
    },
    features: [
      { title: "Invoices from sales", body: "Generate invoices without re-entering data." },
      { title: "Payment tracking", body: "See what’s paid, outstanding, and overdue." },
      { title: "Clean records", body: "Every invoice tied to the sale or job that created it." },
      { title: "Multi-currency ready", body: "Bill in the currency you trade in." },
    ],
    howItWorks: [
      { step: "01", title: "Connect your sales", body: "Link KxInvoice to KxTill or your sales source." },
      { step: "02", title: "Generate invoices", body: "One click from a sale or job." },
      { step: "03", title: "Send and track", body: "Send to customers, track opens and payments." },
      { step: "04", title: "Reconcile", body: "Match payments to invoices as they come in." },
    ],
    suiteNote:
      "KxInvoice connects into KXBYTE Suite, so invoicing stays tied to sales, customers, and payments.",
    seo: {
      title: "KxInvoice — Invoicing connected to sales",
      description:
        "KxInvoice creates invoices directly from sales, tracks payments, and keeps financial records clean. Part of the KXBYTE platform.",
      keywords: ["KxInvoice", "invoicing software Kenya", "invoice tracking", "business invoicing"],
    },
  },
  {
    slug: "kxpay",
    name: "KxPay",
    logo: LOGO,
    status: "soon",
    tagline: "Know where money goes.",
    description:
      "Connect payments with sales and invoices. See what has been paid, what is outstanding, and where each transaction belongs.",
    hero: {
      heading: "Payments, matched to what they paid for.",
      sub:
        "KxPay connects payments with sales and invoices, so you always know what’s been paid, what’s outstanding, and which sale every shilling belongs to.",
    },
    features: [
      { title: "M-Pesa reconciliation", body: "Match M-Pesa payments to sales and invoices automatically." },
      { title: "Card and cash", body: "All payment methods in one ledger." },
      { title: "Outstanding tracking", body: "See what customers still owe, at a glance." },
      { title: "Audit trail", body: "Every payment tied to its source, timestamped." },
    ],
    howItWorks: [
      { step: "01", title: "Connect payments", body: "Link M-Pesa, card, and bank sources." },
      { step: "02", title: "Match automatically", body: "KxPay reconciles payments to sales and invoices." },
      { step: "03", title: "Handle exceptions", body: "Review what couldn’t be matched." },
      { step: "04", title: "Report cleanly", body: "See daily, weekly, and monthly reconciliation." },
    ],
    suiteNote:
      "KxPay connects into KXBYTE Suite, keeping payments linked to sales, invoices, and customers.",
    seo: {
      title: "KxPay — Payment reconciliation for growing businesses",
      description:
        "KxPay connects payments with sales and invoices. M-Pesa, card, and cash — reconciled in one place. Part of the KXBYTE platform.",
      keywords: ["KxPay", "M-Pesa reconciliation", "payment tracking", "business payments Kenya"],
    },
  },
];

export const getProduct = (slug) =>
  products.find((p) => p.slug === slug) || null;