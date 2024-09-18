const express = require('express');
const app = express();

require("dotenv").config();

const usersRouter = require("./routes/users.router")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/users", usersRouter);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})