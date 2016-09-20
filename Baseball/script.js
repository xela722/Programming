var players = [];
var x = 0;
var row = [];
var cell = [];
var y = 0;
function newPlayer() {
    var drop = document.getElementById('Players');
    var tempNum = document.getElementById('num').value;
    var tempName = document.getElementById('name').value;
    var tempAb = document.getElementById('ab').value;
    var tempH = document.getElementById('hits').value;
    var opt = document.createElement('option');
    if (x<12) {
        opt.text = tempName;
        drop.add(opt);
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
    this.avg = Math.round((this.h/this.ab)*1000)/1000;
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

};
function remPlayer() {
    var tab = document.getElementById('Tbl');
    var dropdown = document.getElementById('Players');
    var play = dropdown.options[dropdown.selectedIndex].text;
    dropdown.remove(dropdown.selectedIndex);
    for (var i = 0; i < players.length; i++) {
        if (players[i].name === play) {
            players.splice(i,1,"empty");
            for (var j = 0; j <= row.length; j++) {
                for (var k = 0; k < cell.length; k++) {
                    if (tab.rows[j].cells[k].innerHTML === play) {
                        tab.deleteRow(j);
                        y--
                    }
                }
            }
        }

    }
}
