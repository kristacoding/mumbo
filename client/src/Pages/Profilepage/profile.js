import React, { Component } from "react";
import Container from "../../components/Container/container"
import Profileheader from "../../components/Profileheader/Profileheader"
import ProfileContainer from "../../components/Profileblock/profile"
import axios from "axios";

class Profile extends Component {
    state = {
        database_results: [],
        

    };

    componentDidMount() {
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    };
    
    logout = () => {
        localStorage.removeItem('jwtToken');
        window.location.reload();
    }

    handleInputChange = event => {
        this.setState({ search: event.target.value })
    };

    handleFormSubmit = event => {
        event.preventDefault()
        this.searchURL(this.state.search);
    };

    render() {
        return (
            <div>
                <Container>
                    <Profileheader />
                   <ProfileContainer />
                </Container>
            </div>
        )
    }
}

export default Profile