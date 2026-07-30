export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 text-sm text-zinc-600 sm:grid-cols-2 lg:grid-cols-6 lg:px-8">
        <div>
          <h3 className="font-semibold text-zinc-900">Company</h3>
          <p className="mt-3">Mintro Labs</p>
        </div>
        <div>
          <h3 className="font-semibold text-zinc-900">Services</h3>
          <p className="mt-3">Branding, Web, Software, AI</p>
        </div>
        <div>
          <h3 className="font-semibold text-zinc-900">Quick Links</h3>
          <p className="mt-3">Home • About • Contact</p>
        </div>
        <div>
          <h3 className="font-semibold text-zinc-900">Social Media</h3>
          <p className="mt-3">LinkedIn • Instagram • Behance</p>
        </div>
        <div>
          <h3 className="font-semibold text-zinc-900">Contact</h3>
          <p className="mt-3">hello@mintrolabs.com</p>
        </div>
        <div>
          <h3 className="font-semibold text-zinc-900">Newsletter</h3>
          <form className="mt-3 flex gap-2">
            <input
              type="email"
              required
              aria-label="Email"
              placeholder="Email"
              className="w-full rounded-full border border-zinc-300 px-3 py-2 text-sm outline-none focus:border-sky-400"
            />
            <button type="submit" className="rounded-full bg-zinc-900 px-4 py-2 text-white">Join</button>
          </form>
        </div>
      </div>
    </footer>
  );
}
