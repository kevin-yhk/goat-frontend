function displayNewComment(){
    document.getElementById("content").style.display="block"
    fetch("http://localhost:3000/comments", {
        method: 'GET',
        
    })
.then(resp => resp.json())
.then(comment => {
    console.log(comment)
    let li = ``; 
        comment.forEach(comment => { 
            li += `<tr> 
                <td>Name: ${comment.name} </td><br>
                <td>Comment: ${comment.content}</td><br>  
                <button type="button" onclick="deleteComment(${comment.id})">Delete</button><br>         
            </tr><br>`; 
            
        }); 
        
    document.getElementById("content").innerHTML += li; 
    
})
}