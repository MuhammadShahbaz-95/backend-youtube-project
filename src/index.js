import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./db/index.js";


dotenv.config();

connectDB()
.then(()=>{
    app.listen(process.env.PORT, () => {  
        console.log(`Server running on port ${process.env.PORT}`);
     })
})
.catch((err) => console.error("Failed to connect to MongoDB:", err));



/*
 app.listen((process.env.PORT || 3000, () => console.log(`Connecting to ${process.env.PORT})`)))
(async () =>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error) => {
            console.error("Error:", error)
            throw error
            app.listen(process.env.PORT || 3000, () => 
                console.log(`Server running on port...${process.env.PORT}`));

        })
    } catch(err) {
     confirm("Error:", err)
      throw err;
    }
})() */
