//Require the Sequelize library in the file
//This will give you access to the methods in the library to 
//define table columns 
const Sequelize = require('sequelize')


//Pass in the url to the place where you are hosting your database
const db = new Sequelize('postgres://hedhftib:OGJPbyZ3WuRocGGfEHA4JmKDBXsZpabO@elmer.db.elephantsql.com:5432/hedhftib')



//Define a table called 'cookies'
const Cookies = db.define('cookies', {
	//Define a collumn in the table
	kind: {
		//Define the collumn's data type and set a character limit
		type: Sequelize.STRING(20)
	},
	delicious: {
		type: Sequelize.BOOLEAN()
	}
})


/***************
TASK:

Below, make a new table below called 'Users'.
Add 3 different collumns to the table: Name, Age, and Birthday
Remember: an id is automoatically generated when inserting a 
row. Don't forget to sync your table below and add it to module.exports
****************/


const Users = db.define('Users', {
	//Define a collumn in the table
	Name: {
		//Define the collumn's data type and set a character limit
		type: Sequelize.STRING(20)
	},
	Age: {
		type: Sequelize.INTEGER
	},
	Birthday: {
		type: Sequelize.STRING(20)
	}
});





//This code is necesarry for creating your table in the DB
//It syncs the particular table to the table. You should 
//do this  
Cookies.sync();
Users.sync();

//In the code below, we pass in { force: true }. Here, sync drops 
//all data from that particular table and starts it fresh
//You need to drop the table in order to make changes
//to the schema

//Cookies.sync({ force: true })


//This code connects your application to the database
//The .then and .catch are optional, to confirm that the db
//is connected or to throw an error
db.authenticate()
    .then(function(err) {
        console.log('Successful Connection to the database');
    })
    .catch(function(err) {
        console.log('Cannot connect to the database due to:', err);
    });

//Pass in your user table in module.exports
module.exports = { Cookies: Cookies,
	Users: Users
	 };