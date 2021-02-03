import React, { Component } from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import API from "../Utils/API";
import Container from "../components/Container/container";

class Search extends Component {
    state = {
        search: "",
        PageSpeed: []
    };

    searchURL = (query) => {
        console.log(query)
        API.getPageSpeed(query)
            .then(res => {
                console.log(res.data)
                this.setState({ result: res.data })})
            .catch(err => console.log(err));
        API.getSemrush(query)
            .then(res => {
                console.log(res.data)
                this.setState({ result: res.data })})
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
                    <SearchBar
                        value={this.state.search}
                        handleInputChange={this.handleInputChange}
                        handleFormSubmit={this.handleFormSubmit}
                    />
                </Container>
            </div>
        )
    }
}

export default Search; 