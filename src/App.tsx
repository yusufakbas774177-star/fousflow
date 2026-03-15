import React from 'react';
import { Smartphone, Zap, LayoutGrid, User, Bell, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import FocusTimer from './components/FocusTimer';
import AICoach from './components/AICoach';
import AndroidSetupGuide from './components/AndroidSetupGuide';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] text-zinc-900 font-sans pb-24">
      {/* Header */}
      <header className="p-6 flex justify-between items-center bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-black/5">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-200">
            <Zap size={20} className="text-white fill-white" />
          </div>
          <div>
            <h1 className="font-bold text-lg leading-none">FocusFlow</h1>
            <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest">Detox Assistant</span>
          </div>
        </div>
        <button className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-500">
          <Bell size={20} />
        </button>
      </header>

      <main className="p-6 max-w-md mx-auto space-y-6">
        {/* Welcome Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-1"
        >
          <h2 className="text-3xl font-light tracking-tight">Hello, Focus.</h2>
          <p className="text-zinc-500 text-sm">Ready to break the scroll cycle today?</p>
        </motion.section>

        {/* Timer Section */}
        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
        >
          <FocusTimer />
        </motion.section>

        {/* AI Coach Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <AICoach />
        </motion.section>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-5 rounded-3xl border border-black/5">
            <div className="text-[10px] uppercase font-bold text-zinc-400 mb-1">Urges Logged</div>
            <div className="text-2xl font-light">12</div>
          </div>
          <div className="bg-white p-5 rounded-3xl border border-black/5">
            <div className="text-[10px] uppercase font-bold text-zinc-400 mb-1">Focus Time</div>
            <div className="text-2xl font-light">4.2h</div>
          </div>
        </div>

        {/* APK Generation Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-zinc-900 rounded-3xl p-6 text-white border border-emerald-500/30 shadow-2xl"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center">
              <Smartphone size={22} className="text-white" />
            </div>
            <div>
              <h3 className="font-bold text-lg">APK Hazır (Native Android)</h3>
              <p className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest">Erişilebilirlik Servisi Entegre Edildi</p>
            </div>
          </div>

          <p className="text-sm text-zinc-400 mb-6 leading-relaxed">
            Bu uygulama artık bir **Capacitor Android Projesidir**. İçerisine Reels/Shorts algılayan yerel Java kodları eklenmiştir.
          </p>

          <div className="space-y-4 mb-6">
            <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
              <div className="text-xs font-bold text-emerald-400 mb-2">Nasıl APK Alınır?</div>
              <ol className="text-[11px] text-zinc-300 space-y-2 list-decimal pl-4">
                <li>Sol taraftaki ayarlardan projeyi <b>ZIP olarak indirin</b>.</li>
                <li>Bilgisayarınızda <b>Android Studio</b> ile açın.</li>
                <li><b>Build &gt; Build Bundle(s) / APK(s) &gt; Build APK(s)</b> yolunu izleyin.</li>
                <li>Oluşan APK'yı telefonunuza kurun ve Erişilebilirlik ayarlarından <b>FocusFlow</b>'u aktif edin.</li>
              </ol>
            </div>
          </div>

          <div className="flex items-center gap-2 p-3 bg-emerald-500/10 rounded-xl border border-emerald-500/20">
            <ShieldCheck size={16} className="text-emerald-400" />
            <span className="text-[10px] text-emerald-400 font-medium">Yerel Java Servisi: ReelsBlockerService.java aktif.</span>
          </div>
        </motion.section>

        {/* Setup Guide */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <AndroidSetupGuide />
        </motion.section>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-sm bg-zinc-900 rounded-full p-2 flex justify-between items-center shadow-2xl z-50">
        <button className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center text-white">
          <LayoutGrid size={20} />
        </button>
        <button className="w-12 h-12 rounded-full flex items-center justify-center text-zinc-500 hover:text-white transition-colors">
          <Zap size={20} />
        </button>
        <button className="w-12 h-12 rounded-full flex items-center justify-center text-zinc-500 hover:text-white transition-colors">
          <Smartphone size={20} />
        </button>
        <button className="w-12 h-12 rounded-full flex items-center justify-center text-zinc-500 hover:text-white transition-colors">
          <User size={20} />
        </button>
      </nav>
    </div>
  );
}
