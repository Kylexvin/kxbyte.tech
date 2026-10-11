// src/components/products/kxtill/Strip.jsx
import {
  Layers,
  WifiOff,
  Building2,
  Users,
  CreditCard,
  Package,
  Check,
} from "lucide-react";
import "@/styles/products/kxtill/Strip.css";

const ICONS = {
  "Retail + Pharmacy": Layers,
  "Offline-first": WifiOff,
  "Multi-branch": Building2,
  "Staff management": Users,
  Payments: CreditCard,
  Inventory: Package,
};

export default function Strip({ product }) {
  const items = product.hero?.proofStrip || [];
  if (items.length === 0) return null;

  return (
    <section className="kt-strip" aria-label="KxTill highlights">
      <ul className="kt-strip__grid">
        {items.map((label) => {
          const Icon = ICONS[label] || Check;
          return (
            <li className="kt-strip__item" key={label}>
              <span className="kt-strip__icon">
                <Icon size={18} />
              </span>
              <span className="kt-strip__label">{label}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}