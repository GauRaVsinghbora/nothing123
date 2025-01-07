// require('dotenv').config();     because Node.js interprets all .js files as ES modules,we use import inside require
import 'dotenv/config';        
import express from 'express';
// import cors from 'cors';   // you can use like all the request made for this api is accepted

// import { createProxyMiddleware } from 'http-proxy-middleware'; 
// Proxy middleware   If your frontend is running on http://localhost:8080 and backend on http://localhost:3000, the proxy middleware ensures that API requests made to /api from the frontend are forwarded to the backend.   protect form CORS policy(same damain and same port are required);

const app = express();
const port = process.env.PORT;
const jokes = [{
        "id":1,
        "title":"A joke",
        "content":"this is a joke"
    },
    {
        "id":2,
        "title":"A another joke",
        "content":"this is a second joke"
    },
    {
        "id":3,
        "title":"A third joke",
        "content":"this is a third joke"
    },
    {
        "id":4,
        "title":"A fouth joke",
        "content":"this is a fouth joke"
    },
    {
        "id":5,
        "title":"A fifth joke",
        "content":"this is a fifth joke"
    }];

//enable the cors for all router
// app.use(cors());

// // creating proxy middleware
// app.use(
//     "/api",
//     createProxyMiddleware({
//         target: "http://localhost:3000", // Target server
//         changeOrigin : true,
//     })
// );
// app.get("/",(req,res)=>{
//     res.sendFile(resolve(__dirname,'frontend/zindex.html'));
// })

app.get("/api/jokes",(req,res)=>{
    res.send(jokes);
})

app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`);
})

