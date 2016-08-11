

var players = [];
var x = 0;
var row = [];
var cell = [];
var y = 0;
var z = 0;
var w = 0;
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
        addData();
        x++;
    }else {
        window.alert("Too many players!");
    }



};
function player(num, name, ab, h){
    this.num = num;
    this.name = name;
    this.ab = ab;
    this.h = h;
    this.avg = this.h/this.ab;
};
function addData(){
    var tab = document.getElementById('Tbl');
    row[y] = tab.insertRow(y+1);
    for (var i = 0; i <5 ; i++) {

        cell[i] = row[y].insertCell(i);
        if (i === 0) {
            cell[i].innerHTML = players[x].num;
        } else if (i === 1) {
            cell[i].innerHTML = players[x].name;
        } else if (i === 2) {
            cell[i].innerHTML = players[x].ab;
        } else if (i === 3) {
            cell[i].innerHTML = players[x].h
        } else if (i === 4) {
            cell[i].innerHTML = players[x].avg;
            y++
        }
    }

}
