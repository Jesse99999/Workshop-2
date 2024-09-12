function repeatingText(text) {

    for (let i = 0; i < 50; i++) {
      document.write(text + "<br>");
    }
  }
  
  repeatingText("Line of text");
  
  
  function checkBrowser() {
    
    if (navigator.userAgent.indexOf("Firefox") !== -1) {
      window.location.href = "http://www.mozilla.org";
    } else {
      window.location.href = "http://www.google.com";
    }
  }
  
  // checkbrowser();


  function checkStudent() {
    
    let isStudent = confirm("Are you a student?");
    
    
    if (isStudent) {
      document.write("Welcome student!");
    } else {
      document.write("Sorry, this page is for students only.");
    }
  }

  // window.onload = checkStudent;

  var images = [
    "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg",
    "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg",
    "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg"
  ];

  
  function displayRandomImage() {
    
    var randomIndex = Math.floor(Math.random() * images.length);
    
    document.write('<img src="' + images[randomIndex] + '" />');
  }

  
  window.onload = displayRandomImage;