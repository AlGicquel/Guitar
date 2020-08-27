let table = document.getElementById("myTable");
let noteToFind;

function growTable() {
    table.innerHTML = "";
    for (y=0; y < 6; y++) {
        let row = table.insertRow(y);
        
        for (x=0; x < 13; x++) {
            let cell = row.insertCell(x);
            cell.setAttribute("id","("+x+","+y+")")
            //cell.setAttribute("onclick","tdClick("+x+","+y+")");
        }
    }
    document.getElementById('(0,0)').innerHTML = 'e';
    document.getElementById('(0,1)').innerHTML = 'B';
    document.getElementById('(0,2)').innerHTML = 'G';
    document.getElementById('(0,3)').innerHTML = 'D';
    document.getElementById('(0,4)').innerHTML = 'A';
    document.getElementById('(0,5)').innerHTML = 'E';

    document.getElementById('(3,2)').innerHTML = 'o';
    document.getElementById('(5,2)').innerHTML = 'o';
    document.getElementById('(7,2)').innerHTML = 'o';
    document.getElementById('(9,2)').innerHTML = 'o';
    document.getElementById('(12,1)').innerHTML = 'o';
    document.getElementById('(12,4)').innerHTML = 'o';
}

growTable();
launchGame();

// function tdClick(x,y) {
//     let gameLost = false;
//     cellsClicked.push([x,y]);
//     changeBGColor(x,y);
//     console.log(cellsClicked.toString())
//     if (cellsToBeClicked.length === cellsClicked.length) {
//         for (i=0 ; i<cellsClicked.length ; i++) { 
//             if (cellsClicked[i][0] !== cellsToBeClicked[i][0] || cellsClicked[i][1] !== cellsToBeClicked[i][1]) {
//                 gameLost = true;
//             }
//         }
//         if (gameLost) {
//             alert('Perdu !')
//         } else {
//             alert('Gagné !')
//         }
//     }
// }

function launchGame() {
    let str = "clickez sur les cases suivantes : ";
        let x = Math.floor(Math.random() * 12);
        let y = Math.floor(Math.random() * 6);
        noteToFind = '('+x+','+y+')';
        changeBGColor(x,y);
    //alert(str);
}

function changeBGColor(x,y) {
    let cell = document.getElementById("("+x+","+y+")");
    cell.style = "background-color:#c7def7";
    // setTimeout( () => {
    //     cell.style = "background-color:transparent"
    // }, 1000);
    
}

function noteButton (note) {
    let notes = [];
    gameLost = true;

    if (note === 'C') {
        notes = ['(8,5)', '(3,4)', '(10,3)', '(5,2)', '(1,1)', '(8,0)']
    }
    if (note === 'Cs') {
        notes = ['(9,5)', '(4,4)', '(11,3)', '(6,2)', '(2,1)', '(9,0)']
    }
    if (note === 'D') {
        notes = ['(10,5)', '(5,4)', '(0,3)', '(7,2)', '(3,1)', '(10,0)', '(12,3)']
    }
    if (note === 'Ds') {
        notes = ['(11,5)', '(6,4)', '(1,3)', '(8,2)', '(4,1)', '(11,0)']
    }
    if (note === 'E') {
        notes = ['(0,5)', '(7,4)', '(2,3)', '(9,2)', '(5,1)', '(0,0)', '(12,0)', '(12,5)']
    }
    if (note === 'F') {
        notes = ['(1,5)', '(8,4)', '(3,3)', '(10,2)', '(6,1)', '(1,0)']
    }
    if (note === 'Fs') {
        notes = ['(2,5)', '(9,4)', '(4,3)', '(11,2)', '(7,1)', '(2,0)']
    }
    if (note === 'G') {
        notes = ['(3,5)', '(10,4)', '(5,3)', '(0,2)', '(8,1)', '(3,0)', '(12,2)']
    }
    if (note === 'Gs') {
        notes = ['(4,5)', '(11,4)', '(6,3)', '(1,2)', '(9,1)', '(4,0)']
    }
    if (note === 'A') {
        notes = ['(5,5)', '(0,4)', '(7,3)', '(2,2)', '(10,1)', '(5,0)', '(12,4)']
    }
    if (note === 'As') {
        notes = ['(6,5)', '(1,4)', '(8,3)', '(3,2)', '(11,1)', '(6,0)']
    }
    if (note === 'B') {
        notes = ['(7,5)', '(2,4)', '(9,3)', '(4,2)', '(0,1)', '(9,0)', '(12,1)']
    }

    for (i=0 ; i<notes.length ; i++) {
        if (noteToFind === notes[i]) {
            gameLost = false;
        }
    }

    let cell = document.getElementById(noteToFind);
    cell.style = "background-color:#ffffff";

    if (gameLost) {
        alert('Perdu !')
    } else {
        alert('Gagné !')
    }

    launchGame();
}