import React from 'react'
import About from '../components/MainPage/About/About'
import Intro from '../components/MainPage/Intro/Intro'
import Standart from '../components/MainPage/Standart/Standart'
import Tarifs from '../components/MainPage/Tarifs/Tarifs'

export default function Main() {
  return (
    <main className='content'>
      <Intro />
      <About />
      <Standart />
      <Tarifs />
    </main>
  )
}
