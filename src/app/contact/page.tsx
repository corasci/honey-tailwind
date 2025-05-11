export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-black p-8">
      <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
      <form className="space-y-4 max-w-md">
        <input className="w-full border p-2" placeholder="Your Name" />
        <input className="w-full border p-2" placeholder="Your Email" type="email" />
        <textarea className="w-full border p-2" placeholder="Your Message" rows={5} />
        <button className="bg-black text-white px-4 py-2 rounded" type="submit">Send</button>
      </form>
    </main>
  );
}
