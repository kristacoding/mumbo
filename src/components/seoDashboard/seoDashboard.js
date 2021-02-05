import React from "react";
import Container from "../Container/container"
import Header from  "../header/header"
import SearchBar from "../SearchBar/SearchBar";
import TopStats from "../topStats/topStats";

function seoDashboard() {
    return(
        <Container>
        <Header />
        <SearchBar/>
        <TopStats />
        </Container>
    )
}

export default seoDashboard;