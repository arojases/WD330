const weeks = [
    {
        labels: "Week 1 notes",
        url: "week1/index.html"
    },
    /*{
        labels: "Week 2 notes",
        url: "week1/index.html"
    },
    {
        labels: "Week 3 notes",
        url: "week1/index.html"
    }*/
];
var list = weeks.map(function (link) {
    return ("<li><a href=" + link.url + ">" + link.labels + "</a></li>");
  });
  document.getElementById("wlist").innerHTML = list.join('');