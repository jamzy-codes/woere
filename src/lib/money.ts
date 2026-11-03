/** All money is stored as a whole number of kobo (1 naira = 100 kobo). Never floats. */
export type Kobo = number;

export class MoneyError extends Error {}

export function assertKobo(value: number): asserts value is Kobo {
  if (!Number.isSafeInteger(value)) {
    throw new MoneyError(`Not a whole number of kobo: ${value}`);
  }
}

/** Parse a naira string like "1,250.50" into kobo, without any float maths. */
export function nairaToKobo(input: string): Kobo {
  const cleaned = input.trim().replace(/[₦,\s]/g, "");
  const match = /^(-)?(\d+)(?:\.(\d{1,2}))?$/.exec(cleaned);
  if (!match) throw new MoneyError(`Invalid naira amount: "${input}"`);

  const [, sign, whole, frac = ""] = match;
  const kobo = Number(whole) * 100 + Number(frac.padEnd(2, "0"));
  assertKobo(kobo);
  return sign && kobo !== 0 ? -kobo : kobo;
}

const nairaFormat = new Intl.NumberFormat("en-NG", {
  style: "currency",
  currency: "NGN",
});

/** Format kobo for display, e.g. 125050 -> "₦1,250.50". */
export function formatKobo(kobo: Kobo): string {
  assertKobo(kobo);
  return nairaFormat.format(kobo / 100);
}

export function sumKobo(values: Kobo[]): Kobo {
  const total = values.reduce((acc, v) => {
    assertKobo(v);
    return acc + v;
  }, 0);
  assertKobo(total);
  return total;
}