$(document).ready(function(){
  // When the search button is clicked
  $("#searchButton").click(function(){
    let searchName = $("#searchName").val();

    // Check if search box is filled
    if(searchName !== ""){
      // go to search results page
      window.location = "searchResults.html";
    }
    // else search box is not filled
    else {
      // Give input box a red border
      $("#searchNameSection").addClass("has-error");
      //Error Message
      $("#searchNameError").text("Please provide an item name to search");
    }
  });
});