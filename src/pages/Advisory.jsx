import React from 'react'
import PersonCard from '../components/PersonCard'

const advisoryCommittee = [
  { name: 'Prof. Fathalla A Rihan', affiliation: 'UAE University, UAE', seed: 'rihan' },
  { name: 'Prof. J. J. Nieto', affiliation: 'University of Santiago de Compostela, Spain', seed: 'nieto' },
  { name: 'Prof. Sachi Srivastava', affiliation: 'University of Delhi, India', seed: 'sachi' },
  { name: 'Prof. Y. Kimura', affiliation: 'Toho University, Japan', seed: 'kimura' },
  { name: 'Prof. Y. Rohan Singh', affiliation: 'Manipur University, Canchipur'},
  { name: 'Prof. Kunquam Lan', affiliation: 'University of Alberta, Canada'},
  { name: 'Prof. Radu Ioan Bot', affiliation: 'WU, Austria'},
  { name: 'Prof. Renu Chug', affiliation: 'MDU Rohtak, India'},
  { name: 'Prof. Ruchi Das', affiliation: 'Delhi University, New Delhi, India'},
  { name: 'Prof. N. H. Shah', affiliation: 'Gujarat University, Ahmedabad, India'},
  { name: 'Prof. S. R. Singh', affiliation: 'CCS University, Meerut, India'},
  { name: 'Prof. C. K. Jaggi', affiliation: 'University of Delhi, India'},
]

const invitedSpeakers = [
  { name: 'Prof. Eberhard Malkowsky', role: 'Invited Speaker', affiliation: 'Serbia' },
  { name: 'Dr. Narayan C. Debnath', role: 'Invited Speaker', affiliation: 'USA'},
  { name: 'Prof. B. Sarkar', role: 'Invited Speaker', affiliation: 'South Korea'},
  { name: 'Prof. Vesna Velickovic', role: 'Invited Speaker', affiliation: 'Serbia'},
  { name: 'Prof. Almas Temirbekov', role: 'Invited Speaker', affiliation: 'Kazakhstan'},
  { name: 'Prof. Lateef O. Jalaso', role: 'Invited Speaker', affiliation: 'U.K.', seed: 'lateef' },
  { name: 'Prof. Vahid Roomi', role: 'Invited Speaker', affiliation: 'Iran'},
  { name: 'Prof. Kunquam Lan', role: 'Invited Speaker', affiliation: 'Canada'},
  { name: 'Prof. Wutiphol Sintunavarat', role: 'Invited Speaker', affiliation: 'Thailand'},
  { name: 'Prof. Lamine Mbarki', role: 'Invited Speaker', affiliation: 'Tunisia'},
  { name: 'Prof. Ovidiu Bagdasar', role: 'Invited Speaker', affiliation: 'U.K.'},
  { name: 'Prof. Jesus M Seoane', role: 'Invited Speaker', affiliation: 'Spain' },
  { name: 'Prof. Amar Debbouche', role: 'Invited Speaker', affiliation: 'Algeria' },
  { name: 'Prof. Rehena Nasrin', role: 'Invited Speaker', affiliation: 'Bangladesh'},
  { name: 'Prof. M N Hoda', role: 'Invited Speaker', affiliation: 'BV, India' },
  { name: 'Prof. Madhu Jain', role: 'Invited Speaker', affiliation: 'IIT Roorkee, Roorkee'},
  { name: 'Prof. C.K. Jaggi', role: 'Invited Speaker', affiliation: 'DU, India' },
  { name: 'Prof. S.R. Singh', role: 'Invited Speaker', affiliation: 'CCSU, India' },
  { name: 'Prof. Samarjit Kar', role: 'Invited Speaker', affiliation: 'NIT Durgapur, India' },
  { name: 'Prof. Milan Tuba', role: 'Invited Speaker', affiliation: 'USA' },
  { name: 'Prof. Erhan Piskin', role: 'Invited Speaker', affiliation: 'Turkey' },
  { name: 'Prof. Yesim Akbulut', role: 'Invited Speaker', affiliation: 'Turkey' },
  { name: 'Dr. Meriem Louafi', role: 'Invited Speaker', affiliation: 'Algeria' },
  { name: 'Prof. Santosh Kumar', role: 'Invited Speaker', affiliation: 'India' },
  { name: 'Prof. Aquil Ahmed', role: 'Invited Speaker', affiliation: 'AMU-India' },
  { name: 'Prof. Muslim Malik', role: 'Invited Speaker', affiliation: 'IIT-Mandi, India' },
  { name: 'Prof. Kaleem Raza Kazmi', role: 'Invited Speaker', affiliation: 'AMU-India' },
  { name: 'Prof. N.H. SHah', role: 'Invited Speaker', affiliation: 'Gujarat University, India' },
  { name: 'B K Dass', role: 'Invited Speaker', affiliation: 'DU-India' },
  { name: 'Dr. Izhar Uddin', role: 'Invited Speaker', affiliation: 'JMI-India' },
  { name: 'Dr. Gajendra Pratap', role: 'Invited Speaker', affiliation: 'JNU-India' },
  { name: 'Prof. M S Kadyan', role: 'Invited Speaker', affiliation: 'KU-India' },
  { name: 'Prof. M N Hoda', role: 'Invited Speaker', affiliation: 'India' },
  { name: 'Prof. Rajesh K. Pandey', role: 'Invited Speaker', affiliation: 'IIT-BHU, India' },
  { name: 'Dr. Madeep Mittial', role: 'Invited Speaker', affiliation: 'BU-India' },
  { name: 'Prof. Reetu Malhotra', role: 'Invited Speaker', affiliation: 'CU, Punjab, India' },
]

export default function Advisory(){
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-semibold mb-4">Invited Speakers</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {invitedSpeakers.map(p => <PersonCard key={p.name} {...p} />)}
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-4">Advisory Committee</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {advisoryCommittee.map(p => <PersonCard key={p.name} name={p.name} affiliation={p.affiliation} imgSeed={p.seed} />)}
        </div>
      </section>
    </div>
  )
}
