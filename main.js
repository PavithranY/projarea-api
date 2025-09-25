import express from "express";
const app=express();
const PORT = 6969;
app.get('/',(req,res)=>{
    res.json({msg: "Hello students!"})
});

//CRUD functionality of movies
//R-For Reading
app.get('/movies',()=>{

}

)
//For creating movies
//C-For Creating
app.post('/movies',()=>{

})

//U-For update
app.put('/movies/:id',()=>{

})

//D-For deleting
app.delete('/movies/:id',()=>{
    
})
app.listen(6969,()=>{
    console.log(`The servr is running at http://localhost:${6969} `);
})