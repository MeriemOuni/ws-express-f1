// 1 require express
const express = require("express");

// 2 create instance
const app = express();

// middleware body-parser
app.use(express.json());

// simple route
app.get("/test", (req, res) => {
	res.send("Hello Bachar");
});

// CRUD
let users = [
	{
		name: "Malek",
		email: "malek@gmail.com",
		id: 1,
	},
	{
		name: "Amal",
		email: "amal@gmail.com",
		id: 2,
	},
	{
		name: "bassem",
		email: "bassem@gmail.com",
		id: 3,
	},
];

// get all users
app.get("/users", (req, res) => {
	res.status(200).send({ msg: " List of users", users });
});

// add user
app.post("/users/add_user", (req, res) => {
	const newUser = req.body;
	users = [...users, newUser];
	res.status(200).send({ msg: "User added", newUser });
});

// 3 create PORT
const PORT = 2430;

// 4 create server
app.listen(PORT, (error) => {
	error
		? console.log(error)
		: console.log(`the server is running on port ${PORT}`);
});
