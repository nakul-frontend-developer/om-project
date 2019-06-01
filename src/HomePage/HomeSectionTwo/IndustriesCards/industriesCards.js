import React from 'react';
import { Card , Col} from 'react-bootstrap';


export default class IndustriesCards extends React.Component {
    render () {
        let style = {
            boxShadow: '0 3px 0 #000',
            backgroundColor: '#eee',
        }
        return (
            <Col sm={4}>
               <Card style={style}>
                 <Card.Img variant="top" src={this.props.industriesCardsList.img}/>
                 <Card.Body>
                    <Card.Title>{this.props.industriesCardsList.name}</Card.Title>
                    <Card.Text>{this.props.industriesCardsList.text}</Card.Text>
                 </Card.Body>
                </Card> 
            </Col>
        )
        
    }
}
