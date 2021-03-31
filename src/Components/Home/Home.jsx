import React from 'react';
import home from './Home.module.css';
import Section from "../Section/Section";
import TitleSection from "../TitleSection/TitleSection";
import ImageLink from "../ImageLink/ImageLink";

const Home = () => {
  return (
    <main className={home.page}>
      <Section>
        <ImageLink/>
      </Section>

      <Section>
        <TitleSection/>
        <ImageLink/>
      </Section>
    </main>
  );
}
export default Home;