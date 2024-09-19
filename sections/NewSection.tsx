import type { ComponentChildren } from "preact";

interface FooterProps { /** * @description The content to be displayed in the footer */ children?: ComponentChildren; /** * @description The background color of the footer * @format color-input */ backgroundColor?: string; /** * @description The text color of the footer * @format color-input */ textColor?: string; }

export default function Footer({ children = "© 2023 Your Company Name. All rights reserved.", backgroundColor = "#1f2937", textColor = "#ffffff" }: FooterProps) { return (

{children}
); }