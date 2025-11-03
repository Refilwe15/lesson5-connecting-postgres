import express from "express";
import dotenv from "dotenv"
import { testDbConnection } from "./config/database";
import applicationRoutes from "./routes/applicationRoutes";


dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000;


/*app.use(express.json());

testDbConnection()

app.listen(PORT, () =>{
    console.log(`Server is running on https://localhost:${PORT}`);
    
})*/

const startServer = async () => {
    await testDbConnection()
    app.use(express.json());
    app.use('/api',applicationRoutes)


app.listen(PORT, () =>{
    console.log(`Server is running on https://localhost:${PORT}`);
    
});
};
startServer()