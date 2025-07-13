document.addEventListener("DOMContentLoaded", function () {
    const input = document.querySelector(".username-input");
    const enterBtn = document.getElementById("enter-chat");

    const storedName = localStorage.getItem("username");
    const nameLocked = localStorage.getItem("nameLocked") === "true";

    if (storedName && nameLocked) {
        input.value = storedName;
        lockInput();
    }

    enterBtn.addEventListener("click", () => {
        if (localStorage.getItem("nameLocked")) return;

        const username = input.value.trim();

        if (username.length < 3) {
            flashRed(input);
            return;
        }

        localStorage.setItem("username", username);
        localStorage.setItem("nameLocked", "true");
        lockInput();
    });

    function lockInput() {
        input.setAttribute("readonly", true);
        input.style.cursor = "not-allowed";
        input.title = "Name already set";
    }

    function flashRed(element) {
        element.classList.add("input-error");
        setTimeout(() => {
            element.classList.remove("input-error");
        }, 1000);
    }
});
