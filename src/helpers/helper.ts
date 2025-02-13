export const formatTime = (time: string): string => {
    const [timePart, modifier] = time.split(' ');

    const [hours, minutes, seconds] = timePart.split(':')

    let formattedHours = Number(hours);

    if (seconds.includes('PM') && Number(hours) !== 12) {
        formattedHours += 12;
    }
    if (seconds.includes('AM') && Number(hours) === 12) {
        formattedHours = 0;
    }

    const formattedTime = `${formattedHours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    return formattedTime;
};
