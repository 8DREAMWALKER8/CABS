document.addEventListener("DOMContentLoaded", () => {
    const optionBoxes = document.querySelectorAll(".option-box");
    const calendarSection = document.querySelector(".calendar-section");
    const linkSection = document.querySelector(".link-section");
    const generateLinkBtn = document.getElementById("generateLinkBtn");
    const startDateInput = document.getElementById("startDate");
    const endDateInput = document.getElementById("endDate");
    const generatedLinkP = document.getElementById("generatedLink");
    const copyLinkBtn = document.getElementById("copyLinkBtn");

    let selectedEventName = "";

    optionBoxes.forEach(box => {
        box.addEventListener("click", () => {
            selectedEventName = box.dataset.name;
            calendarSection.classList.remove("hidden");
            linkSection.classList.add("hidden");
            window.scrollTo({ top: calendarSection.offsetTop, behavior: "smooth" });
        });
    });

    generateLinkBtn.addEventListener("click", () => {
        const startDate = startDateInput.value;
        const endDate = endDateInput.value;

        if (!startDate || !endDate) {
            alert("Lütfen hem başlangıç hem bitiş tarihini seçiniz.");
            return;
        }

        const generatedLink = `https://example.com/event?name=${encodeURIComponent(selectedEventName)}&start=${startDate}&end=${endDate}`;
        generatedLinkP.textContent = generatedLink;

        linkSection.classList.remove("hidden");
        window.scrollTo({ top: linkSection.offsetTop, behavior: "smooth" });
    });

    copyLinkBtn.addEventListener("click", () => {
        const text = generatedLinkP.textContent;
        navigator.clipboard.writeText(text).then(() => {
            alert("Link kopyalandı!");
        }).catch(err => {
            console.error("Kopyalama hatası:", err);
        });
    });
});
