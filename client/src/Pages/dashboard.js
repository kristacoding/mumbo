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
            const ctx = document.getElementById('myChart').getContext('2d');
            //chart for organic kw results
            let myChart = new Chart(ctx, {
              type: 'polarArea',
              data: {
                labels: ['Math', 'Writing', 'Critical Reading'],
                datasets: [{
                  label: '',
                  data: [arr[14], arr[15], arr[16]],
                  backgroundColor: [
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                  ],
                  borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                  ],
                  borderWidth: 0
                }]
              },
              options: {
                legend: {
                  display: true
                },
                scales: {
                  yAxes: [{
                    ticks: {
                      callback: function () { return "" },
                      backdropColor: "rgba(0, 0, 0, 0)"
                    }
                  }]
                }
              }
            });
            const ctx2 = document.getElementById('myChart2').getContext('2d');
            //chart for organic kw results
            let myChart2 = new Chart(ctx2, {
              type: 'bar',
              data: {
                labels: ['Math', 'Writing', 'Critical Reading'],
                datasets: [{
                  label: '',
                  data: [arr[14], arr[15], arr[16]],
                  backgroundColor: [
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                  ],
                  borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                  ],
                  borderWidth: 0
                }]
              },
              options: {
                legend: {
                  display: true
                },
                scales: {
                  yAxes: [{
                    ticks: {
                      callback: function () { return "" },
                      backdropColor: "rgba(0, 0, 0, 0)"
                    }
                  }]
                }
              }
            });
            const ctx3 = document.getElementById('myChart3').getContext('2d');
            //chart for organic kw results
            let myChart3 = new Chart(ctx3, {
              type: 'bar',
              data: {
                labels: ['Math', 'Writing', 'Critical Reading'],
                datasets: [{
                  label: '',
                  data: [arr[14], arr[15], arr[16]],
                  backgroundColor: [
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                  ],
                  borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                  ],
                  borderWidth: 0
                }]
              },
              options: {
                legend: {
                  display: true
                },
                scales: {
                  yAxes: [{
                    ticks: {
                      callback: function () { return "" },
                      backdropColor: "rgba(0, 0, 0, 0)"
                    }
                  }]
                }
              }
            });
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
                            : this.state.semresult[12]
                        }
                        organicTraffic={(this.state.semresult.length < 1)
                            ? "test"
                            : this.state.semresult[17]
                        }
                        totalOrganicKW={(this.state.semresult.length < 1)
                            ? "test"
                            : this.state.semresult[13]
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