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
    let newColor = "";
    let gridNum = 16;
    let previous = "red";
    let currentColor = baseColor;
    for (let i = 0; i < gridNum; i++) {
        str += "<tr>";
        for (let j = 0; j < gridNum; j++) {
            id = i.toString() + "-" + j.toString();

            str += "<td id = '" + id + "'></td>";
        }

        str += "</tr>";
    }

    $("#grid-container").html(str);

    $("td")
        .css("background-color", baseColor)

        .mousedown(function(e){
        switch(e.which){
            case 1:
                $(this).css("background-color", newColor);
                break;
            case 3:
                $(this).css("background-color", baseColor);
        }
    });

    $("#cRed").click(function(){newColor = "red"; active("cRed")});
    $("#cBlue").click(function(){newColor = "blue"; active("cBlue")});
    $("#cGreen").click(function(){newColor = "green"; active("cGreen")});
    $("#cYellow").click(function(){newColor = "yellow"; active("cYellow")});
    $("#cPurple").click(function(){newColor = "rgb(76, 1, 146)"; active("cPurple")});
    $("#cPink").click(function(){newColor = "rgb(255, 0, 221)"; active("cPink")});
    $("#cOrange").click(function(){newColor = "rgb(255, 102, 0)"; active("cOrange")});
    $("#cBrown").click(function(){newColor = "rgb(75, 43, 43)"; active("cBrown")});
    $("#cBlack").click(function(){newColor = "black"; active("cBlack")});
    $("#cWhite").click(function(){newColor = "#FFFFFF"; active("cWhite")});

    function active(bColor){
        $("#" + previous).css("border-width", "2px");
        $("#" + bColor).css("border-width", "5px");

        previous = bColor;

    }

    let start = new Date;
    $("#startTime").click(function(){
        setInterval(function() {
            $('#timer').text(Math.floor((new Date - start) / 1000) + " Seconds");
        }, 1000);

    });


    $("#getInfo").click(function(){
        clearInterval();
        getGrid();
    });

    function getGrid(){
        let arr = [];
        let n = "DIDNT WORK";
        for (let i = 0; i < gridNum; i++) {

            for (let j = 0; j < gridNum; j++) {
                id = "#" + i.toString() + "-" + j.toString();
                id = removeDash(id);

                n = $(id).css("background-color");

                arr.push(n);
            }
        }

        $("#data").html(arr.toString());
    }

    function removeDash(str){
        str.slice(0, -1);
        if (str[-1] === "-"){
            removeDash(str);
        }else{
            return str;
        }
    }
});
