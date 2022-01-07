const Reducer = (state, action) => {
    switch(action.type){
        case 'DELETE_COIN' :
            return{
                ...state,
                favorites: action.payload
            };
        case 'DELETE_FAVORITE':
            return{
                ...state,
                favorites: action.payload
            };
        case 'ADD_FAVORITE':
            return{
                ...state,
                favorites: action.payload
            };
        case 'ADD_FAVORITE_COIN':
            return{
                ...state,
                favorites: action.payload
            }
        default:
            return{
                ...state
            }
    }
}

export default Reducer