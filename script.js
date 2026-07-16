const searchForm = document.getElementById("searchForm");
const destinationInput = document.getElementById("destination");
const searchMessage = document.getElementById("searchMessage");

const contactForm = document.getElementById("contactForm");
const contactMessage = document.getElementById("contactMessage");

searchForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const destination = destinationInput.value.trim();

    if (destination === "") {
        searchMessage.textContent =
            "Please enter a destination.";

        return;
    }

    searchMessage.textContent =
        `Searching for hotels in ${destination}...`;
});

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    if (name === "") {
        contactMessage.textContent =
            "Please enter your name.";

        return;
    }

    contactMessage.textContent =
        `Thank you, ${name}. Your message was received.`;

    contactForm.reset();
});
