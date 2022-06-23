const Categories = {
    featured: {
        id: "featured",
        url: "featured",
        name: "Featured",
        parent: null
    },
    fitness: {
        id: "fitness",
        url: "fitness",
        name: "Fitness",
        parent: null
    },
    muscle_building: {
        id: "muscle_building",
        url: "muscle-building",
        name: "Muscle Building",
        parent: "fitness"
    },
    weight_loss: {
        id: "weight_loss",
        url: "weight-loss",
        name: "Weight Loss",
        parent: "fitness"
    },
    workout: {
        id: "workout",
        url: "workout",
        name: "Workout",
        parent: "fitness"
    },
    yoga: {
        id: "yoga",
        url: "yoga",
        name: "Yoga",
        parent: null
    },
    lifestyle: {
        id: "lifestyle",
        url: "lifestyle",
        name: "Life Style",
        parent: null
    }
}


let catJson = JSON.stringify(Categories);
let catObj = JSON.parse(catJson);

const catArray = [];
for (let key in catObj) {
    catObj[key].url = "/category/"+catObj[key].url
    if (catObj[key].parent === null) {
        catObj[key].child = []
        catArray.push(catObj[key])
    }
}
for (let key in catObj) {
    if (catObj[key].parent !== null) {
        try {
            catObj[key].child = []
            catArray[catArray.findIndex(element => element.id === catObj[key].parent)].child.push(catObj[key]);
        } catch { }
    }
}

export { Categories, catArray }