
jQuery(window).scroll(function(){
  if (jQuery(window).scrollTop() > 10) {
    jQuery('.mainNav').addClass('sticky-header');
 
  }
  else {
    jQuery('.mainNav').removeClass('sticky-header');

  }
});

let count = document.querySelectorAll(".count")
  let arr = Array.from(count)
  arr.map(function(item){
  let startnumber = 0
  function counterup(){
      startnumber++
      item.innerHTML= startnumber
        
      if(startnumber == item.dataset.number){
            clearInterval(stop)
      }
  }
  let stop =setInterval(function(){
      counterup()
  },80)

})