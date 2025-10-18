import { createSignal, createEffect, onMount } from "solid-js";

export default function ThemeToggle() {
  const [theme, setTheme] = createSignal<"light" | "dark">("dark");

  onMount(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const systemTheme = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
    const initialTheme = savedTheme || systemTheme;

    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
  });

  createEffect(() => {
    const currentTheme = theme();
    document.documentElement.setAttribute("data-theme", currentTheme);
    localStorage.setItem("theme", currentTheme);
  });

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <button
      onClick={toggleTheme}
      class="fixed bottom-4 right-4 z-50 p-3 rounded-xl bg-gradient-to-br from-[var(--color-bg-secondary)]/90 to-[var(--color-bg-secondary)]/70 backdrop-blur-sm border border-[var(--color-border)] shadow-lg hover:shadow-xl hover:border-[var(--color-border-hover)] transition-all duration-300 group cursor-pointer"
      aria-label={`Switch to ${theme() === "dark" ? "light" : "dark"} mode`}
    >
      {theme() === "dark" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6 text-[var(--color-text-primary)] group-hover:text-[var(--color-accent-blue)] transition-colors"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6 text-[var(--color-text-primary)] group-hover:text-[var(--color-accent-blue)] transition-colors"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  );
}
