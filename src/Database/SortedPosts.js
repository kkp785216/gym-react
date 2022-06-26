// Import Categories
import { Categories } from './Categories'
import OfflinePosts from './OfflinePosts';

const dt = (date) => {
    let d = new Date(date);
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'Sepetember', 'October', 'November', 'December'];
    return months[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear()
}
const rtnCategory = (input) => {
    let catJson = JSON.stringify(Categories);
    let catObj = JSON.parse(catJson);
    return catObj[input];
}

// let onlinePosts = [];
// let xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://react4-backend.vercel.app/api/posts', false);
// xhr.getResponseHeader('Content-type', 'application/json');
// xhr.onload = function () {
//     if (this.status === 200) {
//         onlinePosts = JSON.parse(xhr.responseText).data
//     }
// }
// xhr.send();


const allPosts = [];
OfflinePosts.concat().reverse().forEach((element) => {
    let arr = []
    element.categories.forEach((element) => {
        arr.push(rtnCategory(element))
    });
    element.categories = arr;
    element.category_id = rtnCategory(element.category_id);
    element.date = dt(element.date)

    // Impelementing /category/ before category url
    element.url = "/" + element.url;
    element.category_id.url = "/category/" + element.category_id.url;
    element.categories.forEach((element) => {
        element.url = "/category/" + element.url;
    });
    allPosts.push(element);
});

const weight_loss = allPosts.filter(element => element.category_id.id === "weight_loss");
const workout = allPosts.filter(element => element.category_id.id === "workout");
const yoga = allPosts.filter(element => element.category_id.id === "yoga");
const lifestyle = allPosts.filter(element => element.category_id.id === "lifestyle");
const muscle_building = allPosts.filter(element => element.category_id.id === "muscle_building");
let fitness = allPosts.filter(element => element.categories.find(element => element.id === "fitness") !== undefined);
let featured = allPosts.filter(element => element.categories.find(element => element.id === "featured") !== undefined);
export { weight_loss, workout, yoga, lifestyle, muscle_building, fitness, featured, allPosts }