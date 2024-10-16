console.log("script loaded");

var width = window.innerWidth;
console.log("Width: " + width);

if (width <= 890) {
    console.log("Screen to small");
}
else {
    document.getElementById("nav").innerHTML = "<nav class='navbar-inverse bar' id='nav'><div class='navbar-header'><button type='button' class='navbar-toggle' data-toggle='collapse' data-target='#myNavbar'><span class='icon-bar'></span><span class='icon-bar'></span><span class='icon-bar'></span></button></div><div class='collapse navbar-collapse' id='myNavbar'><ul class='nav navbar-nav text'><li><a class='item' href='#About'><p class='hover-underline-animation'>About Me</p></a></li><li><a class='item' href='#Skills'><p class='hover-underline-animation'>Skills</p></a></li><li><a class='item' href='#Resume'><p class='hover-underline-animation'>Resume</p></a></li><li><a class='item' href='services.html'><p class='hover-underline-animation'>Services</p></a></li><li><a class='item contact' href='#Contacts'><p class='hover-underline-animation'>Contact</p></a></li></ul></div></nav>";
}

$(".dismisbar").click(function(){
    $(".notification-bar").hide();
});  