import { motion } from "motion/react";
import { Briefcase, Globe, Target, TrendingUp } from "lucide-react";

const stats = [
  { label: "年销售额", value: "$10M+", icon: TrendingUp, color: "text-green-600", bg: "bg-green-50" },
  { label: "覆盖地区", value: "中东 4+", icon: Globe, color: "text-blue-600", bg: "bg-blue-50" },
  { label: "大客户开发", value: "资深", icon: Target, color: "text-purple-600", bg: "bg-purple-50" },
  { label: "行业经验", value: "8+ 年", icon: Briefcase, color: "text-orange-600", bg: "bg-orange-50" },
];

const experiences = [
  {
    company: "宏山激光 (HSG Laser)",
    role: "资深外贸销售",
    period: "2018 - 至今",
    description: "负责激光切割机器在中东地区的品牌宣传与销售推广。擅长深耕大客户及分销渠道建设，致力于为客户提供高效的金属加工解决方案。",
    highlights: [
      "实现中东地区（巴林、约旦、阿曼、卡塔尔）年均销售额突破1000万美元",
      "成功开发并维护多个中东地区顶级金属加工制造大客户",
      "建立了完善的区域售后服务体系与代理商网络",
      "多次代表公司参加国际展会，提升HSG品牌知名度"
    ]
  }
];

export default function Experience() {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group rounded-3xl bg-white/50 p-6 backdrop-blur-md border border-slate-100 shadow-sm transition-all hover:shadow-xl hover:bg-white"
            >
              <div className={`${stat.bg} ${stat.color} mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl transition-transform group-hover:scale-110`}>
                <stat.icon size={24} />
              </div>
              <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-sm font-medium text-secondary">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Experience Content */}
        <div className="space-y-12">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold mb-4">核心经验</h2>
            <p className="text-lg text-secondary">
              在激光切割机器外贸领域拥有深厚的实战经验，专注于中东高增长市场的战略布局。
            </p>
          </div>

          <div className="grid gap-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-3xl bg-white/80 border border-slate-100 shadow-sm backdrop-blur-xl"
              >
                <div className="p-8 md:p-12">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-1">{exp.role}</h3>
                      <div className="text-lg font-medium text-blue-600">{exp.company}</div>
                    </div>
                    <div className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-secondary self-start">
                      {exp.period}
                    </div>
                  </div>
                  
                  <p className="text-lg text-secondary mb-10 leading-relaxed max-w-4xl">
                    {exp.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    {exp.highlights.map((highlight, hIndex) => (
                      <div key={hIndex} className="flex gap-4">
                        <div className="mt-1.5 flex-shrink-0 h-2 w-2 rounded-full bg-blue-600" />
                        <p className="text-slate-700 font-medium">{highlight}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
