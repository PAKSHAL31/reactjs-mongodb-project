const express = require('express')
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");

//Ceate a database connection
mongoose
  .connect("mongodb+srv://ranawatpakshal310800:Pmmn3108@cluster0.itu5e.mongodb.net/")
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.log(error));


const app = express()
const PORT = process.env.PORT || 5000

app.use(
    cors({
        origin: "http://localhost:5173",
        methods: ["GET", "POST", "DELETE", "PUT"],
        allowedHeaders: [
            "Content-Type",
            "Authorization",
            "Cache-Control",
            "Expires",
            "Pragma",
          ],
        credentials: true,
    })
)

app.use(cookieParser());
app.use(express.json());




app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})


// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

