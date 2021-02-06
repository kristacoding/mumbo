import React, { Component } from "react";
import Container from "../components/Container/container"
import API from "../Utils/API";
import Chartdigest from "../components/Chartdigest/Chartdigest";
import OrganicKWdigest from "../components/OrganicKWdigest/OrganicKWdigest"
import Header from "../components/header/header"
import SearchBar from "../components/SearchBar/SearchBar";
import TopStats from "../components/topStats/topStats";
import axios from "axios";



class SEODashboard extends Component {
    state = {
        search: "",
        result: []
    };

    searchURL = (query) => {
        console.log(query)
        API.getPageSpeed(query)
            .then(res => {
                console.log(res)
                this.setState({ result: res.data })
                console.log(this.state.result);
            })
            .catch(err => console.log(err));
    };



    clearSearch = event => {
        event.preventDefault();
        const clear = this.searchURL();
        return clear
    };

    componentDidMount() {
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
        this.searchURL();
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
                    <Header />
                    {localStorage.getItem('jwtToken') &&
                        <button class="btn btn-primary" onClick={this.logout}>Logout</button>
                    }
                    <SearchBar
                        value={this.state.search}
                        handleInputChange={this.handleInputChange}
                        handleFormSubmit={this.handleFormSubmit}
                    />
                    <TopStats
                        pageSpeed={(this.state.result.loadingExperience === undefined)
                            ? "no page speed"
                            : this.state.result.loadingExperience.overall_category
                        }
                    />
                    <OrganicKWdigest />
                    <Chartdigest />
                </Container>
            </div>
        )
    }
}

export default SEODashboard