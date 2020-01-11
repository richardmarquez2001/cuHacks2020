$(document).ready(function() {
    let str = "";
    let id = "";
    let baseColor = "red";
    let newColor = "blue";
    let gridNum = 16;
    for (let i = 0; i < gridNum; i++) {
        str += "<tr>";

        for (let j = 0; j < gridNum; j++) {
            id = i.toString() + "-" + j.toString();

            str += "<td id = '" + id + "'></td>";
        }

        str += "</tr>";
    }

    $("#grid-container").html(str);

    $("td").css("background-color", baseColor);

    $("td").mousedown(function(e){
        switch(e.which){
            case 1:
                $(this).css("background-color", newColor);
                break;
            case 3:
                $(this).css("background-color", baseColor);
        }
    })

});
