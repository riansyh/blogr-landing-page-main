const showMenu = (name) => {
  const nama = document.getElementById(`m${name}`);
  const arrow = document.getElementById(`ar-${name}`);

  if (nama.classList.contains("hide")) {
    fadeIn(nama);
    arrow.classList.add("rotate");
    nama.classList.remove("hide");
  } else {
    fadeOut(nama);
    setTimeout(function () {
      nama.classList.add("hide");
    }, 200);
    arrow.classList.remove("rotate");
  }
};

const showNavbar = () => {
  const burger = document.getElementById("burger");
  const menu = document.getElementById("menus");
  if (menu.classList.contains("hide")) {
    fadeIn(menu);
    menu.classList.remove("hide");
    burger.style.backgroundImage = "url(images/icon-close.svg)";
  } else {
    fadeOut(menu);
    setTimeout(function () {
      menu.classList.add("hide");
    }, 500);
    burger.style.backgroundImage = "url(images/icon-hamburger.svg)";
  }
};

(function () {
  window.onresize = displayWindowSize;
  window.onload = displayWindowSize;

  function displayWindowSize() {
    let myWidth = window.innerWidth;
    if (myWidth > 400) {
      document.getElementById("navbar").innerHTML = navbarNormal;
    } else {
      document.getElementById("navbar").innerHTML = navbarMini;
    }
  }
})();

const fadeIn = (name) => {
  name.classList.remove("animate__fadeOut");
  name.classList.add("animate__animated");
  name.classList.add("animate__fadeIn");
  name.classList.add("animate__faster");
};

const fadeOut = (name) => {
  name.classList.remove("animate__fadeIn");
  name.classList.add("animate__fadeOut");
  name.classList.add("animate__faster");
};

const navbarNormal = `
          <div class="left">
            <div class="logo"></div>
            <div class="navigation" id="navigation">
              <div class="profile-box">
                <li><a href="#" onclick="showMenu('1')">Product</a></li>
                <div class="arrow" id="ar-1"></div>
              </div>
              <div class="company-box">
                <li><a href="#" onclick="showMenu('2')">Company</a></li>
                <div class="arrow" id="ar-2"></div>
              </div>
              <div class="connect-box">
                <li><a href="#" onclick="showMenu('3')">Connect</a></li>
                <div class="arrow" id="ar-3"></div>
              </div>
            </div>
          </div>
          <div class="right">
            <div class="button login">Login</div>
            <div class="button signup">Sign Up</div>
          </div>

          <div class="extend">
            <div class="menu-nav m1 hide" id="m1">
              <li>Overview</li>
              <li>Pricing</li>
              <li>Marketplace</li>
              <li>Features</li>
              <li>Integrations</li>
            </div>
            <div class="menu-nav m2 hide" id="m2">
              <li>About</li>
              <li>Team</li>
              <li>Blog</li>
              <li>Careers</li>
            </div>
            <div class="menu-nav m3 hide" id="m3">
              <li>Contact</li>
              <li>Newsletter</li>
              <li>LinkedIn</li>
            </div>
          </div>
`;

const navbarMini = `
        <div class="left-m">
            <div class="logo-mini"></div>
            <div class="burger" id="burger" onclick="showNavbar()"></div>
          </div>

          <div class="menus hide" id="menus">
            <div class="box-nav" onclick="showMenu('1')">
              <li>Product</li>
              <div class="arrow-black" id="ar-1"></div>
            </div>
            <div class="menu-nav-small m1 hide" id="m1">
              <li>Overview</li>
              <li>Pricing</li>
              <li>Marketplace</li>
              <li>Features</li>
              <li>Integrations</li>
            </div>
            <div class="box-nav" onclick="showMenu('2')">
              <li>Company</li>
              <div class="arrow-black" id="ar-2"></div>
            </div>
            <div class="menu-nav-small m2 hide" id="m2">
              <li>About</li>
              <li>Team</li>
              <li>Blog</li>
              <li>Careers</li>
            </div>
            <div class="box-nav" onclick="showMenu('3')">
              <li>Connect</li>
              <div class="arrow-black" id="ar-3"></div>
            </div>
            <div class="menu-nav-small m3 hide" id="m3">
              <li>Contact</li>
              <li>Newsletter</li>
              <li>LinkedIn</li>
            </div>
            <div class="button-nav">
              <div class="button login">Login</div>
              <div class="button signup">Sign Up</div>
            </div>
          </div>
`;
