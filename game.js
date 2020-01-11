$(document).ready(function() {
  let str = "";
  let id = "";
  for (let i = 0; i < 16; i++) {
    str += "<tr>";

    for (let j = 0; j < 16; j++) {
      id = i.toString() + "-" + j.toString();

      str += "<td id = '" + id + "'></td>";
    }

    str += "</tr>";
  }

  $("#grid-container").html(str);
});
