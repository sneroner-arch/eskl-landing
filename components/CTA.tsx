export default function CTA() {
  return (
    <section className="relative overflow-hidden">
      <div className="container-px py-16 sm:py-20">
        <div className="relative overflow-hidden rounded-3xl bg-brand p-10 text-white shadow-card sm:p-14">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-light/30 blur-3xl" aria-hidden />
          <div className="absolute inset-0 bg-grid-overlay opacity-25" aria-hidden />

          <div className="relative grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <h3 className="font-display text-3xl font-extrabold uppercase leading-tight text-white sm:text-4xl">
                Один партнёр на{" "}
                <span className="text-brand-light">стройку и логистику</span>
              </h3>
              <p className="mt-4 max-w-xl text-white/75">
                Опишите задачу — рассчитаем смету по стройке, тариф на доставку
                или комплекс «материалы + работы». Звонок или письмо — как удобно.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <a href="#contacts" className="btn-primary">
                Оставить заявку
              </a>
              <a href="tel:+79258680935" className="btn-outline">
                Позвонить
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
