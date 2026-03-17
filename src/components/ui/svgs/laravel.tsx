import type { SVGProps } from "react";

const Laravel = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" rx="6" fill="#FF2D20" />
    <path
      fill="#fff"
      d="M6.5 6.75h2.35v8.15h5.4v2.35H6.5V6.75Zm8.05 0h2.35v6.45h4.1v4.05h-2.35v-1.7h-4.1V6.75Z"
    />
  </svg>
);

export { Laravel };
