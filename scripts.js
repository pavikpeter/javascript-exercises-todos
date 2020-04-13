let entryFieldText;

$("#addButton").click(function(){
    entryFieldText=$("#entryField").val();    
    $("table").append("<tr><td id='item'>" + entryFieldText + "</td><td id='checked'></td> <td id='edit'></td><td id='delete'><button id='del'></button></td></tr>");
    $("#entryField").val("");
});

$("table").on("click", "#del", function() {
    $(this).closest("tr").remove();
 });


