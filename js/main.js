$(function(){
  $.easing.def = 'easeOutBack';
  
  $('.poly').click(function(){
    $('.poly').animate({'opacity':0},300)
    setTimeout(animate(),300)
  })
  animate()
  
  function animate(){
  
  $('.poly').each(function(i){
    time=200+(100*i)
    icon=Math.floor((Math.random()*16));
    $(this).css({
      'top':'-500px',
    }).delay(time).animate({
      'opacity':'1',
      'top':'0',
      'left':'0'
    },700)
  })
  }
})
  