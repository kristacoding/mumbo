import React, { Component } from "react";
import Container from "../../components/Container/container";
import Profileheader from "../../components/Profileheader/Profileheader";
import { List } from "../../components/List/List";
import { Col, Row, Button } from "react-bootstrap";
import API from "../../Utils/API"
import Profileblock from "../../components/Profileblock/profile"
import Profilechartdigest from "../../components/Profilechartdigest/Profilechartdigest"
import TableUrls from "../../components/Toppages/Toppages";
import axios from "axios";

class Profile extends Component {
    state = {
        urls: []
    };
    componentDidMount() {
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
        console.log("test")
        this.getSavedURLs();
    }
    getSavedURLs = (req, res) => {
        API.getUrls()
            .then(res => {
                this.setState({
                    urls: res.data[0].WebsiteInfo
                }),
                    console.log(res.data[0].WebsiteInfo)
            })
            .catch(err => console.log(err));
    };
    handleURLDelete = id => {
        API.deleteUrl(id).then(res => this.getSavedURLs());
    };
    render() {
        return (
            <Container>
                <Profileheader />
                <Row>
                    <Col>
                        <List title="Saved Website Information">
                            {this.state.urls.length ? (
                                <List>
                                    {this.state.urls.map(url => (
                                        <div>
                                            <Col md={12}>
                                                <Profileblock
                                                    key={url._id}
                                                    URL={url.URL}
                                                    date={url.date}
                                                    pageSpeedScore={url.pageSpeedScore}
                                                    domainRank={url.domainRank}
                                                    organicTraffic={url.organicTraffic}
                                                    totalOrganicKW={url.totalOrganicKW}
                                                    Ortraffic={url.Ortraffic}
                                                    Adtraffic={url.Adtraffic}
                                                    Orkw={url.Orkw}
                                                    Adkw={url.Adkw}
                                                />


                                            </Col>
                                            <Row md={12}>
                                                <Col md={8}>
                                                    <TableUrls
                                                        Topurl1={url.Topurl1}
                                                        Topurl2={url.Topurl2}
                                                        Topurl3={url.Topurl3}
                                                        Topurl4={url.Topurl4}
                                                        Topurl5={url.Topurl5}
                                                        Topurl6={url.Topurl6}
                                                        Topurl7={url.Topurl7}
                                                        Topurl8={url.Topurl8}
                                                        Topurl9={url.Topurl9}
                                                        Topurl10={url.Topurl10}
                                                        Topkw1={url.Topkw1}
                                                        Topkw2={url.Topkw2}
                                                        Topkw3={url.Topkw3}
                                                        Topkw4={url.Topkw4}
                                                        Topkw5={url.Topkw5}
                                                        Topkw6={url.Topkw6}
                                                        Topkw7={url.Topkw7}
                                                        Topkw8={url.Topkw8}
                                                        Topkw9={url.Topkw9}
                                                        Topkw10={url.Topkw10}
                                                        Toptraffic1={url.Toptraffic1}
                                                        Toptraffic2={url.Toptraffic2}
                                                        Toptraffic3={url.Toptraffic3}
                                                        Toptraffic4={url.Toptraffic4}
                                                        Toptraffic5={url.Toptraffic5}
                                                        Toptraffic6={url.Toptraffic6}
                                                        Toptraffic7={url.Toptraffic7}
                                                        Toptraffic8={url.Toptraffic8}
                                                        Toptraffic9={url.Toptraffic9}
                                                        Toptraffic10={url.Toptraffic10}
                                                    />
                                                </Col>
                                                <Col md={4}>
                                                    <Profilechartdigest
                                                        Adtraffic={url.Adtraffic}
                                                        Adkw={url.Adkw}
                                                        Top3={url.Top3}
                                                        Top10={url.Top10}
                                                        Top20={url.Top20}
                                                        Top30={url.Top30}
                                                        Top40={url.Top40}
                                                    />
                                                </Col>
                                            </Row>
                                            <Row className="d-flex justify-content-center" md={12}>
                                                <Button
                                                    onClick={() => this.handleURLDelete(url._id)}
                                                    className="btn btn-danger ml-2"
                                                >
                                                    Delete
                                            </Button>
                                            </Row>
                                            <br />
                                        </div>
                                    ))}
                                </List>
                            ) : (
                                    <h2 className="text-center">No Saved URLs</h2>
                                )}
                        </List>
                    </Col>
                </Row>
            </Container >
        );
    }
}
export default Profile;