import { useState, useEffect } from "react";
import { Button } from "./components/ui";
import { PasswordManager } from "./components/PasswordManager";
import { DesignSystemShowcase } from "./components/DesignSystemShowcase";

function App() {
  const [currentView, setCurrentView] = useState<
    "password-manager" | "design-system"
  >("password-manager");
  const [isDark, setIsDark] = useState(false);

  // Check for system preference and localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);

    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-bold">🔐 Prism App</h1>
              <div className="flex gap-2">
                <Button
                  variant={
                    currentView === "password-manager" ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() => setCurrentView("password-manager")}
                >
                  Password Manager
                </Button>
                <Button
                  variant={
                    currentView === "design-system" ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() => setCurrentView("design-system")}
                >
                  Design System
                </Button>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={toggleTheme}
                className="px-3"
              >
                {isDark ? "☀️ Light" : "🌙 Dark"}
              </Button>
              <div className="text-sm text-muted-foreground">
                Built with Prism Components & Design Tokens
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {currentView === "password-manager" ? (
          <PasswordManager />
        ) : (
          <DesignSystemShowcase />
        )}
      </main>
    </div>
  );
}

export default App;
