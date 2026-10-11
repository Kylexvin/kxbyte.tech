import FefoExpiryGuide from "./fefo-expiry-guide/Post";
import WhatIsAPosSystemKenya from "./what-is-a-pos-system-kenya/Post";

export const bodies = {
  "fefo-expiry-guide": FefoExpiryGuide,
  "what-is-a-pos-system-kenya": WhatIsAPosSystemKenya,
};

export const getBody = (slug) => bodies[slug] ?? null;