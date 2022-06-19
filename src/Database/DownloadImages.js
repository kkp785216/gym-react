// import { initializeApp } from "firebase/app";
// import { getStorage, ref, getDownloadURL } from "firebase/storage";

// const firebaseConfig = {
//     apiKey: "AIzaSyCF0j9PZFrDaanwxuAc4PuCDbs8o8eE868",
//     authDomain: "fitness-gym-65c3e.firebaseapp.com",
//     projectId: "fitness-gym-65c3e",
//     storageBucket: "fitness-gym-65c3e.appspot.com",
//     messagingSenderId: "514006794412",
//     appId: "1:514006794412:web:9b5eddd8cc249127d55f09"
// };

// const firebaseApp = initializeApp(firebaseConfig);

// const storage = getStorage(firebaseApp);
// getDownloadURL(ref(storage, 'yoga/small/2.jpg'))
//     .then((url) => {
//         // `url` is the download URL for 'images/stars.jpg'

//         // This can be downloaded directly:
//         // const xhr = new XMLHttpRequest();
//         // xhr.responseType = 'blob';
//         // xhr.onload = (event) => {
//         //   const blob = xhr.response;
//         // };
//         // xhr.open('GET', url);
//         // xhr.send();

//         // Or inserted into an <img> element
//         // const img = document.getElementById('myimg');
//         // img.setAttribute('src', url);
//         document.querySelector('.blog-post img').setAttribute('src', url);
//         console.log(url);
//     })
//     .catch((error) => {
//         // Handle any errors
//         console.log(error)
//     });

// export const DownloadImage = () => {
// }