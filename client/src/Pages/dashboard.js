import React, { Component } from "react";
import Container from "../components/Container/container"
import API from "../Utils/API";
import Chartdigest from "../components/Chartdigest/Chartdigest";
import OrganicKWdigest from "../components/OrganicKWdigest/OrganicKWdigest"
import Header from "../components/header/header"
import SearchBar from "../components/SearchBar/SearchBar";
import TopStats from "../components/topStats/topStats";
import axios from "axios";
import Chart from 'chart.js';


class SEODashboard extends Component {
    state = {
        search: "",
        result: [],
        semresult: []

    };

    searchURL = (query) => {
        API.getPageSpeed(query)
            .then(res => {
                this.setState({ result: res.data })
            })
            .catch(err => console.log(err));
        //api call for SEMrush    
        API.getSemrush(query)
            .then(res => {
                const data = res.data
                //sorting the response to json
                const arr = data.split(/;|\n/);
                console.log(arr)
                this.setState({ semresult: arr })
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
                        domainRank={(this.state.semresult.length < 1)
                            ? "test"
                            : this.state.semresult[14]
                        }
                        organicTraffic={(this.state.semresult.length < 1)
                            ? "test"
                            : this.state.semresult[21]
                        }
                        totalOrganicKW={(this.state.semresult.length < 1)
                            ? "test"
                            : this.state.semresult[15]
                        }
                    />
                    <OrganicKWdigest 
                    Top3={this.state.semresult[16]}
                    Top10={this.state.semresult[17]}
                    Top20={this.state.semresult[18]}
                    Top30={this.state.semresult[19]}
                    Top40={this.state.semresult[20]}
                    />
                    <Chartdigest 
                     Ortraffic={this.state.semresult[21]}
                     Adtraffic={this.state.semresult[24]}
                     Orkw={this.state.semresult[15]}
                     Adkw={this.state.semresult[23]}
                    />
                </Container>
            </div>
        )
    }
}

export default SEODashboard