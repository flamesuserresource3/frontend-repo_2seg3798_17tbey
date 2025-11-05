import { motion } from 'framer-motion';

export default function AnimatedBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
      {/* Soft moving gradient blobs */}
      <motion.div
        className="absolute -top-32 -left-24 h-96 w-96 rounded-full blur-3xl"
        style={{ background: 'radial-gradient(closest-side, rgba(147,51,234,0.35), transparent)' }}
        animate={{ x: [0, 40, -20, 0], y: [0, 20, -30, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-40 -right-24 h-[28rem] w-[28rem] rounded-full blur-3xl"
        style={{ background: 'radial-gradient(closest-side, rgba(79,70,229,0.35), transparent)' }}
        animate={{ x: [0, -30, 20, 0], y: [0, -10, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[-6rem] left-1/2 -translate-x-1/2 h-[32rem] w-[32rem] rounded-full blur-3xl"
        style={{ background: 'radial-gradient(closest-side, rgba(56,189,248,0.3), transparent)' }}
        animate={{ scale: [1, 1.1, 0.95, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}
