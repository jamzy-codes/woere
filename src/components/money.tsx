import { formatKobo, type Kobo } from "@/lib/money";
import { cn } from "cn";

type MoneyProps = {
  kobo: Kobo;
  tone?: "neutral" | "signed";
  className?: string;
};

export function Money({ kobo, tone = "neutral", className }: MoneyProps) {
  const signed = tone === "signed";
  const value = formatKobo(kobo < 0 ? -kobo : kobo);
  const [beforeSymbol, afterSymbol] = value.split("₦");
  const sign = kobo < 0 ? "−" : signed && kobo > 0 ? "+" : "";

  return (
    <span className={cn(
      "font-mono tabular-nums whitespace-nowrap",
      signed && kobo > 0 && "text-positive-text",
      signed && kobo < 0 && "text-negative-text",
      className,
    )}>
      {sign}{beforeSymbol}<span className="naira-symbol">₦</span>{afterSymbol}
    </span>
  );
}
