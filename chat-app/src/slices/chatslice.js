import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../firebase";
import {
  collection,
  doc,
  getDocs,
  setDoc,
  deleteDoc,
  query,
  orderBy
} from "firebase/firestore";

// Stable chatroom id
const getDocId = (sender, receiver) => {
  const users = [sender, receiver].sort();
  return users[0] + "-" + users[1];
};

// READ messages
export const readmessage = createAsyncThunk(
  "chat/read",
  async ({ sender, receiver }) => {
    const docid = getDocId(sender, receiver);

    const q = query(
      collection(db, "chatroom", docid, "chats"),
      orderBy("createdAt", "asc")
    );

    const snapshot = await getDocs(q);
    return snapshot.docs.map((d) => d.data());
  }
);

// SEND message
export const sendmessage = createAsyncThunk(
  "chat/send",
  async ({ message, sender, receiver }, thunkAPI) => {
    try {
      const docid = getDocId(sender, receiver);
      const chatid = Date.now();

      await setDoc(doc(db, "chatroom", docid, "chats", chatid.toString()), {
        chatid,
        message,
        sender,
        receiver,
        createdAt: chatid,
      });

      return true;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// DELETE message
export const deletemessage = createAsyncThunk(
  "chat/delete",
  async ({ sender, receiver, chatid }) => {
    const docid = getDocId(sender, receiver);

    await deleteDoc(
      doc(db, "chatroom", docid, "chats", chatid.toString())
    );

    return chatid;
  }
);

const chatslice = createSlice({
  name: "chat",
  initialState: {
    chats: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    resetChats: (state) => {
      state.chats = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(readmessage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(readmessage.fulfilled, (state, action) => {
        state.chats = action.payload;
        state.isLoading = false;
      })
      .addCase(sendmessage.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(deletemessage.fulfilled, (state, action) => {
        // remove deleted message from state
        state.chats = state.chats.filter(
          (c) => c.chatid !== action.payload
        );
      });
  },
});

export const { resetChats } = chatslice.actions;
export default chatslice.reducer;
