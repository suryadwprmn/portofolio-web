//DOM Selection
const footer = document.getElementById('footer');
footer.style.backgroundColor = '#2C041C';

let navLinks = document.querySelectorAll('.navbar-nav a');

navLinks.forEach(function (link) {
    link.addEventListener('mouseenter', function () {
        this.style.color = 'red';
    });

    link.addEventListener('mouseleave', function () {
        this.style.color = 'white';
    });
});


//TagName
// TagName mengembalikan array 
//Untuk memanipulasinya kita harus pakai []

// const h1 = document.getElementsByTagName('h1');
// for (let i = 0; i < h1.length; i++) {
//     h1[i].style.color = 'lightblue';
// }

//ClassName
//ClassName mengemballikan array
//Untuk memanipulasinya kita harus pakai []
const p = document.getElementsByClassName('experience-content');
p[0].style.color = 'lightblue';