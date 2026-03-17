import type { SVGProps } from "react";

const Livewire = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none">
    <defs>
      <linearGradient id="livewire-a" x1="0%" x2="100%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FB70A9" />
        <stop offset="100%" stopColor="#7E5BEF" />
      </linearGradient>
    </defs>
    <rect width="24" height="24" rx="6" fill="url(#livewire-a)" />
    <path
      fill="#fff"
      d="M9.15 6.75 5.8 10.1l3.35 3.35-1.65 1.65L2.5 10.1 7.5 5.1l1.65 1.65Zm5.7 0 1.65-1.65 5 5-5 5-1.65-1.65 3.35-3.35-3.35-3.35ZM7.9 18.9l3.55-13.8h2.65L10.55 18.9H7.9Z"
    />
  </svg>
);

export { Livewire };
