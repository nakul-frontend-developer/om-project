import React, {Component} from 'react';
import { Col} from 'react-bootstrap';

class Post extends Component {
    render () {
        return (
            <Col sm={4} className="mb-4" onClick={this.props.clicked}>
                <div className="border p-3 mt-4 my-3 h-100">
                <h5>{this.props.title}</h5>
                <p>{this.props.content}</p>
                <div className="info">
                    <div className="author">{this.props.author}</div>
                </div>
                </div>
            </Col>         
        )
    }
}

export default Post;