// import React, { useEffect, useState } from "react";
// import Axios from 'axios';


// function App() {

//   const [backendData, setBackendData] = useState([{}])

//   useEffect(() => {
//     Axios.get('http://localhost:3001/get').then((response) =>{
//       console.log(response)
//       setBackendData(response.data)
//     })
//   }, [])
//   return (
//     <div>
//        {backendData.map((val) => {
//         return <h1>lot_name: {val.lot_name}</h1>
//       })}
//     </div>
//   )
// }

// export default App
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}