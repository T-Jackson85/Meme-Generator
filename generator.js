let button = document.getElementById('button')
let form = document.querySelector("form")

form.addEventListener('submit', function(e){
    e.preventDefault();
    let meme = document.createElement("div");    
    
    let imageUrl = document.getElementById('url').value;

    let img = document.createElement('img');
    
    let topText = document.createElement('div');
    
    let bottomText = document.createElement('div');
    
    let removeBtn = document.createElement('button')
    removeBtn.innerText = "Remove";



    img.src = imageUrl

   topText.classList.add('topText');
    topText.innerHTML= document.getElementById('topText'). value;
    
    bottomText.classList.add('bottomText');
    bottomText.innerHTML= document.getElementById('bottomText'). value;


    meme.classList.add("meme");
    meme.append(topText);
    meme.append(bottomText);
    meme.appendChild(img); 
    meme.appendChild(removeBtn);
    let memeLocation = document.getElementById("location");
    memeLocation.append(meme);

    removeBtn.addEventListener('click', function(e){
        e.target.parentElement.remove();
    })
    
form.reset()
})
function randomRGB() { 
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g}, ${b})`
}

const banner = document.querySelectorAll('h1');

setInterval(function() {
    for(let letters of banner) {
    letters.style.color = randomRGB();
}
},500)



