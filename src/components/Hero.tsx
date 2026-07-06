import { motion } from "motion/react";
import Typewriter from "./Typewriter";

export default function Hero() {
  return (
    <section id="首页" className="relative flex min-h-[80vh] items-center justify-center px-6 pt-24">
      <div className="container mx-auto flex flex-col items-center gap-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl space-y-8 text-center"
        >
          <div className="inline-block rounded-full bg-blue-50 px-6 py-2 text-sm font-medium text-blue-600">
            资深外贸销售专家
          </div>
          <h1 className="text-6xl font-bold leading-tight md:text-8xl lg:text-9xl">
            Christin TAO
          </h1>
          <div className="text-3xl font-medium md:text-5xl lg:text-6xl">
            专业从事 <Typewriter phrases={["机械设备", "区域销售", "品牌宣传"]} />
          </div>
          <p className="mx-auto max-w-2xl text-lg text-secondary md:text-2xl leading-relaxed">
            宏山（HSG）资深外贸销售，专注于激光切割机器在全球市场的宣传与推广。
            凭借深厚的行业积淀，年销售额稳定在 <span className="font-semibold text-primary">1000万美元</span> 以上。
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <button className="rounded-full bg-primary px-10 py-5 text-lg font-semibold text-white transition-all hover:scale-105 hover:bg-slate-800 active:scale-95 shadow-lg">
              联系我
            </button>
            <button className="rounded-full border border-slate-200 bg-white/50 px-10 py-5 text-lg font-semibold backdrop-blur-sm transition-all hover:border-blue-200 hover:bg-blue-50/50 active:scale-95">
              查看作品
            </button>
          </div>
        </motion.div>

        {/* Decorative Elements for AI Feel */}
        <div className="relative mt-12 h-2 w-full max-w-md overflow-hidden rounded-full bg-slate-100">
          <motion.div 
            initial={{ left: "-100%" }}
            animate={{ left: "100%" }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 h-full w-1/2 bg-linear-to-r from-transparent via-blue-500 to-transparent"
          />
        </div>
      </div>
    </section>
  );
}
