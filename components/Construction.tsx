type Service = {
  title: string;
  desc: string;
  items: string[];
  icon: React.ReactNode;
  highlight?: boolean;
};

const services: Service[] = [
  {
    title: "Монолитные работы",
    desc: "Полный цикл железобетонных конструкций — от подготовки основания до устройства перекрытий.",
    items: [
      "Фундаменты любой сложности",
      "Колонны, стены, пилоны",
      "Перекрытия и лестничные марши",
      "Бетонирование при отрицательных температурах",
    ],
    icon: <IconConcrete />,
  },
  {
    title: "Каменная кладка",
    desc: "Несущие стены и перегородки из кирпича, газобетона и керамических блоков.",
    items: [
      "Кирпич, керамика, газо- и пенобетон",
      "Несущие стены и перегородки",
      "Вентилируемые фасадные слои",
      "Соблюдение проектных СНиПов",
    ],
    icon: <IconBricks />,
  },
  {
    title: "Инженерные системы",
    desc: "Внутренние и внешние инженерные сети объекта.",
    items: [
      "Отопление, водоснабжение, канализация",
      "Электрика и слаботочные системы",
      "Вентиляция и кондиционирование",
      "Пусконаладка и сдача СНТ",
    ],
    icon: <IconPipes />,
  },
  {
    title: "Отделочные работы",
    desc: "Black-box, white-box и чистовая отделка квартир и коммерческих помещений.",
    items: [
      "Штукатурка, стяжка, шпаклёвка",
      "Малярные работы, обои, декор",
      "Укладка плитки и керамогранита",
      "Напольные покрытия: ламинат, паркет",
    ],
    icon: <IconBrush />,
  },
  {
    title: "Фасад и остекление",
    desc: "Светопрозрачные конструкции и навесные вентилируемые фасады.",
    items: [
      "Витражное и панорамное остекление",
      "НВФ из керамогранита и металлокассет",
      "Утепление и герметизация",
      "Балконы и лоджии",
    ],
    icon: <IconFacade />,
  },
  {
    title: "Сервис окон ПВХ",
    desc: "Предпродажная подготовка и регулировка окон в новостройках — отдельное направление с фиксированным прайсом.",
    items: [
      "Регулировка фурнитуры (1 220 ₽/блок)",
      "Замена петель, цапф, приводов",
      "Замена стеклопакетов и уплотнителей",
      "Установка приточных клапанов",
    ],
    highlight: true,
    icon: <IconWindow />,
  },
];

export default function Construction() {
  return (
    <section id="construction" className="section">
      <div className="container-px">
        <div className="flex items-end justify-between gap-6">
          <div>
            <div className="eyebrow mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-light" />
              Направление 01
            </div>
            <h2 className="h2 text-brand">Строительство</h2>
            <div className="divider-accent mt-6" />
          </div>
          <a
            href="#contacts"
            className="hidden font-display text-sm font-bold uppercase tracking-wider text-brand-light hover:text-brand sm:inline-flex"
          >
            Запросить КП →
          </a>
        </div>

        <p className="mt-6 max-w-3xl text-lg text-slate-600">
          Берёмся за общестроительные и отделочные работы для застройщиков и
          генподрядных организаций. Работаем как с отдельными разделами, так и
          с объектами под ключ. Собственные бригады, опытные ИТР, своё снабжение.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className={`card relative overflow-hidden ${
                s.highlight ? "ring-2 ring-brand-light" : ""
              }`}
            >
              {s.highlight && (
                <span className="absolute right-5 top-5 rounded-full bg-brand-light px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                  Фикс. прайс
                </span>
              )}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-light/10 text-brand-light">
                {s.icon}
              </div>
              <h3 className="mt-5 font-display text-lg font-bold uppercase tracking-tight text-brand">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{s.desc}</p>
              <ul className="mt-5 space-y-2.5">
                {s.items.map((i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                    <Check />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
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

function IconConcrete() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <path d="M3 8h18l-2 13H5L3 8zM3 8l2-4h14l2 4" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M8 12v6M12 12v6M16 12v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
function IconBricks() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="4" width="18" height="5" stroke="currentColor" strokeWidth="2" />
      <rect x="3" y="9" width="18" height="5" stroke="currentColor" strokeWidth="2" />
      <rect x="3" y="14" width="18" height="5" stroke="currentColor" strokeWidth="2" />
      <path d="M9 4v5M15 9v5M9 14v5" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
function IconPipes() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <path d="M3 7h7a4 4 0 0 1 4 4v6h7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M16 5h2v4h-2zM6 17h2v4H6z" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
function IconBrush() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <path d="M14 3l7 7-9 9-3-3 9-9zM9 16l-4 1 1-4" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M5 17L3 22l5-2" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}
function IconFacade() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <rect x="4" y="3" width="16" height="18" stroke="currentColor" strokeWidth="2" />
      <path d="M4 9h16M4 15h16M9 3v18M15 3v18" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
function IconWindow() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="18" height="18" rx="1.5" stroke="currentColor" strokeWidth="2" />
      <path d="M3 12h18M12 3v18" stroke="currentColor" strokeWidth="2" />
      <circle cx="9" cy="9" r="1" fill="currentColor" />
    </svg>
  );
}
