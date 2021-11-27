function loadImage() {
  const image = new Image();
  image.src = "https://source.unsplash.com/random/1920x1080";
  image.onload = () => {
    console.log("loaded!");
  };
}

loadImage();
