var express= require('express'),
app=express();
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
var url=require('url');

var pg=require('pg-promise')();
const dbConfig= {
	host: 'localhost',
	port: 5431,  //probably 5432 for you
	database: 'shalflife2',   //enter in your username password for pg
	user: 'haleyhartin',
	password:'abc123'
};

var db= pg(dbConfig);
//testing for entering specific values
//var insert = "INSERT INTO USERS(Restaurant_Id, Name, Phone, Address_line_1, Address_line_2, User_Name, User_Password) VALUES (13, 'In n Out', '3034444425', '2800 15th st', 'C0 80303', 'Mark_Davis', 'CO 80303');";
//var select = 'SELECT * FROM USERS;';
	//db.any(insert)
//		.catch(function(err)
//		{
//			console.log("can't insert",err);
//		})
///	db.any(select)
	//	.then(function(rows){
	//		for(i=0; i<rows.length; i++)
//			{
//				console.log(rows[i]);
//			}
//			})
//		.catch(function(err){
//			console.log("error message",err);
//
var http= require('http');
var fs= require('fs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname + '/'));


//var server= http.createServer(function (req,res){
	//fs.readFile('/Users/haleyhartin/Documents/ShelfLife/views/login.html', function(err,data){
		//if(err)
		//{
			//res.writeHead(404);
	    //res.write('Contents you are looking are Not Found');
			//console.log(err);
		//}
		//else
		//	{
		//		res.writeHead(200, {'Content-Type': 'text/html'})
		//		res.write(data);
		//	}
  //  //  res.end();
  // });
//});

http.createServer(function (req,res){
    var q= url.parse(req.url, true);
		var filename= "/Users/haleyhartin/Documents/ShelfLife/views" + q.pathname;
	  console.log(filename);
		fs.readFile(filename, function(err,data){
			if(err){
				res.writeHead(404, {'Content-Type': 'text/html'});
				return res.end("404 not found");
				concole.log(err)
			}

		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		res.end();
	});
}).listen(8080);

app.get('/login.html', function(req, res) {
  console.log('in app.get');
	res.render('pages/login',{
		local_css:"signin.css",
		my_title:"Login Page"
	});
  var username= 'SELECT User_Name * FROM USERS;' ;
  var password= 'SELECT User_Password * FROM  USERS;';
  db.task('get-everything', task=> {
   return task.batch([
     task.any(player1),
     task.any(player2),
     task.any(player3)
   ]);
 })
});
//server.listen(8080);
console.log('Server running');
//INSERT INTO INVENTORY(Ingredient_ID, Ingredient_Group_ID,Ingredient_Name,Ingredient_Quantity,Ingredient_Cost,Ingredient_Unit)
//INSERT INTO INVENTORY(Ingredient_ID, Ingredient_Group_ID,Ingredient_Name,Ingredient_Quantity,Ingredient_Cost,Ingredient_Unit)
//VALUES (1,2,'Cheese',30,0.5,'oz'),(2,1,'steak',15,2,'oz'),(3,3,'bread',5,1,'loaf'),(4,3,'pasta',20,0.1,'oz');

// filling Dish_2_Ingredients
//INSERT INTO Dish_2_Ingredients VALUES(1,(SELECT ingredient_id FROM INVENTORY WHERE ingredient_name='pasta'),5);
//summing up each ingredient used in dish
//SELECT COUNT(ingredient_quanity) FROM Dish_2_Ingredients WHERE dish_id=1 and ingredient_id=1;
//update inventory
//UPDATE inventory SET ingredient_quantity=(SELECT ingredient_quantity FROM inventory WHERE ingredient_id=1)-(SELECT ingredient_quanity FROM dish_2_ingredients WHERE dish_id=1 and ingredient_id=1) WHERE ingredient_id=1;
