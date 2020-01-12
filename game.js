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
    let newColor = "";          //paint brush color
    let gridNum = 15;           // num of rows
    let previous = "white";     //variable used for selecting color
    let isClickable = true;     //used for timer
    let canPlay = false;        //used for timer
    let time = 30;              //used for timer

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

    $("td").css({
        width: "calc(80vh / " + gridNum.toString() + ")",
        height: "calc(80vh / " + gridNum.toString() + ")",
    });

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

    $("#playagain")
        .css("display", "none")

        .click(function(){
        $("#startTime").prop('disabled', false);
        $("#playagain").css("display", "none");
    });

    var interval;
    $("#startTime").click(function(){
        if (isClickable){
            canPlay = true;
        }

        randNum = getRandInt(6);
        photo = getPhoto(randNum);




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

    let current = 0;
    function getTime() {
        randNum = getRandInt(6);
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
            $("#timer").html("game done! haha");
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
        console.log(count.toString());
        return Math.floor(count / 256);
    }

    function getPhoto(index){
        switch (index) {
            case 0:
                //get img0
                break;
            case 1:
                //return img1
                break;
            case 2:
                //return img2
                break;
            case 3:
                //return img3
                break;
            case 4:
                //return img4
                break;
            case 5:
                //return img5
                break;
            case 6:
                //return img6
                break;
        }

    }


});
