const btn = document.querySelector(".menu-toggle");
const menu = document.querySelector(".Menu-horizontal");
const mobileLogout = document.getElementById("mobile-logout");

// Toggle del menú (móvil)
if (btn && menu) {
  btn.addEventListener("click", () => {
    menu.classList.toggle("active");

    const liMobileLogout = document.querySelector(".mobile-logout");
    if (liMobileLogout) {
      liMobileLogout.style.display = menu.classList.contains("active")
        ? "block"
        : "none";
    }
  });
}

// Cerrar sesión en el menú móvil
if (mobileLogout) {
  mobileLogout.addEventListener("click", (e) => {
    e.preventDefault();
    if (confirm("¿Deseas cerrar sesión?")) {
      window.location.href = "../index.html";
    }
  });
}
