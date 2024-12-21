function validateLoginForm() {
    const emailOrPhone = document.getElementById("email_or_phone").value.trim();
    const password = document.getElementById("password").value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    const phoneRegex = /^\d{10}$/; 

    if (!emailRegex.test(emailOrPhone) && !phoneRegex.test(emailOrPhone)) {
        alert("Lütfen geçerli bir e-posta ya da telefon numarası girin.");
        return false;
    }

    if (password.length < 8) {
        alert("Şifreniz en az 8 karakter olmalıdır.");
        return false;
    }

    return true;
}
