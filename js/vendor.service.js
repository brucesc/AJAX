var url = "http://prs.doudsystems.com";
var seg1 = "/Vendors";
        
function list(){
   return $.getJSON(url + seg1 +"/List");
}

function getVendor(id){
    return $.getJSON(url + seg1 + "/Get/" + id);
}