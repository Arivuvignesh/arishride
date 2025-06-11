// public/auth.js

import { auth, db } from './firebase.js';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js';
import {
  setDoc,
  doc
} from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js';

window.signup = async function () {
  const name = document.getElementById("name").value;
  const address = document.getElementById("address").value;
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;

  try {
    const userCred = await createUserWithEmailAndPassword(auth, email, password);
    await setDoc(doc(db, "users", userCred.user.uid), {
      name,
      address,
      email
    });
    alert("✅ Signup successful!");
    window.location.href = "dashboard.html";
  } catch (error) {
    alert("❌ Signup error: " + error.message);
  }
};

window.login = async function () {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("✅ Login successful!");
    window.location.href = "dashboard.html";
  } catch (error) {
    alert("❌ Login error: " + error.message);
  }
};
