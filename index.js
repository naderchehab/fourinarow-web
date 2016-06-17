'use strict';

let express = require("express");
let app = express();
let bodyParser = require('body-parser');
let errorHandler = require('errorhandler');
let methodOverride = require('method-override');
let Bot = require('../fourinarow-bot').Bot;
let Board = require('../fourinarow-bot').Board;

let hostname = process.env.HOSTNAME || 'localhost';
let port = parseInt(process.env.PORT, 10) || 4567;
let publicDir = process.argv[2] || __dirname + '/public';
let path = require('path');

app.use(methodOverride());
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static(publicDir));

app.use(errorHandler({
    dumpExceptions: true,
    showStack: true
}));

let settings = {
    timebank: '10000',
    time_per_move: '500',
    player_names: 'player1,player2',
    your_bot: 'player1',
    your_botid: '1',
    field_columns: '4', // 7
    field_rows: '4' // 6
};

let board = new Board(settings, 3);
let bot = new Bot({
    numTrainingGames: 100000
});

//bot.load("trainedBot.json");


app.get("/", function(req, res) {
    res.sendFile(path.join(publicDir, "/index.html"));
});

app.get("/train", function(req, res) {
    bot.train(board, () => {
        bot.save("trainedBot.json", () => {
            res.json({
                status: 'Done'
            });
        });
    });
});

app.get("/getmove", function(req, res) {
    let column = parseInt(req.query.playerMove, 10);
    board.placeDisc(column);
    board.nextPlayer();
    let botMove = bot.getMove(board);
    board.placeDisc(botMove);
    board.nextPlayer();
    board.print();
    res.json({
        botMove: botMove || "undefined",
        yourBotId: board.yourBotId
    });
});

console.log("fourinarow-web server %s listening at http://%s:%s", publicDir, hostname, port);
app.listen(port, hostname);
