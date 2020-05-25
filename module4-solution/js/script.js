
var str;
function fn1()

{
    var con="j";
    str = document.getElementById("text1").value;
 

    if(str == "")
    {
        alert("Enter a Valid Name");
        return false;
    }
    else{
    document.getElementById("name").textContent="Hello," +str;
    
    
    
    
    TweenMax.to(" .container h1" ,2 ,
  {
    opacity: 0,
      y:-60,
      ease: Expo.easeInOut
  }
  )


  TweenMax.to(" .container input" ,2 ,
  {
    delay:0.6,
    opacity: 0,
      y:-60,
      ease: Expo.easeInOut
  }
  )


  TweenMax.to(" .container button" ,2 ,
  {
      delay:0.6,
     opacity: 0,
      y:-60,
      ease: Expo.easeInOut
  }
  )

  TweenMax.to(" .container h3" ,2 ,
  {
    delay:1,
    opacity: 0,
      y:-60,
      ease: Expo.easeInOut
  }
  )

  TweenMax.to(".container" , 2 ,
  {

      delay : 1.2,
      top: "-100%",
      ease: Expo.easeInOut
  }
  )
  

}
}

window.addEventListener('keypress', function (e) {
  if (e.keyCode == 13) {
      fn1();

  }
}, false);