document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-links");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
  }

  const search = document.getElementById("wordSearch");
  const cards = [...document.querySelectorAll(".word-card")];
  const filters = [...document.querySelectorAll(".filter")];
  const empty = document.getElementById("noWords");
  let active = "all";

  function filterWords() {
    const term = (search?.value || "").trim().toLowerCase();
    let visible = 0;
    cards.forEach(card => {
      const matchCat = active === "all" || card.dataset.cat === active;
      const matchText = !term || card.textContent.toLowerCase().includes(term);
      const show = matchCat && matchText;
      card.style.display = show ? "" : "block";
      if (show) visible++;
    });
    if (empty) empty.hidden = visible !== 0;
  }

  search?.addEventListener("input", filterWords);
  filters.forEach(btn => btn.addEventListener("click", () => {
    filters.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    active = btn.dataset.filter;
    filterWords();
  }));
});
