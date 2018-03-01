// Your apiRoutes.js file should contain two routes:
// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be 
// used to handle the compatibility logic.

var path = require("path");
var friendsArr = require("../data/friends.js");


module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friendsArr);
    });

    app.post("/api/friends", function(req, res) {
        
        var newFriend = req.body
        
        newFriend.scores = newFriend["scores[]"];
        delete newFriend["scores[]"]
        for(i = 0; i < newFriend.scores.length; i++){
            newFriend.scores[i] = parseInt(newFriend.scores[i])
        }

        var friendMatch = friendsArr[0]
        var friendScore = 0;
        for (i = 0; i < newFriend.scores.length; i++){
            friendScore += Math.abs(newFriend.scores[i] - friendMatch.scores[i]) 
        }
        for( i = 1; i < friendsArr.length; i++){
            var currentScore = 0;
            for (j = 0; j < newFriend.scores.length; j++){
                currentScore += Math.abs(newFriend.scores[j] - friendsArr[i].scores[j]) 
            }
            if (currentScore < friendScore){
                friendMatch = friendsArr[i];
                friendScore = currentScore;
            }
        }
        friendsArr.push(newFriend);
        res.json(friendMatch);
    })
};
