// src/content/blog/fefo-expiry-guide/Post.jsx
import "./post.css";

export default function Post() {
  return (
    <article className="post-body">
      {/* TL;DR — the single most quotable block on the page */}
      <aside className="post-tldr" aria-label="Key takeaways">
        <h2>Key takeaways</h2>
        <ul>
          <li><strong>FEFO</strong> means First-Expired, First-Out — sell the batch closest to expiry first.</li>
          <li>It differs from FIFO, which rotates by arrival date.</li>
          <li>FEFO prevents expired stock, write-offs, and dispensing errors.</li>
          <li>It works without spreadsheets when your POS or inventory system tracks batch expiry.</li>
        </ul>
      </aside>

      <h2 id="what-is-fefo">What is FEFO?</h2>
      <p>
        FEFO stands for <strong>First-Expired, First-Out</strong>. It is a stock rotation rule
        that says: when it is time to sell or use a product, pick the batch whose expiry
        date is nearest. Not the oldest batch. Not the newest. The one closest to expiring.
      </p>
      <p>
        The goal is simple — move short-dated stock before it becomes waste, and never
        dispense something that has already expired.
      </p>

      <h2 id="fefo-vs-fifo">FEFO vs FIFO</h2>
      <p>
        FIFO (First-In, First-Out) rotates stock by <em>arrival date</em>. FEFO rotates by{" "}
        <em>expiry date</em>. They usually agree — but not always.
      </p>
      <p>
        A newer delivery can carry an earlier expiry than one already on the shelf. Under
        FIFO, that batch stays behind and expires. Under FEFO, it moves first.
      </p>

      <table>
        <thead>
          <tr>
            <th>Rule</th>
            <th>Rotates by</th>
            <th>Best for</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>FIFO</td>
            <td>Arrival date</td>
            <td>Non-perishable goods, general retail</td>
          </tr>
          <tr>
            <td>FEFO</td>
            <td>Expiry date</td>
            <td>Pharmacies, food, cosmetics, reagents</td>
          </tr>
        </tbody>
      </table>

      <h2 id="why-it-matters">Why FEFO matters in a pharmacy</h2>
      <p>
        Expired medicine is not just lost revenue. It is a regulatory risk and a patient
        safety issue. FEFO addresses both at once.
      </p>
      <ul>
        <li><strong>Fewer write-offs.</strong> Short-dated stock moves before it becomes unsellable.</li>
        <li><strong>Regulatory compliance.</strong> Dispensing expired medicine breaches pharmacy rules.</li>
        <li><strong>Patient safety.</strong> A reduced-potency or degraded drug can be worse than no drug.</li>
        <li><strong>Cleaner audits.</strong> Every sale traces to a batch with a known expiry.</li>
      </ul>

      <h2 id="how-to-run-fefo">How to run FEFO day to day</h2>
      <p>
        FEFO only works if expiry data is captured at the point of receiving stock and
        enforced at the point of sale. Four steps:
      </p>
      <ol>
        <li><strong>Capture the batch and expiry</strong> when goods arrive — not just the quantity.</li>
        <li><strong>Store shelf-ordered by expiry</strong>, not by delivery date.</li>
        <li><strong>Prompt the picker at sale time</strong> with the FEFO batch for that product.</li>
        <li><strong>Review short-dated stock weekly</strong> and act before it expires.</li>
      </ol>

      <h2 id="fefo-without-spreadsheets">Running FEFO without spreadsheets</h2>
      <p>
        Spreadsheets break under FEFO because they are not enforced at the point of sale.
        A clerk can pick any batch and the sheet will not stop them.
      </p>
      <p>
        A point-of-sale or inventory system that stores batch expiry per unit and surfaces
        the FEFO batch during checkout removes the decision from the clerk. This is how
        KXBYTE handles pharmacy stock — batch, expiry, and sale are one flow.
      </p>

      <h2 id="faq">Frequently asked questions</h2>

      <h3>What does FEFO stand for?</h3>
      <p>
        FEFO stands for First-Expired, First-Out. It is a stock rotation rule where the
        batch with the earliest expiry date is sold or used first.
      </p>

      <h3>Is FEFO the same as FIFO?</h3>
      <p>
        No. FIFO rotates by arrival date — the oldest stock leaves first. FEFO rotates by
        expiry date — the batch closest to expiring leaves first. In a pharmacy, FEFO is
        safer because a newer batch can expire sooner than an older one.
      </p>

      <h3>Does FEFO apply to non-medicine products?</h3>
      <p>
        Yes. Any product with a shelf life benefits from FEFO — food, cosmetics, chemicals,
        and laboratory reagents included.
      </p>
    </article>
  );
}