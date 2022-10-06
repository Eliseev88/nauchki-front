import React from 'react'
import Children from '../components/Profile/Children/Children'
import User from '../components/Profile/User/User'

export default function Profile() {
  return (
    <main className="content">
        <User />
        <Children />
    </main>
  )
}
