var players = [];
var x = 0;
function newPlayer() {
    var tempNum = document.getElementById('num').value;
    var tempName = document.getElementById('name').value;
    var tempAb = document.getElementById('ab').value;
    var tempH = document.getElementById('hits').value;

    if (x<12) {
        players[x] = new player(tempNum, tempName, tempAb, tempH);
        tempNum = null;
        tempName = null;
        tempAb = null;
        tempH = null;
        console.log(players[x]);
        x++;
    }
};
function player(num, name, ab, h){
    this.num = num;
    this.name = name;
    this.ab = ab;
    this.h = h;
    this.avg = this.h/this.ab;
};
