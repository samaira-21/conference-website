import React from 'react'
import PersonCard from '../components/PersonCard'

const speakers = [
  { name: 'Prof. B. Sarkar', role: 'Invited Speaker', affiliation: 'Yonsei University, South Korea', seed: 'sarkar' },
  { name: 'Prof. Almas Temirbekov', role: 'Invited Speaker', affiliation: 'Kazakhstan', seed: 'almas' },
  { name: 'Prof. Eberhard Malkowsky', role: 'Invited Speaker', affiliation: 'Serbia', seed: 'eberhard' },
  { name: 'Prof. Vittorio Colao', role: 'Invited Speaker', affiliation: 'Italy', seed: 'vittorio' },
  { name: 'Prof. Lateef O. Jalaso', role: 'Invited Speaker', affiliation: 'U.K.', seed: 'lateef' },
  { name: 'Prof. Vahid Roomi', role: 'Invited Speaker', affiliation: 'Iran', seed: 'vahid' },
  { name: 'Prof. Jesús M. Seoane', role: 'Invited Speaker', affiliation: 'Spain', seed: 'jesus' },
  { name: 'Prof. Madhu Jain', role: 'Invited Speaker', affiliation: 'IIT Roorkee', seed: 'madhu' }
]

export default function Speakers(){
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Invited Speakers</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {speakers.map(s => <PersonCard key={s.name} name={s.name} role={s.role} affiliation={s.affiliation} imgSeed={s.seed} />)}
      </div>
    </div>
  )
}
