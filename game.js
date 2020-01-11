$(document).ready(function() {
    /**
     * Colorway:
     * Black: #10021F
     * Dark Purple: #7C39BF
     * White: #FFFFFF;
     * Light Purple: #975D6D8
     * Light Blue: #00D0FE
     */
    let str = "";
    let id = "";
    let baseColor = "#9756D8";
    let newColor = "#00D0FE";
    let isDown = false;
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
    });

    $("#getInfo").click(function(){
        getGrid();
    });

    function getGrid(){
        let arr = [];
        for (let i = 0; i < gridNum; i++) {

            for (let j = 0; j < gridNum; j++) {
                id = "#" + i.toString() + "-" + j.toString();
                let n = $(id).css("background-color");
                arr.push(n)
            }
        }

        console.log(arr);
    }
});
