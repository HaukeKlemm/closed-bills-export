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

    const response = await fetch("https://api.github.com/repos/HaukeKlemm/closed-bills-export/dispatches", {
        method: "POST",
        headers: {
            "Accept": "application/vnd.github+json",
            "Authorization": "Bearer ${GITHUB_TOKEN}"
        },
        body: JSON.stringify({
            event_type: "support_request",
            client_payload: data
        })
    });

    if (response.ok) {
        status.innerText = "Anfrage erfolgreich gesendet.";
    } else {
        status.innerText = "Fehler beim Senden: " + response.status + " " + response.statusText;
    }
});
