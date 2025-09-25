import express from 'express'
const router = express.Router();
//CRUD functionality of movies
//R-For Reading
router.get('/',(req,res)=>{
    res.send("Get all movie lists");
}

)
//For creating movies
//C-For Creating
router.post('/',(req,res)=>{
    res.send("Create a movie");
})

//U-For update
router.put('/:id',(req,res)=>{
    res.send("update a movie");

})

//D-For deleting
router.delete('/:id',(req,res)=>{
    res.send("delete a movie");
    
})
export default router;