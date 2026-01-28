document.getElementById("supportForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
        hotelId: document.getElementById("hotelId").value,
        email: document.getElementById("email").value,
        installationId: document.getElementById("installationId").value,
        message: document.getElementById("message").value
    };

    const status = document.getElementById("status");
    status.innerText = "Wird gesendet...";

    const response = await fetch("DEINE_WORKER_URL_HIER", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    if (response.ok) {
        status.innerText = "Anfrage erfolgreich gesendet.";
    } else {
        status.innerText = "Fehler beim Senden: " + response.status;
    }
});
