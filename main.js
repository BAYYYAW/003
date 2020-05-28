function myFunction(){
  var x = document.getElementById("navbar");
  if (x.style.left === "0px"){
    x.style.left = "-1900px"
  } else {
    x.style.left = "0px"
  }
}

window.onscroll = function() {scrollFunction()};

function scrollFunction(){
  var x = document.getElementById("btn");
  var v = document.getElementById("navbar");
  if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 50){
    x.style.bottom = "30px"

  } else {
    x.style.bottom = "-90px"
    v.style.left = "-1900px"
  }
}
