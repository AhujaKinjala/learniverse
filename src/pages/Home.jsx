import React from 'react'
import Layout from '../Components/Layout'

const Home = () => {
  return (
    <Layout title="Learniverse">
      <div className="h-screen flex flex-column">
        {/* Sidebar  */}
        <navbar />
        {/* Homefeed Section  */}
        <div>
          <carousel />
        </div>

        {/* Right Explore bar */}
        <mainfeed />
      </div>
    </Layout>
  )
}

export default Home