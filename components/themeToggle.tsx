"use client"

import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useView } from "@/store/useView"; // Убедись, что путь правильный

export const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  
  const active = useView((state) => state.isActive);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <div
      className={cn(
        "fixed top-10 left-10 z-50",
        "transition-all duration-300 ease-out transform",
          active
          ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
          : "opacity-0 translate-y-4 scale-95 pointer-events-none"
      )}
    >
      <Button
        onClick={toggleTheme}
        variant="outline"
        size="lg" // Делаем квадратную кнопку под иконку
        className="rounded-full shadow-lg bg-background/80 backdrop-blur-sm border border-primary/20 hover:border-primary/50"
      >
        {resolvedTheme === "dark" ? "☀️" : "🌙 "}
        <span className="sr-only">Переключить тему</span>
      </Button>
    </div>
  );
};