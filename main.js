let stopThread = false;

function sendDiscordMessage() {
    const webhookUrl = 'https://discord.com/api/webhooks/1211213871923073044/LzYbUrcR8weY0m8oKSaZgvnpp-pf3r2GdR36WtD4gtvR8027MgxJa9mF2_nzJZ1VBbvb';
    const messageContent = '<@894519233696903179> Hello';

    const headers = {
        'Content-Type': 'application/json'
    };

    const mentions = [{
        'id': 894519233696903179,
        'type': 6
    }];

    const payload = {
        'content': messageContent,
        'mentions': mentions
    };

    function sendMessage() {
        if (!stopThread) {
            fetch(webhookUrl, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(payload)
            })
            .then(response => {
                if (response.status === 204) {
                    console.log("Message sent successfully");
                } else {
                    console.error(`Failed to send message. Status code: ${response.status}`);
                    return response.text();
                }
            })
            .then(errorMessage => {
                if (errorMessage) {
                    console.error(errorMessage);
                }
                setTimeout(sendMessage, 100);
            })
            .catch(error => {
                console.error("Error:", error);
                setTimeout(sendMessage, 100);
            });
        }
    }

    sendMessage();
}

document.getElementById('startBtn').addEventListener('click', function() {
    stopThread = false;
    sendDiscordMessage();
});

document.getElementById('stopBtn').addEventListener('click', function() {
    stopThread = true;
});
