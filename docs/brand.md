# Woere colour and type

The brand colours are forest `#0F3D2E`, gold `#C8A24A`, canvas `#F7F5EF`, and ink `#101412`. Positive `#1E9E5A` and negative `#C0392B` are data colours, not brand accents. Use `positive-text` (`#147143`) and `negative-text` (`#A72E24`) for small text. Signed amounts also carry a plus or minus sign.

Geist is the interface face; Geist Mono is used for figures. The shipped Geist Mono font has no U+20A6 glyph (the checked glyph ID was 0), so `<Money>` gives ₦ a Consolas, DejaVu Sans Mono, Liberation Mono, monospace stack at inherited size, weight, baseline, and colour.

## Contrast audit

Ratios use WCAG relative luminance, with translucent fills composited over the stated surface. Normal text needs 4.5:1; large text and UI indicators need 3:1. “Before” is the prior design-system implementation. Unchanged pairs are repeated to show their measured ratio.

| Pair | Before | After |
| --- | ---: | ---: |
| Muted text on canvas | 6.45:1 | 6.45:1 |
| Muted text on card | 6.97:1 | 6.97:1 |
| Signed positive on canvas | 5.55:1 | 5.55:1 |
| Signed positive on card | 5.99:1 | 5.99:1 |
| Signed negative on canvas | 4.99:1 | 6.30:1 |
| Signed negative on card | 5.39:1 | 6.80:1 |
| Destructive badge on canvas, 10% red fill | 4.32:1 | 5.45:1 |
| “Low stock” badge on card, 10% red fill | 4.64:1 | 5.86:1 |
| Destructive button on canvas, 10% red fill | 4.32:1 | 5.45:1 |
| Destructive button hover on canvas, 20% red fill | 3.71:1 | 4.68:1 |
| Default button label on forest | 12.16:1 | 12.16:1 |
| Default button hover label | 9.07:1 | 9.07:1 |
| Outline button label on canvas | 11.15:1 | 11.15:1 |
| Secondary button label | 10.55:1 | 10.55:1 |
| Ghost and link button label on canvas | 11.15:1 | 11.15:1 |
| Default badge label | 12.16:1 | 12.16:1 |
| Secondary badge label | 10.55:1 | 10.55:1 |
| Outline badge label on card | 18.40:1 | 18.40:1 |
| Dark ink on gold swatch | 7.71:1 | 7.71:1 |
| Dark ink on positive swatch | 5.39:1 | 5.39:1 |
| Focus ring on canvas | 1.99:1 | 4.77:1 |
| Focus ring on card | 2.04:1 | 5.16:1 |

The focus ring is now opaque dark gold (`#8A671A`) with a two-pixel surface-coloured offset. Buttons, badges, accordion triggers, and links receive a visible keyboard focus indicator.
