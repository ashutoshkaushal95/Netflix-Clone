import React from "react";
import Banner from "../Banner";
import "./HomeScreen.css";
import Nav from "../Nav";
import requests from "../Requests";
import Row from "../Row";

function HomeScreen() {
    return <div className="homeScreen">
        <Nav />

        <Banner />

        <Row
            title="NETFLIX ORIGINALS"
            fetchUrl={requests.fetchNetflixOriginals}
            isLargeRow
        />
        <Row title="Trending on Netflix" fetchUrl={requests.fetchTrending} />
        <Row title="Top Rated of all Time" fetchUrl={requests.fetchTopRated} />
        <Row title="Popular on Netflix" fetchUrl={requests.fetchPopular} />
        <Row title="Popular TV Shows" fetchUrl={requests.fetchTvPopular} />
    </div>;
}

export default HomeScreen;