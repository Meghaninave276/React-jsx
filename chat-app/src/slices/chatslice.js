import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { db } from '../firebase'
import { doc, setDoc } from 'firebase/firestore'

export const sendmessage = createAsyncThunk(
  "chat/send",
  async ({ sender, receiver }, thunkAPI) => {
    try {

      const docid = sender + "_" + receiver;
      const chatid = Date.now().toString();  // unique message id

      await setDoc(doc(db, "chatroom", docid, "chats", chatid), {
        message: "hello!",
        sender: sender,
        receiver: receiver,
        createdAt: chatid
      });

      return true;

    } catch (e) {
      console.log(e);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

const initialState = {
  chats: [],
  isLoading: false,
  error: null,
};

const chatslice = createSlice({
  name: "chat",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(sendmessage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(sendmessage.fulfilled, (state) => {
        state.isLoading = false;
        alert("message sended sucessfully!");
      })
      .addCase(sendmessage.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  }
});

export default chatslice.reducer;
