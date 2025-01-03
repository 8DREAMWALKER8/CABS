document.addEventListener("DOMContentLoaded", function() {
    const faders = document.querySelectorAll('.fade-in-on-scroll');
    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer)=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    faders.forEach(fader=>{
        observer.observe(fader);
    });
});
