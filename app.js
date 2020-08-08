let bar = document.querySelector('.bar');
let barmobile = document.querySelector('.bar-mobile');
let val = 0;

// list elements on click
let about, education, projects, contact;

about = document.getElementById('about');
education = document.getElementById('education');
projects = document.getElementById('projects');
contact = document.getElementById('contact');


bar.addEventListener("click", () => {
    if (val === 0) {
        barmobile.style.display = 'block';
        val++;
    } else {
        barmobile.style.display = 'none';
        val = 0;
    }
});

barmobile.addEventListener("click", () => {
    barmobile.style.display = 'none';
    val = 0;
})