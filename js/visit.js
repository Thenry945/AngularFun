function generateBackground(){
    var images = ['nature1.jpg','nature2.jpg','nature3.jpg','nature4.jpg'];
    var image = images[Math.floor(Math.random() * images.length)];
    var url = "css/images/"+image;
      document.getElementById('body').style.backgroundImage = "url("+url+")"; //"url("url")"});
  }
