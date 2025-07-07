// Disabling  specific keyboard shortcuts
document.addEventListener("keydown", (event) => {
  if (
    // Check for F12 (common shortcut to open developer tools)
    event.key === "F12" ||
    // Check for Ctrl + Shift + C ( for Windows/Linux)
    (event.ctrlKey &&
      event.shiftKey &&
      (event.key === "C" || event.key === "c")) ||
    // Check for Option + Command + C (For mac)
    (event.metaKey &&
      event.altKey &&
      (event.key === "C" || event.key === "c")) ||
    // Check for Ctrl + Shift + J ( for Windows/Linux)
    (event.ctrlKey &&
      event.shiftKey &&
      (event.key === "J" || event.key === "j")) ||
    // Check for Option + Command + J (For mac)
    (event.metaKey &&
      event.altKey &&
      (event.key === "J" || event.key === "j")) ||
    // Check for Option + Command + I (For mac)
    (event.metaKey &&
      event.altKey &&
      (event.key === "I" || event.key === "i")) ||
    // Check for Ctrl + Shift + I ( for Windows/Linux)
    (event.ctrlKey &&
      event.shiftKey &&
      (event.key === "I" || event.key === "i")) ||
    // Check for Ctrl + Shift + K ( for Windows/Linux)
    (event.ctrlKey &&
      event.shiftKey &&
      (event.key === "K" || event.key === "k")) ||
    // Check for Option + Command + K (For mac)
    (event.metaKey && event.altKey && (event.key === "K" || event.key === "k"))
  ) {
    event.preventDefault();
  }
});

// ********************************** active  link part start*************************************

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

//**************************************** active link  part end ***************************************

// menu button start *************************************
let headerEle = document.querySelector(".head");
let menu = document.getElementById("menu-btn");
let cross = document.getElementById("cross-btn");
let linkBtn = document.getElementById("nav-lists");

linkBtn.addEventListener("click", () => {
  headerEle.classList.remove("activeHead");
  document.body.style.overflowY = "hidden";
});

menu.addEventListener("click", () => {
  headerEle.classList.add("activeHead");
});

cross.addEventListener("click", () => {
  headerEle.classList.remove("activeHead");
});

// ======================================Another way ============================================
// let tbutton=document.querySelector('.menu-bar-btn');
// let navA=document.getElementById("linkss");

// tbutton.addEventListener('click',()=>{
//   headerEle.classList.toggle('activeHead');
// })

// ======================================== ============================================

// menu button end *************************************

// ******************CV***************************
let cv = document.getElementById("dCV");
cv.addEventListener("click", () => {
  alert("Sorry CV not available");
});

// ================================= For projects===========================================

let projects = [];

fetch("/assets/JSON/project.json")
  .then((res) => {
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    return res.json();
  })
  .then((data) => {
    projects = data;
    DisplayProjects(projects);
    ScrollReveal().reveal(".projectImages .box", {
      origin: "bottom",
      interval: 100,
      delay: 100,
    });
  })
  .catch((error) => {
    console.error("Error fetching JSON:", error);
  });

function DisplayProjects(projects) {
  const projectContainer = document.querySelector(".projectImages");

  projects.forEach((project) => {
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("box");

    // Populate the inner content of the div
    projectDiv.innerHTML = `
            <div class="imgdiv">
              <img
                src="${project.imgSrc}"
                alt="${project.altText}"
              />
            </div>
            <div class="data">
              <h2>${project.title}</h2>
              <p>${project.info}</p>
            </div>
            <div class="proj_skill">
            </div>
            <div class="visit">
              <a href="${project.demoLink}" target='_blank'>
                <i class="fa-solid fa-link"></i>&nbsp;Visit
              </a>
            </div>
      `;

    // Add skills dynamically
    const projSkillContainer = projectDiv.querySelector(".proj_skill");
    if (project.skills && project.skills.length > 0) {
      project.skills.forEach((skill) => {
        const skillImg = document.createElement("img");
        skillImg.src = skill.iconSrc;
        skillImg.alt = skill.name;
        projSkillContainer.appendChild(skillImg);
      });
    }else{
      projSkillContainer.innerHTML="---"
    }

    // Append the projectDiv to the container
    projectContainer.append(projectDiv);
  });
}

// ================================= For Services=================================================

// const service = [
//   {
//     iconClass: "fa-solid fa-desktop",
//     serviceName: "Service",
//     serviceInfo:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, tempora ducimus iste cum dolore eius.",
//   },
//   {
//     iconClass: "fa-solid fa-chart-line",
//     serviceName: "Service",
//     serviceInfo:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, tempora ducimus iste cum dolore eius.",
//   },
//   {
//     iconClass: "fa-brands fa-react",
//     serviceName: "Service",
//     serviceInfo:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, tempora ducimus iste cum dolore eius.",
//   },
//   {
//     iconClass: "fa-solid fa-earth-americas",
//     serviceName: "Service",
//     serviceInfo:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, tempora ducimus iste cum dolore eius.",
//   },
//   {
//     iconClass: "fa-brands fa-webflow",
//     serviceName: "Service",
//     serviceInfo:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, tempora ducimus iste cum dolore eius.",
//   },
//   {
//     iconClass: "fa-solid fa-notes-medical",
//     serviceName: "Service",
//     serviceInfo:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, tempora ducimus iste cum dolore eius.",
//   },
// ];

// const serviceContainer = document.getElementById("Services");

// service.forEach((serve) => {
//   const serviceDiv = document.createElement("div");

//   serviceDiv.className = "sevBOX";
//   serviceDiv.innerHTML = `
//  <div class="service-card">
//     <i class="${serve.iconClass}" id="service-Box"></i>
//     <h3 class="service-Name">${serve.serviceName}</h3>
//     <p class="service-Info">${serve.serviceInfo} </p>
//     </div>`;
//   serviceContainer.append(serviceDiv);
// });

// ************************************For animations sections*******************************************

ScrollReveal({
  distance: "160px",
  duration: 2000,
});

ScrollReveal().reveal(".firstColumn", {
  origin: "left",
  delay: 200,
  interval: 200,
});
ScrollReveal().reveal(".social-list li", {
  origin: "bottom",
  interval: 100,
  delay: 300,
});
ScrollReveal().reveal(".main-img", { origin: "right" });
ScrollReveal().reveal(".topic", { origin: "right" });
ScrollReveal().reveal(".ab1", { origin: "right" });
ScrollReveal().reveal(".About-text", { origin: "left" });
ScrollReveal().reveal(".sk_box", { origin: "left" });
ScrollReveal().reveal(".skills-grid .skill ", {
  origin: "left",
  interval: 100,
});
ScrollReveal().reveal(".commonP", { origin: "left" });
// ScrollReveal().reveal(".projectImages .imgOverlay", {
//   origin: "bottom",
//   interval: 100,
//   delay: 100,
// });
// ScrollReveal().reveal(".secServices .sevBOX", { origin: "top", interval: 100 });
ScrollReveal().reveal(".contact1", { origin: "left", interval: 100 });
ScrollReveal().reveal(".contactMedia li", { origin: "right", interval: 100 });
ScrollReveal().reveal(".ContactF", { origin: "left", interval: 100 });
