import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import useTheme from './useTheme'

const navigation = [
  { label: 'O Problema', href: '#problema' },
  { label: 'Como Funciona', href: '#como-funciona' },
  { label: 'Demonstração', href: '#demonstracao' },
  { label: 'Benefícios', href: '#beneficios' },
  { label: 'Dúvidas Frequentes', href: '#duvidas-frequentes' },
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const shouldReduceMotion = useReducedMotion()
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <header className="sticky top-0 z-10 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur transition-colors duration-500 dark:border-white/10 dark:bg-gray-950/95">
      <div className="mx-auto flex min-h-[72px] w-[calc(100%-2rem)] max-w-7xl items-center justify-between gap-3 lg:w-[calc(100%-3rem)] lg:gap-6">
        <a
          className="inline-flex shrink-0 items-center gap-2 text-gray-900 no-underline dark:text-white"
          href="#inicio"
          aria-label="Nova — início"
        >
          <svg className="h-[25px] w-[25px] text-green-800" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <circle cx="16" cy="16" r="12.25" stroke="currentColor" strokeWidth="2.5" />
            <path
              d="M10.5 16h10m-4-4 4 4-4 4"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-[0.95rem] font-extrabold tracking-tight">NOVA</span>
          <span className="ml-0.5 hidden whitespace-nowrap rounded-full border border-teal-600/25 bg-teal-500/10 px-2 py-1 text-[0.66rem] font-semibold text-teal-700 dark:border-teal-300/20 dark:text-teal-200 sm:inline">
            Em desenvolvimento
          </span>
        </a>

        <button
          className="ml-auto flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-xl border border-slate-200 bg-white dark:border-white/15 dark:bg-gray-900 lg:hidden"
          type="button"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          <span className="h-0.5 w-[17px] rounded bg-gray-900 dark:bg-white" />
          <span className="h-0.5 w-[17px] rounded bg-gray-900 dark:bg-white" />
          <span className="h-0.5 w-[17px] rounded bg-gray-900 dark:bg-white" />
        </button>

        <nav className="hidden items-center justify-center gap-5 lg:flex" aria-label="Navegação principal">
          {navigation.map((item) => (
            <a
              className="whitespace-nowrap rounded-lg px-0 py-2 text-xs font-semibold text-slate-700 transition-colors hover:text-green-800 dark:text-slate-300 dark:hover:text-green-400"
              key={item.href}
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              className="absolute left-0 top-full flex w-full flex-col border-b border-slate-200 bg-white px-4 pb-4 pt-2 dark:border-white/10 dark:bg-gray-900 lg:hidden"
              id="main-navigation"
              aria-label="Navegação principal"
              initial={shouldReduceMotion ? false : { opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.32, ease: [0.22, 1, 0.36, 1] }}
            >
              {navigation.map((item) => (
                <a
                  className="rounded-lg px-2 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50 hover:text-green-800 dark:text-slate-200 dark:hover:bg-white/5 dark:hover:text-green-400"
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>

        <a
          className="inline-flex min-h-10 shrink-0 items-center justify-center rounded-xl bg-green-500 px-2 text-xs font-bold text-gray-900 shadow-[0_4px_14px_rgba(34,197,94,0.25)] transition hover:-translate-y-px hover:brightness-105 sm:px-4"
          href="#lista-de-espera"
          onClick={() => setMenuOpen(false)}
        >
          <span className="sm:hidden">Lista</span>
          <span className="hidden sm:inline">Lista de Espera</span>
        </a>

        <motion.button
          className="relative flex h-8 w-14 shrink-0 items-center rounded-full border border-slate-300 bg-slate-200 p-1 transition-colors duration-500 dark:border-slate-600 dark:bg-slate-800"
          type="button"
          role="switch"
          aria-checked={isDark}
          aria-label="Modo escuro"
          title={isDark ? 'Desativar modo escuro' : 'Ativar modo escuro'}
          onClick={toggleTheme}
          whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}
        >
          <span className="absolute left-[7px] text-amber-500" aria-hidden="true">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.8" />
              <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </span>
          <span className="absolute right-[7px] text-indigo-200" aria-hidden="true">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
              <path d="M20.2 15.4A8.5 8.5 0 0 1 8.6 3.8a8.5 8.5 0 1 0 11.6 11.6Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
            </svg>
          </span>
          <motion.span
            className="relative z-[1] grid h-6 w-6 place-items-center rounded-full bg-white text-slate-700 shadow-md dark:bg-slate-100"
            animate={{ x: isDark ? 24 : 0, rotate: isDark ? -18 : 0 }}
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : { type: 'spring', stiffness: 380, damping: 26 }
            }
            aria-hidden="true"
          >
            {isDark ? (
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                <path d="M20.2 15.4A8.5 8.5 0 0 1 8.6 3.8a8.5 8.5 0 1 0 11.6 11.6Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
              </svg>
            ) : (
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.8" />
                <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            )}
          </motion.span>
        </motion.button>
      </div>
    </header>
  )
}

export default Header
