let table = document.getElementById("myTable");
let sizeTable = 1;
let cellsToBeClicked = [];
let cellsClicked = [];

// $('td').click(function() {
//     $(this).css('backgroundColor', '#c7def7');
//  });

function growTable() {
    table.innerHTML = ""
    sizeTable += 1;
    for (y=0; y < sizeTable; y++) {
        let row = table.insertRow(y);
        for (x=0; x < sizeTable; x++) {
            let cell = row.insertCell(x);
            //cell.innerHTML = x + ' ; ' +y; 
            cell.setAttribute("id","("+x+","+y+")")
            cell.setAttribute("onclick","tdClick("+x+","+y+")");
        }
    }
}

growTable();

function tdClick(x,y) {
    let gameLost = false;
    cellsClicked.push([x,y]);
    changeBGColor(x,y);
    console.log(cellsClicked.toString())
    if (cellsToBeClicked.length === cellsClicked.length) {
        for (i=0 ; i<cellsClicked.length ; i++) { 
            if (cellsClicked[i][0] !== cellsToBeClicked[i][0] || cellsClicked[i][1] !== cellsToBeClicked[i][1]) {
                gameLost = true;
            }
        }
        if (gameLost) {
            alert('Perdu !')
        } else {
            alert('Gagné !')
        }
    }
}

function launchGame() {
    cellsToBeClicked = [];
    cellsClicked = [];
    let str = "clickez sur les cases suivantes : ";

    for (i=0; i < sizeTable; i++) {
        let x = Math.floor(Math.random() * sizeTable);
        let y = Math.floor(Math.random() * sizeTable);
        cellsToBeClicked.push([x,y]);
        str += '('+x+'; '+y+'), ';
        changeBGColor(x,y);
    }
    console.log(cellsToBeClicked.toString());
    //alert(str);
}

function changeBGColor(x,y) {
    let cell = document.getElementById("("+x+","+y+")");
    cell.style = "background-color:#c7def7";
    setTimeout( () => {
        cell.style = "background-color:transparent"
    }, 1000);
    
}