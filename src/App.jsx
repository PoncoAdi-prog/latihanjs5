// import { useEffect, useState, useRef, useContext } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'
// import { Layout } from './components/Layout'
// import {AuthContext} from './context/AuthContext'


// const Pricing = () =>{
//   const auth = useContext(AuthContext)

//   console.log(auth)

//   return(
//     <h2>{auth.email ? 'Rp6400' : '-'} </h2>
//   )
// }
  
// function App () {
//   const [input, setInput] = useState('')
//   const inputRef = useRef ('')

//   console.log ('rendered', input)

//   const handleSubmit = (e) =>{
//     e.preventDefault()
//     console.log('Send : ',inputRef.current.value)
//   }

//   useEffect(()=>{
//     inputRef.current.focus()
//   },[])

//   return (
//     <Layout>
//     <div className="App">
//       <h1> Ponco kirim duit hehehehee Vite + React</h1>
//       <form onSubmit={handleSubmit}>
//       <div>
//         <input type="text" ref={inputRef} />
//       </div>
//       <br/>
//       <button type='submit'>Send</button>
//       </form>
//       <Pricing />
//     </div>
//     </Layout>
//   )
// }

// export default App
