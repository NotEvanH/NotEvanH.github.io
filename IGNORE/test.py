import requests
import json
import time

def send_discord_message(webhook_url, content, mention_user_id=None):
    headers = {
        'Content-Type': 'application/json'
    }

    mentions = []
    if mention_user_id:
        mentions.append({
            'id': mention_user_id,
            'type': 6
        })

    payload = {
        'content': content,
        'mentions': mentions
    }

    response = requests.post(webhook_url, data=json.dumps(payload), headers=headers)

    if response.status_code == 204:
        print("Message sent successfully")
    else:
        print(f"Failed to send message. Status code: {response.status_code}")
        print(response.text)

webhook_url = 'https://discord.com/api/webhooks/1211213871923073044/LzYbUrcR8weY0m8oKSaZgvnpp-pf3r2GdR36WtD4gtvR8027MgxJa9mF2_nzJZ1VBbvb'
message_content = f'<@{894519233696903179}> Hello'

for i in range(100):
    send_discord_message(webhook_url, message_content, mention_user_id=894519233696903179)
    time.sleep(0.5)