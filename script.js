const nav = document.querySelector('nav');

const section2 = document.querySelector('#section--2');
const coords = section2.getBoundingClientRect();

console.log(coords);

//Sticky Navigation

window.addEventListener('scroll' , () => {
    if(window.scrollY > coords.top){
        nav.classList.add('nav__bar')
    }else{
        nav.classList.remove('nav__bar');
    }
});

// Implementing mouseover and mouseout Events

(function () {
    nav.addEventListener('mouseover' , (e) => {
        if(e.target.classList.contains('nav__item')){
            const link = e.target;
            console.log(link);
            const siblings = document.querySelectorAll('.nav__item');
            console.log(siblings);

          siblings.forEach(element => {
            if(element !== link){
                element.style.opacity = '0.5'
            }
          })
        }
    })
})();

(function () {
    nav.addEventListener('mouseout' , (e) => {
        if(e.target.classList.contains('nav__item')){
            const link = e.target;
            const siblings = document.querySelectorAll('.nav__item');

            siblings.forEach(element => {
                if(element !== link){
                    element.style.opacity = '1';
                }
            })
        }
    })
})();

// implementing smooth scroll

nav.addEventListener('click' , (e) => {
    e.preventDefault();

    if(e.target.classList.contains('nav__item')){
        const id = e.target.getAttribute('href');
        console.log(id);

        document.querySelector(id).scrollIntoView({behavior : 'smooth'});
    }
})

// Implementing Intersection Observer API

const sections = document.querySelectorAll('section');

const revealSections = function (section , observer){
   section.forEach(entry => {
    if(entry.isIntersecting){
        entry.target.classList.remove('section--hidden')
    }else{
        entry.target.classList.add('section--hidden')
    }
   })
};

const sectionObserver = new IntersectionObserver(revealSections , {
    root : null,
    threshold : 0.15
});

sections.forEach((section) => {
    sectionObserver.observe(section);
    section.classList.add('section--hidden');
})

function alertFunction(){
    alert('Are you Sure')
}

var ctx = document.getElementById('languagesChart').getContext('2d');

var data = {
    labels : ['Javascript' , 'HTML' , 'CSS' , 'React'],
    datasets: [{
        data: [25 , 25 , 25 , 25],
        backgroundColor: [
            "red" , "lightblue" , "lightgreen" , "yellow"
        ],
        borderColor: 'black',
        borderWidth: 2,
    }],
}

var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: data,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins : {
        legend: {
            display: true,
            position: 'left',
            labels : {
                color : 'white',
            }
        }
    }
    }
});
