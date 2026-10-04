
// src/data/kxtill.js

export const kxtill = {
  slug: "kxtill",
  name: "KxTill",
  logo: "/icons/logo.png",
  status: "live",
  url: "https://kxtill.kxbyte.co.ke",
  ctaLabel: "Start using KxTill",

  hero: {
    eyebrow: "KXBYTE · KXTILL",
    headline: "Know what's happening across your business.",
    description:
      "KxTill helps growing retail businesses manage sales, stock, staff, payments, customers, and branches from one system.",
    ctaPrimary: {
      label: "Start using KxTill",
      url: "https://kxtill.kxbyte.co.ke",
    },
    ctaSecondary: {
      label: "See how it works",
      anchor: "how-it-works",
    },
    proofStrip: [
      "Offline-first",
      "Multi-branch",
      "Staff management",
      "Payments",
      "Inventory",
    ],
  },

  featureGroups: [
    {
      id: "inventory",
      title: "Inventory",
      summary: "Know what you have, where it is, and what's moving.",
      points: [
        "Central product catalogue with SKUs, barcodes, and selling units",
        "Stock tracked at branch level instead of being pooled across the business",
        "Stock activity recorded through sales, restocks, transfers, and adjustments",
        "Minimum stock levels help identify products that need attention",
        "Branch-specific stock and pricing keep each location accurate",
      ],
    },

    {
      id: "sales",
      title: "Sales",
      summary: "Keep every sale moving and every transaction recorded.",
      points: [
        "Fast checkout with product search and barcode scanning",
        "Walk-in sales can be completed without creating a customer account",
        "Sales remain tied to the branch, staff member, customer, and shift involved",
        "Receipts and sale history give the business a record of completed transactions",
        "Refunds are recorded against the original sale",
      ],
    },

    {
      id: "customers",
      title: "Customers & Credit",
      summary: "Know your customers and keep track of what they owe.",
      points: [
        "Customer records can be attached to sales and retail activity",
        "Customer purchase history stays connected to the customer record",
        "Goods given on credit are recorded against the customer's account",
        "Credit payments are recorded against outstanding balances",
        "The credit ledger keeps customer balances traceable over time",
      ],
    },

    {
      id: "branches",
      title: "Branches",
      summary: "See your whole business, not just one till.",
      points: [
        "Create and manage multiple branches under one business",
        "Each branch keeps its own stock, staff, sales, and operational activity",
        "Owner-level visibility connects the branches under one organization",
        "Stock can be transferred between branches while keeping inventory associated with the right locations",
      ],
    },

    {
      id: "team",
      title: "Team & Access",
      summary: "Give your team the access they need to do their work.",
      points: [
        "Each staff member has their own account instead of relying on shared logins",
        "Roles and permissions control what each team member can access and do",
        "Staff activity is associated with the person who performed the action",
        "Team members can be associated with the branches where they work",
      ],
    },

    {
      id: "shifts",
      title: "Shifts & Cash",
      summary:
        "Know what happened during every shift and whether the cash matches.",
      points: [
        "Staff can open and close shifts with defined opening and closing figures",
        "Sales and payment activity is associated with the active shift",
        "Expected cash is compared against the amount actually counted",
        "Cash variance is recorded when the figures do not match",
        "Shift history gives the business a clear record of what happened during each working period",
      ],
    },

{ id: "payments", title: "Payments", summary: "Keep payments tied to the sales they belong to.", points: [ "Cash payments are recorded against the sale", "Mixed and partial payments can be recorded against a single sale", "Payment activity stays connected to the original transaction", "Payment records remain available for shift and transaction review", ], comingSoon: [ "M-Pesa STK Push", "Automatic M-Pesa payment confirmation", ], },
  ],

  offline: {
    headline: "Your shop shouldn't stop when the internet does.",
    body: "When the internet drops, KxTill keeps the till running. Sales can continue, customers can be added, and the overview remains available. Inventory changes, shift operations, and synchronization wait for the network. If a branch uses shifts, a shift must be opened before the first sale; branches without shifts can start selling immediately.",
    worksOffline: [
      "Point of sale — full checkout flow",
      "Sales continue",
      "Adding customers",
      "Overview dashboard",
    ],
    needsNetwork: [
      "Inventory changes",
      "Shift operations",
      "Synchronization",
    ],
    flow: ["Selling continues", "Queued locally", "Connection returns", "Auto-sync"],
  },
  screenshots: {
    hero: {
      src: "/screenshots/kxtill/till.png",
      alt: "KxTill point-of-sale screen showing a sale in progress",
    },
    gallery: [
      {
        src: "/screenshots/kxtill/products.png",
        alt: "KxTill product catalogue with stock levels and prices",
        caption: "Every product, priced and stocked",
      },
      {
        src: "/screenshots/kxtill/receipt.png",
        alt: "KxTill completed sale and receipt view",
        caption: "Every sale recorded, every receipt saved",
      },
      {
        src: "/screenshots/kxtill/branches.png",
        alt: "KxTill branch view showing multiple retail locations",
        caption: "See every branch from one account",
      },
      {
        src: "/screenshots/kxtill/shift-close.png",
        alt: "KxTill shift close screen comparing expected and counted cash",
        caption: "Close the shift, know the cash",
      },
    ],
  },
  howItWorks: {
    heading: "From sign-up to first sale in under two minutes.",
    subtitle:
      "Setup happens as you use KxTill. You don't configure the whole business first — you just start.",
    steps: [
      {
        step: "01",
        title: "Register",
        body: "Create your KxTill account. One email, one password.",
        time: "~20 sec",
      },
      {
        step: "02",
        title: "Create your organization",
        body: "Name your business. A default branch is created for you automatically.",
        time: "~30 sec",
      },
      {
        step: "03",
        title: "Land on the till",
        body: "KxTill opens straight to the point of sale. No setup wizard, no configuration screen.",
        time: "instant",
      },
      {
        step: "04",
        title: "Add your first product",
        body: "KxTill prompts you to add a product. It's saved as global — available at every branch you'll ever add.",
        time: "day one",
      },
      {
        step: "05",
        title: "Set stock and start selling",
        body: "KxTill asks how much of that product you have at this branch, then drops you back on the till. Ring up your first sale.",
        time: "day one",
      },
    ],
    closing: {
      title: "By end of day, you see everything.",
      body: "Sales, payments, stock, and shifts — all in one place. Everything you entered during the day is waiting for you when you close.",
    },
  },

  trial: {
    label: "14-day free trial",
    body: "No card required. Add products, ring up sales, close your first shift. If it's not for you, walk away.",
  },
  pricing: {
    headline: "One subscription. Everything included.",
    description:
      "KxTill starts at KES 2,999 per month. Every subscription includes the full product — no feature tiers, no locked capabilities. Your exact price depends on your business, and we confirm it with you directly.",
    floor: "2,999",
    unit: "per month",
    ctaPrimary: {
      label: "Start 14-day trial",
      url: "https://kxtill.kxbyte.co.ke",
    },
    ctaSecondary: {
      label: "Talk to us on WhatsApp",
      url: "https://wa.me/254768610613?text=Hi%20KXBYTE%2C%20I%27d%20like%20to%20talk%20about%20KxTill%20pricing.",
    },
    howItWorks: [
      {
        step: "01",
        title: "Start your trial",
        body: "14 days, full access. No card required.",
      },
      {
        step: "02",
        title: "We get in touch",
        body: "We look at how you're using KxTill — branches, staff, activity — and reach out to confirm your price.",
      },
      {
        step: "03",
        title: "Your price is set",
        body: "You agree a price with us. It's set for your organization, not per seat or per feature.",
      },
      {
        step: "04",
        title: "Everything is on your billing page",
        body: "Your agreed amount, billing history, and every change is visible on your billing page — with a full audit trail.",
      },
    ],
    includes: [
      "Full point-of-sale",
      "Inventory management",
      "Multiple branches",
      "Multiple tills per branch",
      "Cashier shifts",
      "Cash variance tracking",
      "M-Pesa and split payments",
      "Customer credit (Deni)",
      "Staff accounts and permissions",
      "Branch-level reporting",
      "Audit trail",
      "Offline operation",
    ],
    faqShort: [
      {
        q: "Why isn't pricing the same for everyone?",
        a: "A single shop and a five-branch operation use KxTill very differently. Pricing reflects that. Everyone gets the full product — the price just matches the size of the business.",
      },
      {
        q: "Are there feature tiers?",
        a: "No. Every KxTill subscription includes the full product. No locked features, no upgrade plans, no paywalls inside the app.",
      },
      {
        q: "How do I know exactly what I'll pay?",
        a: "We confirm it with you directly after you sign up. Your agreed amount is then visible on your billing page — with the full history and audit trail.",
      },
      {
        q: "What happens after the trial?",
        a: "Your trial runs for 14 days. After that, there's a 2-day grace period. Then all write operations are disabled until your subscription is active — you can still read your data, but can't create new sales, products, or shifts.",
      },
      {
        q: "Can my price change as I grow?",
        a: "Yes. If your business grows — more branches, more staff — your subscription adjusts. Every change is recorded on your billing page.",
      },
    ],
  },
    faqs: [
    {
      q: "What is KxTill?",
      a: "KxTill is a retail operations and point-of-sale system for businesses that need to manage sales, stock, payments, customers, and day-to-day operations from one place. It's designed for businesses ranging from a single shop and counter to multi-branch operations with multiple tills and staff.",
    },
    {
      q: "Who is KxTill for?",
      a: "Businesses that sell physical goods and need reliable control over sales, stock, payments, customers, and staff operations — from independent shops to multi-branch retail operations.",
    },
    {
      q: "Can I use KxTill for more than one branch?",
      a: "Yes. KxTill supports multiple branches under one organization. You can manage branch-level stock, sales, staff access, and operational activity while keeping your organization connected.",
    },
    {
      q: "Can one branch have multiple tills?",
      a: "Yes. A branch can operate multiple counters or tills at the same time — Counter 1, Counter 2, Counter 3, each with its own cashier. Stock remains branch-level while each cashier maintains their own operational session.",
    },
    {
      q: "Can two cashiers work at the same time?",
      a: "Yes. When a branch uses multiple tills, different cashiers can have active shifts at the same time. Each shift is tracked independently while the branch's stock remains shared.",
    },
    {
      q: "Does KxTill support cashier shifts?",
      a: "Yes. Shifts provide cash accountability for individual cashier sessions. A cashier can open a shift with an opening float, make sales during the session, and close the shift by declaring the cash received. KxTill calculates expected cash and records any variance.",
    },
    {
      q: "Can I use KxTill without enabling shifts?",
      a: "Yes. Shift tracking is optional and can be enabled per branch. Businesses that don't need cashier shift accountability can use KxTill without shifts.",
    },
    {
      q: "What happens if there is a cash variance when closing a shift?",
      a: "KxTill compares expected cash with declared cash. If the difference is within the configured branch threshold, the shift closes normally. If the variance exceeds the threshold, the shift can be marked for review by an authorized manager.",
    },
    {
      q: "Can a manager close a cashier's shift?",
      a: "Authorized managers can perform management actions such as force-closing a shift or resolving a handover. The system retains who performed the action for accountability.",
    },
    {
      q: "Can a cashier hand over their shift?",
      a: "Yes. KxTill supports shift handovers where another authorized person takes responsibility for the next session. The original shift remains recorded, including its cash position and handover information.",
    },
    {
      q: "Can I cancel a shift?",
      a: "A shift can only be cancelled when it has no sales attached to it. This prevents a shift containing transaction history from simply being removed.",
    },
    {
      q: "Does KxTill work offline?",
      a: "Yes. KxTill is designed with offline operation in mind. Sales can continue when the internet connection is unavailable, with transactions synchronized when connectivity returns. Operations that establish cash accountability — like opening or closing a shift — require an online connection.",
    },
    {
      q: "What happens if my internet connection goes down during business?",
      a: "Supported sales operations continue offline. Transactions created offline are synchronized when connectivity returns. Operations that require server-side confirmation, such as opening or closing a shift, may require an active connection.",
    },
    {
      q: "What happens to stock when I sell something?",
      a: "A completed sale updates the relevant branch's stock according to the product and quantity sold. Stock is managed at the branch level rather than separately for each cashier shift.",
    },
    {
      q: "Does KxTill manage inventory per cashier?",
      a: "No. Stock is managed at the branch level, while shifts are used for cashier accountability. Multiple tills sell from the same branch inventory without creating separate stock pools for every cashier.",
    },
    {
      q: "Does KxTill support M-Pesa?",
      a: "Yes. KxTill can integrate M-Pesa payments, including STK Push and automatic payment confirmation where the relevant configuration is enabled.",
    },
    {
      q: "Can I accept multiple payment methods in one sale?",
      a: "Yes. KxTill supports split payments, allowing a customer to pay using more than one payment method. For example, a KSh 1,200 sale could be KSh 500 cash and KSh 700 M-Pesa, recorded as a single transaction.",
    },
    {
      q: "Can customers buy on credit?",
      a: "Yes. KxTill supports customer credit, commonly known as Deni. A customer can make a partial payment and put the remaining amount on credit. The outstanding balance is tracked against their customer record.",
    },
    {
      q: "How does Deni work?",
      a: "KxTill records customer credit as a ledger. Credit sales increase the customer's outstanding balance, while payments reduce it. Credit activity is recorded as individual events, giving the business a history of charges, payments, adjustments, and reversals.",
    },
    {
      q: "Can I see what a customer owes me?",
      a: "Yes. A customer's Deni balance and credit history can be viewed from their customer record. You can review previous credit transactions and payments rather than relying on a notebook or memory.",
    },
    {
      q: "Can I set a credit limit for a customer?",
      a: "Yes. KxTill supports customer-specific credit limits. A business can decide how much a particular customer is allowed to owe before additional credit sales are restricted.",
    },
    {
      q: "Can I see which customers have overdue credit?",
      a: "Yes. Credit reporting can identify outstanding customer balances by age, helping you identify balances that have remained unpaid for longer periods.",
    },
    {
      q: "Can I refund a sale?",
      a: "Yes. KxTill supports refunds while maintaining the transaction history and audit trail. Refund activity is recorded separately from the original sale so the business can trace what happened.",
    },
    {
      q: "Can I control what my employees can access?",
      a: "Yes. KxTill uses permissions so businesses can control what different team members are allowed to do. Access can be assigned according to the responsibilities of the user.",
    },
    {
      q: "Can I manage multiple staff members?",
      a: "Yes. You can have multiple members working within an organization and assign them appropriate access. For larger teams, permissions help separate cashier, manager, and administrative responsibilities.",
    },
    {
      q: "Can I see sales across my branches?",
      a: "Yes. KxTill supports branch-level operations and reporting, allowing businesses with multiple branches to monitor activity across their organization.",
    },
    {
      q: "Are my transactions auditable?",
      a: "Yes. KxTill maintains transaction and operational records so important actions can be traced — including sales, refunds, payments, shifts, customer credit activity, and other supported business events.",
    },
    {
      q: "Is KxTill only for small shops?",
      a: "No. KxTill can be used by a single retail outlet or scaled across businesses operating multiple branches and tills. The same system supports different operational sizes.",
    },
    {
      q: "Do I need special hardware?",
      a: "No specific proprietary hardware is required to get started. Your exact setup depends on how you operate your business, including devices used for sales, printing, payment processing, and connectivity.",
    },
    {
      q: "Is KxTill part of KXBYTE Suite?",
      a: "Yes. KxTill is a KXBYTE product and can be accessed and managed through the wider KXBYTE ecosystem. KXBYTE Suite provides the organization-level layer for managing products, members, access, subscriptions, and other business capabilities.",
    },
    {
      q: "Can KxTill connect with other KXBYTE products?",
      a: "Yes. KXBYTE is designed as a connected product ecosystem. KxTill can work alongside other KXBYTE products such as KxCRM and KxInvoice, with shared organizational foundations and connected business data where supported.",
    },
    {
      q: "How much does KxTill cost?",
      a: "KxTill starts at KES 2,999 per month. Every subscription includes the full product — no feature tiers, no locked capabilities. Your exact price depends on your business, and we confirm it with you directly during your free trial.",
    },
    {
      q: "Is there a free trial?",
      a: "Yes. Every new KxTill account starts with a 14-day free trial with full access to the product. After the trial ends, there's a 2-day grace period. After that, all write operations are disabled until the subscription is activated.",
    },
    {
      q: "What happens after my trial ends?",
      a: "You have a 2-day grace period after your trial ends. After that, all write operations are disabled — you can still read your data, but can't create new sales, products, or shifts until your subscription is active.",
    },
    {
      q: "How does KxTill handle subscriptions?",
      a: "KxTill's subscription is managed through KXBYTE's billing infrastructure. Your agreed amount is visible on your billing page, with the full history and audit trail of every change.",
    },
    {
      q: "Can my KxTill subscription change as my business grows?",
      a: "Yes. As your business grows — more branches, more staff, more volume — your subscription adjusts. Every change is recorded on your billing page.",
    },
    {
      q: "What if I have a question that isn't answered here?",
      a: "Contact KXBYTE support with your organization name and the issue you're experiencing. For technical issues, include the relevant branch, transaction, or reference information so the issue can be investigated faster.",
    },
  ],
  suiteNote:
    "KxTill works on its own. Connect it to KXBYTE Suite and bring your retail operation into the wider KXBYTE business platform.",

  seo: {
    title: "KxTill — Retail management software for growing businesses",
    description:
      "KxTill helps growing retail businesses manage sales, stock, customers, payments, staff, shifts, and branches from one system.",
    keywords: [
      "KxTill",
      "POS Kenya",
      "point of sale Kenya",
      "retail software Kenya",
      "inventory management",
      "multi-branch POS",
      "retail management software",
    ],
  },
};

