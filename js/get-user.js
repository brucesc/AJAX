

$().ready(function(){    
    $("#getuserbtn").click(function(){
        getUser($("#theID").val())
        .done(function(res){
            createUserTable(res);
            console.log(res);
        })
        .fail(function(err){
            console.error(err);
        });

    });
});

function createUserTable(user){
    $("#idu").text(user.ID);
    $("#name").text(user.FirstName + " " + user.LastName);
    $("#username").text(user.UserName);
    $("#phone").text(user.Phone);
    $("#email").text(user.Email);
    $("#reviewer").text((user.IsReviewer ? "Yes" : "No"));
    $("#admin").text((user.IsAdmin ? "Yes" : "No"));
}

   