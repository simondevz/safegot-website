"use client";

import { useState } from "react";
import { ThemeToggle } from "./theme-toggle";

const links = [["How it works", "#how-it-works"], ["For sellers", "#sellers"], ["For buyers", "#buyers"], ["FAQs", "#faqs"]] as const;

export function MobileNav() {
  const [open, setOpen] = useState(false);
  return <div className="mobile-nav-wrap">
    <button className="menu-toggle" type="button" aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}><span /><span /></button>
    {open && <div className="mobile-menu">{links.map(([label, href]) => <a href={href} key={href} onClick={() => setOpen(false)}>{label}</a>)}<div className="mobile-menu-actions"><ThemeToggle /><a className="button button-primary" href="#waitlist" onClick={() => setOpen(false)}>Join the waitlist</a></div></div>}
  </div>;
}
