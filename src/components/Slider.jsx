import React from 'react'
import styled from "styled-components";
import CardSlider from "./CardSlider";

export default function Slider({ movies }) {
  
  return (
    <Container>
      <CardSlider data={movies.slice(0, 10)} title="Trending Now"/>
      <CardSlider data={movies.slice(10,20)} title="New Releases" />
      <CardSlider data={movies.slice(20,30)} title="Blockbuster Movies" />
      <CardSlider data={movies.slice(30,40)} title="Popular on Netflix" />
      <CardSlider data={movies.slice(40,50)} title="Action Movies" />
      <CardSlider data={movies.slice(50,60)} title="Epics" />
    </Container>
  );
}

const Container = styled.div``;