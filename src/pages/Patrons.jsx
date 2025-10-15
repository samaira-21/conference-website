import React from 'react'
import PersonCard from '../components/PersonCard'

const chiefPatrons = [
  { name: 'Dr. T. R. Paarivendhar', role: 'Hon’ble Founder Chancellor', affiliation: 'SRM Institute of Science & Technology, Chennai'},
  { name: 'Dr. P. Ravi Pachamuthu', role: 'Hon’ble Chancellor', affiliation: 'SRM University Delhi – NCR, Sonepat' }
]

const patrons = [
  { name: 'Prof. (Dr.) Paramjit S. Jaswal', role: 'Hon’ble Vice Chancellor', affiliation: 'SRM University Delhi – NCR, Sonepat' },
  { name: 'Prof. (Dr.) V. Samuel Raj', role: 'Registrar & Dean Academic Affairs', affiliation: 'SRM University Delhi - NCR, Sonepat'},
  { name: 'Prof. (Dr.) Vinay Kumar Mittal', role: 'Pro Vice-Chancellor', affiliation: 'SRM University Delhi - NCR, Sonepat'}
]

const mentors = [
  { name: 'Prof. (Dr.) Sunny Jose', role: 'Dean Science & Humanities', affiliation: 'SRM University Delhi – NCR, Sonepat'},
  { name: 'Prof. (Dr.) Ranjit Roy', role: 'Dean, Faculty of Engineering & Technology', affiliation: 'SRM University Delhi – NCR, Sonepat'},
  { name: 'Mr. Manoj Madhavam Kutty', role: 'Director Administration, IR & Outreach', affiliation: 'SRM University Delhi - NCR, Sonepat'},
  { name: 'Dr. M. Mohan', role: 'ADSW and HoD-CSE', affiliation: 'SRM University Delhi – NCR, Sonepat'}
]

const organizingSecretary = [
  { name: 'Dr. Sanjey Kumar', role: 'Organizing Secretary', affiliation: 'Dept. of Mathematics, SRM University'}
]

const conveners = [
  { name: 'Dr. Neeraj Kumar', role: 'Convener', affiliation: 'SRM University'},
  { name: 'Dr. Ruchi Kawatra', role: 'Convener', affiliation: 'SRM University'},
  { name: 'Dr. Javid Ali', role: 'Convener', affiliation: 'AMU'}
]

const secretaries = [
  { name: 'Dr. Sachin Malik', role: 'Conference Secretary', affiliation: 'SRM University'},
  { name: 'Dr. Asha Rani', role: 'Conference Secretary', affiliation: 'SRM University'},
  { name: 'Dr. Preeti Tyagi', role: 'Conference Secretary', affiliation: 'SRM University'},
  { name: 'Dr. Ruchi Kawatra', role: 'Conference Secretary', affiliation: 'SRM University'},
  { name: 'Dr. Ram Prasad Yadav', role: 'Conference Secretary', affiliation: 'SRM University'},
  { name: 'Dr. Deepak Grover', role: 'Conference Secretary', affiliation: 'SRM University'}
]

export default function Patrons(){
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-semibold mb-4">Chief Patrons</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {chiefPatrons.map(p => <PersonCard key={p.name} {...p} />)}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Patrons</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {patrons.map(p => <PersonCard key={p.name} {...p} />)}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Mentors</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {mentors.map(p => <PersonCard key={p.name} {...p} />)}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Organizing Secretary</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {organizingSecretary.map(p => <PersonCard key={p.name} {...p} />)}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Conveners</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {conveners.map(p => <PersonCard key={p.name} {...p} />)}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Conference Secretaries</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {secretaries.map(p => <PersonCard key={p.name} {...p} />)}
        </div>
      </section>
    </div>
  )
}
