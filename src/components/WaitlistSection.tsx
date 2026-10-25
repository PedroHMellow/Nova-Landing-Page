import { useState, type FormEvent } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { saveWaitlistEntry } from '../services/waitlistStore'

type WaitlistForm = {
  name: string
  workshop: string
  phone: string
  email: string
}

const initialForm: WaitlistForm = {
  name: '',
  workshop: '',
  phone: '',
  email: '',
}

const fieldClassName =
  'mt-1.5 min-h-11 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-green-600 focus:ring-2 focus:ring-green-500/20 dark:border-slate-600 dark:bg-gray-800 dark:text-white dark:placeholder:text-slate-400'

function WaitlistSection() {
  const [form, setForm] = useState(initialForm)
  const [submittedName, setSubmittedName] = useState('')
  const [submitError, setSubmitError] = useState('')
  const shouldReduceMotion = useReducedMotion()

  function updateField(field: keyof WaitlistForm, value: string) {
    setForm((currentForm) => ({ ...currentForm, [field]: value }))
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitError('')

    try {
      saveWaitlistEntry({
        name: form.name.trim(),
        workshop: form.workshop.trim(),
        phone: form.phone.trim(),
        email: form.email.trim(),
      })
      setSubmittedName(form.name.trim())
    } catch {
      setSubmitError(
        'Não foi possível salvar neste navegador. Verifique o espaço disponível e tente novamente.',
      )
    }
  }

  function editForm() {
    setSubmittedName('')
  }

  return (
    <section
      className="overflow-hidden bg-[radial-gradient(ellipse_at_50%_0%,rgba(20,184,166,0.12),transparent_45%),#111827] px-4 py-16 text-center sm:py-20"
      id="lista-de-espera"
    >
      <motion.div
        className="mx-auto flex max-w-7xl flex-col items-center"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 24, scale: 0.98 }}
        whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/10 text-green-400">
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M20 11.5a7.5 7.5 0 0 1-11.2 6.5L4 19l1-4.5A7.5 7.5 0 1 1 20 11.5Z"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
            <path
              d="M9 9.2c.5 2 1.8 3.3 3.8 3.8l1-1 1.8.8c-.2 1.1-.9 1.7-2 1.7-3.3-.2-6.1-3-6.3-6.3 0-1.1.6-1.8 1.7-2l.8 1.8-0.8 1.2Z"
              fill="currentColor"
            />
          </svg>
        </span>
        <h2 className="mt-5 max-w-2xl text-[clamp(2rem,4vw,3rem)] font-extrabold leading-tight tracking-tight text-black dark:text-white sm:text-[clamp(2.5rem,4vw,3.5rem)]">
          Não deixe o próximo orçamento esquecido.
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
          Conheça uma nova forma de acompanhar as oportunidades comerciais da
          sua oficina e transformar orçamentos parados em novas conversas.
        </p>
        <div className="mt-5 flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-slate-300">
          <span className="inline-flex items-center gap-2">
            <span className="text-green-400" aria-hidden="true">✓</span>
            Acesso antecipado exclusivo
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="text-green-400" aria-hidden="true">✓</span>
            Sem compromisso de compra
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="text-green-400" aria-hidden="true">✓</span>
            Novidades sobre o lançamento
          </span>
        </div>

        <div className="mt-8 w-full max-w-[560px] rounded-xl border border-slate-200 bg-white p-5 text-left shadow-2xl transition-colors duration-500 dark:border-white/10 dark:bg-gray-900 sm:p-6">
          <AnimatePresence mode="wait" initial={false}>
            {submittedName ? (
              <motion.div
                className="flex min-h-[330px] flex-col items-center justify-center text-center"
                key="confirmation"
                initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.45 }}
                role="status"
                aria-live="polite"
              >
                <span className="grid h-12 w-12 place-items-center rounded-full bg-green-100 text-2xl font-bold text-green-700 dark:bg-green-500/15 dark:text-green-400" aria-hidden="true">
                  ✓
                </span>
                <h3 className="mt-4 text-xl font-bold text-slate-900 dark:text-white">
                  Obrigado, {submittedName}!
                </h3>
                <p className="mt-2 max-w-md text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Cadastro salvo apenas neste navegador para demonstração. Os
                  dados não foram enviados para a equipe da Nova.
                </p>
                <button
                  className="mt-5 rounded-lg px-4 py-2 text-sm font-semibold text-green-800 underline underline-offset-4 hover:text-green-900 dark:text-green-400 dark:hover:text-green-300"
                  type="button"
                  onClick={editForm}
                >
                  Voltar ao formulário
                </button>
              </motion.div>
            ) : (
              <motion.form
                className="grid gap-3"
                key="form"
                onSubmit={handleSubmit}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.35 }}
              >
                {submitError && (
                  <p
                    className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-800 dark:border-red-400/30 dark:bg-red-950/30 dark:text-red-200"
                    role="alert"
                  >
                    {submitError}
                  </p>
                )}
                <label className="text-xs font-semibold text-slate-900 dark:text-slate-100">
                  Seu Nome Completo
                  <input
                    className={fieldClassName}
                    autoComplete="name"
                    name="name"
                    placeholder="Ex: Carlos Eduardo de Oliveira"
                    value={form.name}
                    onChange={(event) => updateField('name', event.target.value)}
                    required
                  />
                </label>

                <label className="text-xs font-semibold text-slate-900 dark:text-slate-100">
                  Nome da sua Oficina Mecânica
                  <input
                    className={fieldClassName}
                    autoComplete="organization"
                    name="workshop"
                    placeholder="Ex: Auto Center Oliveira & Filhos"
                    value={form.workshop}
                    onChange={(event) => updateField('workshop', event.target.value)}
                    required
                  />
                </label>

                <div className="grid gap-3 sm:grid-cols-2">
                  <label className="text-xs font-semibold text-slate-900 dark:text-slate-100">
                    WhatsApp com DDD
                    <input
                      className={fieldClassName}
                      autoComplete="tel"
                      name="phone"
                      type="tel"
                      inputMode="tel"
                      minLength={10}
                      maxLength={20}
                      placeholder="(11) 99999-9999"
                      value={form.phone}
                      onChange={(event) => updateField('phone', event.target.value)}
                      required
                    />
                  </label>

                  <label className="text-xs font-semibold text-slate-900 dark:text-slate-100">
                    E-mail Profissional
                    <input
                      className={fieldClassName}
                      autoComplete="email"
                      name="email"
                      type="email"
                      placeholder="carlos@autocenter.com.br"
                      value={form.email}
                      onChange={(event) => updateField('email', event.target.value)}
                      required
                    />
                  </label>
                </div>

                <button
                  className="mt-1 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-green-500 px-4 text-sm font-bold text-green-950 shadow-[0_4px_14px_rgba(34,197,94,0.3)] transition hover:-translate-y-px hover:brightness-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
                  type="submit"
                >
                  Quero entrar na lista de espera
                  <span aria-hidden="true">→</span>
                </button>

                <p className="border-t border-slate-100 pt-3 text-[0.68rem] leading-4 text-slate-500 dark:border-white/10 dark:text-slate-400">
                  Demonstração local: seus dados ficam salvos apenas neste
                  navegador e não são enviados para a equipe da Nova.
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  )
}

export default WaitlistSection
