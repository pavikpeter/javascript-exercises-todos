let entryFieldText;
let itemCount=0;

$("#addButton").click(function(){
    entryFieldText=$("#entryField").val();   
    if (entryFieldText!=='') {
        if (itemCount<15) {
            $("table").append("<tr><td id='item'>" + entryFieldText + "</td><td id='checked'></td> <td id='edit'></td><td id='delete'><button id='del'></button></td></tr>");
            $("#entryField").val("");
            itemCount++;
        }else{
            alert("List is full! No more items can be added!");
        }       
    }else{
        alert("Enrty field is empty! Add some text!");
    }
});

$("table").on("click", "#del", function() {
    $(this).closest("tr").remove();
    itemCount--;
 });


