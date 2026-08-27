// components/investment/OreProcessingFlow.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';

const stages = [
  {
    id: 1,
    title: 'Raw Ore Intake',
    sub: 'Минданао терруар',
    desc: 'Добыча комплексной медно-золотой руды с вулканических массивов.',
    badge: 'Сырье',
  },
  {
    id: 2,
    title: 'Crushing & Flotation',
    sub: 'Дробление и обогащение',
    desc: 'Многостадийное измельчение и пенная сепарация медных сульфидов.',
    badge: 'Обогащение',
  },
  {
    id: 3,
    title: 'Smelting & Refining',
    sub: 'Пиро/гидрометаллургия',
    desc: 'Высокотемпературная плавка и электролизное осаждение чистой меди.',
    badge: 'Рафинирование',
  },
];

export const OreProcessingFlow: React.FC = () => {
  return (
    <div className="w-full bg-[#152438]/80 border border-white/10 rounded-xl p-6 lg:p-8 backdrop-blur-md">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 border-b border-white/10 pb-4">
        <div>
          <span className="text-xs font-mono text-[#00875A] uppercase tracking-widest">
            Mineral Processing Value Chain
          </span>
          <h3 className="text-xl font-bold text-white mt-1">
            Технологическая модель глубокой переработки: Руда ➔ Катодная медь + Золото (BSP)
          </h3>
        </div>
        <div className="mt-2 md:mt-0 flex items-center space-x-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-ping" />
          <span className="text-xs font-mono text-gray-400">100% On-Island Value Add</span>
        </div>
      </div>

      {/* SVG Pipeline Schema */}
      <div className="relative w-full overflow-x-auto py-6">
        <svg
          viewBox="0 0 1000 240"
          className="w-full min-w-[760px] h-auto overflow-visible select-none"
        >
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00875A" />
              <stop offset="50%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#C5A880" />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="glow" />
              <feComposite in="SourceGraphic" in2="glow" operator="over" />
            </filter>
          </defs>

          {/* Main Flow Tracks */}
          <path
            d="M 120 120 L 370 120 L 620 120"
            stroke="#1E2A38"
            strokeWidth="6"
            strokeLinecap="round"
          />
          {/* Animated Main Line */}
          <motion.path
            d="M 120 120 L 370 120 L 620 120"
            stroke="url(#lineGrad)"
            strokeWidth="4"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          />

          {/* Dual Split Outflow Lines to End Products */}
          {/* Copper Cathode Branch (Top) */}
          <motion.path
            d="M 620 120 C 700 120, 720 60, 800 60 L 870 60"
            stroke="#10B981"
            strokeWidth="3"
            fill="none"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 1.2 }}
          />
          {/* Gold to BSP Branch (Bottom) */}
          <motion.path
            d="M 620 120 C 700 120, 720 180, 800 180 L 870 180"
            stroke="#D4AF37"
            strokeWidth="3"
            fill="none"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 1.2 }}
          />

          {/* Moving Energy Particles */}
          <motion.circle
            r="4"
            fill="#10B981"
            filter="url(#glow)"
            animate={{
              cx: [120, 370, 620, 870],
              cy: [120, 120, 120, 60],
            }}
            transition={{ repeat: Infinity, duration: 3.5, ease: 'linear' }}
          />
          <motion.circle
            r="4"
            fill="#D4AF37"
            filter="url(#glow)"
            animate={{
              cx: [120, 370, 620, 870],
              cy: [120, 120, 120, 180],
            }}
            transition={{ repeat: Infinity, duration: 3.5, delay: 1.7, ease: 'linear' }}
          />

          {/* Node 1: Raw Ore */}
          <g transform="translate(120, 120)">
            <circle r="28" fill="#0B192C" stroke="#00875A" strokeWidth="2" />
            <text textAnchor="middle" dy="4" fill="#FFFFFF" fontSize="11" fontFamily="JetBrains Mono" fontWeight="600">
              ORE
            </text>
          </g>

          {/* Node 2: Flotation */}
          <g transform="translate(370, 120)">
            <circle r="28" fill="#0B192C" stroke="#10B981" strokeWidth="2" />
            <text textAnchor="middle" dy="4" fill="#FFFFFF" fontSize="10" fontFamily="JetBrains Mono" fontWeight="600">
              FLOTATION
            </text>
          </g>

          {/* Node 3: Refining */}
          <g transform="translate(620, 120)">
            <circle r="28" fill="#0B192C" stroke="#C5A880" strokeWidth="2" />
            <text textAnchor="middle" dy="4" fill="#FFFFFF" fontSize="10" fontFamily="JetBrains Mono" fontWeight="600">
              REFINERY
            </text>
          </g>

          {/* Output Node A: Copper Cathodes */}
          <g transform="translate(870, 60)">
            <rect x="-60" y="-22" width="120" height="44" rx="6" fill="#152438" stroke="#10B981" strokeWidth="1.5" />
            <text textAnchor="middle" dy="-4" fill="#10B981" fontSize="10" fontFamily="Inter" fontWeight="700">
              CATHODE COPPER
            </text>
            <text textAnchor="middle" dy="12" fill="#94A3B8" fontSize="8" fontFamily="JetBrains Mono">
              Grade A (99.99%) &middot; EV/Grid
            </text>
          </g>

          {/* Output Node B: Gold to BSP */}
          <g transform="translate(870, 180)">
            <rect x="-60" y="-22" width="120" height="44" rx="6" fill="#152438" stroke="#D4AF37" strokeWidth="1.5" />
            <text textAnchor="middle" dy="-4" fill="#D4AF37" fontSize="10" fontFamily="Inter" fontWeight="700">
              GOLD BULLION
            </text>
            <text textAnchor="middle" dy="12" fill="#94A3B8" fontSize="8" fontFamily="JetBrains Mono">
              Direct Sale to BSP (RA 11256)
            </text>
          </g>
        </svg>
      </div>

      {/* Structured Text Cards below Diagram */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 pt-6 border-t border-white/10 text-xs">
        {stages.map((stage) => (
          <div key={stage.id} className="bg-deep-ocean/50 p-4 rounded border border-white/5">
            <div className="flex justify-between items-center mb-1">
              <span className="text-gold-sand font-mono">{`0${stage.id} // ${stage.badge}`}</span>
            </div>
            <div className="text-white font-bold text-sm mb-1">{stage.title}</div>
            <div className="text-gray-400 mb-2 font-mono text-[11px]">{stage.sub}</div>
            <p className="text-gray-300 leading-relaxed">{stage.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};