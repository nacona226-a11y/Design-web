import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="联系" className="py-24 px-6 bg-slate-900 text-white rounded-t-[3rem] md:rounded-t-[5rem]">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">开启您的全球<br />业务新篇章</h2>
              <p className="text-xl text-slate-400 leading-relaxed">
                正在寻找激光切割设备解决方案或寻求中东市场的深度合作？<br />
                随时与我联系，我将为您提供专业的行业洞察。
              </p>
            </motion.div>

            <div className="space-y-6">
              {[
                { icon: Mail, label: "邮箱", value: "christin.tao@hsg-laser.com" },
                { icon: Phone, label: "电话/WhatsApp", value: "15655577323" },
                { icon: MapPin, label: "办公地点", value: "中国 · 佛山 / 中东巡访中" }
              ].map((item, index) => (
                <motion.div 
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-6 group"
                >
                  <div className="h-12 w-12 rounded-2xl bg-white/5 flex items-center justify-center transition-colors group-hover:bg-blue-600">
                    <item.icon size={20} className="text-blue-400 group-hover:text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-slate-500">{item.label}</div>
                    <div className="text-lg font-semibold">{item.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white/5 p-8 md:p-12 rounded-3xl backdrop-blur-sm border border-white/10"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400">姓名</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors" placeholder="您的姓名" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400">邮箱</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors" placeholder="your@email.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400">留言内容</label>
                <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors" placeholder="请简述您的需求..." />
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 group">
                发送消息
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>

        <div className="mt-24 pt-8 border-t border-white/5 text-center text-slate-500 text-sm">
          © 2026 Christin TAO - 宏山（HSG）资深外贸销售. 保留所有权利.
        </div>
      </div>
    </section>
  );
}
