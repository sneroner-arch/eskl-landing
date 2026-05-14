export default function Directions() {
  return (
    <section id="about" className="section">
      <div className="container-px">
        <div className="grid items-end gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <div className="eyebrow mb-5">О компании</div>
            <h2 className="h2 text-brand">
              Две компетенции —<br />
              один партнёр
            </h2>
            <div className="divider-accent mt-6" />
          </div>
          <p className="text-lg text-slate-600">
            Мы объединили под одной крышей строительный и логистический блоки,
            потому что у крупных застройщиков и торговых сетей эти задачи
            всегда идут рядом. Один договор, один менеджер проекта,
            ответственность за сроки и качество — на одной компании.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <DirectionCard
            tag="Направление 01"
            title="Строительство"
            subtitle="Общестроительные и отделочные работы для застройщиков"
            bullets={[
              "Монолит, кладка, инженерные системы",
              "Отделочные и фасадные работы",
              "Светопрозрачные конструкции и оконный сервис",
              "Сдача под ключ или в составе генподряда",
            ]}
            href="#construction"
            cta="Подробнее о строительстве"
            tone="light"
          />
          <DirectionCard
            tag="Направление 02"
            title="Логистика"
            subtitle="Грузоперевозки по России и странам ЕАЭС"
            bullets={[
              "Сборные грузы и выделенный транспорт (FTL)",
              "Доставка стройматериалов на объекты",
              "Международные перевозки: Казахстан, Беларусь, Армения и др.",
              "Складское хранение и фулфилмент",
            ]}
            href="#logistics"
            cta="Подробнее о логистике"
            tone="dark"
          />
        </div>
      </div>
    </section>
  );
}

function DirectionCard({
  tag,
  title,
  subtitle,
  bullets,
  href,
  cta,
  tone,
}: {
  tag: string;
  title: string;
  subtitle: string;
  bullets: string[];
  href: string;
  cta: string;
  tone: "light" | "dark";
}) {
  const isDark = tone === "dark";
  return (
    <a
      href={href}
      className={`group relative block overflow-hidden rounded-3xl border p-8 transition hover:-translate-y-1 sm:p-10 ${
        isDark
          ? "border-brand bg-brand text-white hover:shadow-card"
          : "border-slate-200 bg-white text-brand hover:border-brand-light hover:shadow-card"
      }`}
    >
      {isDark && (
        <>
          <div className="absolute -right-20 -top-16 h-72 w-72 rounded-full bg-brand-light/30 blur-3xl" />
          <div className="absolute inset-0 bg-grid-overlay opacity-20" />
        </>
      )}
      <div className="relative">
        <div
          className={`font-display text-[11px] font-bold uppercase tracking-[0.18em] ${
            isDark ? "text-brand-light" : "text-brand-light"
          }`}
        >
          {tag}
        </div>
        <div className="mt-4 flex items-start justify-between gap-6">
          <h3
            className={`font-display text-3xl font-extrabold uppercase leading-[1.05] tracking-tight sm:text-4xl ${
              isDark ? "text-white" : "text-brand"
            }`}
          >
            {title}
          </h3>
          <div
            className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl border-2 transition group-hover:translate-x-1 ${
              isDark
                ? "border-white/20 text-white"
                : "border-brand/15 text-brand"
            }`}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12h14M13 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <p className={`mt-3 text-base ${isDark ? "text-white/75" : "text-slate-600"}`}>
          {subtitle}
        </p>
        <ul className="mt-7 space-y-3">
          {bullets.map((b) => (
            <li
              key={b}
              className={`flex items-start gap-3 text-sm ${
                isDark ? "text-white/85" : "text-slate-700"
              }`}
            >
              <span
                className={`mt-1 h-1.5 w-1.5 shrink-0 rounded-full ${
                  isDark ? "bg-brand-light" : "bg-brand-light"
                }`}
              />
              <span>{b}</span>
            </li>
          ))}
        </ul>
        <div
          className={`mt-8 inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wider ${
            isDark ? "text-brand-light" : "text-brand-light"
          }`}
        >
          {cta}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path
              d="M5 12h14M13 6l6 6-6 6"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </a>
  );
}
