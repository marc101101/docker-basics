var mysql   = require("mysql");

function REST_ROUTER(router,connection,md5) {
    var self = this;
    self.handleRoutes(router,connection,md5);
}

REST_ROUTER.prototype.handleRoutes = function(router,connection,md5) {
    var self = this;
    router.get("/",function(req,res){
        res.json({"Message" : "Hello World !"});
    });

    router.get("/todos",function(req,res){
        var query = "SELECT * FROM ??";
        var table = ["todos"];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.json({"Error" : false, "Message" : "Success", "todos" : rows[0].todos});
            }
        });
    });

    router.post("/todos",function(req,res){
        var query = "INSERT INTO ??(??,??) VALUES (?,?) ON DUPLICATE KEY UPDATE todos = ?";
        var table = ["todos","id","todos",1,req.body.todos,req.body.todos];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : err});
            } else {
                res.json({"Error" : false, "Message" : "User Added !"});
            }
        });
    });
}

module.exports = REST_ROUTER;
