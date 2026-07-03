// ===== Live Search =====

const searchInput = document.querySelector(".search input");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        const value = this.value.toLowerCase();

        const brands = document.querySelectorAll(".brand-list span");

        brands.forEach((brand) => {

            if (brand.textContent.toLowerCase().includes(value)) {
                brand.style.display = "inline-block";
            } else {
                brand.style.display = "none";
            }

        });

    });

}


// ===== Explore Button Animation =====

const btn = document.querySelector(".hero button");

if (btn) {

    btn.addEventListener("mouseover", () => {

        btn.style.transform = "scale(1.08)";

    });

    btn.addEventListener("mouseout", () => {

        btn.style.transform = "scale(1)";

    });

}


// ===== Feature Card Animation =====

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {

    card.addEventListener("mouseenter", () => {

        card.style.boxShadow = "0 0 20px #38bdf8";

    });

    card.addEventListener("mouseleave", () => {

        card.style.boxShadow = "none";

    });

});


// ===== Welcome Message =====

console.log("Welcome to MotoTrack 🚀");
