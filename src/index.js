import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/index.js";

const app = express();

dotenv.config();

connectDB();

app.get("/", (req, res) => {
    res.send(connectDB);
});

app.listen((process.env.PORT || 3000, () => console.log(`Connecting to ${process.env.PORT})`)))


/*
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
