const hamburer = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");

if (hamburer) {
  hamburer.addEventListener("click", () => {
    navList.classList.toggle("open");
  });
}

var ajax = new XMLHttpRequest();

ajax.addEventListener("load", completeHandler, false);




ajax.open("POST", "https://ad.simaneka.com/api/get");

ajax.setRequestHeader("authorisation", "8kFUxVQMeBClrAQVfQMKjbmuthjVwMNC");




ajax.send(formdata);




function completeHandler(event) {

    var response = JSON.parse(event.target.responseText);




    console.log(response);

    document.querySelector('.advertIMG').src = response.link;

    document.querySelector('.advertIMG').alt = response.alt;

    document.querySelector('.anchorElement').href = response.href;

    document.querySelector('.headerText').innerHTML = response.message;

}
