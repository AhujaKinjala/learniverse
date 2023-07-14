import React from 'react'
import {Helmet} from 'react-helmet'


const Layout = ({title,children}) => {
  return (
    <div>Layout</div>
    <Helmet>
        <title>
            {title}
        </title>
        <link rel="icon" href=" " type='image/png' sizes='16X16' />
    </Helmet>
    <div>{children}</div>

  )
}

export default Layout