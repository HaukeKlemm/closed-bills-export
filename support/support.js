document.getElementById("supportForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const hotelId = document.getElementById("hotelId").value;
    const email = document.getElementById("email").value;
    const installationId = document.getElementById("installationId").value;
    const message = document.getElementById("message").value;

    const status = document.getElementById("status");
    status.innerText = "Wird gesendet...";

    const issueBody =
        `Hotel-ID: ${hotelId}\n` +
        `E-Mail: ${email}\n` +
        `Installation-ID: ${installationId}\n` +
        `Nachricht: ${message}`;

    const response = await fetch("https://api.github.com/repos/HaukeKlemm/closed-bills-export/issues", {
        method: "POST",
        headers: {
            "Accept": "application/vnd.github+json"
        },
        body: JSON.stringify({
            title: `Support-Anfrage von ${hotelId}`,
            body: issueBody
        })
    });

    if (response.ok) {
        status.innerText = "Anfrage erfolgreich gesendet.";
    } else {
        status.innerText = "Fehler beim Senden: " + response.status + " " + response.statusText;
    }
});
