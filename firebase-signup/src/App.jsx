
import { useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword,signInWithPopup } from 'firebase/auth';
import { auth,provider,db } from './firebase';
import { collection, addDoc,getDocs,doc,deleteDoc ,setDoc,updateDoc, deleteField} from "firebase/firestore"; 
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
  const handlesetdata=()=>{
    setDoc(doc(db, "user","12345"),{
      name:"megha",
      age:19,
      city:"surat"
    }).then(()=>alert("data set succesfully")).catch((error)=>alert(error.message));
  }
  const handledeletedoc=async()=>{
    const userref=doc(db,"user","EjUhSCtY16DsnnXeoGyl");
    await updateDoc(userref,{
      name:deleteField()
    }).then(()=>alert("data deleted sucessfully!!" )).catch((error)=>alert(error.message));
  }
  return (
    <>
     <div className="App">
    <h1>Firebase Auth Demo</h1>
    <input type="text" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
    <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
    <button onClick={handleSignUp}>Sign Up</button>
    <button onClick={handleSignIn}>Sign In</button>
    <button onClick={handlesigninwithgoogle}>Sign In with Google</button>
    <button onClick={handleadddata}>Add Data</button>
    <button onClick={handlereaddata}>Read Data</button>
    <button onClick={handlesetdata}>set Data</button>
    <button onClick={handledeletedoc}>delete Data</button>
    <footer>✨ Powered by Firebase</footer>
  </div>

    </>
  )
}

export default App;