import React from 'react'

export default function Footer() {
  return (
    <footer className="border-t bg-white mt-8">
      <div className="container px-4 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-2">
        <div>© {new Date().getFullYear()} SRM University Delhi – NCR, Sonepat</div>
        <div>Venue: SRM University, Delhi – NCR • Contact: sanjey.k@srmuniversity.ac.in, icmsiaai@srmuniversity.ac.in</div>
      </div>
    </footer>
  )
}
