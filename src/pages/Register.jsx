import React from 'react'

export default function Register(){
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <h2 className="text-2xl font-semibold">Registration — How to Pay</h2>

      <div className="card">
        <h3 className="font-medium mb-2">Registration Fees</h3>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>Research Scholars: ₹2500</li>
          <li>Professors: ₹3000</li>
          <li>Conference Participants / Students: ₹2000</li>
          <li>Industry Participants: ₹4000</li>
          <li>Foreign Participants: 200 USD</li>
        </ul>
      </div>

      <div className="card">
        <h3 className="font-medium mb-2">Registration Link</h3>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>
            <a
              href="https://forms.gle/8xJv7u2GpG2Ueyba6"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--accent)] hover:underline"
            >
            https://forms.gle/8xJv7u2GpG2Ueyba6
            </a>
          </li>
          </ul>
    </div>


      <div className="card">
        <h3 className="font-medium mb-2">Payment Details</h3>
        <p className="text-sm text-gray-700 mb-2">PAYMENT MODE: NEFT / IMPS / DIRECT DEPOSIT / SWIFT TRANSFER</p>

        <div className="text-sm text-gray-800 space-y-1">
          <div><strong>Account name:</strong> SRM University Haryana</div>
          <div><strong>Account no:</strong> 35723701835</div>
          <div><strong>Branch:</strong> MLNS Rai</div>
          <div><strong>IFSC Code:</strong> SBIN0006838</div>
        </div>

        <p className="text-xs text-gray-500 mt-3">
          Note: Participants are requested to make their own accommodation arrangements. Last date for registration: <strong>30th November 2025</strong>.
        </p>
      </div>

      <div className="card">
        <h3 className="font-medium mb-2">Need help?</h3>
        <p className="text-sm text-gray-700">Contact Organizing Secretary: Dr. Sanjey Kumar — <a className="text-[var(--accent)]" href="mailto:sanjey.k@srmuniversity.ac.in">sanjey.k@srmuniversity.ac.in</a> • <a href="mailto:icmsiaai@srmuniversity.ac.in" className="text-[var(--accent)]">icmsiaai@srmuniversity.ac.in</a> • +91 91939 66699</p>
      </div>
    </div>
  )
}
