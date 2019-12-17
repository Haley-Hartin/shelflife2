

/*
const{Pool,Client}=require('pg')
const connectionString = 'postgressql://haleyhartin:abc123@localhost5432/shelflife'
const client = new Client({
  connectionString: connectionString
})

client.connect()
client.query('SELECT * from USERS',(err, res)=>{
  console.log(err,res)
  client.end
})
*/
var pg=require('pg');
var connectionString=process.env.DATABASU_URL || 'postgressql://localhost5432/shelflife';
car client= new pg.client(connectionString);
client.connect();
