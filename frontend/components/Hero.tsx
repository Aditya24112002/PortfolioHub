export default function Hero() {
    return (
      <section className="flex min-h-[80vh] flex-col items-center justify-center text-center">
  
        <p className="mb-4 accent-text">
          👋 Welcome to my portfolio
        </p>
  
        <h1 className="mb-4 text-6xl font-bold">
          Hi, I'm Aditya
        </h1>
  
        <h2 className="mb-6 text-2xl text-slate-400">
          Software Developer
        </h2>
  
        <p className="mb-8 max-w-2xl accent-text">
          Building modern web applications and continuously
          learning full-stack technologies.
        </p>
  
        <div className="flex gap-4">
  
          <button className="rounded-lg bg-[var(--button-bg)] border border-[var(--button-border)] px-6 py-3 text-[var(--text-dark)]">
            View Projects
          </button>
  
            <button className="rounded-lg border border-[var(--button-border)] px-6 py-3">
            Contact Me
          </button>
  
        </div>
  
      </section>
    );
  }