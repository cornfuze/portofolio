import type { SVGProps } from "react";

const Angular = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 256 256" preserveAspectRatio="xMidYMid">
    <path fill="#DD0031" d="m128 16 96 34.5-14.6 126.9L128 240 46.6 177.4 32 50.5 128 16Z" />
    <path fill="#C3002F" d="M128 16v224l81.4-62.6L224 50.5 128 16Z" />
    <path
      fill="#FFF"
      d="M128 42 68 176h22.4l12.1-30.2h50.8l12.1 30.2H188L128 42Zm17 85h-34l17-41.2L145 127Z"
    />
  </svg>
);

export { Angular };
