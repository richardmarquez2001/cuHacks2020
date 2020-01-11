let $canvas_1 = $("#canvas_1");
let $canvas_2 = $("#canvas_2");

$canvas_1.css({
    "border-color": "red",
    "border-style": "solid",
    "border-width": "5px"
});

$canvas_2.css({
    "border-color": "black",
    "border-style": "solid",
    "border-width": "5px"
});

$canvas_1.drawRect({
    fillStyle: 'steelblue',
    strokeStyle: 'blue',
    strokeWidth: 4,
    x: 150, y: 100,
    fromCenter: false,
    width: 200,
    height: 100
});

$canvas_2.drawRect({
    fillStyle: 'steelblue',
    strokeStyle: 'blue',
    strokeWidth: 4,
    x: 150, y: 100,
    fromCenter: false,
    width: 200,
    height: 100
});

$("#getAmount").click(function(){
    let percent = calculatePercent();
    $("#percent").html(percent);
});

function calculatePercent(){

    const canvas1 = document.getElementById("canvas_1");
    const canvas2 = document.getElementById("canvas_2");

    let c1 = canvas1.getContext("2d");
    let c2 = canvas2.getContext("2d");
    let num = 0;

    let imgData1 = c1.getImageData(0, 0, 500, 500);
    let imgData2 = c2.getImageData(0, 0, 500, 500);
    for(i = 0; i<= imgData1.data.length; i+= 4){
        if (imgData1.data[i] === imgData2.data[i] && imgData1.data[i + 1] === imgData2.data[i + 1] &&
            imgData1.data[i + 2] === imgData2.data[i + 2] && imgData1.data[i + 3] === imgData2.data[i + 3]){
            num += 1;
        }
    }
    val = Math.floor((num / (imgData1.data.length / 4)) * 100);

    return val.toString() + "%";

}

