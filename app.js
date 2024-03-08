let scrollContainer=document.querySelector(".gallery");
let nextBtn=document.querySelector("#nextBtn");
let backBtn=document.querySelector("#backBtn");

scrollContainer.addEventListener("wheel",(evt)=>{
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY += evt.deltaX; 
    scrollContainer.style.scrollBehavior="auto";
});

nextBtn.addEventListener("click",()=>{
    scrollContainer.style.scrollBehavior="smooth";
    scrollContainer.scrollLeft += 500;

});

backBtn.addEventListener("click",()=>{
    scrollContainer.style.scrollBehavior="smooth";

    scrollContainer.scrollLeft -= 500;
});