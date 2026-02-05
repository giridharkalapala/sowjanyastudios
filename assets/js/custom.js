
const row = document.querySelector(".tp-product-category .row");
const next = document.querySelector(".cat-next");
const prev = document.querySelector(".cat-prev");

const jump = 300;

/* arrows only */
next.addEventListener("click", () => {
  row.scrollBy({ left: jump, behavior: "smooth" });
});

prev.addEventListener("click", () => {
  row.scrollBy({ left: -jump, behavior: "smooth" });
});


// ==================================================================================================================

// =======================================see more====
// # 1 
// function toggleText(el) {
// 	const shortText = el.previousElementSibling.previousElementSibling;
// 	const fullText = el.previousElementSibling;

// 	if (fullText.style.display === "none" || fullText.style.display === "") {
// 		fullText.style.display = "inline";
// 		shortText.style.display = "none";
// 		el.textContent = "See less";
// 	} else {
// 		fullText.style.display = "none";
// 		shortText.style.display = "inline";
// 		el.textContent = "See more";
// 	}
// }

// =======================================see more end===
// =======================================product varaities==
// select and option dropdown=============
// const states = [
// 	"Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
// 	"Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
// 	"Karnataka", "Kerala", "Ladakh", "Madhya Pradesh", "Maharashtra",
// 	"Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha",
// 	"Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana",
// 	"Tripura", "Uttarakhand", "Uttar Pradesh", "West Bengal",
// 	"Delhi", "Chandigarh", "Lakshadweep", "Puducherry"
// ];

// const select = document.getElementById("stateSelect");
// const optionsBox = document.getElementById("optionsBox");
// const btn = document.getElementById("btn");
// const text = document.getElementById("selectedText");


// states.sort().forEach(state => {
// 	const opt = new Option(state, state);
// 	select.add(opt);

// 	const div = document.createElement("div");
// 	div.className = "option";
// 	div.textContent = state;

// 	div.onclick = () => {
// 		text.textContent = state;
// 		select.value = state;
// 		optionsBox.style.display = "none";
// 		btn.classList.remove("active");
// 	};

// 	optionsBox.appendChild(div);
// });


// btn.onclick = () => {
// 	optionsBox.style.display =
// 		optionsBox.style.display === "block" ? "none" : "block";
// 	btn.classList.toggle("active");
// };


// document.addEventListener("click", e => {
// 	if (!e.target.closest(".tp-checkout-input")) {
// 		optionsBox.style.display = "none";
// 		btn.classList.remove("active");
// 	}
// });
// ====================================================================
// ====================================================================
// const price = 399;
// let qty = 1;

// function update() {
// 	const total = qty * price;
// 	document.getElementById("qty").textContent = qty;
// 	document.getElementById("itemTotal").textContent = total.toFixed(2);
// 	document.getElementById("subtotal").textContent = total.toFixed(2);
// 	document.getElementById("total").textContent = total.toFixed(2);
// }

// function changeQty(v) {
// 	qty = Math.max(1, qty + v);
// 	update();
// }

// function removeItem() {
// 	document.getElementById("productRow").style.display = "none";
// 	document.getElementById("subtotal").textContent = "0.00";
// 	document.getElementById("total").textContent = "0.00";
// }
// ====================================================================

// document.querySelectorAll(".tp-color-variation-btn").forEach(btn => {
// 	btn.addEventListener("click", function () {

// 		// active border
// 		document.querySelectorAll(".tp-color-variation-btn")
// 			.forEach(b => b.classList.remove("active"));
// 		this.classList.add("active");

// 		// switch bootstrap tab
// 		const target = this.getAttribute("data-target");
// 		if (target) {
// 			const tabBtn = document.querySelector(
// 				'[data-bs-target="' + target + '"]'
// 			);
// 			if (tabBtn) {
// 				tabBtn.click();
// 			}
// 		}
// 	});
// });
//===========================================================
