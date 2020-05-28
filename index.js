function smoothscroll(pagetarget,duration){
    var target=document.querySelector(pagetarget);
    var targetPosition=target.getBoundingClientRect().top;
    var startPosition=window.pageYOffset;
    var distance=targetPosition-startPosition;
    var startTime=null;
    function animation(currentTime){
        if(startTime==null) startTime=currentTime;
        let elapsed = currentTime - startTime;
        let y = ease(elapsed, startPosition, distance, duration);
        window.scrollTo(0, y);
        if(elapsed < duration) requestAnimationFrame(animation)
    }
      
      const ease = (t,b,c,d) => {
        t /= d / 2;
        if(t < 1) return c/2 * t * t + b;
        t--;
        return -c / 2 * (t *(t-2) - 1) + b;
      }
      
      requestAnimationFrame(animation)
    
    
}

// for changing the background color
function bgColorChanger(){
  
  if(this.scrollY > this.innerHeight+200){
    var section=document.querySelector('.skill-portion').classList.add("bg-active")
    for(var i=0;i<4;i++){
      var skillcontent=document.querySelectorAll('.skill-content')[i].classList.add("bgskill-active")

    }
 
  }else{
    var section=document.querySelector('.skill-portion').classList.remove("bg-active");
    document.querySelector('.skill-holder').classList.remove("bgskill-active")


  }
  //   document.body.classList.add("bg-active");
  // }else{
  //   document.body.classList.remove('bg-active');
  // }

}
const navSlide=()=>{
  const burgur=document.querySelector('.burgur');
  const menu=document.querySelector('.menu-item')
 
  const menuItem=document.querySelectorAll('.menu-item li');
 

  burgur.addEventListener('click', function () {
      menu.classList.toggle('nav-active');
      menuItem.forEach((link,index)=>{
          if(link.style.animation){
              link.style.animation='';
          }else{
              link.style.animation=`menuItemFade 0.5s ease forwards ${index/ 7+0.5}s`
          }
      });
      // burgur Animation
      burgur.classList.toggle('toggle');
      
  })


}
navSlide();


window.addEventListener('scroll',bgColorChanger);


smoothscroll('.target',1000);
var arrowclick=document.querySelector('.down');
arrowclick.addEventListener('click',function(){
    console.log('scrollenabled');
    smoothscroll('.target',1000);

})
