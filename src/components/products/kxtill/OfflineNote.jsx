// src/components/products/kxtill/OfflineNote.jsx
import { Wifi, WifiOff } from "lucide-react";
import "@/styles/products/kxtill/OfflineNote.css";

export default function OfflineNote({ product }) {
  const { offline } = product;
  if (!offline?.headline) return null;

  const worksOffline = offline.worksOffline || [];
  const needsNetwork = offline.needsNetwork || [];
  const flow = offline.flow || [];

  return (
    <section className="kt-offline">
      <div className="kt-offline__container">
        <span className="kt-offline__label">Offline-first</span>
        <h2 className="kt-offline__headline">{offline.headline}</h2>
        <p className="kt-offline__body">{offline.body}</p>

        <div className="kt-offline__columns">
          <div className="kt-offline__col kt-offline__col--works">
            <div className="kt-offline__col-head">
              <WifiOff size={16} />
              <span className="kt-offline__col-title">Works offline</span>
            </div>
            <ul className="kt-offline__list">
              {worksOffline.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="kt-offline__col kt-offline__col--needs">
            <div className="kt-offline__col-head">
              <Wifi size={16} />
              <span className="kt-offline__col-title">Needs network</span>
            </div>
            <ul className="kt-offline__list">
              {needsNetwork.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {flow.length > 0 && (
          <ol className="kt-offline__flow">
            {flow.map((step, i) => (
              <li key={step} className="kt-offline__flow-step">
                <span className="kt-offline__flow-label">{step}</span>
                {i < flow.length - 1 && (
                  <span className="kt-offline__flow-arrow" aria-hidden="true">
                    →
                  </span>
                )}
              </li>
            ))}
          </ol>
        )}
      </div>
    </section>
  );
}