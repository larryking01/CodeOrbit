import { parseISO, formatDistanceToNow } from 'date-fns'






export const TimeAgo = (timestamp) => {
    let timeAgo = 'Not available'

    if( timestamp ) {
        let date = parseISO( timestamp )
        let timePeriod = formatDistanceToNow( date )
        timeAgo = `${ timePeriod } ago`
    }

    return timeAgo

}
