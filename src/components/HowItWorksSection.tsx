import { motion, useReducedMotion } from 'motion/react'
import ScrollReveal from './ScrollReveal'

const steps = [
  {
    number: '01',
    title: 'Organize os orçamentos',
    description:
      'Tenha em um só lugar os orçamentos enviados e o contexto de cada oportunidade.',
  },
  {
    number: '02',
    title: 'Identifique quem precisa de retorno',
    description:
      'Visualize quais clientes ainda não responderam e há quanto tempo aguardam.',
  },
  {
    number: '03',
    title: 'Retome a conversa',
    description:
      'Lembre sua equipe de fazer o follow-up e continuar o atendimento no momento certo.',
  },
]

function HowItWorksSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="bg-[#f8f9ff] py-20 transition-colors duration-500 dark:bg-gray-900" id="como-funciona">
      <div className="mx-auto w-[calc(100%-2rem)] max-w-7xl lg:w-[calc(100%-3rem)]">
        <ScrollReveal className="mb-10 max-w-[690px]">
          <span className="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-green-700 dark:text-green-400">Como funciona</span>
          <h2 className="m-0 text-[clamp(2rem,3.5vw,2.75rem)] font-extrabold leading-[1.15] tracking-tight text-gray-900 dark:text-white">
            Um próximo passo mais claro para cada orçamento.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-500 dark:text-slate-300">
            A proposta da Nova é deixar o acompanhamento comercial mais simples
            e organizado para a rotina da oficina.
          </p>
        </ScrollReveal>
        <div className="grid gap-4 md:grid-cols-3">
          {steps.map((step) => (
            <ScrollReveal
              className="h-full"
              key={step.number}
              delay={Number(step.number) * 0.12}
            >
                <motion.article
                  className="h-full rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-colors duration-500 dark:border-white/10 dark:bg-gray-800"
                  whileHover={shouldReduceMotion ? undefined : { y: -8, scale: 1.02 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="text-xs font-extrabold tracking-widest text-green-600">{step.number}</span>
                  <h3 className="mb-2 mt-4 text-lg font-bold leading-snug text-gray-900 dark:text-white">{step.title}</h3>
                  <p className="text-sm leading-6 text-slate-500 dark:text-slate-300">{step.description}</p>
                </motion.article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
export default HowItWorksSection
