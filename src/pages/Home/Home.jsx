import React from 'react'

import Card from '../../components/Card/Card'
import { data } from '../../utils/data'

const Home = () => {

  return (
    <div>
      <section className='max-w-6xl mx-auto py-16 flex flex-row flex-wrap gap-8'>
        {
          data.map((item) => (
            <Card info={item} key={item.imdbID} />
          ))
        }
      </section>
    </div>
  )
}

export default Home