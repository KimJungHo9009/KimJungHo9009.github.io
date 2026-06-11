document.querySelector(".menu-button")?.addEventListener("click", () => {
  document.querySelector(".topnav")?.classList.toggle("open");
});

document.querySelectorAll(".tab-button").forEach((button) => {
  button.addEventListener("click", () => {
    const group = button.closest(".article-section");
    group.querySelectorAll(".tab-button").forEach((item) => item.classList.remove("active"));
    group.querySelectorAll(".tab-panel").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    group.querySelector(`#${button.dataset.tab}`)?.classList.add("active");
  });
});
