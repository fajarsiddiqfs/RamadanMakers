import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import LinkCard from '../components/Card';

import telegramImage from '../images/RMtelegram.png';
import '../components/index.css';

import { CardContainer, SectionTitle, PageDescription, SectionImage } from '../styles';

function IndexPage({ data }) {
  const list = data.allGoogleSheetSheet1.edges;

  return (
    <Layout>
      <SEO title="Home" />
      <SectionTitle>Projects by Muslim Makers</SectionTitle>
      <CardContainer>
        {list.map(item => (
          <LinkCard key={item.node.appname} item={item.node} />
        ))}
      </CardContainer>
      <div className="indie-comunity">
        <SectionImage src={telegramImage} alt="RM telegram" />
        <SectionTitle>We are an Indie-Maker Community.</SectionTitle>
        <PageDescription>
          The Month of Ramadan has inspired us in many ways. We come in peace, welcome diversity & also non-muslim. Our
          goal is to be more productive and add as much value together in the indie-making culture. Like building useful
          apps, websites and profitable businesses. We keep it simple, open, fun, human, share learning experiences and
          create positive vibes. Use the Hashtag #ramadanmakers when logging your tasks on makerlog and pair your
          Makerlog account to telegram with @makerlogbot
        </PageDescription>
        <div className="section-cta">
          <a className="button button-primary button-shadow" href="https://t.me/openstudio">
            Join Now
          </a>
        </div>
      </div>
    </Layout>
  );
}

export default IndexPage;

export const pageQuery = graphql`
  query {
    allGoogleSheetSheet1 {
      edges {
        node {
          maker
          appname
          submittedby
          website
          icon
        }
      }
    }
  }
`;
