import { Users, Wrench, ShieldCheck, Clock, DollarSign, HardHat } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeader from "@/components/ui/SectionHeader";

const reasons = [
  {
    icon: Users,
    title: "Professional Team",
    desc: "Highly qualified engineers, technicians, and specialists with deep industry expertise and proven track records.",
  },
  {
    icon: Wrench,
    title: "Reliable Equipment",
    desc: "A maintained fleet of industrial equipment and machinery, ready for immediate deployment to your project site.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    desc: "Rigorous quality control processes ensure every deliverable meets and exceeds international industrial standards.",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    desc: "We understand that project timelines are critical. Our logistics ensure on-schedule delivery every time.",
  },
  {
    icon: DollarSign,
    title: "Competitive Pricing",
    desc: "Transparent, value-driven pricing structures built to optimize your project budget without compromising quality.",
  },
  {
    icon: HardHat,
    title: "Safety First",
    desc: "Zero-incident culture with strict HSE compliance across all operations, aligned with Saudi Aramco standards.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-pad bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Why Choose Mountaim rentals"
            title="Built for Industrial Excellence"
            subtitle="We combine deep industry knowledge, a professional workforce, and proven operational systems to deliver results that matter."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <div className="service-card group relative overflow-hidden">
                {/* Orange accent line top */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-brand-orange scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                <div className="w-12 h-12 bg-brand-orange/10 flex items-center justify-center mb-5 group-hover:bg-brand-orange transition-colors duration-300">
                  <item.icon size={22} className="text-brand-orange group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-brand-black font-bold text-base mb-3">{item.title}</h3>
                <p className="text-brand-gray text-sm leading-relaxed">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
