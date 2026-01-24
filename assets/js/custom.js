const row = document.querySelector(".tp-product-category .row");

let speed = 0.5; // scroll speed (smaller = slower)
let scrollPos = 0;

/* Duplicate content for infinite loop */
row.innerHTML += row.innerHTML;

/* Set row width automatically */
const items = row.children;
let totalWidth = 0;

Array.from(items).forEach(item => {
  totalWidth += item.offsetWidth;
});

function autoScroll() {
  scrollPos += speed;

  if (scrollPos >= totalWidth / 2) {
    scrollPos = 0;
  }

  row.scrollLeft = scrollPos;
  requestAnimationFrame(autoScroll);
}

/* Pause on hover */
row.addEventListener("mouseenter", () => speed = 0);
row.addEventListener("mouseleave", () => speed = 0.5);

/* Start */
autoScroll();