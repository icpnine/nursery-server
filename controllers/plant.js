
// This is temporary db
const plants = [
    {
        "id": 5,
        "name": "Bamboo",
        "category": "indoor",
        "image": "https://assets.winni.in/product/primary/2014/6/33452.jpeg",
        "price": 150,
        "description": "3 Layer Lucky Bamboo In A Glass Vase"
    },
    {
        "id": 2,
        "name": "Rose",
        "category": "outdoor",
        "image": "https://assets.winni.in/product/primary/2014/6/33452.jpeg",
        "price": 200,
        "description": "Rose Plant"
    },
    {
        "id": 8,
        "name": "Mango",
        "category": "indoor",
        "image": "https://assets.winni.in/product/primary/2014/6/33452.jpeg",
        "price": 100,
        "description": "Mango Plant"
    }
]

const postPlant = (req, res) => {
    const {
        name,
        category,
        image,
        price,
        description
    } = req.body

    if (!name) {
        return res.json({
            success: false,
            data: null,
            message: "name cannont be empty"
        })
    }

    if (!category) {
        return res.json({
            success: false,
            data: null,
            message: "category cannont be empty"
        })
    }

    if (!image) {
        return res.json({
            success: false,
            data: null,
            message: "image cannont be empty"
        })
    }

    if (!price) {
        return res.json({
            success: false,
            data: null,
            message: "price cannont be empty"
        })
    }

    if (!description) {
        return res.json({
            success: false,
            data: null,
            message: "description cannont be empty"
        })
    }

    const randomId = Math.round(Math.random() * 10000)

    const newPlant = {
        id: randomId,
        name: name,
        category: category,
        image: image,
        price: price,
        description: description
    }

    plants.push(newPlant)

    res.json({
        success: true,
        data: newPlant,
        message: "New plant added successfully"
    })
}

const getPlants = (req, res) => {

    res.json({
        success: true,
        data: plants,
        message: "All plants fetched successfully"
    })
}

const getPlantId = (req, res) => {
    const { id } = req.params

    const plant = plants.find((p)=>p.id == id)

    res.json({
        success: plant ? true : false,
        data: plant || null,
        message: plant ? "Plant fetched successfully" : "Plant not found"
    })
}

const putPlantId = (req, res)=>{
    const {
        name,
        category,
        image,
        price,
        description
    } = req.body

    const {id} = req.params

    let index = -1

    plants.forEach((plant, i)=>{
        if(plant.id == id){
            index = i
        }
    })

    const newObj = {
        id,
        name,
        category,
        image,
        price,
        description
    }

    if(index==-1){
        return res.json({
            success: false,
            message: `Plant not found for id ${id}`,
            data: null
        })
    }
    else{
        plants[index] = newObj

        return res.json({
            success: true,
            message: `Plant updated successfull`,
            data: newObj
        })
    } 
}

const deletePlantId = (req, res)=>{
    console.log("Point 1")
    
    const {id} = req.params

    let index = -1

    plants.forEach((plant, i)=>{
        if(plant.id==id){
            index = i
        }
    })

    if(index==-1){
        return res.json({
            success: false,
            message: `Plant not found with id ${id}`
        })
    }

    plants.splice(index, 1)

    res.json({
        success: true,
        message: "Plant deleted successfully",
        data: null
    })
}

export{
    postPlant,
    getPlants,
    getPlantId,
    putPlantId,
    deletePlantId
}