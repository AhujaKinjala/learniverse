import React from 'react'
import {Helmet} from 'react-helmet'


const Layout = ({title,children}) => {
  return (
    <div>
            <Helmet>
               
                <link
                    rel="icon"
                    href="flogo.png"
                    type="image/png"
                    sizes="16x16"
                />
                 <title>{title}</title>
            </Helmet>
            <div>{children}</div>
        </div>

  )
}

export default Layout