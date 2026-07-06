import { motion } from "motion/react";
import { Briefcase, Globe, Target, TrendingUp } from "lucide-react";

const stats = [
  { label: "年销售额", value: "$10M+", icon: TrendingUp, color: "text-green-600", bg: "bg-green-50" },
  { label: "覆盖地区", value: "中东 9+", icon: Globe, color: "text-blue-600", bg: "bg-blue-50" },
  { label: "大客户开发", value: "专家级", icon: Target, color: "text-purple-600", bg: "bg-purple-50" },
  { label: "行业经验", value: "2 年", icon: Briefcase, color: "text-orange-600", bg: "bg-orange-50" },
];

const experiences = [
  {
    company: "宏山激光 (HSG Laser)",
    role: "资深外贸销售",
    period: "2024 - 至今",
    description: "作为宏山激光中东区域的核心销售负责人，我深耕巴勒斯坦、巴林、约旦、叙利亚、伊拉克、科威特、黎巴嫩、阿曼、卡塔尔等关键市场。激光切割机器作为精密工业设备，其销售不仅涉及产品本身的推广，更涵盖了复杂的工艺对接、售后保障体系构建以及品牌长期价值的传递。在两年的深度实操中，我通过差异化竞争策略，成功将HSG品牌在当地的市占率提升至领先地位，年均贡献业绩稳超千万美元。",
    highlights: [
      "精通中东地区贸易规则与文化习俗，成功打通巴勒斯坦、巴林、约旦、叙利亚、伊拉克、科威特、黎巴嫩、阿曼、卡塔尔等国销售网络，实现年销售额1000万美元的跨越式增长。",
      "主导开发并深度维护了多家产值超亿元的金属加工龙头企业，通过提供定制化切割解决方案（包含光纤激光切割机及配套自动化设备），赢得了极高的客户复购率。",
      "针对激光行业对售后依赖度高的痛点，在目标区域建立了多维度的代理商考核与服务体系，确保了极速响应的服务能力，显著增强了品牌美誉度。",
      "具备极强的市场敏锐度，擅长通过数字化营销、专业领英运营及线下大客户直销相结合的方式，实现高净值潜客的精准转化与品牌溢价。",
      "多次作为主讲人参与中东地区工业机械高峰论坛及国际大型工业展会，不仅达成了高额成交，更有效地输出并固化了HSG作为行业领跑者的品牌形象。"
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
          <div className="max-w-3xl">
            <h2 className="text-5xl font-bold mb-6">核心经验</h2>
            <p className="text-xl text-secondary leading-relaxed">
              在激光切割机器外贸领域拥有卓越的实战经验，专注于中东高增长市场的战略布局。我致力于将中国制造的高端装备推向全球，通过技术创新与本地化服务的深度结合，为全球客户创造价值。
            </p>
          </div>

          <div className="grid gap-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-[2.5rem] bg-white/80 border border-slate-100 shadow-sm backdrop-blur-xl"
              >
                <div className="p-8 md:p-16">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
                    <div>
                      <h3 className="text-3xl font-bold text-primary mb-2">{exp.role}</h3>
                      <div className="text-2xl font-medium text-blue-600">{exp.company}</div>
                    </div>
                    <div className="rounded-full bg-slate-100 px-6 py-2.5 text-base font-medium text-secondary self-start">
                      {exp.period}
                    </div>
                  </div>
                  
                  <p className="text-xl text-secondary mb-12 leading-relaxed max-w-5xl">
                    {exp.description}
                  </p>

                  <div className="grid md:grid-cols-1 gap-8">
                    {exp.highlights.map((highlight, hIndex) => (
                      <div key={hIndex} className="flex gap-6 group">
                        <div className="mt-2.5 flex-shrink-0 h-3 w-3 rounded-full bg-blue-600 group-hover:scale-125 transition-transform" />
                        <p className="text-slate-700 text-lg font-medium leading-relaxed">{highlight}</p>
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
