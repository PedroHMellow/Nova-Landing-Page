function Footer() {
  return (
    <footer className="bg-[#0b1220] text-slate-400 transition-colors duration-500 dark:bg-black">
      <div className="mx-auto flex min-h-[74px] w-[calc(100%-2rem)] max-w-7xl flex-wrap items-center justify-between gap-4 py-5 text-xs lg:w-[calc(100%-3rem)]">
        <a className="text-sm font-extrabold tracking-tight text-white" href="#inicio">
          NOVA
        </a>
        <span>Uma nova forma de acompanhar orçamentos da sua oficina.</span>
        <span>Em desenvolvimento</span>
      </div>
    </footer>
  )
}

export default Footer
