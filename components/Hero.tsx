export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-hero-grad pt-32 pb-20 text-white sm:pt-40 sm:pb-28">
      <div className="absolute inset-0 -z-10 bg-grid-overlay opacity-40" aria-hidden />
      <div className="absolute -right-32 top-12 -z-10 h-[520px] w-[520px] rounded-full bg-brand-light/30 blur-3xl" aria-hidden />
      <div className="absolute -left-40 bottom-0 -z-10 h-[480px] w-[480px] rounded-full bg-brand-light/10 blur-3xl" aria-hidden />

      <div className="container-px">
        <div className="max-w-4xl">
          <div className="eyebrow-light mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-light" />
            Группа компаний&nbsp;·&nbsp;С 2024&nbsp;года на рынке Евразии
          </div>

          <h1 className="h1">
            Строительство и{" "}
            <span className="bg-gradient-to-r from-brand-light to-[#7ad3f3] bg-clip-text text-transparent">
              логистика
            </span>
            <br />
            на пространстве Евразии
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl">
            ЕСКЛ — это два направления одной компании. Возводим и отделываем
            объекты для застройщиков, доставляем грузы по России и СНГ.
            Когда стройка и логистика — в&nbsp;одних руках, сроки сжимаются,
            а ответственность не «теряется» между подрядчиками.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="#construction" className="btn-primary">
              Строительство
              <Arrow />
            </a>
            <a href="#logistics" className="btn-outline">
              Логистика
              <Arrow />
            </a>
          </div>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          <HeroCard
            kicker="Объекты"
            value="50+"
            sub="секций и ЖК в работе"
          />
          <HeroCard
            kicker="География"
            value="10 стран"
            sub="Россия и СНГ"
          />
          <HeroCard
            kicker="Парк техники"
            value="120+"
            sub="ед. собственной и партнёрской"
          />
          <HeroCard
            kicker="Команда"
            value="350+"
            sub="инженеров и водителей"
          />
        </div>
      </div>
    </section>
  );
}

function HeroCard({
  kicker,
  value,
  sub,
}: {
  kicker: string;
  value: string;
  sub: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur">
      <div className="font-display text-[11px] font-bold uppercase tracking-wider text-brand-light">
        {kicker}
      </div>
      <div className="mt-2 font-display text-3xl font-extrabold text-white sm:text-4xl">
        {value}
      </div>
      <div className="mt-1 text-sm text-white/65">{sub}</div>
    </div>
  );
}

function Arrow() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="ml-1">
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
