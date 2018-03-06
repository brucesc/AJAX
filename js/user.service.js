var url = "http://prs.doudsystems.com";
var seg1 = "/Users";
        
function list(){
   return $.getJSON(url + seg1 +"/List");
}

function getUser(id){
    return $.getJSON(url + seg1 + "/Get/" + id);
}