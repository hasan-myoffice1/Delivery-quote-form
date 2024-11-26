document.getElementById("reviewForm").addEventListener("submit", function (e) {
	e.preventDefault();

	const location = document.getElementById("location").value;
	const rating = document.querySelector('input[name="stars"]:checked').value;

	const reviewLinks = {
		SantaAna: "https://g.page/r/CabwW5bIbftJEBM/review",
		Bakersfield: "https://g.page/r/CWChWCUhyHS_EBM/review",
		Torrance: "https://g.page/r/Cd_dXXx8FY-PEBM/review",
		LosAngeles: "https://g.page/r/CePkcCgtKEeEEBM/review",
		SanDiego: "https://g.page/r/Cb7IUVkvF04uEB0/review"
	};

	if (rating >= 4) {
		// Redirect to the selected location's Google review page for 4-5 stars
		window.location.href = reviewLinks[location];
	} else {
		// Redirect to a Thank You page for 1-3 stars
		window.location.href = "/thank-you.html";
	}
});

// -------------------------------------------------------
const allStar = document.querySelectorAll('.rating .bi-star');
const ratingValue  = document.querySelector('.rating input')


allStar.forEach((item, idx)=> {
    item.addEventListener("click" , function () {
        let click = 0;
        ratingValue.value = idx + 1;
        console.log( ratingValue.value );
		document.getElementById('display-star-num').innerHTML = ratingValue.value;
		
        
        allStar.forEach(i => {
            i.classList.replace("bi-star-fill", "bi-star")
            i.classList.remove('active')
        })

        for ( let i = 0; i<allStar.length ; i++ ){
            if (i <= idx) {
                allStar[i].classList.replace('bi-star', 'bi-star-fill')
                allStar[i].classList.add('active')
            }
        }
    })
})