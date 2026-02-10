// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAGbc3hE5qsN8axCsRNaNH4CNSDp3Yave8",
  authDomain: "kendrick-artists-clarck.firebaseapp.com",
  projectId: "kendrick-artists-clarck",
  appId: "1:695415417830:web:f5d196cdf9334f80220427"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Form handling
const form = document.getElementById("loginForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = form.querySelector('input[type="email"]').value;
  const password = form.querySelector('input[type="password"]').value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      window.location.href = "admin-dashboard.html";
    })
    .catch((error) => {
      alert("Login failed: " + error.message);
    });
});
