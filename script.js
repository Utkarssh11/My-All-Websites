// Adding smooth scroll for internal links (for scrolling within the page)
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Prevent default behavior for internal links
        if (this.hash !== "") {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - 50, // Adjust to account for header space
                behavior: 'smooth'
            });
        }
    });
});
