import { Money } from "@/components/money";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const swatches = [
  { name: "Forest", hex: "#0F3D2E", background: "bg-primary", light: true },
  { name: "Gold", hex: "#C8A24A", background: "bg-accent" },
  { name: "Canvas", hex: "#F7F5EF", background: "bg-background" },
  { name: "Ink", hex: "#101412", background: "bg-foreground", light: true },
  { name: "Positive", hex: "#1E9E5A", background: "bg-positive" },
  { name: "Negative", hex: "#C0392B", background: "bg-negative", light: true },
];

export default function DemoPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-8 sm:py-16">
      <header className="mb-12 border-b border-border pb-8">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-primary">Woere / Design system</p>
        <h1 className="font-heading text-4xl font-semibold tracking-tight sm:text-6xl">See your profit.</h1>
        <p className="mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">A clear picture of what comes in, what goes out, and what is left for your business.</p>
      </header>

      <div className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
        <div className="space-y-12">
          <section aria-labelledby="palette-title">
            <h2 id="palette-title" className="mb-5 text-xl font-semibold">Palette</h2>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {swatches.map((swatch) => (
                <div key={swatch.name} className="overflow-hidden rounded-xl border border-border bg-card">
                  <div className={`${swatch.background} flex h-28 items-end p-3 ${swatch.light ? "text-white" : "text-foreground"}`}>
                    <span className="text-sm font-medium">{swatch.name}</span>
                  </div>
                  <div className="px-3 py-2 font-mono text-xs tabular-nums text-muted-foreground">{swatch.hex}</div>
                </div>
              ))}
            </div>
          </section>

          <section aria-labelledby="type-title" className="space-y-4">
            <h2 id="type-title" className="text-xl font-semibold">Type</h2>
            <div className="rounded-xl border border-border bg-card p-5 sm:p-7">
              <p className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">Know where you stand</p>
              <p className="mt-3 text-lg">Your business, in focus.</p>
              <p className="mt-2 text-sm text-muted-foreground">Geist gives everyday information a calm, readable voice.</p>
              <p className="mt-5 font-mono text-2xl tabular-nums">₦1,234,567.89</p>
              <p className="mt-1 text-xs text-muted-foreground">Geist Mono · tabular figures</p>
            </div>
          </section>

          <section aria-labelledby="buttons-title">
            <h2 id="buttons-title" className="mb-5 text-xl font-semibold">Actions</h2>
            <div className="flex flex-wrap gap-3">
              {(["default", "outline", "secondary", "ghost", "destructive", "link"] as const).map((variant) => (
                <Button key={variant} variant={variant}>{variant}</Button>
              ))}
            </div>
          </section>
        </div>

        <div className="space-y-12">
          <section aria-labelledby="card-title">
            <h2 id="card-title" className="mb-5 text-xl font-semibold">Cards & badges</h2>
            <Card>
              <CardHeader>
                <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                  <CardTitle>Trading snapshot</CardTitle>
                  <Badge>Healthy</Badge>
                </div>
                <CardDescription>October 2026 · Adaeze Store</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between gap-3 border-t border-border pt-4"><span>Revenue</span><Money kobo={124500000} /></div>
                <div className="flex items-center justify-between gap-3"><span>Expenses</span><Money kobo={-78240000} /></div>
                <div className="flex items-center justify-between gap-3 border-t border-border pt-4 font-semibold"><span>Net profit</span><Money kobo={46260000} tone="signed" /></div>
                <div className="flex flex-wrap gap-2 pt-2"><Badge variant="secondary">Inventory</Badge><Badge variant="outline">October</Badge><Badge variant="destructive">Low stock</Badge></div>
              </CardContent>
            </Card>
          </section>

          <section aria-labelledby="money-title">
            <h2 id="money-title" className="mb-5 text-xl font-semibold">Money</h2>
            <div className="grid gap-3 rounded-xl border border-border bg-card p-5 text-sm">
              <div className="flex justify-between gap-3"><span>Positive</span><Money kobo={125050} tone="signed" /></div>
              <div className="flex justify-between gap-3"><span>Negative</span><Money kobo={-125050} tone="signed" /></div>
              <div className="flex justify-between gap-3"><span>Zero</span><Money kobo={0} tone="signed" /></div>
              <div className="flex justify-between gap-3"><span>Large number</span><Money kobo={123456789012} /></div>
            </div>
          </section>

          <section aria-labelledby="accordion-title">
            <h2 id="accordion-title" className="mb-5 text-xl font-semibold">Accordion</h2>
            <Accordion type="single" collapsible className="rounded-xl border border-border bg-card px-4">
              <AccordionItem value="profit"><AccordionTrigger>How is profit calculated?</AccordionTrigger><AccordionContent>Profit is the money earned from sales after expenses are deducted.</AccordionContent></AccordionItem>
              <AccordionItem value="stock"><AccordionTrigger>Where does inventory fit in?</AccordionTrigger><AccordionContent>Track what you have in stock so you can see what is available to sell.</AccordionContent></AccordionItem>
            </Accordion>
          </section>
        </div>
      </div>
    </main>
  );
}
