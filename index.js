// Existing Code
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont');
const smallMenu = document.querySelector('.header__sm-menu');
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu');
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
);
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link');

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active');
  } else {
    smallMenu.classList.add('header__sm-menu--active');
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none');
    headerHamMenuCloseBtn.classList.add('d-none');
  } else {
    headerHamMenuBtn.classList.add('d-none');
    headerHamMenuCloseBtn.classList.remove('d-none');
  }
});

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active');
    headerHamMenuBtn.classList.remove('d-none');
    headerHamMenuCloseBtn.classList.add('d-none');
  });
}

const headerLogoConatiner = document.querySelector('.header__logo-container');

headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html';
});

// New Code for Experience Section
document.addEventListener("DOMContentLoaded", () => {
  const toggles = document.querySelectorAll(".experience__item-toggle");

  toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const experienceItem = toggle.closest(".experience__item");
      experienceItem.classList.toggle("expanded");
    });
  });

  // Handle project pagination
  const allDots = document.querySelectorAll(".experience__dots");

  allDots.forEach((dotContainer) => {
    const dots = dotContainer.querySelectorAll(".experience__dot");
    const projects = dotContainer.previousElementSibling.querySelectorAll(
      ".experience__project"
    );

    dots.forEach((dot) => {
      dot.addEventListener("click", () => {
        // Get the index of the clicked dot
        const index = parseInt(dot.dataset.index);

        // Update active dot
        dots.forEach((d) => d.classList.remove("active"));
        dot.classList.add("active");

        // Update visible project
        projects.forEach((project, i) => {
          project.classList.toggle("active", i === index);
        });
      });
    });
  });
});
