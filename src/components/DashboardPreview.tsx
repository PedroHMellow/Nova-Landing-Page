import { Canvas, useFrame } from '@react-three/fiber'
import { RoundedBox } from '@react-three/drei'
import { useRef } from 'react'
import type { MutableRefObject, PointerEvent as ReactPointerEvent } from 'react'
import type { Group } from 'three'
import { motion, useMotionValue, useReducedMotion, useSpring } from 'motion/react'

type DragState = {
  pointerId: number
  x: number
  y: number
  rotationX: number
  rotationY: number
}

function DashboardCard() {
  return (
    <div className="w-[min(560px,calc(100vw-40px))] select-none rounded-2xl border border-white/10 bg-[#17212f] p-4 text-left shadow-[0_32px_80px_-24px_rgba(0,0,0,0.72),0_12px_32px_-16px_rgba(20,184,166,0.16)] sm:p-5">
      <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 text-sm font-semibold text-slate-200">
        <div className="flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center rounded-lg border border-green-400/20 bg-green-500/10 text-sm font-bold text-green-400">
            N
          </span>
          <span>Visão geral</span>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.04] px-2.5 py-1 text-[0.64rem] text-slate-300">
          <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
          Prévia do produto
        </span>
      </div>

      <div className="flex items-end justify-between gap-4 py-5 max-[440px]:items-start max-[440px]:flex-col">
        <div>
          <span className="text-[0.62rem] font-bold tracking-[0.1em] text-slate-400">
            ACOMPANHAMENTO
          </span>
          <h2 className="mt-1 text-lg font-bold text-slate-50">
            Oportunidades da oficina
          </h2>
        </div>
        <span className="whitespace-nowrap rounded-lg border border-white/10 px-2 py-2 text-[0.65rem] text-slate-300">
          Esta semana
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-3">
          <span className="block text-[0.66rem] text-slate-400">
            Precisam de retorno
          </span>
          <strong className="my-2 block text-[1.65rem] leading-none tracking-tight text-slate-50">
            04
          </strong>
          <small className="text-[0.66rem] text-slate-400">
            orçamentos aguardando
          </small>
        </div>
        <div className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-3">
          <span className="block text-[0.66rem] text-slate-400">
            Em acompanhamento
          </span>
          <strong className="my-2 block text-[1.65rem] leading-none tracking-tight text-green-400">
            12
          </strong>
          <small className="text-[0.66rem] text-slate-400">
            oportunidades abertas
          </small>
        </div>
      </div>

      <div className="mt-3 rounded-xl border border-amber-400/15 bg-amber-400/[0.035] p-3 sm:p-4">
        <div className="flex flex-wrap items-center gap-3">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/10 bg-slate-700 text-xs font-semibold text-slate-200">
            GA
          </span>
          <div className="grid gap-1">
            <strong className="text-xs text-slate-50">Gabriel Alves</strong>
            <span className="text-[0.64rem] text-slate-400">
              Jetta 2019 · Sistema de freios
            </span>
          </div>
          <span className="ml-auto rounded-full border border-amber-400/15 bg-amber-400/[0.08] px-2 py-1.5 text-[0.58rem] font-medium text-amber-200 max-[440px]:ml-12">
            Aguardando resposta
          </span>
        </div>
        <div className="mt-3 flex justify-between gap-3 border-t border-white/10 pt-3">
          <span className="text-[0.64rem] text-slate-400">
            Orçamento enviado há 3 dias
          </span>
          <strong className="text-xs text-slate-50">R$ 1.800,00</strong>
        </div>
      </div>
      <p className="mt-3 text-right text-[0.62rem] text-slate-400">
        Dados fictícios para demonstração
      </p>
    </div>
  )
}

type RotationTarget = {
  x: number
  y: number
}

function DashboardScene({
  targetRotation,
}: {
  targetRotation: MutableRefObject<RotationTarget>
}) {
  const groupRef = useRef<Group>(null)

  useFrame((_, delta) => {
    if (!groupRef.current) return
    const smoothing = 1 - Math.exp(-delta * 5)
    groupRef.current.rotation.x +=
      (targetRotation.current.x - groupRef.current.rotation.x) * smoothing
    groupRef.current.rotation.y +=
      (targetRotation.current.y - groupRef.current.rotation.y) * smoothing
  })

  return (
    <group ref={groupRef} rotation={[0.045, -0.035, 0]}>
      <RoundedBox
        args={[6.05, 4.65, 0.24]}
        radius={0.18}
        smoothness={5}
        position={[0, 0, -0.22]}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial color="#253344" metalness={0.32} roughness={0.42} />
      </RoundedBox>
      <RoundedBox
        args={[5.92, 4.52, 0.12]}
        radius={0.16}
        smoothness={5}
        position={[0, 0, -0.08]}
      >
        <meshStandardMaterial color="#17212f" metalness={0.18} roughness={0.52} />
      </RoundedBox>
      <pointLight position={[-3, 2.5, 2]} color="#14b8a6" intensity={0.65} distance={8} />
    </group>
  )
}

function DashboardPreview() {
  const shouldReduceMotion = useReducedMotion()
  const targetRotation = useRef({ x: 0.045, y: -0.035 })
  const dragState = useRef<DragState | null>(null)
  const rotateX = useSpring(useMotionValue(2.6), { stiffness: 100, damping: 24 })
  const rotateY = useSpring(useMotionValue(-2), { stiffness: 100, damping: 24 })

  function handlePointerDown(event: ReactPointerEvent<HTMLDivElement>) {
    event.preventDefault()
    event.currentTarget.setPointerCapture(event.pointerId)
    dragState.current = {
      pointerId: event.pointerId,
      x: event.clientX,
      y: event.clientY,
      rotationX: targetRotation.current.x,
      rotationY: targetRotation.current.y,
    }
  }

  function handlePointerMove(event: ReactPointerEvent<HTMLDivElement>) {
    const drag = dragState.current
    if (!drag || drag.pointerId !== event.pointerId) return

    const nextX = Math.max(
      -0.16,
      Math.min(0.16, drag.rotationX + (event.clientY - drag.y) * 0.004),
    )
    const nextY = Math.max(
      -0.14,
      Math.min(0.14, drag.rotationY + (event.clientX - drag.x) * 0.003),
    )

    targetRotation.current = { x: nextX, y: nextY }
    rotateX.set((nextX * 180) / Math.PI)
    rotateY.set((nextY * 180) / Math.PI)
  }

  function handlePointerUp(event: ReactPointerEvent<HTMLDivElement>) {
    if (dragState.current?.pointerId !== event.pointerId) return
    dragState.current = null
    event.currentTarget.releasePointerCapture(event.pointerId)
  }

  function resetTilt() {
    targetRotation.current = { x: 0.045, y: -0.035 }
    rotateX.set(2.6)
    rotateY.set(-2)
  }

  return (
    <div
      className="relative mx-auto h-[390px] w-full max-w-[590px] sm:h-[430px] lg:justify-self-end"
      id="demonstracao"
      aria-label="Demonstração ilustrativa de acompanhamento de orçamento"
    >
      <div
        className="pointer-events-none absolute -inset-8 rounded-[2.5rem] bg-[radial-gradient(ellipse_at_50%_45%,rgba(20,184,166,0.14),transparent_68%)] blur-2xl"
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-0">
        <Canvas
          camera={{ position: [0, 0, 8], fov: 34 }}
          dpr={[1, 1.5]}
          gl={{ alpha: true, antialias: true, powerPreference: 'low-power' }}
          onCreated={({ gl }) => gl.setClearColor('#000000', 0)}
          aria-hidden="true"
        >
          <ambientLight intensity={1.4} />
          <directionalLight position={[3, 4, 5]} intensity={1.1} />
          <DashboardScene targetRotation={targetRotation} />
        </Canvas>
      </div>
      <div
        className="absolute inset-0 flex items-center justify-center [perspective:1400px]"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onDoubleClick={resetTilt}
        aria-label="Painel 3D. Arraste para inclinar para frente, para trás ou para os lados. Dê duplo clique para centralizar."
      >
        <motion.div
          className="cursor-grab touch-none active:cursor-grabbing [transform-style:preserve-3d]"
          style={{ rotateX, rotateY, transformPerspective: 1400 }}
        >
          <DashboardCard />
        </motion.div>
      </div>
      <motion.p
        className="absolute bottom-1 left-0 right-0 text-center text-[0.68rem] text-slate-400"
        initial={shouldReduceMotion ? false : { opacity: 0 }}
        animate={shouldReduceMotion ? undefined : { opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.7 }}
      >
        Arraste o painel para explorar a perspectiva · duplo clique para centralizar
      </motion.p>
    </div>
  )
}

export default DashboardPreview
