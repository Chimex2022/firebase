// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-analytics.js";
import { getFirestore, collection, getDocs  } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBXLwMmM_F5e7vjiXkZAq_NB4NtPJJ-KCI",
  authDomain: "e-commerce-project-50c28.firebaseapp.com",
  projectId: "e-commerce-project-50c28",
  storageBucket: "e-commerce-project-50c28.appspot.com",
  messagingSenderId: "456516683842",
  appId: "1:456516683842:web:108b6b70fe6135686485db",
  measurementId: "G-E5TXE75849"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

const recipesCollection = collection(db, 'recipes');

const listContainer = document.querySelector("ul#recipes-list");
getDocs(recipesCollection).then((snapshot) =>{
    snapshot.docs
    .forEach(doc => {
        let contents = doc.data();
        let contentString = "";
        Object.keys(contents).forEach(key => {
            contentString += `<li>${key}: ${contents[key]}</li>`
        })
        listContainer.innerHTML += `<li>
            ${doc.id}
            <ul>${contentString}</ul>
        </li>`
    });
}).catch(err =>{
    console.log(err);
});

