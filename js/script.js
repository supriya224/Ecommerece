
let grid=document.querySelector(".products")
let filterInput=document.getElementById("filterInput")


fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{
                for(let value of json){
                    addElement(grid, value)
                }
           

            })

// filterInout with search button
filterInput.addEventListener("keyup",filterProducts );
function filterProducts(){
    let filterValue=filterInput.value.toUpperCase()
    let item =grid.querySelectorAll('.item')
    console.log(filterValue);
    for(let i=0; i<item.length; i++){
        let span=item[i].querySelector('.title')
    if(span.innerHTML.toUpperCase().indexOf(filterValue)>-1){
        item[i].style.display="initial"
    }else{
        item[i].style.display="none"
    }
    }
}


function addElement(appendin, value){
    let div=document.createElement('div')
    div.classList="item justify-self-center";

    let{image, title, cotegory, price}=value;
    div.innerHTML=`
    <img src="${image}" class="bg-cover img" alt="img1">
    <div class="text-center py-3 font-poppins">
        <h1 class="text-lg title">${title}</h1>
        <a href="#" class="block"><span class="text-sm text-red-400">${cotegory}</span></a>
        <span class="block py-3">$<span class="text-md">${price}</span></span>
        <button class="border-2 px-8 py-1 bg-yellow-400 border rounded-md">Buy Now</button>
    </div>
    `
appendin.appendChild(div);
}            