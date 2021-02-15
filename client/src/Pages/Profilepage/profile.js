import React, { Component } from "react";
import Container from "../../components/Container/container"
import Profileheader from "../../components/Profileheader/Profileheader"
import Profileblock from "../../components/Profileblock/profile"
import { Card, Col, Row } from "react-bootstrap";
import { List } from "../../components/List";
import API from "../../Utils/API";
import OrganicKWdigest from "../../components/OrganicKWdigest/OrganicKWdigest";
import Chartdigest from "../../components/Chartdigest/Chartdigest";


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
                console.log(res.data)
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
                    <Col size="md-12">
                        <Card title="Saved URLs">
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
                                            <OrganicKWdigest
                                                Top3={url.Top3}
                                                Top10={url.Top10}
                                                Top20={url.Top20}
                                                Top30={url.Top30}
                                                Top40={url.Top40}
                                            />
                                            <button
                                                onClick={() => this.handleURLDelete(url._id)}
                                                className="btn btn-danger ml-2"
                                            >
                                                Delete
                                            </button>
                                        </div>

                                    ))}
                                </List>
                            ) : (
                                    <h2 className="text-center">No Saved URLs</h2>
                                )}
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Profile;

