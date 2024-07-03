import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB2xgtxoDFJN1XI-QSZdXpZJ9E2BvElf5w",
  authDomain: "sriflix-7259d.firebaseapp.com",
  projectId: "sriflix-7259d",
  storageBucket: "sriflix-7259d.appspot.com",
  messagingSenderId: "724055643297",
  appId: "1:724055643297:web:11e6435b54718f62d94ce0"
};


const app = initializeApp(firebaseConfig);
const auth =getAuth(app);
const db = getFirestore(app);

const signup = async (name,email,password)=>{
    try {
       const res = await createUserWithEmailAndPassword(auth, email, password);
       const user = res.user;
       await addDoc(collection(db, "user"),{
        uid: user.uid,
        name,
        authProvider:"local",
        email,
       })
    } catch (error) {
        console.log(error);
        alert(error);
    }
}
const login = async (email, password)=>{
     try {
       await signInWithEmailAndPassword(auth, email, password);
     } catch (error) {
        console.log(error);
        alert(error);
     }
}
const logout = ()=>{
    signOut
}
export{auth, db, login, signup, logout};