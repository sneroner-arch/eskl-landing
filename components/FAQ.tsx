"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Можно ли заказать только одно направление?",
    a: "Да. Стройка и логистика — самостоятельные блоки. Большинство клиентов начинают с одного направления, потом подключают второе. Минимальный объём согласовываем по объекту.",
  },
  {
    q: "Какие документы предоставляете при закрытии?",
    a: "По строительным работам: КС‑2, КС‑3, УПД, исполнительная документация, акты скрытых работ. По логистике: УПД, ТТН, ТН, СНТ для маркируемых грузов. Работаем с НДС 22%.",
  },
  {
    q: "Берёте ли вы небольшие объёмы по логистике?",
    a: "Да. Сборные грузы — от 1 кг между основными городами. По стройматериалам — от еврофуры. По маркетплейсам — от 1 паллеты.",
  },
  {
    q: "В каких странах СНГ работаете?",
    a: "Регулярные маршруты — Россия, Казахстан, Беларусь, Армения, Кыргызстан, Узбекистан, Таджикистан. По запросу — Туркменистан, Азербайджан, Грузия. Таможенное оформление берём на себя.",
  },
  {
    q: "Какие виды работ закрываете по стройке?",
    a: "Монолит, кладка, инженерия, отделка, фасад и остекление, сервис окон ПВХ для застройщиков. Работаем по разделам и под ключ — в составе генподряда или прямого договора.",
  },
  {
    q: "Какая отсрочка платежа?",
    a: "До 30 календарных дней по согласованию для постоянных клиентов. По разовым работам — обычно поэтапная оплата по факту КС‑2/КС‑3 или по фактам доставки.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section bg-brand-muted/40">
      <div className="container-px max-w-4xl">
        <div className="text-center">
          <div className="eyebrow mb-5">Частые вопросы</div>
          <h2 className="h2 text-brand">Отвечаем на основные вопросы</h2>
          <div className="divider-accent mx-auto mt-6" />
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className={`rounded-2xl border bg-white transition ${
                  isOpen ? "border-brand-light shadow-soft" : "border-slate-200"
                }`}
              >
                <button
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base font-bold uppercase tracking-tight text-brand sm:text-lg">
                    {f.q}
                  </span>
                  <span
                    className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border-2 transition ${
                      isOpen
                        ? "border-brand-light bg-brand-light text-white"
                        : "border-brand/15 text-brand"
                    }`}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      className={`transition ${isOpen ? "rotate-180" : ""}`}
                    >
                      <path
                        d="M6 9l6 6 6-6"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-sm leading-relaxed text-slate-600 sm:text-base">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
