import { ArrowLeft, Download, Printer } from "lucide-react";

import coloringNoah from "@/assets/coloring-noah.png";
import coloringCreation from "@/assets/coloring-creation.png";
import coloringDavid from "@/assets/coloring-david.png";
import coloringJesusBirth from "@/assets/coloring-jesus-birth.png";
import coloringDaniel from "@/assets/coloring-daniel.png";
import coloringJonah from "@/assets/coloring-jonah.png";
import coloringMoses from "@/assets/coloring-moses.png";
import coloringAngel from "@/assets/coloring-angel.png";

interface ColoringPage {
  id: string;
  title: string;
  image: string;
  color: string;
}

const coloringPages: ColoringPage[] = [
  { id: "creation", title: "A Criação", image: coloringCreation, color: "bg-kids-green" },
  { id: "noah", title: "Arca de Noé", image: coloringNoah, color: "bg-kids-blue" },
  { id: "moses", title: "Moisés", image: coloringMoses, color: "bg-kids-red" },
  { id: "david", title: "Davi", image: coloringDavid, color: "bg-kids-orange" },
  { id: "daniel", title: "Daniel e os Leões", image: coloringDaniel, color: "bg-kids-yellow" },
  { id: "jonah", title: "Jonas e a Baleia", image: coloringJonah, color: "bg-kids-teal" },
  { id: "jesus-birth", title: "Nascimento de Jesus", image: coloringJesusBirth, color: "bg-kids-pink" },
  { id: "angel", title: "Anjo", image: coloringAngel, color: "bg-primary" },
];

interface ColoringPagesProps {
  onBack: () => void;
}

function handleDownload(image: string, title: string) {
  const link = document.createElement("a");
  link.href = image;
  link.download = `colorir-${title.toLowerCase().replace(/\s+/g, "-")}.png`;
  link.click();
}

function handlePrint(image: string) {
  const win = window.open("", "_blank");
  if (win) {
    win.document.write(`
      <html><head><title>Página para Colorir</title>
      <style>body{margin:0;display:flex;justify-content:center;align-items:center;min-height:100vh}
      img{max-width:100%;max-height:100vh}
      @media print{body{margin:0}img{max-width:100%;max-height:100%}}</style></head>
      <body><img src="${image}" onload="window.print();window.close()"/></body></html>
    `);
    win.document.close();
  }
}

export default function ColoringPages({ onBack }: ColoringPagesProps) {
  return (
    <div className="min-h-screen px-4 py-6 max-w-lg mx-auto">
      <button onClick={onBack} className="flex items-center gap-2 text-muted-foreground mb-4 font-body font-bold">
        <ArrowLeft className="w-5 h-5" /> Voltar
      </button>
      <h1 className="text-2xl font-display text-primary mb-2">🎨 Páginas para Colorir</h1>
      <p className="text-sm text-muted-foreground font-body mb-6">
        Baixe e imprima as ilustrações bíblicas para colorir!
      </p>

      <div className="grid grid-cols-2 gap-4">
        {coloringPages.map((page, i) => (
          <div
            key={page.id}
            className="kids-card flex flex-col items-center gap-2 animate-slide-up"
            style={{ animationDelay: `${i * 0.05}s` }}
          >
            <img
              src={page.image}
              alt={page.title}
              className="w-full aspect-square rounded-2xl object-cover bg-card border border-border"
            />
            <h3 className="font-display text-sm text-foreground text-center leading-tight">{page.title}</h3>
            <div className="flex gap-2 w-full">
              <button
                onClick={() => handleDownload(page.image, page.title)}
                className="kids-btn flex-1 flex items-center justify-center gap-1 text-xs bg-primary text-primary-foreground"
              >
                <Download className="w-3.5 h-3.5" />
                Baixar
              </button>
              <button
                onClick={() => handlePrint(page.image)}
                className="kids-btn flex-1 flex items-center justify-center gap-1 text-xs bg-secondary text-secondary-foreground"
              >
                <Printer className="w-3.5 h-3.5" />
                Imprimir
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
