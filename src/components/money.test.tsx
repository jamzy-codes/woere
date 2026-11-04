import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { Money } from "./money";

describe("Money", () => {
  const text = (markup: string) => markup.replace(/<[^>]*>/g, "");

  it("shows explicit signs for nonzero signed amounts", () => {
    expect(text(renderToStaticMarkup(<Money kobo={125050} tone="signed" />))).toBe("+₦1,250.50");
    expect(text(renderToStaticMarkup(<Money kobo={-125050} tone="signed" />))).toBe("−₦1,250.50");
    expect(text(renderToStaticMarkup(<Money kobo={-125050} />))).toBe("−₦1,250.50");
    expect(text(renderToStaticMarkup(<Money kobo={0} tone="signed" />))).toBe("₦0.00");
  });

  it("isolates the naira glyph at normal and large sizes", () => {
    const markup = renderToStaticMarkup(<Money kobo={123456789012} />);
    expect(markup).toContain("font-mono tabular-nums");
    expect(markup).toContain('<span class="naira-symbol">₦</span>');
    expect(text(markup)).toBe("₦1,234,567,890.12");

    const large = renderToStaticMarkup(<Money kobo={-125050} tone="signed" className="text-3xl" />);
    expect(large).toContain("text-3xl");
    expect(large).toContain('<span class="naira-symbol">₦</span>');
    expect(text(large)).toBe("−₦1,250.50");

    const largeNeutral = renderToStaticMarkup(<Money kobo={125050} className="text-3xl" />);
    expect(largeNeutral).toContain('<span class="naira-symbol">₦</span>');
    expect(text(largeNeutral)).toBe("₦1,250.50");
  });
});
