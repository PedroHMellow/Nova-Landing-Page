import { lazy, Suspense } from 'react'
import { motion, useReducedMotion } from 'motion/react'

const DashboardPreview = lazy(() => import('./DashboardPreview'))

function HeroSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="overflow-hidden bg-gray-900 text-white" id="inicio">
      <div className="mx-auto grid min-h-[620px] w-[calc(100%-2rem)] max-w-7xl items-center gap-12 py-16 lg:w-[calc(100%-3rem)] lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
        <motion.div
          className="relative z-[1]"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-teal-500/25 bg-teal-500/10 px-3 py-2 text-xs font-semibold text-teal-200">
            <span className="h-[7px] w-[7px] rounded-full bg-green-500 shadow-[0_0_12px_rgba(34,197,94,0.7)]" />
            Mais organização para sua oficina
          </span>
          <h1 className="mb-5 mt-6 max-w-[670px] text-[clamp(2.75rem,5.2vw,4.25rem)] font-extrabold leading-[1.05] tracking-[-0.045em] text-white">
            Pare de perder dinheiro com orçamentos esquecidos.
          </h1>
          <p className="max-w-[570px] text-[1.08rem] leading-[1.65] text-slate-300">
            Organize os orçamentos da sua oficina, identifique clientes que
            precisam de retorno e transforme conversas paradas no WhatsApp em
            novas oportunidades de serviço.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-5 max-[440px]:items-stretch max-[440px]:flex-col">
            <a
              className="inline-flex min-h-[52px] items-center justify-center gap-3 rounded-xl bg-green-500 px-5 text-sm font-bold text-gray-900 shadow-[0_4px_14px_rgba(34,197,94,0.25)] transition hover:-translate-y-px hover:brightness-105 max-[440px]:w-full"
              href="#lista-de-espera"
            >
              Quero participar da lista de espera
              <span aria-hidden="true">→</span>
            </a>
            <a
              className="text-sm font-semibold text-slate-200 underline decoration-slate-200/45 underline-offset-4 max-[440px]:self-start"
              href="#como-funciona"
            >
              Conheça a proposta
            </a>
          </div>
          <p className="mt-4 text-xs text-slate-400">
            Conheça o produto antes do lançamento. Sem compromisso de compra.
          </p>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, x: 28 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
          transition={{ duration: 1.15, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <Suspense
            fallback={
              <div className="h-[390px] w-full max-w-[590px] animate-pulse rounded-2xl bg-white/5 sm:h-[430px]" />
            }
          >
            <DashboardPreview />
          </Suspense>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
