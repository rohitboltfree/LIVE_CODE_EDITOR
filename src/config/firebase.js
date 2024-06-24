// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";

import {
  getFirestore,
  query,
  getDocs,
  collection,
  addDoc,
  where,
  setDoc,
  doc,
} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgalfHZMoH4fFQZ6rRe8BC1ecd7JtMvh4",
  authDomain: "college-project-d9f3c.firebaseapp.com",
  projectId: "college-project-d9f3c",
  storageBucket: "college-project-d9f3c.appspot.com",
  messagingSenderId: "532526464815",
  appId: "1:532526464815:web:d4c990a2574fb3de5debda",
  measurementId: "G-WHXE72C640",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      const resp = await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
      console.log(resp);
      return resp;
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const logInWithEmailAndPassword = async (email, password) => {
  try {
    const res =  await signInWithEmailAndPassword(auth, email, password);
    console.log(res);
} catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    const resp = await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
    return resp;
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  signOut(auth);
};

 // store the html css js code in the database associated to a user
  // const saveCode = async (html, css, js) => {
  //   if (!auth.currentUser) {
  //     throw new Error("You must be logged in to save your code");
  //   }
  //   try {
  //     await addDoc(collection(db, "users"), {
  //       uid: auth.currentUser.uid,
  //       html,
  //       css,
  //       js,
  //     });
  //     alert("Code saved successfully");
  //   } catch (err) {
  //     console.error(err);
  //     alert("Error saving code");
  //   }
  // }
 // store the html css js code in the database with table code associated to a user and if a save again then it will update the code in the database
  const saveCode = async (html, css, js,id) => {
    if (!auth.currentUser) {
      throw new Error("You must be logged in to save your code");
    }
    try {
      const resp =  await setDoc(doc(db, "code", id), {
        uid: auth.currentUser.uid,
        html,
        css,
        js,
      });
      console.log(resp);
      alert("Code saved successfully");
    } catch (err) {
      console.error(err);
      alert("Error saving code");
    }
  };

  // create a new code document
  const createCode = async (html, css, js) => {
    if (!auth.currentUser) {
      throw new Error("You must be logged in to save your code");
    }
    try {
      const resp = await addDoc(collection(db, "code"), {
        uid: auth.currentUser.uid,
        html,
        css,
        js,
      });
      return resp.id;
    } catch (err) {
      console.error(err);
      alert("Error saving code");
    }
  }

  // get the document by id and add a fileName to it
  const addFileName = async (id, fileName) => {
    try {
      await setDoc(doc(db, "code", id), {
        fileName,
      }, { merge: true });
    } catch (err) {
      console.error(err);
      alert("Error adding file name");
    }
  }

  const getCodeById = async (id) => {
    const q = query(collection(db, "code"), where("uid", "==", id));
    const docs = await getDocs(q);
    return docs.docs.map((doc) => doc.data());
  }

  const getAllCodes = async () => {
    const q = query(collection(db, "code"));
    const docs = await getDocs(q);
    console.log(docs.docs)
    return docs.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data()
      }
    });
  
  }

export {
  auth,
  db,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  saveCode,
  createCode,
  getAllCodes,
  getCodeById,
  addFileName,
  logout,
};
