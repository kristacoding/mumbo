import React, { Component } from "react";
import Container from "../../components/Container/container"
import API from "../../Utils/API";
import Chartdigest from "../../components/Chartdigest/Chartdigest";
import OrganicKWdigest from "../../components/OrganicKWdigest/OrganicKWdigest"
import Header from "../../components/header/header"
import SearchBar from "../../components/SearchBar/SearchBar"
import TopStats from "../../components/Topstats/topstats";
import TableUrls from "../../components/Toppages/Toppages";
import Headerbuttonless from "../../components/Headerbuttonless/Headerbuttonless";
import { Col, Row } from "react-bootstrap";


class SEODashboard extends Component {
    state = {
        search: "",
        result: [],
        semresult: [],
        semresulttp: []
    };

    searchURL = (query) => {
        API.getPageSpeed(query)
            .then(res => {
                console.log(res.data)
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
        //api call for SEMrush    
        API.getSemrushtp(query)
            .then(res => {
                const data = res.data
                //sorting the response to json
                const arr2 = data.split(/;|\n/);
                console.log(arr2)
                this.setState({ semresulttp: arr2 })
            })
            .catch(err => console.log(err));
    };

    clearSearch = event => {
        event.preventDefault();
        const clear =  window.location.reload(false);
        return clear
    };

    componentDidMount() {
    };

    handleInputChange = event => {
        this.setState({ search: event.target.value })
    };

    handleFormSubmit = event => {
        event.preventDefault()
        this.searchURL(this.state.search);
    };

    saveSearch = event => {
        event.preventDefault();
        API.saveUrl(
            {
            URL: this.state.search, 
            pageSpeedScore: this.state.result.loadingExperience.overall_category,
            domainRank: this.state.semresult[14],
            organicTraffic: this.state.semresult[21], 
            totalOrganicKW: this.state.semresult[15],
            Top3: this.state.semresult[16],
            Top10: this.state.semresult[17], 
            Top20: this.state.semresult[18],
            Top30: this.state.semresult[19], 
            Top40: this.state.semresult[20], 
            Ortraffic: this.state.semresult[21],
            Adtraffic: this.state.semresult[24],
            Orkw: this.state.semresult[15],
            Adkw: this.state.semresult[23]
        }
        )
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }
    render() {
        let foundResults = (this.state.semresulttp.length > 0);
        return (
            <div>
                <Container>
                    { !foundResults ?
                    <Headerbuttonless />
                    :
                    <Header Sitename={this.state.semresult[13]} 
                    clearSearch={this.clearSearch}
                    saveSearch={this.saveSearch}/>
                    }
                    {!foundResults ?
                        <>
                             <SearchBar
                        value={this.state.search}
                        handleInputChange={this.handleInputChange}
                        handleFormSubmit={this.handleFormSubmit}
                        clearSearch={this.clearSearch}
                        saveSearch={this.saveSearch}
                    />
                            <Row className="text-center">
                                <h5>Search For Site!</h5>
                            </Row>
                     </>
                        :
                        <>
                            <TopStats
                                pageSpeed={(this.state.result.loadingExperience === undefined)
                                    ? "Google is moving slow"
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
                            <Row md={12}>
                                <Col md={9}>
                                    <OrganicKWdigest
                                        Top3={this.state.semresult[16]}
                                        Top10={this.state.semresult[17]}
                                        Top20={this.state.semresult[18]}
                                        Top30={this.state.semresult[19]}
                                        Top40={this.state.semresult[20]}
                                    />
                                </Col>
                                <Col md={3}>
                                    <Chartdigest
                                        Orcost={this.state.semresult[22]}
                                        Adtraffic={this.state.semresult[24]}
                                        Adwordscost={this.state.semresult[25]}
                                        Adkw={this.state.semresult[23]}
                                    />
                                </Col>
                            </Row>
                            <Row md={12}>
                                <TableUrls
                                    Topurl1={this.state.semresulttp[4]}
                                    Topurl2={this.state.semresulttp[8]}
                                    Topurl3={this.state.semresulttp[12]}
                                    Topurl4={this.state.semresulttp[16]}
                                    Topurl5={this.state.semresulttp[20]}
                                    Topurl6={this.state.semresulttp[24]}
                                    Topurl7={this.state.semresulttp[28]}
                                    Topurl8={this.state.semresulttp[32]}
                                    Topurl9={this.state.semresulttp[36]}
                                    Topurl10={this.state.semresulttp[40]}
                                    Topkw1={this.state.semresulttp[5]}
                                    Topkw2={this.state.semresulttp[9]}
                                    Topkw3={this.state.semresulttp[13]}
                                    Topkw4={this.state.semresulttp[17]}
                                    Topkw5={this.state.semresulttp[21]}
                                    Topkw6={this.state.semresulttp[25]}
                                    Topkw7={this.state.semresulttp[29]}
                                    Topkw8={this.state.semresulttp[33]}
                                    Topkw9={this.state.semresulttp[37]}
                                    Topkw10={this.state.semresulttp[41]}
                                    Toptraffic1={this.state.semresulttp[6]}
                                    Toptraffic2={this.state.semresulttp[10]}
                                    Toptraffic3={this.state.semresulttp[14]}
                                    Toptraffic4={this.state.semresulttp[18]}
                                    Toptraffic5={this.state.semresulttp[22]}
                                    Toptraffic6={this.state.semresulttp[26]}
                                    Toptraffic7={this.state.semresulttp[30]}
                                    Toptraffic8={this.state.semresulttp[34]}
                                    Toptraffic9={this.state.semresulttp[38]}
                                    Toptraffic10={this.state.semresulttp[42]}

                                />
                            </Row>
                        </>
                    }
                </Container>
            </div>
        )
    }
}

export default SEODashboard