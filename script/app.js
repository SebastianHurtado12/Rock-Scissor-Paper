let playerPoints=0,comPoints=0,timesPlayed=0;

const tableScore = document.getElementById('tableScore');

const contentTable=`<tr>
                        <th>Player</th>
                        <th>Computer</th>
                    </tr>
                        <tr id="gameSet0">
                        <td></th>
                        <td></td>
                    </tr>
                    <tr id="gameSet1">
                        <td></td>
                        <td></td>
                    </tr>
                    <tr id="gameSet2"> 
                        <td></td>
                        <td></td>
                    </tr>
                    <tr id="gameSet3">
                        <td></td>
                        <td></td>
                    </tr>
                    <tr id="gameSet4">
                        <td></td>
                        <td></td>
                    </tr>
                    <tr id="results">
                        <td></td>
                        <td></td>
                    </tr>
                `;

tableScore.innerHTML=contentTable;

function gameSet (playerChose){

    const msg = document.getElementById('message');
    const electionsDiv = document.getElementById('elections');

    let tableRow= document.getElementById(`gameSet${timesPlayed}`);
    
    let comChose = Math.floor((Math.random() * 3) +1);

    switch (comChose){
        case 1:
            comChose='rock';
            break;
        case 2:
            comChose='scissor';
            break;
        case 3:
            comChose='paper';     
            break;
    }

    if( playerChose=='paper' && comChose=='rock' ||
        playerChose=='rock' && comChose=='scissor' ||
        playerChose=='scissor' && comChose=='paper' ){
        
        playerPoints++;
        tableRow.innerHTML=`
                <td>X</td>
                <td>-</td>
        `;

        msg.innerHTML=`
            <h1>Player has won this set</h1>
        `;

    }
    else if( comChose=='paper'   && playerChose=='rock' ||
             comChose=='rock'    && playerChose=='scissor' ||
             comChose=='scissor' && playerChose=='paper' ){
        
        comPoints++;
        tableRow.innerHTML=`
                <td>-</td>
                <td>X</td>
         
        `;        
        msg.innerHTML=`
            <h1>Computer has won this set</h1>
        `;
    }
    else{
        tableRow.innerHTML=`    
                <td>-</td>
                <td>-</td>    
        `;
        msg.innerHTML=`
            <h1>There was a tie</h1>
        `; 
    }

    electionsDiv.innerHTML=`
            <img src='./src/${playerChose}.png' width=200px height=200px>
            <span> VS </span>
            <img src='./src/${comChose}.png' width=200px height=200px>
    `;      
    timesPlayed++

    if (timesPlayed==5) {

        if(playerPoints>comPoints){
            swal('El jugador ha ganado');
        }
        else if (playerPoints==comPoints){
            swal('Ha ocurrido un empate');
        }
        else{
            swal('La maquina ha ganado');
        }
        
        tableScore.innerHTML=contentTable;

        comPoints=0;
        playerPoints=0;
        timesPlayed=0;
    }
}
