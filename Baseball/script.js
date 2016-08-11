

var players = [];
var x = 0;

var y = 0;
var row = [];
var z = 0;
var cell = [];
var w = 0;
function newPlayer() {
    var tab = document.getElementById('Tbl');
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
    if (y<12) {
        row[y] = tab.insertRow(y+1);
        if (z<4) {
            cell[z] = row[y].insertCell(0);
            z++;
        }
        y++;
    }

};
function player(num, name, ab, h){
    this.num = num;
    this.name = name;
    this.ab = ab;
    this.h = h;
    this.avg = this.h/this.ab;
};
