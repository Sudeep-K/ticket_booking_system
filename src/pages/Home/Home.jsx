import React from 'react'

import Card from '../../components/Card/Card'
import { data } from '../../utils/data'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <section className='max-w-6xl mx-auto py-16 flex flex-row flex-wrap gap-8'>
        {
          data.map((item) => (
            <Card info={item} />
          ))
        }
      </section>
    </div>
  )
}

export default Home