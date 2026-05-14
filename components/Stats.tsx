const stats = [
  {
    value: "2",
    label: "Направления",
    sub: "стройка + логистика под одной крышей",
  },
  {
    value: "10",
    label: "Стран",
    sub: "Россия и СНГ — регулярные маршруты",
  },
  {
    value: "350+",
    label: "Сотрудников",
    sub: "ИТР, бригады, водители, диспетчеры",
  },
  {
    value: "18 мес",
    label: "Гарантия",
    sub: "на строительно‑монтажные работы",
  },
];

export default function Stats() {
  return (
    <section className="border-y border-slate-200/80 bg-brand-muted/40">
      <div className="container-px py-12 sm:py-16">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-display text-4xl font-extrabold text-brand sm:text-5xl">
                {s.value}
              </div>
              <div className="mt-2 font-display text-sm font-bold uppercase tracking-wider text-brand-light">
                {s.label}
              </div>
              <div className="mt-1 text-sm text-slate-600">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
