import React from "react";
import Banner from "./Banner";
import "./HomeScreen.css";
import Nav from "./Nav";
import requests from "./Requests";
import Row from "./Row";

function HomeScreen() {
    return <div className="homeScreen">
        <Nav />

        <Banner />

        <Row
            title="NETFLIX ORIGINALS"
            fetchUrl={requests.fetchNetflixOriginals}
            isLargeRow
        />
        {/* <Row title="Now Playing" fetchUrl={requests.fetchNowPlaying} /> */}
        <Row title="Trending on Netflix" fetchUrl={requests.fetchTrending} />
        <Row title="Top Rated of all Time" fetchUrl={requests.fetchTopRated} />
        <Row title="Popular on Netflix" fetchUrl={requests.fetchPopular} />
        <Row title="Popular TV Shows" fetchUrl={requests.fetchTvPopular} />
        {/* <Row title="Latest" fetchUrl={requests.fetchLatest} />
        <Row title="Upcoming" fetchUrl={requests.fetchUpcoming} /> */}
    </div>;
}

export default HomeScreen;