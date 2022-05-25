let img = document.getElementById("parentImage");
let venobox = document.querySelectorAll(".venobox");

venobox.forEach(el=>{
    console.log(el);
    el.addEventListener("mouseenter",function (e){
        img.src = el.href
        console.log(img.src)
    })
})



