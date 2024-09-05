const togglePassword = () => {
    const passwordInput = document.getElementById("password");
    const icon = document.querySelector(".btn i");
    
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        icon.classList.replace("bx-hide", "bx-show");
    } else {
        passwordInput.type = "password";
        icon.classList.replace("bx-show", "bx-hide");
    }
};

document.querySelector(".btn").addEventListener("click", (e) => {
    e.preventDefault();
    togglePassword();
});

const setCopyrightYear = () => {
    const currentYear = new Date().getFullYear();
    document.querySelector("footer p").innerHTML = `Copyright &copy; ${currentYear} by Justine Njama Stanslous`;
};

window.onload = setCopyrightYear;
