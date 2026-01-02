import { app } from "./app.js";
import dotenv from 'dotenv'

app.listen(process.env.PORT || 8000, ()=>{
    console.log("app is listening on port ",process.env.PORT || 8000)
})