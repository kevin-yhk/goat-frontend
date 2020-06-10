document.getElementById("whatever").addEventListener("click", showInfo)


function showInfo(){
    getplayer()
    document.getElementById("whatever").style.display="none"
    document.getElementById("content").style.display="block"
    document.getElementById("king").style.display="block"
    document.getElementById("air").style.display="block"
}

function getplayer(){
document.getElementById("player_id").style.display="block"
    fetch("http://localhost:3000/players") 
    
    .then(response => response.json()) 
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
}); 
};


