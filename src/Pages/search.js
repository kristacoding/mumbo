import React, { component } from "react";
import Wrapper from "../components/Wrapper/Wrapper";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/footer";
import SearchBar from "../components/SearchBar/SearchBar";
import API1 from "../Utils/API";
import API from "../Utils/API";

class Search extends Component {
    state = {
        search: "",
        PageSpeed: []
    };

    searchURL = (query) => {
        console.log(query)
        API.getPageSpeed(query)
          .then(res => this.setState({ result: res.data.results }))
          .catch(err => console.log(err));
      };

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
          [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        const 
        this.setState({result: filteredResults});
    }; 
}