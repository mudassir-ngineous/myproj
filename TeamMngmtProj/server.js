var mongo_crud = require("./DataStore/Mongo/mongo.js");
var restify = require('restify');
var server = restify.createServer({
    certificate: null, // If you want to create an HTTPS server, pass in the PEM-encoded certificate and key
    key: null, // If you want to create an HTTPS server, pass in the PEM-encoded certificate and key
    formatters: null, //  Custom response formatters for res.send()
    log: null, // You can optionally pass in a bunyan instance; not required
    name: 'Tutorial Simple Server', // By default, this will be set in the Server response header, default is restify
    spdy: null, // Any options accepted by node-spdy
    version: '0.0.1', // A default version to set for all routes
    handleUpgrades: false // Hook the upgrade event from the node HTTP server, pushing Connection: Upgrade requests through the regular request handling chain; defaults to false
});

server.use(restify.queryParser())
server.use(restify.bodyParser());
server.use(restify.CORS());
server.use(restify.authorizationParser());


server.post("/team/add", teamMembers);

function teamMembers(req, res, next) {
    var a = {};
    console.log(req.body)
    if(req.params.hasOwnProperty("teamName")){
        a.teamName = req.params.teamName;
    }else{
        res.send(getFailResponse("teamName is mandatory"));
        return next();
    }
    if(req.params.hasOwnProperty("playerName")){
        a.playerName = req.params.playerName;
    }else{
        res.send(getFailResponse("playerName is mandatory"));
        return next();
    }
    if(req.params.hasOwnProperty("post")){
        a.post = req.params.post;
    }else{
        res.send(getFailResponse("post is mandatory"));
        return next();
    }
    if(req.params.hasOwnProperty("age")){
        a.age = req.params.age;
    }
    if(req.params.hasOwnProperty("matchPlayed")){
        a.matchPlayed = req.params.matchPlayed;
    }
    if(req.params.hasOwnProperty("runScored")){
        a.runScored = req.params.runScored;
    }
    if(req.params.hasOwnProperty("wicketTaken")){
        a.wicketTaken = req.params.wicketTaken;
    }
};

function getSuccessResponse(res){
    var b = {};
    b.status = 200;
    b.result = res;
    return b;
}

function getFailResponse(fail){
    var c = {};
    c.status = 400;
    c.error = fail;
    return c;
}


server.listen(3000, function (err) {
    if (!err) {
        console.log("server stared listenning on port 3000");
    }
});
