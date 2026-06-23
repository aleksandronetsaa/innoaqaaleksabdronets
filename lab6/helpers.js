export default function checkResponse(response) {
    return response.ok;
}

export function assertEqual(actual, expected, message) {
    if (actual !== expected) {
        throw new Error(`[FAILED] ${message}: ожидалось "${expected}", получили "${actual}"`);
    }
    console.log(`[PASSED] ${message}`);
}