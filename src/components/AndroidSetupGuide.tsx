import React, { useState } from 'react';
import { Smartphone, Settings, ShieldAlert, Home, Zap, Copy, Check, Eye } from 'lucide-react';

export default function AndroidSetupGuide() {
  const [copied, setCopied] = useState(false);

  const macroLogic = `1. Tetikleyici: Uygulama Etkileşimi
   - Seçenek: Ekran İçeriği
   - Uygulama: Instagram
   - Metin: "Reels" (veya Shorts)

2. Eylem: Ana Ekran Tuşuna Bas
   - (MacroDroid Erişilebilirlik Servisi üzerinden)

3. Kısıtlama: Yok (Her zaman çalışsın)`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(macroLogic);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Accessibility Service Focus */}
      <div className="bg-emerald-600 rounded-3xl p-6 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-md">
              <Eye size={22} className="text-white" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Erişilebilirlik Kalkanı</h3>
              <p className="text-[10px] text-emerald-100 font-bold uppercase tracking-widest">Sistem Düzeyinde Müdahale</p>
            </div>
          </div>

          <p className="text-sm text-emerald-50 mb-6 leading-relaxed">
            Android'in **Erişilebilirlik Hizmetlerini** kullanarak Reels'i algılayıp sizi ana ekrana atmak için en güvenli yol MacroDroid entegrasyonudur:
          </p>

          <div className="space-y-3 mb-6">
            <div className="bg-white/10 rounded-2xl p-4 border border-white/10">
              <div className="text-[10px] font-bold uppercase mb-2 opacity-70">Adım 1: Yetki Ver</div>
              <p className="text-xs">Android Ayarları &gt; Erişilebilirlik &gt; <b>MacroDroid</b> &gt; Aktif Et.</p>
            </div>
            <div className="bg-white/10 rounded-2xl p-4 border border-white/10">
              <div className="text-[10px] font-bold uppercase mb-2 opacity-70">Adım 2: Makro Kur</div>
              <p className="text-xs">Aşağıdaki mantığı MacroDroid'e "Yeni Makro" olarak ekleyin.</p>
            </div>
          </div>

          <div className="bg-black/20 rounded-2xl p-4 border border-white/5 relative group">
            <pre className="text-[10px] font-mono text-white whitespace-pre-wrap leading-relaxed">
              {macroLogic}
            </pre>
            <button 
              onClick={copyToClipboard}
              className="absolute top-2 right-2 p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
            >
              {copied ? <Check size={14} className="text-white" /> : <Copy size={14} />}
            </button>
          </div>
        </div>
        
        {/* Decorative background element */}
        <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
      </div>

      {/* Alternative System Settings */}
      <div className="bg-white rounded-3xl p-6 border border-black/5 shadow-sm">
        <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-zinc-800">
          <Settings size={20} className="text-zinc-400" />
          Yedek Güvenlik (Sistem)
        </h3>
        
        <div className="space-y-4">
          <div className="flex gap-4 items-start p-3 hover:bg-zinc-50 rounded-2xl transition-colors group">
            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-blue-100 transition-colors">
              <ShieldAlert size={20} className="text-blue-500" />
            </div>
            <div>
              <div className="font-bold text-sm">Sert Kısıtlama</div>
              <div className="text-xs text-zinc-500 italic">Dijital Denge üzerinden Instagram süresini 0dk yapın.</div>
            </div>
          </div>

          <div className="flex gap-4 items-start p-3 hover:bg-zinc-50 rounded-2xl transition-colors group">
            <div className="w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center shrink-0 group-hover:bg-zinc-200 transition-colors">
              <Home size={20} className="text-zinc-500" />
            </div>
            <div>
              <div className="font-bold text-sm">Ana Ekran Kısayolu</div>
              <div className="text-xs text-zinc-500 italic">Bu uygulamayı ana ekrana ekleyerek "Odaklanma" bilincini koruyun.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
