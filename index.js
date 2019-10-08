var slides = document.getElementsByClassName('rhombus');
var slidesBackground = document.getElementById('background')
var sliderInterval = setInterval(nextSlide,2000);

let currentSlide = 0;
function nextSlide() {
    if(slides.length != currentSlide) {
        slides[0+currentSlide].className = 'rhombus showing';
        if(currentSlide != 0) {
            slides[currentSlide-1].className = 'rhombus';
        }
        currentSlide+=1;
    }
    else {
        currentSlide = 0;
        slides[3].className = 'rhombus';
    }
    nextBack();
}

function nextBack (){
        let arr = ['#74bfd6', '#b971b3', '#cfdb63', '#7b3131' ,'#317b6c'];
        document.getElementById('background').style.backgroundColor = ""+arr[currentSlide];
}
