type HeroProps = {
  title: string;
  subtitle?: string;
};

export default function Hero({ title, subtitle }: HeroProps) {
  return (
    <section className="bg-gray-100 p-8 text-center mb-8">
      <h1 className="text-4xl font-bold">{title}</h1>
      {subtitle ? <p className="mt-2 text-lg">{subtitle}</p> : null}
    </section>
  );
}