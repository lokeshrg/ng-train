var MyHockeyRoster = (function () {
    function MyHockeyRoster() {
    }
    MyHockeyRoster.prototype.getTotalPlayers = function () {
        var np = 7;
        return np;
    };
    return MyHockeyRoster;
}());
var MyTTRoster = (function () {
    function MyTTRoster() {
    }
    MyTTRoster.prototype.getTotalPlayers = function () {
        return 6;
    };
    return MyTTRoster;
}());
var team;
team = new MyHockeyRoster();
console.log("Hockey team pl count: " + team.getTotalPlayers());
team = new MyTTRoster();
console.log("TT team pl count: " + team.getTotalPlayers());
//# sourceMappingURL=interface-eg.js.map