//global variable _name
//var _SALADS;

fetch("./salads.json")
    .then(function(resp) {
        //return stop exectuitng the code and the vaule is returend and console log just print to console
        return resp.json();
    })
    .then(function(data) {
        //calling function populateMenu
        populateMenu(data);
    }) 

//promise - to check regarding waiting time to excatue the code
//function body declaration
function populateMenu(data){
    console.log(data);  
    for (i = 0; i < data.length; i++) {
        let price = "20";
        if ((i+1) % 3 == 0){
        price = "15";
        } else if (data[i].charAt(0) == "E" || data[i].charAt(0) == "R" || data[i].charAt(0) == "G"){
        price = "10";
        }     

        let menuItem = "<tr data-price='"+price+"'>"; 
        menuItem += "<td>" + (i+1).toString() + "</td>";
        menuItem += "<td>" + data[i] + "</td>";
        menuItem += "<td>" + price + "zl </td>";
        menuItem += "<td><input type='checkbox'></td>";
        menuItem += "</tr>";

    document.getElementById("menu-table").innerHTML += menuItem;
    
    }
}

//onlick o checkbox
//global var "total"
//when thicked you add 
//data attribute (parent attribute)





