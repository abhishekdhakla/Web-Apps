import { combineReducers } from 'redux';
//Reducers

const songReducer = () => {
    return [
        { title: "Attention", duration: "3:50" },
        { title: "See you again", duration: "4:05" },
        { title: "I want it that way", duration: "3:25" },
        { title: "Senorita", duration: "3:45" }
    ];
}

const selectSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers({
    songs: songReducer,
    selectedSong: selectSongReducer
});