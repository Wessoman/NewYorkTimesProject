var awesomness = ["Alex", "Andrew", "Anton", "Shar"];
var searchTitle = "";
var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+searchTitle+"&api-key=wcVYQYtAoquqNwS0WW2mmdlVGA7qgDGV";

function displayArticle() {
$.ajax({
    url: queryUrl,
    method: "GET"
}).then(function(response) {
   console.log(response);
   for(var i=0;i<10;i++) {
   console.log(response.response.docs[i].headline.main);
   }
});
}
$("#search").on("click", function(event){
    event.preventDefault();
    var searchCurrent = $("#search-term").val().trim();
    console.log(searchCurrent);
    var searchTitle = searchCurrent;
    displayArticle();
});