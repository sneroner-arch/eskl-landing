"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";

const nav = [
  { href: "#about", label: "О компании" },
  { href: "#construction", label: "Строительство" },
  { href: "#logistics", label: "Логистика" },
  { href: "#geography", label: "География" },
  { href: "#contacts", label: "Контакты" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition ${
        scrolled
          ? "border-b border-slate-200/80 bg-white/90 backdrop-blur shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="container-px flex h-20 items-center justify-between gap-6">
        <a href="#" aria-label="ЕСКЛ — на главную">
          <Logo variant={scrolled ? "dark" : "light"} size="md" />
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-semibold transition hover:text-brand-light ${
                scrolled ? "text-brand" : "text-white/90"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a href="tel:+79258680935" className="hidden text-right xl:block">
            <div
              className={`text-[11px] font-semibold uppercase tracking-wider ${
                scrolled ? "text-slate-500" : "text-white/60"
              }`}
            >
              Единый отдел
            </div>
            <div
              className={`font-display text-lg font-bold ${
                scrolled ? "text-brand" : "text-white"
              }`}
            >
              +7 (925) 868‑09‑35
            </div>
          </a>
          <a href="#contacts" className="btn-primary py-3 text-sm">
            Получить КП
          </a>
        </div>

        <button
          aria-label="Меню"
          className={`grid h-11 w-11 place-items-center rounded-lg border lg:hidden ${
            scrolled
              ? "border-slate-200 bg-white text-brand"
              : "border-white/20 bg-white/10 text-white backdrop-blur"
          }`}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200/80 bg-white lg:hidden">
          <div className="container-px flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-semibold text-brand hover:bg-brand-muted"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-3 flex flex-col gap-3 border-t border-slate-200 pt-4">
              <a href="tel:+79258680935" className="font-display text-lg font-bold text-brand">
                +7 (925) 868‑09‑35
              </a>
              <a href="#contacts" onClick={() => setOpen(false)} className="btn-primary">
                Получить КП
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
