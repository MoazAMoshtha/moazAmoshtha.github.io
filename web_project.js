//for text
var counter = 0;

function changeText()
{
var quotes = new Array();

quotes[0] = "Lorem ipsum dolor sit amet, ea doming until epicuri nam, virtute placerat.  disputando cu est ,orem ipsum dolor sit amet, ea doming until epicuri nam, virtute placerat. Purtobrute disputando cu est<br><br> ,ipsum dolor sit amet .";
quotes[1] = "Lorem ipsum dolor sit amet, ea domiute placerat. Purtobrute disputando cu est ,orem ipsum dolor sit amet, ea doming until epicuri nam, virtute placerat. Purtobrute disputando cu est<br><br> ,ipsum dolor sit amet .";
quotes[2] ="Lorem ipsum dolor sit amet, ea doming until epicuri nam, virtute placerat. Purtobrute disputando cu est ,orem ipsum dolor sit amet, ea doming until epicuri nam, virtute placerat. Purtobrute disputando cu est<br><br> ,ipsum dolor sit amet .";
quotes[3] = "Lorem ipsum dolor sit ameg until epicuri nam, virtute placerat. Purtobrute disputando cu est ,orem ipsum dolor sit amet, ea doming until epicuri nam, virtute placerat. Purtobrute disputando cu est<br><br> ,ipsum dolor sit amet .";
quotes[4] = "Lorem ipsum dolor sit amet, ea doming until epicuri nam, virtute placerat. Purtobrute disputando cu est ,orem ipsum dolor sit amet, ea doming until epicuri namPurtobrute disputando cu est<br><br> ,ipsum dolor sit amet .";

if (counter > 4)
{
counter = 0;
}

document.getElementById("textslide").innerHTML = quotes[counter];

setTimeout(function(){changeText()},1500);
counter ++;
}

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides1");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}

