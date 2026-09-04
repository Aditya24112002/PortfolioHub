import ThemeSwitcher from "../ThemeSwitcher";
export default function Navbar() {
    return (
      <nav className="grid grid-cols-3 items-center px-10 py-5 bg-[var(--bg-sub)]">
        <div className="flex items-center gap-3 justify-self-start">
          <div className="h-10 w-10 rounded-full bg-[var(--bg-light)]"></div>
  
          <h1 className="text-xl font-bold">
            PortfolioHub
          </h1>
        </div>
  
        <ul className="flex gap-8 justify-center">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
  
        <div className="flex items-center gap-3 justify-self-end">
            <ThemeSwitcher />
            <button className="rounded-lg bg-[var(--button-bg)] px-4 py-2 text-[var(--text-dark)]">
                Login
            </button>
        </div>
      </nav>
    );
  }