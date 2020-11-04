//runs when the document is ready to execute the functionality on the page. 
$(document).ready(function(){
    //global variable to be called
    var API_Key = "36181245-cbc1-46cc-80f8-e3c533de7d97"; //API key assigned to allow access to the content on the guardian news website to be loaded onto the application.
    var error = "<div class='alert alert-danger' role='alert'><h1>Error, Ajax connection failed. please check your connection</h1></div>"; //variable to display error message if the ajax connection fails each time an ajax call is made
    //Most Popular news appears at the top of the page.
     //Ajax call to retrieve the data from the guardian api for the most popular news articles
       $.ajax(
       {
           type: "GET",
           dataType: "jsonp",
           cache: false,
           url: "https://content.guardianapis.com/search?show-fields=all&api-key=" + API_Key +"",
          success: function(data){ //carried out if ajax connection is successful
                        var MostPopular = '';//variable to store the most popular results 
              //For loop which will return the full set of results retrieved and stored into the bootstrap cards to enable the user to see the most popular news stories within the page. The relevant data could then be extracted from the api and displayed dynamically into the cards. This will run until te full set of results have been generated into a card to be displayed on the page  
               for(var i=0, len = data.response.results.length ; i < len; i++){
                  MostPopular +='<div class="col-md-12 col-sm-12 col-lg-4 mycards"><div class "card-deck"><div class="card"><img class=""src='+data.response.results[i].fields.thumbnail + ' width=100%><div class="card-body"><h4 class="card-title cardhead">'+data.response.results[i].fields.headline+'</h4><p class ="card-text">'+data.response.results[i].fields.trailText+'</p><p class="card-text"><small class="text-muted">'+ data.response.results[i].fields.byline+'</small></p><a href ='+ data.response.results[i].webUrl+' class="btn read_more_btn showmore" data-pd-popup-open="popupNew">Read More</a><div class="card-footer text-muted bottomcard">'+ data.response.results[i].webPublicationDate +'</div></div></div></div></div>';   
               }
              //load the most popular news articles to the page as long as there is a value stored. 
              if(MostPopular !== ""){
                  $("#MostPopular").html(MostPopular);
              }
              },
           //errror message which will be displayed if the Ajax call fails
           error: function(){
               $("#MostPopular").html(error);
           },
          });
             //Ajax call to retrive the data for the home articles within the page 
       $.ajax(
       {
           type: "GET",
           dataType: "jsonp",
           cache: false,
           url: "https://content.guardianapis.com/search?section=uk-news&show-fields=all&api-key=" +API_Key+"",
          success: function(data){   //carried out if the ajax connection is successful
                        var home_news = ''; //variable to store the data retrieved
              //For loop to load the data to bootstrap cards for the full set of data which has been located for the news relating to home. The relevant data could then be extracted from the api and displayed dynamically into the cards. This will run until te full set of results have been generated into a card to be displayed on the page  
               for(var i=0, len = data.response.results.length ; i < len; i++){
                  home_news +='<div class="col-md-12 col-sm-12 col-lg-4 mycards"><div class = "card-deck"><div class="card"><img class="card-img-top "src='+data.response.results[i].fields.thumbnail + ' width=100%><div class="card-body"><h4 class="card-title cardhead">'+data.response.results[i].fields.headline+'</h4><p class ="card-text">'+data.response.results[i].fields.trailText+'</p><p class="card-text"><small class="text-muted">'+ data.response.results[i].fields.byline+'</small></p><div class="card-footer text-muted bottomcard">'+ data.response.results[i].webPublicationDate +'</div></div></div></div></div>';       
               }
              //checks if the variable is not blank so results can be returned
              if(home_news !== ""){
                  $("#home").html(home_news);
              }
              },
           //error message if the ajax connection fails
           error: function(){
               $("#home").html(error);
           },
          });
        //Ajax call which will retrieve the data from the guardian api for the world news section in the tabs. 
       $.ajax(
       {
           type: "GET",
           dataType: "jsonp",
           cache: false,
           url: "https://content.guardianapis.com/search?section=world&show-fields=all&api-key=" + API_Key +"",
          success: function(data){ //carried out if the ajax connection is successful
                        var world_news = ''; //variable stores the data retrieved
              //For loop to return the full results found and loads them into the world variable in bootstrap cards. The relevant data could then be extracted from the api and displayed dynamically into the cards. This will run until te full set of results have been generated into a card to be displayed on the page  
               for(var i=0, len = data.response.results.length ; i < len; i++){
                  world_news +='<div class="col-md-12 col-sm-12 col-lg-4 mycards"><div class = "card-deck"><div class="card"><img class="card-img-top "src='+data.response.results[i].fields.thumbnail + ' width=100%><div class="card-body"><h4 class="card-title cardhead">'+data.response.results[i].fields.headline+'</h4><p class ="card-text">'+data.response.results[i].fields.trailText+'</p><p class="card-text"><small class="text-muted">'+ data.response.results[i].fields.byline+'</small></p><div class="card-footer text-muted bottomcard">'+ data.response.results[i].webPublicationDate +'</div></div></div></div></div>';
               }
              //checks if the variable contains a value and returns the result if the result exists.
              if(world_news !== ""){
                  $("#world").html(world_news);
              }
              },
           //error message displayed if the ajax connection fails
           error: function(){
               $("#world").html(error);
           },
          });
    
    //ajax call to retrieve the data for the us news section on the tabs
    $.ajax(
       {
           type: "GET",
           dataType: "jsonp",
           cache: false,
           url: "https://content.guardianapis.com/search?section=us-news&show-fields=all&api-key=" + API_Key +"",
          success: function(data){ //carried out if the ajax connection is successful
                        var USA_news = ''; //variable stores the data retrieved
              //for loop to generate the bootstrap cards using the data located from the API
               for(var i=0, len = data.response.results.length ; i < len; i++){
                 USA_news +='<div class="col-md-12 col-sm-12 col-lg-4 mycards"><div class = "card-deck"><div class="card"><img class="card-img-top "src='+data.response.results[i].fields.thumbnail + ' width=100%><div class="card-body"><h4 class="card-title cardhead">'+data.response.results[i].fields.headline+'</h4><p class ="card-text">'+data.response.results[i].fields.trailText+'</p><p class="card-text"><small class="text-muted">'+ data.response.results[i].fields.byline+'</small></p><div class="card-footer text-muted bottomcard">'+ data.response.results[i].webPublicationDate +'</div></div></div></div></div>';
               }
              //checks if a value exists in the variable. If there is a value load the results to the us news section on the page
              if(USA_news !== ""){
                  $("#usa").html(USA_news);
              }
              },
           //error message to be displayed if the ajax connection fails 
           error: function(){
               $("#usa").html(error);
           },
          });
            //Ajax call to retrieve the technology news for the technology section of the application. 
       $.ajax(
       {
           type: "GET",
           dataType: "jsonp",
           cache: false,
           url: "https://content.guardianapis.com/search?section=technology&show-fields=all&api-key=" +API_Key+"",
          success: function(data){ //carried out if the ajax connection is successful 
                        var tech_news = ''; //variable stores the data retrieved
              //For loop to create the bootstrap cards from the data set for technology. The relevant data could then be extracted from the api and displayed dynamically into the cards. This will run until te full set of results have been generated into a card to be displayed on the page  
               for(var i=0, len = data.response.results.length ; i < len; i++){
                  tech_news +='<div class="col-md-12 col-sm-12 col-lg-4 mycards"><div class = "card-deck"><div class="card"><img class="card-img-top "src='+data.response.results[i].fields.thumbnail + ' width=100%><div class="card-body"><h4 class="card-title cardhead">'+data.response.results[i].fields.headline+'</h4><p class ="card-text">'+data.response.results[i].fields.trailText+'</p><p class="card-text"><small class="text-muted">'+ data.response.results[i].fields.byline+'</small></p><div class="card-footer text-muted bottomcard">'+ data.response.results[i].webPublicationDate +'</div></div></div></div></div>';
               }
              //checks if a value exists and displays the results under technology section on the tabs if it exists
              if(tech_news !== ""){
                  $("#technology").html(tech_news);
              }
              },
           //error message to display if the ajax connection fails 
           error: function(){
               $("#technology").html(error);
           },
          });
         //Ajax call to retrieve the data for the politics news section of the tabs. 
       $.ajax(
       {
           type: "GET",
           dataType: "jsonp",
           cache: false,
           url: "https://content.guardianapis.com/search?section=politics&show-fields=all&api-key=" + API_Key+ "",
          success: function(data){   //carried out when ajax connection is successful 
                        var politics_news = ''; //variable stores the data retrieved
              //for loop which will generate the bootstrap cards and load it to the variable defined for the data which has been connected. The relevant data could then be extracted from the api and displayed dynamically into the cards. This will run until te full set of results have been generated into a card to be displayed on the page  
               for(var i=0, len = data.response.results.length ; i < len; i++){
                  politics_news +='<div class="col-md-12 col-sm-12 col-lg-4 mycards"><div class = "card-deck"><div class="card"><img class="card-img-top "src='+data.response.results[i].fields.thumbnail + ' width=100%><div class="card-body"><h4 class="card-title cardhead">'+data.response.results[i].fields.headline+'</h4><p class ="card-text">'+data.response.results[i].fields.trailText+'</p><p class="card-text"><small class="text-muted">'+ data.response.results[i].fields.byline+'</small></p><div class="card-footer text-muted bottomcard">'+ data.response.results[i].webPublicationDate +'</div></div></div></div></div>';       
               }
              //checks if the variable contains a value and displays the results if it is not empty
              if(politics_news !== ""){
                  $("#politics").html(politics_news);
              }
              },
           //error message displayed if the ajax connection fails
           error: function(){
               $("#politics").html(error);
           },
          });
         //Ajax call to retrieve the news for the sport section of the tabs within the application
       $.ajax(
       {
           type: "GET",
           dataType: "jsonp",
           cache: false,
           url: "https://content.guardianapis.com/search?section=sport&show-fields=all&api-key=" +API_Key+"",
          success: function(data){  //carried out as long as the ajax connection is successful
         //variable stores the data retrieved
                        var sport_news = '';
              //For loop to load the data to bootstrap cards within the page which would mean that the sports would be displayed and loaded into variable. The relevant data could then be extracted from the api and displayed dynamically into the cards. This will run until te full set of results have been generated into a card to be displayed on the page  
               for(var i=0, len = data.response.results.length ; i < len; i++){
                  sport_news +='<div class="col-md-12 col-sm-12 col-lg-4 mycards"><div class = "card-deck"><div class="card"><img class="card-img-top "src='+data.response.results[i].fields.thumbnail + ' width=100%><div class="card-body"><h4 class="card-title cardhead">'+data.response.results[i].fields.headline+'</h4><p class ="card-text">'+data.response.results[i].fields.trailText+'</p><p class="card-text"><small class="text-muted">'+ data.response.results[i].fields.byline+'</small></p><div class="card-footer text-muted bottomcard">'+ data.response.results[i].webPublicationDate +'</div></div></div></div></div>';       
               }
              //displays the politics news in the correct tab with the id sports as long as there is data within the variable to be displayed
              if(sport_news !== ""){
                  $("#sport").html(sport_news);
              }
              },
           //error message displayed if the ajax connection fails
           error: function(){
               $("#sport").html(error);
           },
          });
            //Ajax call which will retrieve the news data for science section of the tabs on the application
       $.ajax(
       {
           type: "GET",
           dataType: "jsonp",
           cache: false,
           url: "https://content.guardianapis.com/search?section=science&show-fields=all&api-key=" + API_Key + "",
          success: function(data){  //carried out if the ajax connection is successful
          ////variable stores the data retrieved    
                        var science_news = '';
              //For loop to load the data to bootstrap cards within the page which would mean that the science news would be displayed and load this into the variable. The relevant data could then be extracted from the api and displayed dynamically into the cards. This will run until te full set of results have been generated into a card to be displayed on the page  
               for(var i=0, len = data.response.results.length ; i < len; i++){
                  science_news +='<div class="col-md-12 col-sm-12 col-lg-4 mycards"><div class = "card-deck"><div class="card"><img class="card-img-top "src='+data.response.results[i].fields.thumbnail + ' width=100%><div class="card-body"><h4 class="card-title cardhead">'+data.response.results[i].fields.headline+'</h4><p class ="card-text">'+data.response.results[i].fields.trailText+'</p><p class="card-text"><small class="text-muted">'+ data.response.results[i].fields.byline+'</small></p><div class="card-footer text-muted bottomcard">'+ data.response.results[i].webPublicationDate +'</div></div></div></div></div>';       
               }
              //displays the science news in the correct tab with the id science as long as there is data to be displayed
              if(science_news !== ""){
                  $("#science").html(science_news);
              }
              },
           //error message displayed if the ajax connection fails
           error: function(){
               $("#science").html(error);
           },
          });
           //Ajax call which will retrieve the data from the guardian api for the Entertainment section on the tabs on the page 
       $.ajax(
       {
           type: "GET",
           dataType: "jsonp",
           cache: false,
           url: "https://content.guardianapis.com/search?section=culture&show-fields=all&api-key=" +API_Key+"",
          success: function(data){  //carried out if the ajax connection is successful
            ////variable stores the data retrieved 
                        var entertainment_news = '';
              //For loop to generate the bootstrap cards for the full results retrieved from the guardian api.The relevant data could then be extracted from the api and displayed dynamically into the cards. This will run until te full set of results have been generated into a card to be displayed on the page   
               for(var i=0, len = data.response.results.length ; i < len; i++){
                  entertainment_news +='<div class="col-md-12 col-sm-12 col-lg-4 mycards"><div class = "card-deck"><div class="card"><img class="card-img-top "src='+data.response.results[i].fields.thumbnail + ' width=100%><div class="card-body"><h4 class="card-title cardhead">'+data.response.results[i].fields.headline+'</h4><p class ="card-text">'+data.response.results[i].fields.trailText+'</p><p class="card-text"><small class="text-muted">'+ data.response.results[i].fields.byline+'</small></p><div class="card-footer text-muted bottomcard">'+ data.response.results[i].webPublicationDate +'</div></div></div></div></div>';       
               }
              //checks if the variable contains a value and if it does then return this to the page
              if(entertainment_news !== ""){
                  $("#entertainment").html(entertainment_news);
              }
              },
           //error message displayed if the ajax connection fails 
           error: function(){
               $("#entertainment").html(error);
           },
          });
       //search the application for news stories
        //search will activate when the search button has been clicked.
        $("#search_button").on("click", function(e){
            //will prevent the default acctivity occuring
            e.preventDefault();
            //searched term is loaded into the variable to return the result for the search term
            var search_term = $("#news_search").val();
            //the url will make use of the searched variable to allow the user to see the news stories returned using the url
            var url = "https://content.guardianapis.com/search?show-fields=all&q="+search_term+"&api-key=" + API_Key+""; 
            //allow ajax call to be carried out as long as the search variable has a value
            if(search_term !== ""){
              $.ajax({
                  url: url,
                  method: "GET",
                  dataType: "json",
                  //function to execute as long as there is a successful ajax connection is achieved. 
                success: function(news){
                    //the results for the search will be loaded to the result variable
                    var result = "";
                    //variable to display message that the results for the search carried out
                    var search_result = "<div class='alert alert-info' role='alert'><h1>Results for the search: "+ search_term+"</h1></div>"; //
                    //load the results from the api within the variable searchnew
                    var search_news_result = news.response.results;
                    //load the result title to the heading
                    $("#results").html(search_result);
                    //for loop which will run to return the results from the search which had been loaded into the url once the search has been carried out.
                    for(var i in search_news_result){
                    //result which will be outputing in the result variable
                    //the search term is displayed within the search result
                    //bootstrap cards are used to generate the results from the ajax connection to return the articles relating to the item searched. 
                    result += "<div class='card mb-3 search_card'><img class = 'card-img-top'src="+search_news_result[i].fields.thumbnail+" alt='thumbnail'><br /><div class='card-body'><h5 class='card-title'>"+search_news_result[i].fields.headline+"</h5><p class = 'card-text'>"+search_news_result[i].fields.bodyText+"</p><p class='card-text'><small class='text-muted'>"+ search_news_result[i].fields.byline+"</small><br /><br /></div><div class = 'card-footer text-muted'>"+search_news_result[i].webPublicationDate+"</div></div></li></ul> ";
                    }
                    //check if a result exists for the search which has been carried out. 
                    if(result !== ""){
                     //then load the result for the search to the result section of the application.  
                    $("#searchresult").html(result);  
                    }
                    //if no result has been found and the result is empty
                    else{
                        //display an alert message to say that the term which was used for the search has no results and try another result. 
                       var Cannotlocate = "<div class='alert alert-warning'' role='alert'><h1>We could not locate any articles matching your search. Please try something else.</h1></div>";
                       //display message for no load then
                    $("#searchresult").html(Cannotlocate);
                    }
                },
                  //error message will be displayed if the ajax connection has failed
                  error: function(){
                    $("#searchresult").html(error);
                  }
              });
        }else{
                console.log("please enter another item to search");
            }
        });
        //tooltip for the help for the search of the application. 
        //when the user hovers over the search it will slide down onto the screen providing them with how they can use the search.
        //will track the position of the mouse ensuring that it will show beside the cursor on the page. 
        $("#news_search").tooltip({ 
            //content of the tooltip to provide help for the user on the search 
            //this will overwrite the title tag written onto the search bar within the navigation on the page. 
                    content: "Want to find specific articles. Enter the name here. We will work to return the results to you",
            //show the tooltip help with a slideDown effect with a delay of 250milliseconds. 
            //will slide onto the page when the use hovers over the search bar. 
                    show: {
                           effect: "slideDown",
                           delay: 250
                         },
            //when the user moves away from the search bar the tooltip will be hidden from view with a slide up with a short delay of 50 milliseconds. 
                    hide:{ 
                        effect: "slideUp",
                        delay: 50
                    },
            //the tooltip will be visible beside the mouse within the search bar allowing the tooltip to be displayed below the cursor on the mouse as long as the 
                     track: true
                });  
       }); //end document ready