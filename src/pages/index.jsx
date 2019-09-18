import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'react-emotion';
import { Flex } from 'grid-emotion';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import GridItem from '../components/GridItem';
import BeTheHero from '../images/be_the_hero.svg';
import DataReport from '../images/data_report.svg';
import MayTheForce from '../images/may_the_force.svg';
import phuketcelebrant from '../images/phuket_celebrant.png';
import uniquephuket from '../images/uniquephuket.jpg';
import weddingflowersphuket from '../images/weddingflowersphuket.jpg';

const Header = styled.header`
  width: 100%;
  height: 900px;
  position: relative;
  padding: 1.75rem;
  @media (max-width: ${props => props.theme.breakpoint.s}) {
    height: 700px;
  }
`;

const Logo = styled.h2`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  text-align: center;
  padding: 0 1.75rem;
  margin-top: 50px;
`;

const Hero = styled(Flex)`
  height: 100%;
  text-align: center;
  h1 {
    letter-spacing: 0.2rem;
    line-height: 4.5rem;
  }
  h3 {
    font-family: ${props => props.theme.fontFamily.body};
    margin-top: 2rem;
    font-size: 1.85rem;
    font-weight: 400;
  }
  @media (max-width: ${props => props.theme.breakpoint.m}) {
    h1 {
      line-height: 3.5rem;
    }
    h3 {
      font-size: 1.5rem;
    }
  }	
  ￼
  Add
  
  @media (max-width: ${props => props.theme.breakpoint.s}) {
    h1 {
      line-height: 2.5rem;
    }
    h3 {
      font-size: 1.3rem;
    }
  }
`;

const Wrapper = styled(Flex)`
  max-width: ${props => props.theme.maxWidth};
`;

const PrimaryBG = styled.section`
  background: ${props => props.theme.colors.primaryLight};
  color: ${props => props.theme.colors.greyMedium};
  h1,
  h2,
  h3,
  h4 {
    color: ${props => props.theme.colors.greyMedium};
  }
`;

const ServiceImage = styled.div`
  flex-basis: calc(99.9% * 4 / 7 - 5rem);
  max-width: calc(99.9% * 4 / 7 - 5rem);
  width: calc(99.9% * 4 / 7 - 5rem);
  text-align: center;
  img {
    width: 90%;
    margin-bottom: 2rem;
  }
  @media (max-width: ${props => props.theme.breakpoint.l}) {
    flex-basis: 100%;
    max-width: 100%;
    width: 100%;
    img {
      width: 50%;
    }
  }
  @media (max-width: ${props => props.theme.breakpoint.s}) {
    img {
      width: 75%;
    }
  }
`;

const ServiceText = styled.div`
  flex-basis: calc(99.9% * 3 / 7 - 5rem);
  max-width: calc(99.9% * 3 / 7 - 5rem);
  width: calc(99.9% * 3 / 7 - 5rem);
  @media (max-width: ${props => props.theme.breakpoint.l}) {
    flex-basis: 100%;
    max-width: 100%;
    width: 100%;
  }
  ol,
  ul {
    list-style: none;
    margin-left: 0;
  }
  li:before {
    content: '－';
    padding-right: 8px;
  }
`;

const Contact = styled(Wrapper)`
  margin: 0 auto;
  h1,
  h2,
  h3 {
    color: ${props => props.theme.colors.text};
  }
  h3 {
    font-family: ${props => props.theme.fontFamily.body};
    margin-top: 1rem;
    font-size: 1.85rem;
    font-weight: 400;
  }
  @media (max-width: ${props => props.theme.breakpoint.m}) {
    font-size: 1.5rem;
  }
`;

const IndexPage = ({
  data: {
    caseStudies: { edges },
  },
}) => (
  <Layout>
    <Header>
      <Logo> <img src={phuketcelebrant} alt="Wedding Celebrant Asia" /><a href="https://weddingcelebrantasia.com"></a></Logo>
      <Hero justifyContent="center" alignItems="center" flexDirection="column">
        <h1> Phuket Wedding Celebrant Asia - Paul</h1>
        <h2> Experienced Wedding Officiant and Master of Ceremonies </h2>
        <h4> As your Wedding Celebrant in Phuket or Asia, I will guide you through the whole process of creating your own personalized Wedding Ceremony</h4>
      </Hero>
    </Header>
    <Wrapper p={4} mb={[4, 4, 7]} mx="auto" justifyContent="space-between" flexWrap="wrap">
      {edges.map(c => (
        <GridItem
          uid={c.node.uid}
          key={c.node.uid}
          image={c.node.data.header_image.localFile.childImageSharp.fluid}
          alt={c.node.data.title.text}
          title={c.node.data.title.text}
          subtitle={c.node.data.subtitle.text}
        />
      ))}
    </Wrapper>
    <PrimaryBG>
      <Wrapper flexDirection="column" p={4} mx="auto">
        <Flex w={1} py={5} justifyContent="space-between" flexWrap="wrap">
          <ServiceImage>
            <img src={BeTheHero} alt="Book a Wedding Celebrant in Thailand" />
          </ServiceImage>
          <ServiceText>
            <h2>How to find and book a Wedding Celebrant in Thailand</h2>
            <p>
            Planning a wedding abroad and also looking for a Wedding Celebrant may seen daunting but in Phuket there a a number of experienced celebrants.
            Your wedding planners should able to recommend a suitable Celebrant for you as the first plan. Of course if you are planning your own wedding, an internet search will give you additional options.
            Established Celebrants will have good Google Reviews and Videos to help you in your decision.
            </p>
            <ul>
              <li><a href="http://bit.ly/2lYIbGk">Celebrant Reviews - Paul Cunliffe</a></li>
              <li><a href="http://www.youtube.com/c/Uniquephuket">Wedding Ceremony Videos - Paul Cunliffe</a></li>
              <li>Wedding Ceremonies - see above some great pictures of my previous weddings</li>
              <li>I am also a Wedding Planner with Unique Phuket Weddings Planners - see more below </li>
            </ul>
          </ServiceText>
        </Flex>
        <Flex w={1} py={5} justifyContent="space-between" flexDirection="row-reverse" flexWrap="wrap">
          <ServiceImage>
            <img src={DataReport} alt="Wedding Ceremony Preparations" />
          </ServiceImage>
          <ServiceText>
            <h2>Wedding Ceremony Preparations? What Next</h2>
            <p>
              So you have made your Celebrant choice. You may have some ideas already on what you would like to say to each other and your personal vows but the celebrant should be able to send you a few examples of different types of Wedding ceremony scripts.
              From here, you can cherry pick and add from these examples – it can short or long – anything is possible as it is your Cremony. 
              Then you all work on this together to a final version for the Wedding Ceremony Script. This normally takes 1-3 iterations before a complete final Ceremony is formed. 
              Finally, on the day the Celebrant role is to ensure that the ceremony runs smoothly and is relaxed, so if you have any special requests just ask.
            </p>
            <ul>
              <li>Christian & Non-Relgious Ceremony Script Examples to help you draft a perosnalized marriage ceremony</li>
              <li>Examples of Wedding Vow Scripts to help you design your own individual Wedding Vows or Committment Ceremony</li>
              <li>With many years of experience, I help co-ordinate and plan your ceremony with you</li>
            </ul>
            <h2>Legal Weddings in Phuket & Thailand</h2>
            <p> The process of marrying legally in Thailand involves a visit to your Embassy in Bankgok at least 10 working days before your Phuket Wedding.
              The Embassy will issue an Affidavit staing that you are free to marry.  Each Embassy have their own country specific regulations and document requirements.
              We always advise you to call them first on these requirements. On reciept of your Affidavit, we take over until you are legally married in Phuket. See more on the Legal Wedding page.
            </p>
            <ul></ul>
          </ServiceText>
        </Flex>
        <Flex w={1} py={5} justifyContent="space-between" flexWrap="wrap">
          <ServiceImage>
            <img src={MayTheForce} alt="Celebrant Booking Enquiry" />
          </ServiceImage>
          <ServiceText>
            <h2>Celebrant Booking Enquiry</h2>
            <p>
              Selecting a Celebrant for your Wedding is an important part of the wedding planning. If you would like me to help please do contact me.
              This website should answer most of your questions but you can contact me anytime by email below
              Or simply by completing my Online Celebrant Enquiry Form here.
              <br />
              <br />
              <div> <img src={phuketcelebrant} alt="Celebrant Online Equiry" /><a href="https://form.jotform.me/92165548871467"><br />
                  Celebrant Booking Inquiry</a>
              </div>
              <br />
              <br />
              <h3>More about Wedding Celebrant Asia</h3>
              <ul>
                <p>Paul is also a Wedding Planner and Partner of the Phuket Wedding Florist (Phuket Flowers by Toom) and you can see more about Paul and his weddings and events in Phuket</p>
                <li><img src={uniquephuket} alt="Unique Phuket Wedding Planners" /><a href="https://uniquephuket.com"><br />
                  Unique Phuket Wedding Planners</a></li>
                <li><img src={weddingflowersphuket} alt="Wedding Flowers Phuket" /><a href="https://weddingflowersphuket.com"><br />
                  Wedding Flowers Phuket</a></li>
              </ul>
              </p>
              

          </ServiceText>
        </Flex>
      </Wrapper>
    </PrimaryBG>
    <Contact px={4} py={6} justifyContent="center" alignItems="center" flexDirection="column">
      <h2>Contact Celebrant Paul</h2>
      <h4>admin@weddingcelebrantasia.com</h4>
      <h4><a href= "https://wa.me/66878957026">Call Wedding Celebrant Paul</a></h4>
    </Contact>
    <Footer />
  </Layout>
);

export default IndexPage;

IndexPage.propTypes = {
  data: PropTypes.shape({
    caseStudies: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }),
  }).isRequired,
};

export const pageQuery = graphql`
  query IndexQuery {
    caseStudies: allPrismicCaseStudy(sort: { fields: [last_publication_date], order: DESC }) {
      edges {
        node {
          uid
          data {
            header_image {
              localFile {
                childImageSharp {
                  fluid(
                    maxWidth: 900
                    maxHeight: 900
                    quality: 90
                    traceSVG: { color: "#021212" }
                    cropFocus: ENTROPY
                  ) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
            }
            title {
              text
            }
            subtitle {
              text
            }
          }
        }
      }
    }
  }
`;
