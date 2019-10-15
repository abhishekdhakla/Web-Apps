import React from 'react';
import { connect } from 'react-redux';

const SongDetails = ({ selectedSong }) => {
    if(!selectedSong){
        return (
            <div>
                Please select a song!
            </div>
        );
    }
    return (
        <div>
            { selectedSong.title }
        </div>
    );
}

const mapStateToProps = (state) => {
    return { selectedSong: state.selectedSong };
}

export default connect(mapStateToProps)(SongDetails);