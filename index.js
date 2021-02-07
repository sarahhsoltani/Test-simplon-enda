
const like = document.getElementsByClassName("fa-heart");
for (let i = 0; i < like.length; i++) {
    like[i].addEventListener('click', function () {
       
       if ( like[i].style.color  =="black")
            this.style.color= "red";
       else 
            this.style.color="black";
    })

}