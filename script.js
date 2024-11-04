const filterb = document.querySelectorAll(".filter button");
const filterbody = document.querySelectorAll(".filter_body .card");
const filtercards = e =>{
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");

    filterbody.forEach(card => {
        card.classList.add("hide");
        if (card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all" ) {
            card.classList.remove("hide");
        }
    })
}
filterb.forEach(button => button.addEventListener("click" , filtercards));
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("enlargedImg");
    const closeBtn = document.querySelector(".close");

    document.querySelectorAll(".card img").forEach(img => {
        img.addEventListener("click", () => {
            modal.style.display = "block";
            modalImg.src = img.src;
        });
    });

    closeBtn.onclick = () => {
        modal.style.display = "none";
    };

    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
});

