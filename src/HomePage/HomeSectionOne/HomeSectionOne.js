import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './HomeSectionOne.css'
import DigitalTransformationCards from '../HomeSectionOne/DigitalTransformationCards/DigitalTransformationCards';

export default class SectionOne extends React.Component {
    render () {
        this.state = {
            digitalTransformationCardsList : [
                {
                    ID : '23234',
                    img : '/images/icon-placeholder.png',
                    title : 'Where does it come from?',
                    text : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
                },
                {
                    ID : '23234da',
                    img : '/images/icon-placeholder.png',
                    title : 'Where does it come from?',
                    text : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
                },
                {
                    ID : '2df3234',
                    img : '/images/icon-placeholder.png',
                    title : 'tWhere does it come from?',
                    text : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
                },
                {
                    ID : 'dfa23234',
                    img : '/images/icon-placeholder.png',
                    title : 'Where does it come from?',
                    text : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
                },
                {
                    ID : '23adfd234',
                    img : '/images/icon-placeholder.png',
                    title : 'Where does it come from?',
                    text : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
                },
                {
                    ID : '2323adfds4',
                    img : '/images/icon-placeholder.png',
                    title : 'Where does it come from?',
                    text : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
                }
            ]
        }
        let sectionTitle = 'Offerings that help Businesses to Navigate their Digital Transformation';
        let DigitalTransformationCardsGrid = this.state.digitalTransformationCardsList.map( digitalTransformationColumn => {
            return (
                <DigitalTransformationCards key={digitalTransformationColumn.ID} digitalTransformationCardsList={digitalTransformationColumn}/>
            )
        });
        return (
            <React.Fragment>
                <Container>
                    <Row>
                        <hgroup className="w-100 text-center mb-4"><h2>{sectionTitle}</h2></hgroup>
                    </Row>
                    <Row>
                        {DigitalTransformationCardsGrid}
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}
