import React from 'react';
import './Projects.scss';
import {CardDeck, Card} from 'react-bootstrap';

export default class Project extends React.Component {
    render () {
    return (
        <div>
            <CardDeck>
                <Card className="blogStyle">
                    <Card.Body>
                    <Card.Title>{this.props.infoPorject.title}</Card.Title>
                    <Card.Text>{this.props.infoPorject.content}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">{this.props.infoPorject.anchor}</small>
                    </Card.Footer>
                </Card>
            </CardDeck>
        </div>
    )
}
}
