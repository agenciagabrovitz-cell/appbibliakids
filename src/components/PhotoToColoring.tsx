import { useState, useRef } from "react";
import { ArrowLeft, Upload, Download, Camera, ImageIcon } from "lucide-react";

interface PhotoToColoringProps {
  onBack: () => void;
}

export default function PhotoToColoring({ onBack }: PhotoToColoringProps) {
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [coloringImage, setColoringImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [verseText, setVerseText] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (ev) => {
      const dataUrl = ev.target?.result as string;
      setOriginalImage(dataUrl);
      setColoringImage(null);
      processImage(dataUrl);
    };
    reader.readAsDataURL(file);
  };

  const processImage = async (dataUrl: string) => {
    setIsProcessing(true);

    // Apply a client-side filter to create a coloring-page-like effect
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d")!;

      // Draw original
      ctx.drawImage(img, 0, 0);

      // Get image data
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      // Convert to grayscale and apply edge detection (Sobel-like)
      const gray = new Float32Array(canvas.width * canvas.height);
      for (let i = 0; i < data.length; i += 4) {
        gray[i / 4] = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
      }

      // Edge detection
      const w = canvas.width;
      const h = canvas.height;
      for (let y = 1; y < h - 1; y++) {
        for (let x = 1; x < w - 1; x++) {
          const idx = y * w + x;
          // Sobel
          const gx =
            -gray[(y - 1) * w + (x - 1)] + gray[(y - 1) * w + (x + 1)] +
            -2 * gray[y * w + (x - 1)] + 2 * gray[y * w + (x + 1)] +
            -gray[(y + 1) * w + (x - 1)] + gray[(y + 1) * w + (x + 1)];
          const gy =
            -gray[(y - 1) * w + (x - 1)] - 2 * gray[(y - 1) * w + x] - gray[(y - 1) * w + (x + 1)] +
            gray[(y + 1) * w + (x - 1)] + 2 * gray[(y + 1) * w + x] + gray[(y + 1) * w + (x + 1)];

          const magnitude = Math.sqrt(gx * gx + gy * gy);
          const edgeValue = magnitude > 30 ? 0 : 255;

          const pi = idx * 4;
          data[pi] = edgeValue;
          data[pi + 1] = edgeValue;
          data[pi + 2] = edgeValue;
          data[pi + 3] = 255;
        }
      }

      ctx.putImageData(imageData, 0, 0);

      // Add verse text at bottom if provided
      if (verseText) {
        const fontSize = Math.max(16, canvas.width / 30);
        ctx.fillStyle = "white";
        ctx.fillRect(0, canvas.height - fontSize * 3, canvas.width, fontSize * 3);
        ctx.fillStyle = "black";
        ctx.font = `bold ${fontSize}px sans-serif`;
        ctx.textAlign = "center";
        ctx.fillText(verseText, canvas.width / 2, canvas.height - fontSize);
      }

      setColoringImage(canvas.toDataURL("image/png"));
      setIsProcessing(false);
    };
    img.src = dataUrl;
  };

  const handleDownload = () => {
    if (!coloringImage) return;
    const link = document.createElement("a");
    link.href = coloringImage;
    link.download = "pagina-para-colorir.png";
    link.click();
  };

  const handleReprocess = () => {
    if (originalImage) {
      processImage(originalImage);
    }
  };

  return (
    <div className="min-h-screen px-4 py-6 max-w-lg mx-auto">
      <button onClick={onBack} className="flex items-center gap-2 text-muted-foreground mb-4 font-body font-bold">
        <ArrowLeft className="w-5 h-5" /> Voltar
      </button>

      <h1 className="text-2xl font-display text-primary mb-2">📸 Foto para Colorir</h1>
      <p className="text-sm text-muted-foreground font-body mb-6">
        Envie uma foto e transforme em uma página para colorir estilo Bobby Good!
      </p>

      {/* Upload area */}
      {!originalImage && (
        <div
          onClick={() => fileInputRef.current?.click()}
          className="kids-card flex flex-col items-center gap-4 py-12 cursor-pointer border-dashed border-2 border-primary/30 hover:border-primary/60 transition-all"
        >
          <div className="bg-primary/10 p-6 rounded-full">
            <Camera className="w-12 h-12 text-primary" />
          </div>
          <div className="text-center">
            <h3 className="font-display text-lg text-foreground mb-1">Enviar Foto</h3>
            <p className="text-sm text-muted-foreground font-body">
              Toque para escolher uma foto da família, seu pet ou qualquer imagem! 📷
            </p>
          </div>
        </div>
      )}

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileSelect}
        className="hidden"
      />

      {/* Processing */}
      {isProcessing && (
        <div className="kids-card flex flex-col items-center gap-4 py-12 animate-pulse">
          <div className="bg-kids-yellow p-6 rounded-full">
            <ImageIcon className="w-12 h-12 text-secondary-foreground animate-spin" />
          </div>
          <p className="font-display text-lg text-foreground">Criando página para colorir... ✨</p>
          <p className="text-sm text-muted-foreground font-body">Transformando em desenho Bobby Good!</p>
        </div>
      )}

      {/* Result */}
      {coloringImage && !isProcessing && (
        <div className="space-y-4 animate-slide-up">
          {/* Before/After */}
          <div className="grid grid-cols-2 gap-3">
            <div className="text-center">
              <p className="text-xs font-body text-muted-foreground mb-2">📷 Original</p>
              <img src={originalImage!} alt="Original" className="w-full rounded-2xl border-2 border-border" />
            </div>
            <div className="text-center">
              <p className="text-xs font-body text-muted-foreground mb-2">🎨 Para Colorir</p>
              <img src={coloringImage} alt="Coloring" className="w-full rounded-2xl border-2 border-border" />
            </div>
          </div>

          {/* Verse input */}
          <div className="kids-card">
            <label className="font-display text-sm text-foreground block mb-2">
              📖 Adicionar versículo (opcional)
            </label>
            <input
              type="text"
              value={verseText}
              onChange={e => setVerseText(e.target.value)}
              placeholder="Ex: Salmos 23:1 - O Senhor é meu pastor"
              className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
            {verseText && (
              <button onClick={handleReprocess} className="kids-btn bg-secondary text-secondary-foreground text-xs mt-2 w-full">
                Atualizar com versículo
              </button>
            )}
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <button onClick={handleDownload} className="kids-btn flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground">
              <Download className="w-4 h-4" /> Baixar
            </button>
            <button
              onClick={() => { setOriginalImage(null); setColoringImage(null); setVerseText(""); }}
              className="kids-btn flex-1 flex items-center justify-center gap-2 bg-secondary text-secondary-foreground"
            >
              <Upload className="w-4 h-4" /> Nova Foto
            </button>
          </div>
        </div>
      )}

      {/* Info */}
      <div className="mt-8 p-4 rounded-2xl bg-card border-2 border-border">
        <h3 className="font-display text-sm text-foreground mb-2">💡 Dicas</h3>
        <ul className="text-xs text-muted-foreground font-body space-y-1">
          <li>• Use fotos com boa iluminação</li>
          <li>• Fotos de família ficam ótimas!</li>
          <li>• Adicione um versículo para personalizar</li>
          <li>• Imprima e divirta-se colorindo! 🖍️</li>
        </ul>
      </div>
    </div>
  );
}
