function validateForm() {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm_password").value;
    const dob = new Date(document.getElementById("dob").value);
    const today = new Date();
  
    if (password !== confirmPassword) {
      alert("Şifreler eşleşmiyor.");
      return false;
    }
  
    const age = today.getFullYear() - dob.getFullYear();
    const monthDifference = today.getMonth() - dob.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < dob.getDate())) {
      age--;
    }
   
  
    return true;
  }
  