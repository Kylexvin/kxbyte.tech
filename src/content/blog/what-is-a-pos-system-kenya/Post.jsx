// src/content/blog/what-is-a-pos-system-kenya/Post.jsx
import "./post.css";

export default function Post() {
  return (
    <article className="post-body">
      <aside className="post-tldr" aria-label="Key takeaways">
        <h2>Key takeaways</h2>
        <ul>
          <li>A <strong>POS system</strong> records a sale — and everything around it: stock, staff, payments, and branches.</li>
          <li>Modern POS software replaces the cash register, the stock book, and the end-of-day reconciliation sheet.</li>
          <li>For Kenyan businesses, <strong>offline-first</strong> matters more than almost any other feature.</li>
          <li>Choose based on what happens when the internet drops, and how the system handles multiple branches.</li>
        </ul>
      </aside>

      <h2 id="what-a-pos-actually-does">What a POS system actually does</h2>
      <p>
        A POS (Point of Sale) system is the software and hardware used to complete
        a sale and record what was sold. In its simplest form it replaces the cash
        register. In practice, it also records the item, the price, the cashier,
        the payment method, and the time of sale — for every transaction.
      </p>
      <p>
        That record is the real value. It turns a business from a set of feelings
        ("sales felt slow last week") into a set of facts ("we sold 40 units of X
        on Tuesday and 12 on Wednesday").
      </p>

      <h2 id="beyond-the-cash-register">Beyond the cash register</h2>
      <p>
        A cash register opens a drawer and prints a receipt. A POS system does
        that and answers questions a register cannot:
      </p>
      <ul>
        <li><strong>What sold today?</strong> By item, by category, by staff.</li>
        <li><strong>What's left in stock?</strong> Updated as sales happen, not at month-end.</li>
        <li><strong>Who sold it?</strong> Each cashier's sales are tracked separately.</li>
        <li><strong>How was it paid?</strong> Cash, M-Pesa, card — split by method.</li>
        <li><strong>What's running low?</strong> Before it runs out, not after.</li>
      </ul>

      <h2 id="multi-branch">Multi-branch: where spreadsheets break</h2>
      <p>
        A single shop can run on a notebook and a cash box. Two shops cannot. Once
        you have more than one location, the questions get harder:
      </p>
      <ul>
        <li>Which branch has stock of a specific item right now?</li>
        <li>Can I move stock from one branch to another without losing track?</li>
        <li>Are sales being recorded the same way at every till?</li>
        <li>What's the total position across all branches at the end of the day?</li>
      </ul>
      <p>
        Spreadsheets can answer these questions <em>after</em> the fact, with effort.
        A POS system answers them as a byproduct of normal selling.
      </p>

      <h2 id="offline-first">Why offline-first matters in Kenya</h2>
      <p>
        Internet in Kenya is good — until it isn't. A cloud-only POS system stops
        taking sales the moment the connection drops. In a busy shop, that's not
        a technical problem. It's lost revenue and a queue out the door.
      </p>
      <p>
        <strong>Offline-first</strong> POS software keeps selling during an outage
        and syncs transactions automatically when the connection returns. For most
        Kenyan businesses, this single feature matters more than any other.
      </p>

      <h2 id="what-to-look-for">What to look for before choosing</h2>
      <table>
        <thead>
          <tr>
            <th>Feature</th>
            <th>Why it matters</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Offline-first operation</td>
            <td>Keeps selling when the internet drops</td>
          </tr>
          <tr>
            <td>Multi-branch stock</td>
            <td>See what's where, move stock between branches</td>
          </tr>
          <tr>
            <td>M-Pesa integration</td>
            <td>Reconcile mobile money with cash in one report</td>
          </tr>
          <tr>
            <td>Expiry or batch tracking</td>
            <td>Essential for pharmacy, food, cosmetics</td>
          </tr>
          <tr>
            <td>Staff accounts</td>
            <td>Know who sold what, prevent shrinkage</td>
          </tr>
          <tr>
            <td>Reports that work offline</td>
            <td>Some systems report only when online — check</td>
          </tr>
        </tbody>
      </table>

      <h2 id="where-kxtill-fits">Where KxTill fits</h2>
      <p>
        KxTill is KXBYTE's POS system for Kenyan businesses. It was built
        offline-first because that's the reality of running a shop here. It
        handles sales, stock, staff accounts, and multi-branch reporting, and
        it works the same on a phone, tablet, or desktop till.
      </p>
      <p>
        KxTill is one product in the wider KXBYTE Suite, alongside KxInvoice
        (invoicing) and KxCRM (customer records). Each works on its own. Together,
        they share the same business data.
      </p>

      <h2 id="faq">Frequently asked questions</h2>

      <h3>What is a POS system?</h3>
      <p>
        A POS (Point of Sale) system is the software and hardware used to complete
        a sale and record what was sold. In modern use, it also tracks stock,
        staff activity, payments, and reporting across branches.
      </p>

      <h3>Do I need a POS system for a small shop in Kenya?</h3>
      <p>
        A single-till shop can work with a simple cash register, but a POS system
        pays for itself quickly if you sell more than a few hundred items a day,
        carry stock that expires, or run more than one location.
      </p>

      <h3>Does a POS system work without internet in Kenya?</h3>
      <p>
        It depends on the system. Offline-first POS software keeps selling during
        outages and syncs when the connection returns. Cloud-only systems stop
        working when the internet is down, which is a real risk in many parts of
        Kenya.
      </p>
    </article>
  );
}