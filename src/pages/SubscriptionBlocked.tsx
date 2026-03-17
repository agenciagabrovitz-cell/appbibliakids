import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

export default function SubscriptionBlocked() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md shadow-lg border-primary/20 bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mb-2">
            <AlertCircle className="w-8 h-8 text-destructive" />
          </div>
          <CardTitle className="text-2xl font-display font-bold">
            Acesso ao Bíblia Kids
          </CardTitle>
          <CardDescription className="text-lg mt-2 text-muted-foreground">
            Para usar o aplicativo é necessário ter uma assinatura ativa.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center pt-4">
          <Button 
            className="w-full text-lg h-12 shadow-sm transition-all hover:scale-[1.02]"
            onClick={() => window.location.href = "https://pvabibliakids.lovable.app/"}
          >
            Assinar agora
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
