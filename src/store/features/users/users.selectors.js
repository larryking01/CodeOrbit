export const selectPostAuthor = (state, userId) => {
    let foundAuthor = state.users.users.find( user => user.id == userId )
    return foundAuthor
}