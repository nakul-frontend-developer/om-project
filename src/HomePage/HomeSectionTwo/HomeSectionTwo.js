import React from 'react';
import { Container, Row } from 'react-bootstrap';
import IndustriesCards from '../HomeSectionTwo/IndustriesCards/industriesCards';

export default class SectionTwo extends React.Component {
 
    render () {
        this.setState = {
            industriesCardsList : [
                {
                    ID : '231adf3',
                    img : '/images/card-placeholder.jpg',
                    name : 'nWhere does it come from?',
                    text : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
                },
                {
                    ID : '213214adf',
                    img : '/images/card-placeholder.jpg',
                    name : 'Where does it come from?',
                    text : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
                },
                {
                    ID : 'adf24214324',
                    img : '/images/card-placeholder.jpg',
                    name : 'Where does it come from?',
                    text : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
                }
            ]
        }
        
        let sectionTitle = 'Innovating Industries for Better and Brighter Future';
        let IndustriesCardGrid = this.setState.industriesCardsList.map( industriesGrid  => {
            return (
                    <IndustriesCards key={industriesGrid.ID} industriesCardsList={industriesGrid}/>
            )
        });
        
        return (
            <React.Fragment>
                <Container>
                    <Row>
                        <hgroup className="w-100 text-center mb-4"><h2>{sectionTitle}</h2></hgroup>
                    </Row>
                    <Row>
                       { IndustriesCardGrid }
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}
    