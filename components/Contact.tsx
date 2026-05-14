"use client";

import { useState } from "react";

type Direction = "construction" | "logistics" | "both";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [direction, setDirection] = useState<Direction>("construction");
  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    details: "",
    message: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, direction }),
      });
      if (!res.ok) throw new Error("network");
      setStatus("sent");
      setForm({ name: "", company: "", phone: "", email: "", details: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const detailsLabel =
    direction === "logistics"
      ? "Параметры груза / маршрут"
      : direction === "both"
      ? "Объект и параметры груза"
      : "Объект и объём работ";
  const detailsPh =
    direction === "logistics"
      ? "Москва → Алматы, 18 т, тент, дата отгрузки"
      : direction === "both"
      ? "Описание объекта и груза"
      : "ЖК «Северный квартал», 4 секции, BSh-отделка";

  return (
    <section id="contacts" className="relative section bg-brand text-white">
      <div className="absolute inset-0 -z-10 bg-grid-overlay opacity-25" aria-hidden />
      <div className="container-px grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <div className="eyebrow-light mb-5">Контакты</div>
          <h2 className="h2 text-white">
            Получите коммерческое предложение
          </h2>
          <div className="divider-accent mt-6" />

          <p className="mt-6 text-lg leading-relaxed text-white/80">
            Расскажите про задачу — выберите направление, заполните параметры.
            В течение 1 рабочего дня пришлём расчёт или назначим звонок.
          </p>

          <div className="mt-10 space-y-6">
            <ContactRow
              icon={<IconPhone />}
              label="Единый телефон"
              value="+7 (925) 868‑09‑35"
              href="tel:+79258680935"
            />
            <ContactRow
              icon={<IconMail />}
              label="E‑mail"
              value="e.moiseev@oescl.ru"
              href="mailto:e.moiseev@oescl.ru"
            />
            <ContactRow
              icon={<IconPin />}
              label="Адрес"
              value="г. Москва, ул. Тихомирова, д. 17, к. 1, помещ. 14/1"
            />
            <ContactRow
              icon={<IconUser />}
              label="Генеральный директор"
              value="Моисеев Евгений Евгеньевич"
            />
          </div>

          <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-sm text-white/70">
            <div className="font-display text-xs font-bold uppercase tracking-wider text-brand-light">
              Реквизиты
            </div>
            <div className="mt-3 grid grid-cols-2 gap-y-2 gap-x-4">
              <span className="text-white/50">Юр. лицо</span>
              <span>ООО «ЕСК»</span>
              <span className="text-white/50">ИНН / КПП</span>
              <span>9715495245 / 771501001</span>
              <span className="text-white/50">ОГРН</span>
              <span>1247700664122</span>
            </div>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-md sm:p-10"
        >
          <h3 className="font-display text-2xl font-extrabold uppercase tracking-tight text-white">
            Заявка на расчёт
          </h3>
          <p className="mt-2 text-sm text-white/60">Ответим в течение 1 рабочего дня</p>

          <div className="mt-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-white/60">
              Направление <span className="text-brand-light">*</span>
            </div>
            <div className="mt-2 grid grid-cols-3 gap-2 rounded-xl border border-white/10 bg-white/[0.06] p-1">
              <DirBtn
                active={direction === "construction"}
                onClick={() => setDirection("construction")}
                label="Стройка"
              />
              <DirBtn
                active={direction === "logistics"}
                onClick={() => setDirection("logistics")}
                label="Логистика"
              />
              <DirBtn
                active={direction === "both"}
                onClick={() => setDirection("both")}
                label="Оба"
              />
            </div>
          </div>

          <div className="mt-5 space-y-4">
            <Field label="Ваше имя" name="name" value={form.name} onChange={onChange} required />
            <Field label="Компания" name="company" value={form.company} onChange={onChange} required />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label="Телефон" name="phone" type="tel" value={form.phone} onChange={onChange} required />
              <Field label="E‑mail" name="email" type="email" value={form.email} onChange={onChange} />
            </div>
            <Field
              label={detailsLabel}
              name="details"
              value={form.details}
              onChange={onChange}
              placeholder={detailsPh}
            />
            <FieldArea
              label="Комментарий"
              name="message"
              value={form.message}
              onChange={onChange}
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="btn-primary mt-6 w-full disabled:opacity-60"
          >
            {status === "sending" ? "Отправляем…" : "Отправить заявку"}
          </button>

          {status === "sent" && (
            <div className="mt-4 rounded-xl border border-brand-light/40 bg-brand-light/10 px-4 py-3 text-sm text-brand-light">
              Спасибо! Заявка получена — свяжемся в течение 1 рабочего дня.
            </div>
          )}
          {status === "error" && (
            <div className="mt-4 rounded-xl border border-red-400/40 bg-red-400/10 px-4 py-3 text-sm text-red-300">
              Не удалось отправить. Позвоните, пожалуйста, по +7 (925) 868‑09‑35.
            </div>
          )}

          <p className="mt-4 text-xs leading-relaxed text-white/50">
            Нажимая «Отправить», вы соглашаетесь с обработкой персональных данных
            в&nbsp;соответствии с политикой конфиденциальности.
          </p>
        </form>
      </div>
    </section>
  );
}

function DirBtn({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-lg px-3 py-2.5 text-sm font-bold uppercase tracking-wide transition ${
        active
          ? "bg-brand-light text-white shadow"
          : "text-white/70 hover:bg-white/5 hover:text-white"
      }`}
    >
      {label}
    </button>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-4">
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-light/15 text-brand-light">
        {icon}
      </div>
      <div>
        <div className="text-xs font-semibold uppercase tracking-wider text-white/50">
          {label}
        </div>
        <div className="mt-0.5 font-semibold text-white">{value}</div>
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="block transition hover:text-brand-light">
      {content}
    </a>
  ) : (
    content
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="text-xs font-semibold uppercase tracking-wider text-white/60">
        {label} {required && <span className="text-brand-light">*</span>}
      </span>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="mt-2 block w-full rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-brand-light focus:bg-white/[0.09]"
      />
    </label>
  );
}

function FieldArea({
  label,
  name,
  value,
  onChange,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}) {
  return (
    <label className="block">
      <span className="text-xs font-semibold uppercase tracking-wider text-white/60">
        {label}
      </span>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        rows={3}
        className="mt-2 block w-full resize-none rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-brand-light focus:bg-white/[0.09]"
      />
    </label>
  );
}

function IconPhone() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M5 4h4l2 5-3 2c1 3 3 5 6 6l2-3 5 2v4c0 1-1 2-2 2-9 0-16-7-16-16 0-1 1-2 2-2z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function IconMail() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}
function IconPin() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 22s7-7 7-13a7 7 0 1 0-14 0c0 6 7 13 7 13z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
function IconUser() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" />
      <path d="M4 21c1-4 4-6 8-6s7 2 8 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
