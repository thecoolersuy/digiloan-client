export function warmUpApi() {
  try {
    const origin = new URL(import.meta.env.VITE_API_URL).origin;
    fetch(`${origin}/health`, { mode: "no-cors" }).catch(() => {});
  } catch {}
}
