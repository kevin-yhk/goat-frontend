class Player{
    static getplayer(){
        API.get()
        .then(json => { 
   
                    let li = ``; 
                    
                    json.forEach(player => { 
                        li += `<tr> 
                            <strong><td>Name:</strong> ${player.name} </td><br>
                            <strong><td>PPG:</strong> ${player.ppg}</td><br>
                            <strong><td>RPG:</strong> ${player.rpg}</td><br>
                            <strong><td>APG:</strong> ${player.apg}</td><br>
                            <strong><td>Description:</strong> ${player.description}</td><br>      
                        </tr><br>`; 
                        
                    });
                
                document.getElementById("player_id").innerHTML += li; 
    }
        )}
    
}
