import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ЕСКЛ — Евразийская Строительно‑Логистическая Компания | Строительство и логистика",
  description:
    "ЕСКЛ — два направления одной компании: общестроительные и отделочные работы для застройщиков и доставка грузов по России и СНГ. Полный цикл от логистики стройматериалов до сдачи объекта.",
  keywords: [
    "ЕСКЛ",
    "Евразийская строительно‑логистическая компания",
    "строительные работы",
    "отделочные работы",
    "грузоперевозки по России",
    "сборные грузы",
    "доставка стройматериалов",
    "логистика СНГ",
    "Казахстан Беларусь Армения перевозки",
  ],
  openGraph: {
    title: "ЕСКЛ — Строительство и логистика на пространстве Евразии",
    description:
      "Общестроительные и отделочные работы + грузоперевозки по России и СНГ. Два направления одной компании.",
    type: "website",
    locale: "ru_RU",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/png" href="/mark.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
