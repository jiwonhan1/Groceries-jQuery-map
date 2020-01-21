$(document).ready(function(){
   $("form#formOne").submit(function(event) {
       event.preventDefault();
        
        $("form").hide();

        var word1 = $("#item1").val();
        var word2 = $("#item2").val();
        var word3 = $("#item3").val();

        var words = [word1, word2, word3];
        
        var newString = words.map(function(word){
            return word.toString().toUpperCase();   
        });

        newString.sort();

      $("#list").show();

      $("#a").text(newString[0]);
      $("#b").text(newString[1]);
      $("#c").text(newString[2]);




    });
});  
