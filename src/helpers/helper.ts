

export function formatTime(inputString:string) {    const timePattern = /\b([01]?[0-9]|2[0-3]):([0-5]?[0-9])\b/;
    const match = inputString.match(timePattern);

    if (match) {
        return match[0]; // Return the matched time in HH:MM format
    } else {
        return "7:00"; // If no valid time is found
    }
}
