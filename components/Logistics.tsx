type Service = {
  title: string;
  desc: string;
  items: string[];
  icon: React.ReactNode;
  highlight?: boolean;
};

const services: Service[] = [
  {
    title: "Сборные грузы по России",
    desc: "Доставка от 1 кг до нескольких тонн между 300+ населёнными пунктами РФ.",
    items: [
      "Терминальная сеть в крупных городах",
      "Доставка «дверь–дверь» и «дверь–склад»",
      "Страхование груза от 0,07%",
      "Отслеживание онлайн в личном кабинете",
    ],
    icon: <IconBoxes />,
    highlight: true,
  },
  {
    title: "Выделенный транспорт (FTL)",
    desc: "Магистральные тягачи под отдельный груз: тент, реф, изотерм, борт.",
    items: [
      "20-тонники, фуры 82–110 м³",
      "Реф-перевозки: −20…+25 °C",
      "Негабарит и тяжеловесы — по запросу",
      "Цена фиксируется на маршрут",
    ],
    icon: <IconTruck />,
  },
  {
    title: "Доставка стройматериалов",
    desc: "Профильная экспертиза в перевозке стройгрузов на объекты застройщиков.",
    items: [
      "Сыпучие, ЖБИ, металл, отделка",
      "Манипуляторы и шаланды",
      "Доставка в окно по графику стройки",
      "Возврат паллет и тары",
    ],
    icon: <IconCrane />,
  },
  {
    title: "Международные перевозки СНГ",
    desc: "Доставка в страны ЕАЭС и Центральной Азии — приоритетное направление.",
    items: [
      "Казахстан, Беларусь, Армения, Кыргызстан",
      "Узбекистан, Таджикистан, Туркменистан",
      "Таможенное оформление под ключ",
      "СНТ, ЭПД, документы перевозчика",
    ],
    icon: <IconGlobe />,
  },
  {
    title: "Складское хранение",
    desc: "Ответхранение и кросс-докинг на собственных и арендованных складах.",
    items: [
      "Класс А и B-склады в МО и регионах",
      "Адресное хранение, WMS",
      "Маркировка, упаковка, комплектация",
      "Кросс-док и приём по графику",
    ],
    icon: <IconWarehouse />,
  },
  {
    title: "Маркетплейсы и e-com",
    desc: "Фулфилмент и доставка на склады Wildberries, Ozon, Я.Маркет.",
    items: [
      "Приёмка, маркировка, упаковка",
      "Доставка на FBO/FBS-склады",
      "Возвраты и постпродажная обработка",
      "Кол-центр и обработка заказов",
    ],
    icon: <IconCart />,
  },
];

export default function Logistics() {
  return (
    <section id="logistics" className="section relative overflow-hidden bg-brand text-white">
      <div className="absolute inset-0 -z-10 bg-grid-overlay opacity-25" aria-hidden />
      <div className="absolute -right-40 top-20 h-[420px] w-[420px] rounded-full bg-brand-light/20 blur-3xl" aria-hidden />

      <div className="container-px">
        <div className="flex items-end justify-between gap-6">
          <div>
            <div className="eyebrow-light mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-light" />
              Направление 02
            </div>
            <h2 className="h2 text-white">Логистика</h2>
            <div className="divider-accent mt-6" />
          </div>
          <a
            href="#contacts"
            className="hidden font-display text-sm font-bold uppercase tracking-wider text-brand-light hover:text-white sm:inline-flex"
          >
            Рассчитать перевозку →
          </a>
        </div>

        <p className="mt-6 max-w-3xl text-lg text-white/75">
          Грузоперевозки по России и странам Евразийского экономического союза.
          Сборные и выделенные машины, специализация на стройгрузах и доставке
          на объекты заказчиков. Свой автопарк и проверенные партнёрские
          перевозчики на регулярных маршрутах.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className={`card-dark relative overflow-hidden ${
                s.highlight ? "ring-2 ring-brand-light" : ""
              }`}
            >
              {s.highlight && (
                <span className="absolute right-5 top-5 rounded-full bg-brand-light px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                  Хит
                </span>
              )}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-light/15 text-brand-light">
                {s.icon}
              </div>
              <h3 className="mt-5 font-display text-lg font-bold uppercase tracking-tight text-white">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{s.desc}</p>
              <ul className="mt-5 space-y-2.5">
                {s.items.map((i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-white/80">
                    <Check />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:grid-cols-3 sm:p-8">
          <Stat value="10 стран" label="География перевозок" />
          <Stat value="300+" label="Направлений по России" />
          <Stat value="24/7" label="Диспетчерская служба" />
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-display text-3xl font-extrabold text-white">{value}</div>
      <div className="mt-1 text-sm text-white/60">{label}</div>
    </div>
  );
}

function Check() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      className="mt-0.5 shrink-0 text-brand-light"
    >
      <path
        d="M5 12.5l5 5L20 7"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconBoxes() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="8" height="8" stroke="currentColor" strokeWidth="2" />
      <rect x="13" y="3" width="8" height="8" stroke="currentColor" strokeWidth="2" />
      <rect x="3" y="13" width="8" height="8" stroke="currentColor" strokeWidth="2" />
      <rect x="13" y="13" width="8" height="8" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
function IconTruck() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <path d="M2 7h13v10H2zM15 10h4l3 3v4h-7" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <circle cx="6" cy="18" r="2" stroke="currentColor" strokeWidth="2" />
      <circle cx="18" cy="18" r="2" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
function IconCrane() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <path d="M5 4h14L7 8v13M5 4l2 4M19 4l-7 4" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M7 14h6v6H7z" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
function IconGlobe() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
function IconWarehouse() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <path d="M3 9l9-5 9 5v12H3V9z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <rect x="7" y="13" width="10" height="8" stroke="currentColor" strokeWidth="2" />
      <path d="M7 17h10" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
function IconCart() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <path d="M3 4h2l2 12h12l2-9H6" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <circle cx="9" cy="20" r="1.6" stroke="currentColor" strokeWidth="2" />
      <circle cx="17" cy="20" r="1.6" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
