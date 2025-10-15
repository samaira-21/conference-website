import React from 'react'
import { motion } from 'framer-motion'

export default function PersonCard({ name, role, affiliation }) {
  return (
    <motion.div whileHover={{ y: -6 }} className="card flex items-center gap-4">
      <div>
        <div className="text-gray-900 font-medium">{name}</div>
        {role && <div className="text-xs text-[var(--muted)] mt-1">{role}</div>}
        {affiliation && <div className="text-sm text-gray-600 mt-1">{affiliation}</div>}
      </div>
    </motion.div>
  )
}

