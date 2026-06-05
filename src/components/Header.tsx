import { Home, UserRound, BriefcaseBusiness, PenSquare, Mail, GraduationCap, Code2 } from "lucide-react";

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
  return (
    <header className="fixed inset-x-0 top-4 z-50">
      <nav className="mx-auto flex w-fit items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900/85 p-2 backdrop-blur">
        {navItems.map(({ href, icon: Icon, label }) => (
          <a
            key={href}
            href={href}
            aria-label={label}
            className="rounded-lg p-2 text-zinc-400 transition hover:bg-zinc-800 hover:text-white"
          >
            <Icon className="h-4 w-4" />
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
