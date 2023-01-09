let counter =0;
$(".image1").hide();
$(".image2").hide();
$(".image3").hide();
$(".image4").hide();
$(".results").hide();

$("button").click(function() {
    var age = Number($("age").val());
    var description =$("description").val();
    var results =$("results").val();
	$(".results").text(results);
  	
});

$("button").click(function() {
    counter +=1;
    $(".counter").text("This quiz has been taken" + counter + "time(s)");
    var description = $(".description").val();
    var results = $("results").val();
    
    if (description === "Smart") {
        
        $(".image3").show();
         $(".results").show();   
           $(".image1").hide();
           $(".image2").hide();
           $(".image4").hide();
        $(".character-result").text("You are Elena!");
    }
    
     if (description === "Feisty") {
        
        $(".image1").show();
          $(".results").show();   
         $(".image3").hide();
            $(".image2").hide();
            $(".image4").hide();
        $(".character-result").text("You are Bonnie!");
    }
    
      if (description === "Loyal") {
        
        $(".image2").show();
           $(".results").show();   
             $(".image1").hide();
             $(".image3").hide();
             $(".image4").hide();
           $(".character-result").text("You are Stephen!");
    }
    
      if (description === "Cold Hearted") {
        
        $(".image4").show();
           $(".results").show();   
             $(".image3").hide();
             $(".image2").hide();
             $(".image1").hide();
        $(".character-result").text("You are Damon!");
    }
    

   
  $(".restart").click(function(){
   $(".image3").hide();
   $(".image1").hide();
   $(".image2").hide();
   $(".image4").hide();  
   $(".results").hide();   
$(".character-result").hide();
  });
     
   
    
});  
                      
