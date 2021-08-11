import React, { Component } from 'react';
import {
    Header,
    SideBar,
    Main
} from '../../components';

class Profile extends Component {
    render() {
        return (
            <>
                <Header />
                <Main>
                    <SideBar />
                </Main>
            </>
        );
    }
}

export default Profile;