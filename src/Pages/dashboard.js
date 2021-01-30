import React, { Component } from "react";
import Dashboard from "../components/seoDashboard/seoDashboard"
import Wrapper from "../components/wrapper/Wrapper";
import Container from "../components/Container/container"
import SearchBar from "../components/SearchBar/SearchBar";
import API from "../Utils/API";
import Chartdigest from "../components/Chartdigest/Chartdigest";
import OrganicKWdigest from "../components/OrganicKWdigest/OrganicKWdigest"

class SEODashboard extends Component {
    state = {
        search: "",
        PageSpeed: []
    };

    searchURL = (query) => {
        console.log(query)
        API.getPageSpeed(query)
            .then(res => this.setState({ result: res.data }))
            .catch(err => console.log(err));
    };
    //this need to be updated. Calls the API but not needed for this page

    clearSearch = event =>{
    event.preventDefault();
    const clear = this.searchURL(); 
    return clear
    };

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
                <Dashboard />
                <OrganicKWdigest />
                <Chartdigest/>
                </Container>
            </div>
        )
    }
}

export default SEODashboard