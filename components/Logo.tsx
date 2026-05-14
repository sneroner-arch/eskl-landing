import Image from "next/image";

export default function Logo({
  variant = "dark",
  showTagline = true,
  size = "md",
}: {
  variant?: "dark" | "light";
  showTagline?: boolean;
  size?: "sm" | "md" | "lg";
}) {
  const isLight = variant === "light";
  const markSize = size === "lg" ? 56 : size === "sm" ? 36 : 44;
  const titleClass =
    size === "lg"
      ? "text-3xl sm:text-4xl"
      : size === "sm"
      ? "text-xl"
      : "text-2xl sm:text-[28px]";

  return (
    <div className="flex items-center gap-3">
      <Image
        src="/mark.png"
        alt=""
        width={markSize}
        height={markSize}
        priority
        className={`shrink-0 ${isLight ? "brightness-[1.15] saturate-[1.05]" : ""}`}
        style={{ height: markSize, width: "auto" }}
      />
      <div className="leading-none">
        <div
          className={`font-display font-extrabold uppercase tracking-tight ${titleClass} ${
            isLight ? "text-white" : "text-brand"
          }`}
        >
          ЕСКЛ
        </div>
        {showTagline && (
          <div
            className={`mt-1 max-w-[180px] text-[10px] font-semibold uppercase leading-tight tracking-[0.14em] ${
              isLight ? "text-white/55" : "text-slate-500"
            }`}
          >
            Евразийская строительно‑логистическая компания
          </div>
        )}
      </div>
    </div>
  );
}
