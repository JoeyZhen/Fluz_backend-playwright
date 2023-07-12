import axios from "axios";
const crypto = require ('crypto');

export async function getRandomString(){
    return crypto.randomBytes(3).toString('hex')
}

const webhook = 'https://hooks.slack.com/services/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';
export async function run(message: string) {
    const result = await axios.post(webhook, {
        channel: '#automation-test-results',
        text: message
    });
}
