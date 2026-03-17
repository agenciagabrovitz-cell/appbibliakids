import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);

// Adicione isso ao final do seu src/main.tsx
const hideBadge = () => {
  const badge = document.getElementById("lovable-badge");
  if (badge) {
    badge.style.display = "none";
    badge.style.visibility = "hidden";
  }
};

// Executa em diferentes momentos para garantir que pegue o badge assim que ele for injetado
hideBadge();
setTimeout(hideBadge, 1000);
setTimeout(hideBadge, 3000);

