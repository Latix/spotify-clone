export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: "BQAZvYGdrM7oKhMfPBRGatvY76hGuT2BYV3j2bUbodCeBiPKCh_JLuwx-BCSSI4s1SOLXLzLXS7HL3acTS69pb-wfaSqoDUmf9jj24F53Lm6C6rJvtYRCh_UmWdRfsKVCX60mI_9i3M-a6zIqF4lPErTAWKnNgIRLeNIlQ6lfybfaIdHw3vf"
}

const reducer = (state, action) => {
    console.log(action);

    switch(action.type) {
        case 'SET_USER': 
            return {
                ...state, 
                user: action.user
            }
        case 'SET_TOKEN': 
            return {
                ...state, 
                token: action.token
            }
        case 'SET_PLAYLISTS': 
            return {
                ...state, 
                token: action.playlists
            }
        default:
            return state;
    }
}

export default reducer;