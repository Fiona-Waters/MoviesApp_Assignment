import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCkmjk09J7XjTchGl_bYthwOkwqPQu1kdI",
  authDomain: "movieapp-9fca8.firebaseapp.com",
  projectId: "movieapp-9fca8",
  storageBucket: "movieapp-9fca8.appspot.com",
  messagingSenderId: "668822164312",
  appId: "1:668822164312:web:caaf293bcd6ffe56a28b2d",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const addFantasyMovieToFirebase = async (fantasyMovie) => {
  try {
    const docRef = await addDoc(collection(db, "fantasyMovies"), {
      title: fantasyMovie.title,
      budget: fantasyMovie.budget,
      releaseDate: fantasyMovie?.releaseDate?.toDate(),
      plot: fantasyMovie.plot,
      genre: fantasyMovie.genre,
      actor: fantasyMovie.actor,
    });

    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
