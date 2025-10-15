import React from 'react'

export default function Contact(){
  return (
    <div className="max-w-2xl">
      <h2 className="text-2xl font-semibold mb-4">Contact</h2>

      <div className="card text-sm text-gray-700">
        <p><strong>Organizing Secretary:</strong> Dr. Sanjey Kumar</p>
        <p>Department of Mathematics, Faculty of Science & Humanities, SRM University Delhi – NCR, Sonepat</p>
        <p>Email: <a href="mailto:sanjey.k@srmuniversity.ac.in" className="text-[var(--accent)]">sanjey.k@srmuniversity.ac.in</a></p>
        <p>Contact No.: +91 91939 66699</p>
      </div>

      <div className="mt-4 text-xs text-gray-500">
        <p>Venue: SRM University, Delhi – NCR, Sonepat.</p>
      </div>
    </div>
  )
}
