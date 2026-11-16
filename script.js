function demanderNom() {
    const nom = prompt("Quel est votre prénom ?");
    return nom ? nom.trim() : "";
}

function afficherNom(nom) {
    if (!nom) return;
    document.querySelector("h1").textContent = "Joyeux anniversaire, " + nom + " !";
}

function animer() {
    const elements = document.querySelectorAll(".container h1, .container p");
    elements.forEach((element, i) => {
        element.animate(
            [
                { opacity: 0, transform: "translateY(20px)" },
                { opacity: 1, transform: "translateY(0)" }
            ],
            { duration: 600, delay: i * 400, easing: "ease-out", fill: "backwards" }
        );
    });
}

afficherNom(demanderNom());
animer();
