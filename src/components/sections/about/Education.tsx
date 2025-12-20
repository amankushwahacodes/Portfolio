import React from 'react'
import Image from 'next/image'
import Container from '@/components/common/Container'


const educationData = [
  {
    logo: '/About/utulogo2.png',
    institute: 'Uka Tarsadia University',
    degree: 'B.Tech in Computer Science Engineering',
    year: '2023 - 2027',
  },
  {
    logo: '/About/sunrays.jpeg',
    institute: 'Sunrays School',
    degree: 'Higher Secondary',
    year: '2021 - 2023',
  },
]

const Education = () => {
  return (
    <Container className="mb-20">
      <h2 className="text-2xl font-bold mb-8"> 
                                      🎓 Education
                                      </h2>
      <div className="space-y-6">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
          >
            <div className="flex items-center gap-4">
              <Image
                src={edu.logo}
                alt={`${edu.institute} logo`}
                width={48}
                height={48}
                className="rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold text-lg">{edu.institute}</h3>
                <p className="text-sm text-neutral-500">{edu.degree}</p>
              </div>
            </div>
            <div className="text-sm text-neutral-500 sm:text-right">{edu.year}</div>
          </div>
        ))}
      </div>
    </Container>
  )
}

export default Education
