import type { SVGProps } from "react";

const Figma = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 256 384" preserveAspectRatio="xMidYMid">
    <path fill="#F24E1E" d="M64 384c35.3 0 64-28.7 64-64v-64H64c-35.3 0-64 28.7-64 64s28.7 64 64 64Z" />
    <path fill="#A259FF" d="M0 192c0-35.3 28.7-64 64-64h64v128H64c-35.3 0-64-28.7-64-64Z" />
    <path fill="#1ABCFE" d="M0 64C0 28.7 28.7 0 64 0h64v128H64C28.7 128 0 99.3 0 64Z" />
    <path fill="#0ACF83" d="M128 0h64c35.3 0 64 28.7 64 64s-28.7 64-64 64h-64V0Z" />
    <path fill="#FF7262" d="M256 192c0 35.3-28.7 64-64 64s-64-28.7-64-64 28.7-64 64-64 64 28.7 64 64Z" />
  </svg>
);

export { Figma };
