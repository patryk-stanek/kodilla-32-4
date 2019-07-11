const formatDate = (timeInSeconds) => {
    let time = timeInSeconds;

    if (time === undefined) {
        return '0s';
    }

    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    let uptime = '';

    switch (true) {
        case (hours >= 1):
            if (hours > 0) {
                uptime = `${hours}h`
            };
        case (minutes >= 1):
            if (minutes > 0 && hours == 0) {
                uptime = `${minutes}m`;
            } else if (minutes > 0) {
                uptime = uptime + ` ${minutes}m`
            };
        default:
            if (time < 60 && seconds > 0) {
                uptime = `${seconds}s`;
            } else if (seconds > 0) {
                uptime = uptime + ` ${seconds}s`;
            };
    };

    return `${uptime}`;
}

module.exports = formatDate;