let stopThread = false;

function sendDiscordMessage() {
    const webhookUrl = 'https://discord.com/api/webhooks/1214134016890904666/shYMMN5qeqTSGT37RewQatTpyFWPtfb2UrWH0Ysj1un8Bh6P03Xrg7hHTp9F-m74zgSQ';
    const messageContent = '<@1112686813878964304> Hello';

    const headers = {
        'Content-Type': 'application/json'
    };

    const mentions = [{
        'id': 1112686813878964304,
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
