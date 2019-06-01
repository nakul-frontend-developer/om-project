import React from 'react';
import './Footer.scss';
import {  Link } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';

export default class Footer extends React.Component {
    render () {
        return (
            <div className="footer border-top">
            <Container>
                <Row>
                    <Col sm="4"><h2>LOGO</h2></Col>
                    <Col sm="8">
                    <Link  to="/about" >About</Link>
                    <Link  to="/blogs" > Blogs</Link>
                    </Col>
                </Row>
            </Container>
            </div>
        )
    }
}