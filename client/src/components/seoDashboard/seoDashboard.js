import React from "react";
import Container from "../Container/container"
import Header from "../header/header"
import SearchBar from "../SearchBar/Searchbar";
import TopStats from "../Topstats/TopStats";

function seoDashboard() {
    return (
        <Container>
            <Header />
            <SearchBar />
            <TopStats />
        </Container>
    )
}

export default seoDashboard;