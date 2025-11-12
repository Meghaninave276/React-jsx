import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import {signInWithEmailAndPassword,createUserWithEmailAndPassword,signInWithPopup} from "firebase/auth"
import {auth,db,provider} from "../firebase"
import { collection, addDoc,getDocs,doc,setDoc } from "firebase/firestore"; 

export const signin = createAsyncThunk("user/signin", async ({ email, password }) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  const user = {
    name: userCredential.user.displayName,
    email: userCredential.user.email,
  };

  
  await setDoc(doc(db, "users", userCredential.user.uid), user);

  return user;
});


export const signup = createAsyncThunk(
  "user/signup",
  async ({ email, password }) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = {
      name: userCredential.user.displayName,
      email: userCredential.user.email,
    };
    return user;
  }
);

export const fetchusers = createAsyncThunk("user/fetch", async () => {
  const querySnapshot = await getDocs(collection(db, "users"));
  const users = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return users;
});


export const signinwithgoogles = createAsyncThunk("user/google", async (_, thunkAPI) => {
  try {
    const result = await signInWithPopup(auth, provider);

    const user = {
      name: result.user.displayName,
      email: result.user.email,
      photo: result.user.photoURL,
    };

    // ✅ Optionally save user to Firestore (using UID)
    await setDoc(doc(db, "users", result.user.uid), user, { merge: true });

    alert("Sign in with Google successful!!");
    return user;
  } catch (error) {
    // Properly reject the thunk with error message
    return thunkAPI.rejectWithValue(error.message);
  }
});
const initialstate={
    users:[],
    isLoading:false,
    error:null,
}
const userslice=createSlice({
    name:"user",
    initialState:initialstate,
    extraReducers:(builder)=>{
       builder.addCase(signin.pending,(state,action)=>{
        state.isLoading=true;

       }).addCase(signin.fulfilled,(state,action)=>{
        state.users.push(action.payload);
        state.isLoading=false;
        alert("signin successfully!!");

       }).addCase(signin.rejected,(state,action)=>{
        state.isLoading=false;
        state.error="signin failed!!";

       }).addCase(signup.pending,(state,action)=>{
        state.isLoading=true;

       }).addCase(signup.fulfilled,(state,action)=>{
        state.users.push(action.payload);
        state.isLoading=false;
         alert("signup successfully!!");


       }).addCase(signup.rejected,(state,action)=>{
        state.isLoading=false;
        state.error="signup failed!!";

       }).addCase(fetchusers.fulfilled,(state,action)=>{
        state.isLoading=false;
        state.users=action.payload;

       }).addCase(signInWithEmailAndPassword.fulfilled,(state,action)=>{
        state.isLoading=false;
        state.users.push(action.payload);
        alert("sign in with google succesfully")

       })

    },

});
export default userslice.reducer;




//google