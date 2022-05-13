import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthContextProvider } from "./context/AuthContext";
import Account from "./pages/Account";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/account"
           element={
            <ProtectedRoute>
              <Account/>
            </ProtectedRoute>
           }
          />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;



// nakon prvog sata videa krece postavka za firebase

// 1. otvorimo firebase.google.com
// 2. kliknemo get started
// 3. kliknemo add project
// 4. dodamo ide i kliknemo continue
// 5. iskljucimo google analitiku i kliknemo create project
// 6. kreiramo firebase.js fajl unutar src foldera
// 7. kliknemo web znak </>
// 8. u register app upisemo naziv aplikacije i kliknemo register app
// 9. instaliramo npm install firebase
// 10. kopiramo ispod dokumentaciju u firebase.js fajl
// 11. kreiramo .env fajl u projekt folderu
// 12. editujemo firebase projekat sa process.env.(podaci iz env fajla)
// 13. odemo na firebase stranicu i kliknemo authentication
// 14. nakon sto nam se otvori prozor kliknemo get started
// 15. odaberemo mejl i lozinku opciju
// 16. kliknemo enable a zatim save
// 17. otvorimo firebase dokumentaciju docs/build
// 18. kliknemo web -> get started
// 19. kopiramo import { getAuth } from "firebase/auth"; u firebase fajl
// 20. kopiramo const auth = getAuth(app); na dno firebase fajla 
// 21. u zadnje dvije linije firebase.js koda dodamo export 
// 22. kreiramo context folder i unutar njega AuthContext.js fajl
// 23. uredujemo AuthContext.js fajl
// 24. dodajemo <AuthContextProvider> u App.js
// 25. uredujemo AuthContext.js fajl
// 26. u folderu pages kreiramo Login.jsx fajl


// Konfiguracija firebase database

// 1. otvaramo firestore database na console.firebase.google.com
// 2. kliknemo create database
// 3. odaberemo start in test mode i kliknemo next
// 4. odaberemo cloud firestore location kao nam5 (us-central) i kliknemo enable
// 5. otvorimo firebase.google.com -> build sekciju
// 6. kliknemo na cloud firestore a onda odaberemo get started
// 7. kopiramo import { getFirestore } from "firebase/firestore"; u firebase.js fajl
// 8. kopiramo export const db = getFirestore(app); na dno firebase.js fajla
// 9. instaliramo u terminalu npm i -g firebase-tools
// 10. ukucamo u terminal firebase login
// 11. ukucamo u terminal firebase init (firebase init hosting)
// 12. kliknemo y
// 13. odaberemo opciju -> Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys
// 14. odaberemo use an existing project
// 15. odaberemo public folder kao public directory
// 16. configure as a single-page app pritisnemo -> yes
// 17. set up automatic builds and deploys with GitHub? -> no
// 18. ukucamo npm run build
// 19. ukucamo firebase deploy
// 20. Hosting URL: https://netflix-react-yt-fd281.web.app


