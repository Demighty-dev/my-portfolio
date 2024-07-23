// ===== SERVCIES TOGGLE

const servicesButtons = document.querySelectorAll('.serviceItem');
const serviceDetails = document.querySelector('.servicesRight');

const getService = (category) => {
  const details = servicesData.find(item => item.category === category);
  serviceDetails.innerHTML = `
    <h3>${details.title}</h3>
    ${details.description.map(paragraph => `<p>${paragraph}</p>`).join('')}
  `;
}

const removeActiveClass = () => {
    servicesButtons.forEach(button => {
      button.classList.remove('active');
    })
  }
  
  servicesButtons.forEach(item => {
    item.addEventListener('click', () => {
      removeActiveClass();
      const serviceClass = item.classList[1];
      getService(serviceClass);
      item.classList.add('active');
    })
  })
  
  getService('frontend');


//====================== MIXITUP (project section)======================

document.addEventListener('DOMContentLoaded', function () {
    const containerEl = document.querySelector('.projectsContainer');
    var mixer = mixitup(containerEl, {
        animation: {
            enable: false
        }
    });

    mixer.filter('*');
});


//====================== USING SWIPER JS (testimonial section) ======================

document.addEventListener('DOMContentLoaded', function() {
  const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    breakpoints: {
        600: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
  });
});


//=========== NAV TOGGLE (small screen) ===========
const navMenu = document.querySelector('.navMenu');
const navOpenBtn = document.querySelector('.navToggleOpen');
const navCloseBtn = document.querySelector('.navToggleClose');

const openNavHandler = () => {
  navMenu.style.display = 'flex';
  navOpenBtn.style.display = 'none';
  navCloseBtn.style.display = 'inline-block';
}

const closeNavHandler = () => {
  navMenu.style.display = 'none';
  navOpenBtn.style.display = 'inline-block';
  navCloseBtn.style.display = 'none';
}

navOpenBtn.addEventListener('click', openNavHandler);
navCloseBtn.addEventListener('click', closeNavHandler);