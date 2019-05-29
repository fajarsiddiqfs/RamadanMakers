import React from 'react'
import { Link, graphql } from 'gatsby'
import { Container, Row, Col, Card } from 'react-bootstrap'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

import logo from '../images/Ramadan-Logo-Dark.jpg'
import telegramImage from '../images/RMtelegram.png'
import '../components/index.css'

function IndexPage({ data }) {
    const list = data.allGoogleSheetSheet1.edges

    return (
        <Layout>
            <SEO title="Home" />
            <Container>
                <Row className="app-list">
                    {list.map((item, index) => (
                        <Col md={4} key={index} className="app-card">
                            <Card>
                                <Card.Body>
                                    <div className="card-head">
                                        <img
                                            src={`//logo.clearbit.com/${item.node.website}`}
                                            alt={item.node.appname}
                                            onError={e => {
                                                e.target.onerror = null
                                                e.target.src = logo
                                            }}
                                        />
                                        <div className="card-info">
                                            <h4>
                                                <a href={item.node.website} target="_blank" rel="noopener noreferrer">
                                                    {item.node.appname}
                                                </a>
                                            </h4>
                                            <div className="subtitle">{item.node.maker}</div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
                <div className="indie-comunity">
                    <img src={telegramImage} alt="RM telegram" />
                    <h1>We are an Indie-Maker Community.</h1>
                    <p>
                        Month of Ramadan have inspired us in many ways. We come in peace, welcome diversity & also to
                        non-muslim. Our goal is to be more productive and add as much value together in indie-making
                        culture like building useful apps, websites and profitable business. We keep it simple, open,
                        fun, more human, share learning experiences and create positive vibes. Use Hashtag
                        #ramadanmakers when logging your task on makerlog and pair your makerlog account to telegram
                        with @makerlogbot
                    </p>
                    <div className="section-cta">
                        <a className="button button-primary button-shadow" href="https://t.me/openstudio">
                            Join Now
                        </a>
                    </div>
                </div>
            </Container>
        </Layout>
    )
}

export default IndexPage

export const pageQuery = graphql`
    query {
        allGoogleSheetSheet1 {
            edges {
                node {
                    maker
                    appname
                    submittedby
                    website
                }
            }
        }
    }
`
