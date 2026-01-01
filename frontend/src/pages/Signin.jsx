// import React from 'react'
// import {getAuth, signInWithEmailAndPassword} from "firebase/auth"
// import { app } from '../Firebase'

// const auth = getAuth(app)

// const Signin = () => {
//     const [email, setemail] = useState()
//     const [password, setpassword] = useState()

//     const signinUser = ()=>{
//         signInWithEmailAndPassword(auth, email, password)
//         .then((value)=>{console.log("signin success")})
//         .catch((err)=>{console.log(err)})
//     }
//   return (
//     <div>
//         <label htmlFor="email">enter email</label>
//       <input
//       id="email"
//         type="email"
//         placeholder="enter email"
//         value={email}
//         onChange={(e) => setemail(e.target.value)}
//       />
//     <label htmlFor="password">enter email</label>

//       <input
//       id="password"
//         type="password"
//         placeholder="enter password"
//         value={password}
//         onChange={(e) => setpassword(e.target.value)}
//       />
//       <button onClick={signinUser}>signin</button>
//     </div>
//   )
// }

// export default Signin
