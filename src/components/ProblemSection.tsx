import ScrollReveal from './ScrollReveal'

function ProblemSection() {
  return (
    <section className="bg-white py-20 transition-colors duration-500 dark:bg-gray-950" id="problema">
      <div className="mx-auto grid w-[calc(100%-2rem)] max-w-7xl gap-8 lg:w-[calc(100%-3rem)] lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <ScrollReveal>
          <span className="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-green-700 dark:text-green-400">O problema</span>
          <h2 className="m-0 text-[clamp(2rem,3.5vw,2.75rem)] font-extrabold leading-[1.15] tracking-tight text-gray-900 dark:text-white">
            O orçamento foi enviado. E depois?
          </h2>
        </ScrollReveal>
        <ScrollReveal className="self-center text-base leading-7 text-slate-600 dark:text-slate-300" direction="right" delay={0.1}>
          <p>
            No dia a dia da oficina, entre clientes, serviços e mensagens, um
            orçamento sem resposta pode acabar ficando para trás.
          </p>
          <p className="mt-4">
            A Nova está sendo pensada para ajudar sua equipe a acompanhar essas
            conversas e lembrar quais oportunidades ainda merecem um retorno —
            sem prometer serviço fechado ou receita garantida.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default ProblemSection
