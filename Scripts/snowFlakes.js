//snowFlake
function createSnowflake() {
    console.log("Creando nieve...");
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");
    snowflake.style.left = Math.random() * window.innerWidth + "px";
    snowflake.style.animationDuration = Math.random() * 3 + 2 + "s";
    snowflake.style.opacity = Math.random();

    // Agrega los copos de nieve al contenedor de la sección '.bg'
    document.querySelector('.bg').appendChild(snowflake);

    snowflake.addEventListener("animationiteration", () => {
        snowflake.remove();
    });
}

setInterval(createSnowflake, 500);
