const countries = [
  { code: "RU", name: "Россия", flag: "🇷🇺", hub: true },
  { code: "KZ", name: "Казахстан", flag: "🇰🇿", hub: true },
  { code: "BY", name: "Беларусь", flag: "🇧🇾", hub: true },
  { code: "AM", name: "Армения", flag: "🇦🇲" },
  { code: "KG", name: "Кыргызстан", flag: "🇰🇬" },
  { code: "UZ", name: "Узбекистан", flag: "🇺🇿" },
  { code: "TJ", name: "Таджикистан", flag: "🇹🇯" },
  { code: "TM", name: "Туркменистан", flag: "🇹🇲" },
  { code: "AZ", name: "Азербайджан", flag: "🇦🇿" },
  { code: "GE", name: "Грузия", flag: "🇬🇪" },
];

const ruCities = [
  "Москва",
  "Санкт-Петербург",
  "Казань",
  "Нижний Новгород",
  "Екатеринбург",
  "Самара",
  "Ростов-на-Дону",
  "Краснодар",
  "Новосибирск",
  "Челябинск",
  "Уфа",
  "Тюмень",
  "Красноярск",
  "Иркутск",
  "Воронеж",
  "Волгоград",
];

export default function Geography() {
  return (
    <section id="geography" className="section bg-brand-muted/40">
      <div className="container-px">
        <div className="grid items-end gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <div className="eyebrow mb-5">География</div>
            <h2 className="h2 text-brand">
              Россия и страны Евразии
            </h2>
            <div className="divider-accent mt-6" />
          </div>
          <p className="text-lg text-slate-600">
            Строительные объекты — в крупнейших агломерациях России. Логистика —
            10 стран, 300+ направлений по РФ и регулярные маршруты в страны ЕАЭС.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <div className="rounded-3xl border border-slate-200/80 bg-white p-7 shadow-soft">
            <div className="font-display text-xs font-bold uppercase tracking-wider text-brand-light">
              Страны международных перевозок
            </div>
            <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
              {countries.map((c) => (
                <div
                  key={c.code}
                  className={`flex items-center gap-3 rounded-xl border px-3.5 py-3 transition ${
                    c.hub
                      ? "border-brand-light/40 bg-brand-light/5"
                      : "border-slate-200 bg-white"
                  }`}
                >
                  <span className="text-2xl" aria-hidden>
                    {c.flag}
                  </span>
                  <div className="leading-tight">
                    <div className="font-display text-sm font-bold uppercase tracking-tight text-brand">
                      {c.name}
                    </div>
                    {c.hub && (
                      <div className="mt-0.5 text-[10px] font-semibold uppercase tracking-wider text-brand-light">
                        ХАБ
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200/80 bg-white p-7 shadow-soft">
            <div className="font-display text-xs font-bold uppercase tracking-wider text-brand-light">
              Города России — регулярные рейсы
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {ruCities.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-sm font-semibold text-brand"
                >
                  {c}
                </span>
              ))}
              <span className="rounded-full border-2 border-dashed border-brand-light/40 px-3.5 py-1.5 text-sm font-semibold text-brand-light">
                + 280 населённых пунктов
              </span>
            </div>

            <div className="mt-7 rounded-2xl bg-brand p-5 text-white">
              <div className="font-display text-xs font-bold uppercase tracking-wider text-brand-light">
                Не нашли своё направление?
              </div>
              <p className="mt-2 text-sm text-white/80">
                Регулярно открываем новые маршруты под крупных заказчиков —
                пришлите параметры груза, посчитаем индивидуально.
              </p>
              <a
                href="#contacts"
                className="mt-4 inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-wider text-brand-light hover:text-white"
              >
                Запросить расчёт →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
