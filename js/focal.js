$(document).ready(function(){
  var steps=7;
  var blur=0.5;
  var opacity=(1/steps)+0;
  var original=$(".original").css("opacity",opacity);
  var content=original.html();
  
  for(var i=0;i<steps;i++){
    $("<div/>").addClass("realistic blur").html(content).css("opacity",opacity).insertBefore(original);
  }
  
  function render(center){
    var start=-blur;
    var step=(blur*2)/steps;
    $(".realistic").each(function(i){
      $(this).css({
        transformOrigin:"50% "+center+"px",
        transform:"rotateX("+(start+(step*i))+"deg)"
      })
    })
  }
  $(document).mousemove(function(event){
    var y=event.clientY;
    render(y*2);
  }) 
  render(0);
  
  $(".original").on("input",function(){
    $(".blur").html($(".original").html());
  })
  
})