const imageUrls = [
    "https://img.freepik.com/free-photo/halloween-scene-illustration-anime-style_23-2151794320.jpg?semt=ais_hybrid",
    "https://img.freepik.com/premium-photo/beautiful-women-who-burns-sunset-with-lighter-beautiful-red-sky-lighter-light-illustration-mi_605905-1782.jpg?semt=ais_hybrid",
    "https://i.pinimg.com/236x/64/65/a1/6465a181955935611871fc0ee30fc56a.jpg",
    "https://4kwallpapers.com/images/walls/thumbs/20264.png",
    "https://4kwallpapers.com/images/walls/thumbs/20019.jpg",
    "https://4kwallpapers.com/images/walls/thumbs/19267.jpg",
    "https://4kwallpapers.com/images/walls/thumbs/18719.jpg",
    "https://4kwallpapers.com/images/walls/thumbs/17908.jpeg",
    "https://4kwallpapers.com/images/walls/thumbs/17596.jpg",
    "https://i.pinimg.com/736x/cf/a6/31/cfa63108c289d4458df99f96a1cab030.jpg",
    "https://i.pinimg.com/236x/43/10/7a/43107a2b1c60b041e46b8a0670fd7f39.jpg",
    "https://i.pinimg.com/474x/55/2d/0f/552d0f2b9de4095870cc3cb7d24e2e97.jpg",
    "https://i.pinimg.com/474x/7d/6f/53/7d6f535aa46d633b2c67ba28ea700cdd.jpg"
  ];
  

  //index for current image
  let currentImage = 0;

  const divImage = document.querySelector('.images');
  const next = document.getElementById("next");
  const prev = document.getElementById('prev');
  

  next.addEventListener("click",()=>{

    divImage.innerHTML ='';

    currentImage = (currentImage+1)%imageUrls.length;
    const image = document.createElement('img');
    image.src = `${imageUrls[currentImage]}`;
    divImage.appendChild(image);

  })

  prev.addEventListener("click",()=>{

    divImage.innerHTML = '';

    if(currentImage === 0)
    {
        currentImage = imageUrls.length - 1;
    }
    currentImage = (currentImage-1);
    const image = document.createElement('img');
    image.src = `${imageUrls[currentImage]}`;
    divImage.appendChild(image);

  })

