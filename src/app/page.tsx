export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-black p-8">
      <h1 className="text-4xl font-bold mb-4">Honey Provisions</h1>
      <p className="text-lg mb-6 max-w-xl">
        Minimalist product formulation consultancy. We develop formulas for functional beverages, capsules, powders, and skincare.
      </p>
      <div className="space-y-2 flex flex-col mt-4">
        <a href="/services" className="underline">Services</a>
        <a href="/about" className="underline">About</a>
        <a href="/contact" className="underline">Contact</a>
        <a href="/builder" className="underline">Start a Product Profile</a>
      </div>
    </main>
  );
}
