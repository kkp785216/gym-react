// import { db } from './Firebase'
// import { collection, getDocs } from 'firebase/firestore/lite';

// async function fetchPosts(db) {
//     const postsCol = collection(db, 'Posts');
//     const postsSpanshot = await getDocs(postsCol);
//     const postList = postsSpanshot.docs.map(doc => doc.data());
//     return postList;
// }
// export const startFetch = () => {
//     return fetchPosts(db);
// }