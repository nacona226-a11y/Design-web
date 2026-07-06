import { motion } from "motion/react";
import Typewriter from "./Typewriter";

interface HeroProps {
  avatarUrl: string;
}

export default function Hero({ avatarUrl }: HeroProps) {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center px-6 pt-24">
      <div className="container mx-auto flex flex-col items-center gap-12 md:flex-row md:items-center md:justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 space-y-6 text-center md:text-left"
        >
          <div className="inline-block rounded-full bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-600">
            资深外贸销售专家
          </div>
          <h1 className="text-5xl font-bold leading-tight md:text-7xl lg:text-8xl">
            Christin TAO
          </h1>
          <div className="text-3xl font-medium md:text-4xl lg:text-5xl">
            专业从事 <Typewriter phrases={["机械设备", "区域销售", "品牌宣传"]} />
          </div>
          <p className="max-w-xl text-lg text-secondary md:text-xl leading-relaxed">
            宏山（HSG）资深外贸销售，专注于激光切割机器在全球市场的宣传与推广。
            凭借深厚的行业积淀，年销售额稳定在 <span className="font-semibold text-primary">1000万美元</span> 以上。
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 md:justify-start">
            <button className="rounded-full bg-primary px-8 py-4 text-white transition-all hover:scale-105 hover:bg-slate-800 active:scale-95">
              联系我
            </button>
            <button className="rounded-full border border-slate-200 bg-white/50 px-8 py-4 backdrop-blur-sm transition-all hover:border-blue-200 hover:bg-blue-50/50 active:scale-95">
              查看作品
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex-shrink-0"
        >
          <div className="relative z-10 h-64 w-64 overflow-hidden rounded-full border-4 border-white shadow-2xl md:h-80 md:w-80 lg:h-[450px] lg:w-[450px]">
            <img 
              src={avatarUrl} 
              alt="Christin TAO" 
              className="h-full w-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          
          {/* Decorative Elements for AI Feel */}
          <div className="absolute -inset-4 -z-10 animate-pulse rounded-full bg-linear-to-tr from-blue-400/20 via-purple-400/20 to-pink-400/20 blur-2xl" />
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-8 -z-10 rounded-full border border-dashed border-blue-200/50"
          />
        </motion.div>
      </div>
    </section>
  );
}
