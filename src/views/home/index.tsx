import React, { memo, useEffect, useState } from 'react'

import xLRequest from '@/services'

interface IHighscore {
  _id: string
  type: string
  title: string
  subtitle: string
  list: any[]
}

const Home = memo(() => {
  const [highscore, setHighscore] = useState<IHighscore>({} as IHighscore)

  useEffect(() => {
    xLRequest.get({ url: '/home/highscore' }).then((res) => {
      setHighscore(res)
    })
  }, [])

  return (
    <div>
      <h2>{highscore.title}</h2>
      <h3>{highscore.subtitle}</h3>
      <ul>
        {highscore?.list?.map((item) => {
          return <li key={item.id}>{item.name}</li>
        })}
      </ul>
    </div>
  )
})

export default Home
