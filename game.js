$(document).ready(function() {
    /**
     * Colorway:
     * Black: #10021F
     * Dark Purple: #7C39BF
     * White: #FFFFFF;
     * Light Purple: #975D6D8
     * Light Blue: #00D0FE
     */
    let str = "";   //used to make grid
    let id = "";    //ids that were never used
    let baseColor = "#FFFFFF";  //bg color
    let newColor = "red";          //paint brush color
    let gridNum = 15;           // num of rows
    let previous = "red";     //variable used for selecting color
    let isClickable = true;     //used for timer
    let canPlay = false;        //used for timer
    let time = 30;              //used for timer
    let current = 0;
    let isPaintable = false;
    let previousColor = previous;

    let arr = [
        //0 : Pokeball
        ["rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(255, 0, 0)","rgb(255, 0, 0)","rgb(255, 0, 0)","rgb(255, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 0, 0)","rgb(255, 0, 0)","rgb(255, 255, 255)","rgb(255, 0, 0)","rgb(255, 0, 0)","rgb(255, 0, 0)","rgb(255, 0, 0)","rgb(255, 0, 0)","rgb(255, 0, 0)","rgb(0, 0, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 0, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 0, 0)","rgb(255, 0, 0)","rgb(255, 0, 0)","rgb(255, 0, 0)","rgb(255, 0, 0)","rgb(255, 0, 0)","rgb(0, 0, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 0, 0)","rgb(255, 0, 0)","rgb(255, 0, 0)","rgb(255, 0, 0)","rgb(255, 0, 0)","rgb(255, 0, 0)","rgb(255, 0, 0)","rgb(255, 0, 0)","rgb(255, 0, 0)","rgb(255, 0, 0)","rgb(255, 0, 0)","rgb(0, 0, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 0, 0)","rgb(255, 0, 0)","rgb(255, 0, 0)","rgb(255, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(255, 0, 0)","rgb(255, 0, 0)","rgb(255, 0, 0)","rgb(255, 0, 0)","rgb(255, 0, 0)","rgb(0, 0, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(255, 0, 0)","rgb(0, 0, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 0, 0)","rgb(255, 0, 0)","rgb(255, 0, 0)","rgb(255, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 0, 0)","rgb(255, 255, 255)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(255, 255, 255)","rgb(0, 0, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 0, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 0, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 0, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 0, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)"],
        // 1 : Mush"room
        ["rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(255, 0, 0)","rgb(255, 0, 0)","rgb(255, 255, 255)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 0, 0)","rgb(255, 255, 255)","rgb(255, 0, 0)","rgb(255, 0, 0)","rgb(255, 0, 0)","rgb(255, 0, 0)","rgb(255, 0, 0)","rgb(255, 0, 0)","rgb(0, 0, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 0, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 0, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 0, 0)","rgb(255, 0, 0)","rgb(255, 0, 0)","rgb(255, 0, 0)","rgb(0, 0, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 0, 0)","rgb(255, 0, 0)","rgb(255, 0, 0)","rgb(255, 0, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 0, 0)","rgb(255, 0, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 0, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 0, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 0, 0)","rgb(255, 0, 0)","rgb(255, 0, 0)","rgb(255, 0, 0)","rgb(255, 0, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 0, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 0, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 0, 0)","rgb(255, 0, 0)","rgb(255, 0, 0)","rgb(255, 0, 0)","rgb(255, 0, 0)","rgb(255, 0, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 0, 0)","rgb(0, 0, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 0, 0)","rgb(255, 255, 255)","rgb(255, 0, 0)","rgb(255, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(255, 0, 0)","rgb(255, 0, 0)","rgb(255, 0, 0)","rgb(0, 0, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(255, 255, 255)","rgb(0, 0, 0)","rgb(255, 255, 255)","rgb(0, 0, 0)","rgb(255, 255, 255)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 0, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 0, 0)","rgb(255, 255, 255)","rgb(0, 0, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 0, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 0, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 0, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 0, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 0, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)"],
        // 2 : C"reepe"r
        ["rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(255, 255, 255)","rgba(0, 0, 0, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 0, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 0, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 0, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 0, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)"],
        // 3 : Heart
        ["rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 0, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 0, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 0, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 0, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 0, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(255, 255, 255)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 0, 0)","rgb(255, 255, 255)","rgb(0, 0, 0)","rgb(255, 255, 255)","rgb(0, 0, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)"],
        // 4 : Yoshi Egg
        ["rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 0, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 0, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 0, 0)","rgb(0, 128, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 0, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 0, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 0, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 0, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 0, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 0, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 0, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 0, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 0, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 0, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 0, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 0, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 0, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 0, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(255, 255, 255)","rgb(0, 0, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 0, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 0, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 0, 0)","rgb(0, 128, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 0, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 0, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 0, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)"],
        // 5 : Skull
        ["rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 0, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 0, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 0, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 0, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 0, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(255, 255, 255)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 0, 0)","rgb(255, 255, 255)","rgb(0, 0, 0)","rgb(255, 255, 255)","rgb(0, 0, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)", "rgb(255, 255, 255)"],
        // 6 : T"ree
        ["rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 128, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(255, 255, 255)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(0, 128, 0)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(75, 43, 43)","rgb(75, 43, 43)","rgb(75, 43, 43)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(75, 43, 43)","rgb(75, 43, 43)","rgb(75, 43, 43)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(75, 43, 43)","rgb(75, 43, 43)","rgb(75, 43, 43)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(75, 43, 43)","rgb(75, 43, 43)","rgb(75, 43, 43)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)"]
    ];

    for (let i = 0; i < gridNum; i++) {
        str += "<tr>";
        for (let j = 0; j < gridNum; j++) {
            id = i.toString() + "-" + j.toString();

            str += "<td id = '" + id + "'></td>";

        }
        str += "</tr>";
    }

    $("#grid-container").html(str);


    function addPaint(){
        $("td").addClass("canPaint");
    }

    $("td")
        .css({
        width: "calc(80vh / " + gridNum.toString() + ")",
        height: "calc(80vh / " + gridNum.toString() + ")",
        "background-color": baseColor

    })
        .addClass("canPaint")

        .mousedown(function(e){
            addPaint();
            // $(".noPaint").addClass("canPaint");
            // $(".canPaint").removeClass("noPaint");
            isPaintable = true;
            $("#yes").html("@mousedown " + isPaintable.toString());
        switch(e.which){
            case 1:
                $(this).css("background-color", newColor);
                break;
            case 3:
                $(this).css("background-color", baseColor);
        }

    })
        .mousemove(function(e){
            if (isPaintable){
                $("#yes").html("@mousemove " + isPaintable.toString());
                $(this).hover(function(){
                    if (($(this).hasClass("canPaint"))) {
                        switch(e.which) {
                            case 1:
                                $(this).removeClass("canPaint");
                                $(this).css("background-color", newColor);
                                break;
                            case 3:
                                $(this).css("background-color", baseColor);
                                break;
                        }
                    }

                })
            }else{
            }
        })

        .mouseup(function(){
            isPaintable = false;
            $("#yes").html("@mouseup " + isPaintable.toString());

        });

    $("#cRed").click(function(){newColor = "red"; active("cRed")}); //red
    $("#cBlue").click(function(){newColor = "blue"; active("cBlue")}); //blue
    $("#cGreen").click(function(){newColor = "green"; active("cGreen")}); //green
    $("#cYellow").click(function(){newColor = "yellow"; active("cYellow")}); //yellow
    $("#cPurple").click(function(){newColor = "rgb(76, 1, 146)"; active("cPurple")}); //purple
    $("#cPink").click(function(){newColor = "rgb(255, 0, 221)"; active("cPink")}); //pink
    $("#cOrange").click(function(){newColor = "rgb(255, 102, 0)"; active("cOrange")}); //orange
    $("#cBrown").click(function(){newColor = "rgb(75, 43, 43)"; active("cBrown")}); //brown
    $("#cBlack").click(function(){newColor = "black"; active("cBlack")}); //black
    $("#cWhite").click(function(){newColor = "#FFFFFF"; active("cWhite")}); //white

    function active(bColor){
        $("#" + previous).css("border-width", "2px");
        $("#" + bColor).css("border-width", "5px");
        previousColor = previous;

        previous = bColor;

    }

    $("#playagain")
        .css("display", "none")

        .click(function(){
        $("#startTime").prop('disabled', false);
        $(this).css("display", "none");
        clearBoard();
    });

    var interval;
    $("#startTime").click(function(){
        if (isClickable){
            canPlay = true;
            clearBoard();
        }

        var randNum = getRandInt(6);
        getPhoto(0);

        if (canPlay) {
            $("#startTime").prop('disabled', true);
            interval = setInterval(getTime, 1000);
        }
    });

    function stopInterval(){
        clearInterval(interval);
        current = 0;
        return false;
    }


    function clearBoard(){
        $("td")
            .css("background-color", baseColor);
    }

    function getTime() {
        let randNum = 0;
        let t = time + current;
        console.log(`-----`);
        console.log(t);
        console.log(t>0);
        console.log(time);
        console.log(current);
        if (t > 0) {
            $("#timer").html(t.toString() + " seconds");
            current -= 1;
        } else {
            $("#timer").html("Finished");
            $("#playagain").css("display", "block");
            stopInterval();
            $("#data").html(displayData(randNum).toString() + "%");
        }
    }


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
                n = $(id).css("background-color");

                arr.push(n.toString());
            }
        }

        return arr
    }

    function getRandInt(n){
        return Math.floor(Math.random() * Math.floor(n))
    }

    function compare(wordOne, wordTwo, index) {
        return wordOne[index] === wordTwo[index];
    }

    function displayData(n){
        let word = getGrid();
        let word1 = arr[0];
        let count = 0;
        for (i = 0; i <= word.length; i++){
            if (compare(word, word1, i)){
                console.log("...");
                count += 1;
            }
        }

        return ((count / 256) * 100);
    }

    function getPhoto(index){
        switch (index) {
            case 0:
                str = "<img src = \"images/0.png\" alt = \"yes\">";
                break;
            case 1:
                str = "<img src = \"images/1.png\" alt = \"yes\">";
                break;
            case 2:
                str = "<img src = \"images/2.png\" alt = \"yes\">";
                break;
            case 3:
                str = "<img src = \"images/3.png\" alt = \"yes\">";
                break;
            case 4:
                str = "<img src = \"images/4.png\" alt = \"yes\">";
                break;
            case 5:
                str = "<img src = \"images/5.png\" alt = \"yes\">";
                break;
            case 6:
                str = "<img src = \"images/6.png\" alt = \"yes\">";
                break;
        }
        $("#image").html(str);

    }


});
