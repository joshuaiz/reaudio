export function slugify(text) {
    /* eslint-disable */
    return text
        .toString()
        .toLowerCase()
        .replace(/\s+/g, '-') // Replace spaces with -
        .replace(/[^\w\-]+/g, '') // Remove all non-word chars
        .replace(/\-\-+/g, '-') // Replace multiple - with single -
        .replace(/^-+/, '') // Trim - from start of text
        .replace(/-+$/, '') // Trim - from end of text
    /* eslint-enable */
}

export function secondsToTime(secs) {
    return Math.floor(secs / 60) + ':' + ('0' + Math.floor(secs % 60)).slice(-2)
}
