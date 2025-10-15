import React from 'react'

export default function Program(){
  const days = [
    { title: 'Day 1 — 18 Dec', lines: ['Inauguration', 'Keynote talks', 'Panel discussion'] },
    { title: 'Day 2 — 19 Dec', lines: ['Technical sessions', 'Oral presentations', 'Poster session'] },
    { title: 'Day 3 — 20 Dec', lines: ['Student presentations', 'Valedictory & Closing'] }
  ]
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Program</h2>
      <p className="text-gray-600">Overview of the three-day program.</p>
      <div className="grid md:grid-cols-3 gap-4">
        {days.map(d => (
          <div key={d.title} className="card">
            <h4 className="font-medium mb-2">{d.title}</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              {d.lines.map((l, i) => <li key={i}>• {l}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
