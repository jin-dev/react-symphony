
function convertFileSize(bytes: number) : string {
    if (bytes === 0) return '0 B'

    const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
    const num = Math.floor(Math.log(bytes) / Math.log(1024));

    const unitSize = (bytes/ Math.pow(1024, num)).toFixed(2);

    return `${unitSize} ${sizes[num]}`

}

function expirationTime(expires : number) : string {
    const expirationTime = expires * 1000;

    const currTime = Date.now();

    const timeDiff = expirationTime - currTime;

    if (timeDiff <= 0 ) {
        return 'Expired'
    }

    const hours = Math.floor(timeDiff / (1000 * 60 * 60));
    const min = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));

    //check whether it is less than 48hrs
    if (timeDiff < 48 * 60 * 60 * 1000) {
        return `${hours} hours ${min} minutes`;
    }

    //if it is 48 or more,
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    return `${days} days`
}

export{ convertFileSize, expirationTime };