
import { useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword,signInWithPopup } from 'firebase/auth';
import { auth,provider,db } from './firebase';
import { collection, addDoc,getDocs } from "firebase/firestore"; 
import './App.css'

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((() => alert("signup successfully !!")))
      .catch((error) => alert(error.message));
  }

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        alert("Signin successfully !! " + user.email);
      })
      .catch((error) => alert(error.message));
  }
const handlesigninwithgoogle=()=>{
  signInWithPopup(auth,provider).then((result)=>{
    const user=result.user;
    console.log(user.displayName);
    console.log(user.email);
    console.log(user.photoURL);
    alert("signIn with google successfull!!");
  })
  .catch((error)=>error.message);
}

const handleadddata=()=>{
  addDoc((collection(db,"user")),{
    name:"megha",
    age:19,
    city:"surat"
  }).then(()=>alert("data added successfully!!")).catch((error)=>error.message);
}


  const handlereaddata = async () => {
    const querySnapshot = await getDocs(collection(db, "user"));
    querySnapshot.docs.forEach((doc) => console.log(doc.data()));
  
  }
  return (
    <>
      <input type="text" placeholder='email' onChange={(e) => setEmail(e.target.value)} />
      <input type="text" placeholder='password' onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSignUp}>Sign Up</button>
      <button onClick={handleSignIn}>Sign In</button>
      <button onClick={handlesigninwithgoogle}>Sign In with google</button>
      <button onClick={handleadddata}>data add</button>
      <button onClick={handlereaddata}>read data </button>

    </>
  )
}

export default App;