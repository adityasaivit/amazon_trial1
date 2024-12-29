let i=0;
let img=["untitled_-_2023-09-26t192219-sixteen_nine_1.avif","full-shot-students-preparing-exam_23-2149647062.avif","full-shot-girl-learning-math-school_23-2150470852.avif","iphone-16-ultramarine-witb-202409_FMT_WHH.jpeg","smiling-girl-looking-laptop-while-studying-library_1048944-22474512.avif"]

let indicat=document.querySelectorAll(".ind")
console.log(indicat)
function forwordchange()
{
    indicat[i].classList.remove("main");
    i=i+1;
    
    i=i%5;

    indicat[i].classList.add("main");
    document.querySelector(".banner").src=img[i]


}