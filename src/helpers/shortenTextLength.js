export const shortenTextLength = (text) => {
    if( text.length > 100 ) {
        return text.slice(0, 93) + '...'
    }
    else {
        return text
    }
}