import { Card, CardContent } from '@/components/ui/card';
import { AlertCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'wouter';
import { SEO } from '@/components/SEO';

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#0d0d0d] px-4 text-white">
      <SEO 
        title="404 — Страница не найдена | ALL WINDOWS" 
        description="Запрашиваемая страница не существует или была перемещена." 
        noIndex={true} 
      />
      <Card className="w-full max-w-md border border-white/10 bg-[#161616] text-white p-6 shadow-2xl">
        <CardContent className="pt-2">
          <div className="flex mb-4 items-center gap-3">
            <AlertCircle className="h-8 w-8 text-[#d4b16a] shrink-0" />
            <h1 className="text-2xl font-bold font-display">
              404 — Страница не найдена
            </h1>
          </div>

          <p className="mt-2 text-sm text-white/60 leading-relaxed">
            Запрашиваемая страница не существует или была перемещена. Перейдите на главную страницу каталога.
          </p>

          <Link href="/" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#c6a15b] px-4 py-2.5 text-xs font-bold text-black hover:bg-[#d4b16a] transition">
            <ArrowLeft size={16} /> На главную
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
