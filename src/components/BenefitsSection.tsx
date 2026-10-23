import { motion, useReducedMotion } from 'motion/react'
import ScrollReveal from './ScrollReveal'

const benefits = [
  {
    title: 'Menos oportunidades esquecidas',
    description:
      'Acompanhe os orçamentos enviados sem depender de conversas perdidas no WhatsApp.',
  },
  {
    title: 'Follow-up mais organizado',
    description:
      'Saiba quem precisa de retorno e mantenha cada oportunidade visível para a equipe.',
  },
  {
    title: 'Mais clareza no atendimento',
    description:
      'Entenda o que está aguardando resposta e decida com mais informação o próximo passo.',
  },
]

function BenefitsSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="bg-white py-20 transition-colors duration-500 dark:bg-gray-950" id="beneficios">
      <div className="mx-auto grid w-[calc(100%-2rem)] max-w-7xl gap-8 lg:w-[calc(100%-3rem)] lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <ScrollReveal>
          <span className="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-green-700 dark:text-green-400">Feita para a rotina da oficina</span>
          <h2 className="m-0 text-[clamp(2rem,3.5vw,2.75rem)] font-extrabold leading-[1.15] tracking-tight text-gray-900 dark:text-white">
            Mais controle sobre as conversas que podem virar serviço.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-500 dark:text-slate-300">
            Sem substituir a forma como você trabalha: a ideia é ajudar a manter
            as oportunidades à vista.
          </p>
        </ScrollReveal>
        <div className="grid content-center gap-6">
          {benefits.map((benefit, index) => (
            <ScrollReveal
              className="flex items-start gap-4"
              key={benefit.title}
              delay={index * 0.12}
            >
              <motion.div
                className="flex items-start gap-4"
                whileHover={shouldReduceMotion ? undefined : { x: 8 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-green-500/10 font-extrabold text-green-700 dark:text-green-400" aria-hidden="true">✓</span>
              <div>
                <h3 className="mb-1 text-base font-bold text-gray-900 dark:text-white">{benefit.title}</h3>
                <p className="text-sm leading-6 text-slate-500 dark:text-slate-300">{benefit.description}</p>
              </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
export default BenefitsSection
