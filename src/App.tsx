import { Route, Switch } from "wouter";

import NotFound from "@/pages/not-found";
import { OrbitalNav } from "./components/layout/OrbitalNav";
import About from "./components/sections/About";
import { Contact } from "./components/sections/Contact";
import { Hero } from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";

function Home() {
  return (
    <div className="relative flex min-h-[100dvh] w-full flex-col overflow-x-hidden selection:bg-white/10">
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
  return (
    <>
      <OrbitalNav />
      <Router />
    </>
  );
}

export default App;
