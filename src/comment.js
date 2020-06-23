class Comment{
    static displayNewComment(){
    API.getcomment()
    .then(json => {
    let li = ``; 
        json.forEach(comment => { 
            li += `<tr> 
                <td>Name: ${comment.name} </td><br>
                <td>Comment: ${comment.content}</td><br>  
                <td>Directed at: ${comment.player.name}</td><br>
                <button type="button" onclick="Comment.deleteComment(${comment.id})">Delete</button><br>         
            </tr><br>`; 
            
        }); 
        
    document.getElementById("content").innerHTML += li; 
    
})
}

    static displayUpdatedComment(){
        API.getcomment()
        .then(json => {
            let li = ``; 
                json.forEach(comment => { 
                    li += `<tr> 
                        <td>Name: ${comment.name} </td><br>
                        <td>Comment: ${comment.content}</td><br>  
                        <td>Directed at: ${comment.player.name}</td><br>
                        <button type="button" onclick="Comment.deleteComment(${comment.id})">Delete</button><br>         
                    </tr><br>`; 
                    
                }); 
                
            document.getElementById("content").innerHTML = li; 
            
        })

    }

    static deleteComment(id){
        API.delete(id)
        .then(response => {console.log(response)
        Comment.displayUpdatedComment()
        }) 

    }


}

