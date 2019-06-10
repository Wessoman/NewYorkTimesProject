var searchTitle = $('#search-term');
var searchNumb = 5;

function getArticles() {
    console.log(what);
    
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTitle + "&api-key=wcVYQYtAoquqNwS0WW2mmdlVGA7qgDGV";
    
    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function(response){
        console.log(response);
        for (var i = 0; i < searchNumb; i++) {
            var articleDIV = $('<div>')
            var article = $('<p>').text(response)
            articleDIV.append(article);
        }
})
};








