import React from 'react';
import {Outlet} from 'react-router-dom'

const PlainLayout = () => {
  return (
   <main style={{padding:'20px'}}>
     <Outlet/>
   </main>
  )
}

export default PlainLayout
