import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/program', label: 'Program' },
    { to: '/advisory', label: 'Advisory & Speakers' },
    { to: '/patrons', label: 'Patrons' },
    { to: '/register', label: 'Registration' },
    { to: '/contact', label: 'Contact' }
  ]

  return (
    <header className="sticky top-0 z-40 bg-white/60 backdrop-blur border-b border-gray-200">
      <div className="container flex items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[var(--accent)] flex items-center justify-center text-white font-semibold">IC</div>
          <div>
            <div className="text-sm font-semibold text-gray-900">International Conference</div>
            <div className="text-xs text-gray-500">Applied Mathematics and Computational Sciences • 18–20 Dec 2025</div>
          </div>
        </Link>

        <nav className="hidden md:flex gap-6 items-center text-sm">
          {links.map(l => (
            <Link key={l.to} to={l.to} className={`hover:text-gray-900 ${location.pathname === l.to ? 'text-gray-900 font-medium' : 'text-gray-600'}`}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} aria-label="menu" className="p-2 rounded">
            <Menu size={18} />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t">
          <div className="flex flex-col px-4 py-3 gap-2">
            {links.map(l => (<Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="py-2">{l.label}</Link>))}
          </div>
        </div>
      )}
    </header>
  )
}
