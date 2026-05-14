import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container-px py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo variant="dark" size="md" />
            <p className="mt-5 max-w-sm text-sm text-slate-600">
              Группа компаний с двумя направлениями: общестроительные работы для
              застройщиков и грузоперевозки по России и странам ЕАЭС.
            </p>
          </div>

          <div>
            <div className="font-display text-xs font-bold uppercase tracking-wider text-brand-light">
              Направления
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#construction" className="text-slate-700 hover:text-brand-light">Строительство</a></li>
              <li><a href="#logistics" className="text-slate-700 hover:text-brand-light">Логистика</a></li>
              <li><a href="#geography" className="text-slate-700 hover:text-brand-light">География</a></li>
              <li><a href="#about" className="text-slate-700 hover:text-brand-light">О компании</a></li>
            </ul>
          </div>

          <div>
            <div className="font-display text-xs font-bold uppercase tracking-wider text-brand-light">
              Контакты
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="tel:+79258680935" className="font-semibold text-brand hover:text-brand-light">
                  +7 (925) 868‑09‑35
                </a>
              </li>
              <li>
                <a href="mailto:e.moiseev@oescl.ru" className="text-slate-700 hover:text-brand-light">
                  e.moiseev@oescl.ru
                </a>
              </li>
              <li className="text-slate-600">
                г. Москва, ул. Тихомирова, 17 к.1, помещ. 14/1
              </li>
            </ul>
          </div>

          <div>
            <div className="font-display text-xs font-bold uppercase tracking-wider text-brand-light">
              Реквизиты
            </div>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>ООО «ЕСК»</li>
              <li>ИНН 9715495245</li>
              <li>КПП 771501001</li>
              <li>ОГРН 1247700664122</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-slate-200 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center">
          <div>
            © {new Date().getFullYear()} ООО «Евразийская Строительная Компания». Все права защищены.
          </div>
          <div className="font-semibold tracking-wider text-brand-light">
            СТРОИМ. ВОЗИМ. ОТВЕЧАЕМ.
          </div>
        </div>
      </div>
    </footer>
  );
}
