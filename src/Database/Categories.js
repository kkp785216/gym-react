const Categories = {
    featured: {
        id:"featured",
        url:"featured",
        name:"Featured",
        parent: null
    },
    fitness: {
        id:"fitness",
        url:"fitness",
        name:"Fitness",
        parent: null
    },
    muscle_building: {
        id:"muscle_building",
        url:"muscle-building",
        name:"Muscle Building",
        parent: "fitness"
    },
    weight_loss: {
        id:"weight_loss",
        url:"weight-loss",
        name:"Weight Loss",
        parent: "fitness"
    },
    workout: {
        id:"workout",
        url:"workout",
        name:"Workout",
        parent: "fitness"
    },
    yoga: {
        id:"yoga",
        url:"yoga",
        name:"Yoga",
        parent: null
    },
    lifestyle: {
        id:"lifestyle",
        url:"lifestyle",
        name:"Life Style",
        parent: null
    }
}

const catArray = [];
for (let key in Categories){
    if(Categories[key].parent===null){
        Categories[key].child = []
        catArray.push(Categories[key])
    }
}
for (let key in Categories){
    if(Categories[key].parent !==null){
        try{
            Categories[key].child = []
            catArray[catArray.findIndex(element=>element.id === Categories[key].parent)].child.push(Categories[key]);
        }catch{}
    }
}

export {Categories, catArray}