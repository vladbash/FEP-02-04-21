import React, { Component } from 'react';

class UserList extends Component {
    constructor() {
        super();
        this.state = {
            list: []
        };

        this.props = {
            page: 1
        };
    }

    componentDidMount() {
        console.log('did mount');
        fetch(`https://reqres.in/api/users?page=1`)
            .then(e => e.json())
            .then(e => {
                const { data } = e;
                this.setState({
                    list: data
                });
            });
    }

    componentWillUnmount() {
        console.log('will unmount');
    }

    render() {
        const { list } = this.state;
        const { onUserClick } = this.props;
        return <ul>{
            list.map(e => <li onClick={onUserClick}>{e.email} {e.first_name} {e.last_name}</li>)
        }</ul>;
    }
}

export default UserList;