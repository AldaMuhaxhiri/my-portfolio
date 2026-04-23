import { motion } from "framer-motion";
import {
  Briefcase,
  Home,
  Mail,
  Sparkles,
  UserRound,
} from "lucide-react";
import { useEffect, useState } from "react";
import type { ComponentType, MouseEvent } from "react";
import { useLocation } from "wouter";

import { cn } from "@/lib/utils";

type NavItem = {
  key: string;
  label: string;
  hash?: string;
  icon: ComponentType<{ className?: string }>;
};

const navItems: NavItem[] = [
  { key: "home", label: "Home", icon: Home },
  { key: "projects", label: "Work", hash: "projects", icon: Briefcase },
  { key: "skills", label: "Skills", hash: "skills", icon: Sparkles },
  { key: "about", label: "About", hash: "about", icon: UserRound },
  { key: "contact", label: "Contact", hash: "contact", icon: Mail },
];

export function OrbitalNav() {
  const [location, setLocation] = useLocation();
  const [activeKey, setActiveKey] = useState("home");
  const [pendingHash, setPendingHash] = useState<string | null>(null);
  const isHome = location === "/";

  const scrollToSection = (hash: string) => {
    const target = document.getElementById(hash);
    if (!target) return;

    target.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState({}, "", `/#${hash}`);
    setActiveKey(hash);
  };

  const handleNavClick = (event: MouseEvent<HTMLAnchorElement>, item: NavItem) => {
    event.preventDefault();

    if (!item.hash) {
      if (isHome) {
        window.scrollTo({ top: 0, behavior: "smooth" });
        window.history.replaceState({}, "", "/");
        setActiveKey("home");
        return;
      }

      setLocation("/");
      return;
    }

    if (isHome) {
      scrollToSection(item.hash);
      return;
    }

    setPendingHash(item.hash);
    setLocation("/");
  };

  useEffect(() => {
    if (!isHome) {
      setActiveKey("home");
      return;
    }

    const sectionIds = ["projects", "skills", "about", "contact"];

    const updateActive = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash && sectionIds.includes(hash)) {
        setActiveKey(hash);
        return;
      }

      if (window.scrollY < 120) {
        setActiveKey("home");
        return;
      }

      let current = "home";
      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (!element) continue;

        const top = element.getBoundingClientRect().top;
        if (top <= 180) current = id;
      }

      setActiveKey(current);
    };

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("hashchange", updateActive);

    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("hashchange", updateActive);
    };
  }, [isHome]);

  useEffect(() => {
    if (!isHome) return;

    const hashFromUrl = window.location.hash.replace("#", "");
    const hashToHandle = pendingHash ?? hashFromUrl;
    if (!hashToHandle) return;

    const raf = window.requestAnimationFrame(() => {
      scrollToSection(hashToHandle);
      if (pendingHash === hashToHandle) setPendingHash(null);
    });

    return () => window.cancelAnimationFrame(raf);
  }, [isHome, pendingHash]);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-4 z-[70] hidden justify-center px-4 md:flex">
      <motion.nav
        initial={{ opacity: 0, y: -20, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-auto relative"
        aria-label="Primary"
      >
        <div className="pointer-events-none absolute inset-0 -z-20 rounded-full bg-gradient-to-r from-rose-500/16 via-fuchsia-500/18 to-pink-500/16 blur-2xl" />
        <div className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-card/75 backdrop-blur-xl" />

        <div className="relative overflow-hidden rounded-full border border-border bg-card/80 px-2.5 py-2 shadow-[0_14px_50px_rgba(3,3,10,0.18)]">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeKey === item.key;

              return (
                <li key={item.key} className="relative">
                  {isActive ? (
                    <motion.span
                      layoutId="orbital-nav-active"
                      className="absolute inset-0 rounded-full bg-foreground/10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  ) : null}

                  <a
                    href={item.hash ? `/#${item.hash}` : "/"}
                    onClick={(event) => handleNavClick(event, item)}
                    className={cn(
                      "relative inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-xs font-medium tracking-[0.12em] uppercase transition-all duration-300",
                      "text-foreground/68 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-300/55 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                    )}
                  >
                    <Icon className="h-3.5 w-3.5 sm:hidden" />
                    <span className="hidden sm:inline">{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </motion.nav>
    </div>
  );
}
