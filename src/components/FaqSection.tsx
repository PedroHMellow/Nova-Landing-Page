import ScrollReveal from './ScrollReveal'

const questions = [
  {
    question: 'A Nova já está disponível?',
    answer:
      'A Nova está em desenvolvimento. A lista de espera será o canal para acompanhar as novidades antes do lançamento.',
  },
  {
    question: 'Preciso trocar o sistema da minha oficina?',
    answer:
      'A proposta é ajudar no acompanhamento de orçamentos sem exigir que a oficina substitua seu sistema de gestão atual.',
  },
  {
    question: 'A Nova envia mensagens automaticamente pelo WhatsApp?',
    answer:
      'A integração e o envio automático ainda não estão confirmados. A proposta inicial é ajudar a equipe a organizar os retornos.',
  },
  {
    question: 'Participar da lista de espera tem algum custo?',
    answer:
      'Não há compromisso de compra por enquanto. Os detalhes sobre planos e preços serão definidos mais adiante.',
  },
]

function FaqSection() {
  return (
    <section className="bg-[#f8f9ff] py-20 transition-colors duration-500 dark:bg-gray-900" id="duvidas-frequentes">
      <div className="mx-auto grid w-[calc(100%-2rem)] max-w-7xl gap-8 lg:w-[calc(100%-3rem)] lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <ScrollReveal>
          <span className="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-green-700 dark:text-green-400">Dúvidas frequentes</span>
          <h2 className="m-0 text-[clamp(2rem,3.5vw,2.75rem)] font-extrabold leading-[1.15] tracking-tight text-gray-900 dark:text-white">
            O que você precisa saber sobre a Nova.
          </h2>
        </ScrollReveal>
        <ScrollReveal className="border-t border-slate-300 dark:border-slate-700" direction="right" delay={0.1}>
          {questions.map((item) => (
            <details className="group border-b border-slate-300 py-5 dark:border-slate-700" key={item.question}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-bold text-gray-900 marker:hidden dark:text-white">
                {item.question}
                <span className="text-xl leading-none text-green-700 group-open:hidden dark:text-green-400" aria-hidden="true">+</span>
                <span className="hidden text-xl leading-none text-green-700 group-open:inline dark:text-green-400" aria-hidden="true">−</span>
              </summary>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500 dark:text-slate-300">{item.answer}</p>
            </details>
          ))}
        </ScrollReveal>
      </div>
    </section>
  )
}
export default FaqSection
