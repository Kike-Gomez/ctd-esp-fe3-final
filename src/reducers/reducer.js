export const reducer = (state, action) => {
    switch (action.type) {
        case 'GET_CHARACTERS':
            return {...state, list: action.payload}
        case 'ADD_FAV':
            return {...state, favs: [...state.favs, action.payload]}
        case 'CHANGE_THEME':
            return {...state, theme: state.theme === 'light' ? 'dark' : 'light'}
        case 'GET_CHARACTER':
            return {...state, character: action.payload, list: [...state.list, action.payload]}
        case 'DELETE_FAV':
            // eslint-disable-next-line no-case-declarations
            const updatedFavs = state.favs.filter((fav) => fav.id !== action.payload.id);
            return { ...state, favs: updatedFavs };
        case 'CONTACT_VISIBILITY':
            return { ...state, showContactHeaders: action.payload };
    }
}