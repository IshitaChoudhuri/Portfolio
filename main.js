var typed = new Typed(".text", {
    strings: ["AI/ML Enthusiast", "Software Developer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

function SendMail() {
    emailjs.init("3cBNIuEwGUfuTb1h1");

    var params = {
        from_name: document.getElementById("fullName").value,
        email_id: document.getElementById("email_id").value,
        message: document.getElementById("message").value,
        subject: document.getElementById("subject").value,
    };
    if (params.from_name === "" || params.email_id === "" || params.message === "") {
        alert("Please fill in all required fields.");
        return false;
    }

    var serviceID = "service_f8qnnmg";
    var templateID = "template_rhyqqra";

    emailjs.send(serviceID, templateID, params)
        .then((res) => {
            alert("Email sent successfully!");
            location.reload();
        })
        .catch((err) => {
            alert("Failed to send email. Please try again.");
            console.error("EmailJS error:", err);
        });

    return false;
}

function refreshPage() {
    location.replace(location.pathname);
}

document.addEventListener('DOMContentLoaded', () => {
    const backToTopButton = document.getElementById('back-to-top');
    const homeSection = document.getElementById('home');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                backToTopButton.classList.remove('visible');
            } else {
                backToTopButton.classList.add('visible');
            }
        });
    }, {
        root: null,
        threshold: 0.1
    });

    observer.observe(homeSection);
});




