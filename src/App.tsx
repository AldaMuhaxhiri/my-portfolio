import { Route, Switch } from "wouter";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

import NotFound from "@/pages/not-found";
import { OrbitalNav } from "./components/layout/OrbitalNav";
import About from "./components/sections/About";
import { Contact } from "./components/sections/Contact";
import { Hero } from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";

type Theme = "light" | "dark";

function Home() {
  return (
    <div className="relative flex min-h-[100dvh] w-full flex-col overflow-x-hidden selection:bg-primary/20 selection:text-foreground">
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.012) 0%, rgba(255,255,255,0) 18%), radial-gradient(circle at top right, rgba(244,63,94,0.08) 0%, transparent 34%), radial-gradient(circle at 18% 16%, rgba(232,121,249,0.06) 0%, transparent 38%), radial-gradient(circle at 50% 100%, rgba(244,63,94,0.04) 0%, transparent 42%)",
          }}
        />
      </div>

      <main className="relative z-10 flex-1 w-full">
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme");
    if (savedTheme === "light" || savedTheme === "dark") {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  return (
    <>
      <OrbitalNav />
      <Router />
      <button
        type="button"
        onClick={() => setTheme((current) => (current === "dark" ? "light" : "dark"))}
        aria-label={
          theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
        }
        className="fixed bottom-5 right-5 z-[75] inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/90 text-foreground/80 shadow-[0_10px_30px_rgba(15,10,20,0.16)] backdrop-blur-sm transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-300/55 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        {theme === "dark" ? (
          <Sun className="h-4.5 w-4.5" />
        ) : (
          <Moon className="h-4.5 w-4.5" />
        )}
      </button>
    </>
  );
}

export default App;
