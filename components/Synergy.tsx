const points = [
  {
    title: "Логистика стройматериалов на свои объекты",
    desc: "Сами строим — сами возим. Знаем, как принимают грузы на стройплощадке, и не срываем сроки.",
    icon: <IconLink />,
  },
  {
    title: "Один договор, один менеджер",
    desc: "Не нужно стыковать подрядчиков. Один контрагент несёт ответственность за стройку и доставку.",
    icon: <IconDoc />,
  },
  {
    title: "Резерв ресурсов внутри группы",
    desc: "Перебрасываем технику и людей между направлениями под пиковую нагрузку — не теряем сроки.",
    icon: <IconSwap />,
  },
  {
    title: "Прозрачность бюджета",
    desc: "Видите смету и стройки, и логистики в одном пакете. Никаких скрытых наценок «межподрядчика».",
    icon: <IconChart />,
  },
];

export default function Synergy() {
  return (
    <section className="section">
      <div className="container-px">
        <div className="grid items-end gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <div className="eyebrow mb-5">Синергия</div>
            <h2 className="h2 text-brand">
              Зачем стройка и логистика вместе
            </h2>
            <div className="divider-accent mt-6" />
          </div>
          <p className="text-lg text-slate-600">
            Когда строительная и логистическая компетенции — внутри одной группы,
            заказчик получает не двух подрядчиков, а одного партнёра. Это выгоднее
            по деньгам, проще по документам и быстрее по срокам.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {points.map((p) => (
            <div key={p.title} className="card flex items-start gap-5">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-brand-light/10 text-brand-light">
                {p.icon}
              </div>
              <div>
                <h3 className="font-display text-lg font-bold uppercase tracking-tight text-brand">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function IconLink() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <path d="M10 14a4 4 0 0 1 0-6l3-3a4 4 0 1 1 6 6l-1 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M14 10a4 4 0 0 1 0 6l-3 3a4 4 0 1 1-6-6l1-1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
function IconDoc() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <path d="M6 3h9l4 4v14H6z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M15 3v5h4M9 12h7M9 16h7M9 8h3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
function IconSwap() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <path d="M3 8h14l-3-3M21 16H7l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconChart() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <path d="M3 3v18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M7 15l4-4 3 3 5-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
