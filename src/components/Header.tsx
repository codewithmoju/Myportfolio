import { Home, UserRound, BriefcaseBusiness, PenSquare, Mail, GraduationCap, Code2, Sun, Moon } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

const navItems = [
  { href: "#home", icon: Home, label: "Home" },
  { href: "#projects", icon: BriefcaseBusiness, label: "Projects" },
  { href: "#experience", icon: UserRound, label: "Experience" },
  { href: "#education", icon: GraduationCap, label: "Education" },
  { href: "#about", icon: Code2, label: "Tech Stack" },
  { href: "#thoughts", icon: PenSquare, label: "Thoughts" },
  { href: "#contact", icon: Mail, label: "Contact" },
];

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed inset-x-0 top-4 z-50">
      <nav className="mx-auto flex w-fit items-center gap-1 rounded-xl border border-border/60 bg-card/80 p-1.5 backdrop-blur-md shadow-lg transition-colors">
        {navItems.map(({ href, icon: Icon, label }) => (
          <a
            key={href}
            href={href}
            aria-label={label}
            className="rounded-lg p-2 text-muted-foreground transition hover:bg-muted hover:text-foreground"
          >
            <Icon className="h-4 w-4" />
          </a>
        ))}
        
        <div className="h-4 w-[1px] bg-border mx-1" />

        <button
          onClick={toggleTheme}
          aria-label="Toggle Theme"
          className="rounded-lg p-2 text-muted-foreground transition hover:bg-muted hover:text-foreground cursor-pointer active:scale-95"
        >
          {theme === "dark" ? (
            <Sun className="h-4 w-4 text-amber-400 animate-pulse" />
          ) : (
            <Moon className="h-4 w-4 text-indigo-600" />
          )}
        </button>
      </nav>
    </header>
  );
};

export default Header;
