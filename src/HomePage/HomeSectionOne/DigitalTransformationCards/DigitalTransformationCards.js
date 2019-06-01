import React from 'react';
import {  Image, Col } from 'react-bootstrap';

export default class DigitalTransformationCards extends React.Component{
    render(){
        return (
            <Col xs={12} md={6} className="mb-4">
                <Col xs={4} sm={4} className="float-left">
                    <Image src={this.props.digitalTransformationCardsList.img} roundedCircle />
                </Col>
                <Col xs={8} sm={8} className="float-left text-left">
                    <h5>{this.props.digitalTransformationCardsList.title}</h5>
                    <p>{this.props.digitalTransformationCardsList.text}</p>
                </Col>
            </Col>
        )
    }
}
