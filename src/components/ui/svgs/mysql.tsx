import type { SVGProps } from "react";

const Mysql = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" rx="6" fill="#EAF5F8" />
    <ellipse cx="12" cy="7" rx="5.5" ry="2.5" fill="#00758F" />
    <path
      fill="#00758F"
      d="M6.5 7v3.2c0 1.4 2.46 2.55 5.5 2.55s5.5-1.14 5.5-2.55V7c-1.12 1.04-3.3 1.7-5.5 1.7S7.62 8.04 6.5 7Zm0 4.75v3.2c0 1.4 2.46 2.55 5.5 2.55s5.5-1.14 5.5-2.55v-3.2c-1.12 1.04-3.3 1.7-5.5 1.7s-4.38-.66-5.5-1.7Z"
    />
    <path
      fill="#F29111"
      d="M17.7 14.95c1.4 0 2.55 1.15 2.55 2.55s-1.15 2.55-2.55 2.55-2.55-1.15-2.55-2.55 1.15-2.55 2.55-2.55Z"
    />
  </svg>
);

export { Mysql };
