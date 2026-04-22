import { dummyUsers } from "../data/dummyData";



// get a random user from the dummy users list so that their userId can be attached to a post payload.
export const getRandomUser = () => {
    let index = Math.floor(Math.random() * 9)
    return dummyUsers[ index ]
}


// retrieve random user from store and set them as the current user for app session.
export const setCurrentUser = (users) => {
    let index = Math.floor(Math.random() * 9)
    return users[index]

}