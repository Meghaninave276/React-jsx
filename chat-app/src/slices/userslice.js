import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth, db, provider } from "../firebase";
import { collection, getDocs, doc, setDoc } from "firebase/firestore";

// SIGNUP
export const signup = createAsyncThunk("user/signup", async ({ email, password }) => {
  const result = await createUserWithEmailAndPassword(auth, email, password);

  const user = {
    email: result.user.email,
    name: result.user.displayName || ""
  };

  await setDoc(doc(db, "users", user.email), user);

  return user;
});

// SIGNIN
export const signin = createAsyncThunk("user/signin", async ({ email, password }) => {
  const result = await signInWithEmailAndPassword(auth, email, password);

  const user = {
    email: result.user.email,
    name: result.user.displayName || ""
  };

  await setDoc(doc(db, "users", user.email), user, { merge: true });

  return user;
});

// GOOGLE LOGIN
export const signinwithgoogles = createAsyncThunk("user/google", async () => {
  const result = await signInWithPopup(auth, provider);

  const user = {
    email: result.user.email,
    name: result.user.displayName,
    photo: result.user.photoURL
  };

  await setDoc(doc(db, "users", user.email), user, { merge: true });

  return user;
});

// FETCH USERS
export const fetchusers = createAsyncThunk("user/fetch", async () => {
  const snap = await getDocs(collection(db, "users"));
  return snap.docs.map((d) => d.data());
});

const userslice = createSlice({
  name: "user",
  initialState: {
    currentuser: {},
    users: []
  },
  reducers: {
    getuser: (state) => {
      state.currentuser = JSON.parse(localStorage.getItem("user") || "{}");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signup.fulfilled, (state, action) => {
        state.currentuser = action.payload;
        localStorage.setItem("user", JSON.stringify(action.payload));
      })
      .addCase(signin.fulfilled, (state, action) => {
        state.currentuser = action.payload;
        localStorage.setItem("user", JSON.stringify(action.payload));
      })
      .addCase(signinwithgoogles.fulfilled, (state, action) => {
        state.currentuser = action.payload;
        localStorage.setItem("user", JSON.stringify(action.payload));
      })
      .addCase(fetchusers.fulfilled, (state, action) => {
        state.users = action.payload;
      });
  },
});

export const { getuser } = userslice.actions;
export default userslice.reducer;
