import React, { Component } from "react";
import Container from "../../components/Container/container";
import Profileheader from "../../components/Profileheader/Profileheader";
import { List } from "../../components/List/List";
import { Card, Col, Row } from "react-bootstrap";
import API from "../../Utils/API"
import Profileblock from "../../components/Profileblock/profile"
import OrganicKWdigest from "../../components/OrganicKWdigest/OrganicKWdigest"
import Chartdigest from "../../components/Chartdigest/Chartdigest";
import TableUrls from "../../components/Toppages/Toppages";

class Profile extends Component {
    state = {
        urls: []
    };
    componentDidMount() {
        console.log("test")
        this.getSavedURLs();
    }
    getSavedURLs = () => {
        API.getUrls()
            .then(res =>
                this.setState({
                    urls: res.data
                }),
            )
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
                    <Col size="md-11">
                        <Card title="Saved Website Information">
                            {this.state.urls.length ? (
                                <List>
                                    {this.state.urls.map(url => (
                                        <div>
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
                                            <Row md={12}>
                                                <Col md={9}>
                                                    <OrganicKWdigest
                                                        Top3={url.Top3}
                                                        Top10={url.Top10}
                                                        Top20={url.Top20}
                                                        Top30={url.Top30}
                                                        Top40={url.Top40}
                                                    />
                                                </Col>
                                                <Col md={3}>
                                                    <Chartdigest
                                                        Orcost={url.Orcost}
                                                        Adtraffic={url.Adtraffic}
                                                        Adwordscost={url.Adwordscost}
                                                        Adkw={url.Adkw}
                                                    />
                                                </Col>
                                            </Row>
                                            <Row md={12}>
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
                                            </Row>
                                            <button
                                                onClick={() => this.handleURLDelete(url._id)}
                                                className="btn btn-danger ml-2"
                                            >
                                                Delete
                                            </button>
                                            <br></br>
                                        </div>
                                    ))}
                                </List>
                            ) : (
                                    <h2 className="text-center">No Saved URLs</h2>
                                )}
                        </Card>
                    </Col>
                </Row>
            </Container >
        );
    }
}
export default Profile;