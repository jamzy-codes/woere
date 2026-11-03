import { describe, expect, it } from "vitest";
import { assertKobo, formatKobo, MoneyError, nairaToKobo, sumKobo } from "./money";

describe("nairaToKobo", () => {
  it("parses whole and decimal amounts", () => {
    expect(nairaToKobo("1250")).toBe(125000);
    expect(nairaToKobo("1250.5")).toBe(125050);
    expect(nairaToKobo("1250.50")).toBe(125050);
  });

  it("handles commas, symbol and spaces", () => {
    expect(nairaToKobo("₦ 1,250.50")).toBe(125050);
  });

  it("avoids the classic float trap", () => {
    expect(19.99 * 100).not.toBe(1999); // 1998.9999999999998
    expect(nairaToKobo("19.99")).toBe(1999);
    expect(nairaToKobo("0.07")).toBe(7);
  });

  it("supports negatives and never returns -0", () => {
    expect(nairaToKobo("-5.25")).toBe(-525);
    expect(Object.is(nairaToKobo("-0"), 0)).toBe(true);
  });

  it("rejects invalid input", () => {
    expect(() => nairaToKobo("12.345")).toThrow(MoneyError);
    expect(() => nairaToKobo("abc")).toThrow(MoneyError);
    expect(() => nairaToKobo("")).toThrow(MoneyError);
  });
});

describe("formatKobo", () => {
  it("formats as naira", () => {
    const out = formatKobo(125050);
    expect(out).toContain("₦");
    expect(out).toContain("1,250.50");
  });

  it("formats negatives", () => {
    expect(formatKobo(-525)).toContain("5.25");
  });
});

describe("sumKobo and assertKobo", () => {
  it("adds exactly", () => {
    expect(sumKobo([10, 20])).toBe(30); // 0.1 + 0.2 in floats is 0.30000000000000004
    expect(sumKobo([])).toBe(0);
  });

  it("rejects non-integers", () => {
    expect(() => assertKobo(10.5)).toThrow(MoneyError);
    expect(() => sumKobo([1, 2.5])).toThrow(MoneyError);
  });
});