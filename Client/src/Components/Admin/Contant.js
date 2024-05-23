import React from 'react'
import '../Admin/Contant.css'
import { BiSearch, BiNotification } from 'react-icons/bi'


export const Contant = () => {
  return (
    <div className='content--header'>
    <h1 className='header--title'>Dashboard</h1>
    <div className='header--activity'>
      <div className='search--box'>
        <input type='text' placeholder='Search anything here...'/>
        <BiSearch className='icon'/>

      </div>

      <div className='notify'>
        <BiNotification className='icon'/>
      </div>
    </div>
  </div>
  )
}



// import React from 'react'
// import '../Admin/Contantheader.css'
// import { BiSearch, BiNotification } from 'react-icons/bi'

// export default function Contentheader() {
//   return (
//     <div className='content--header'>
//       <h1 className='header--title'>Dashboard</h1>
//       <div className='header--activity'>
//         <div className='search--box'>
//           <input type='text' placeholder='Search anything here...'/>
//           <BiSearch className='icon'/>

//         </div>

//         <div className='notify'>
//           <BiNotification className='icon'/>
//         </div>
//       </div>
//     </div>
//   )
// }