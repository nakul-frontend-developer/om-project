import React, {Component} from 'react';
import axios from 'axios';

class FullPost extends Component {
    state = {
        // initialize loadedpost 
        loadedPost : null
    }

    // Get data by ID and set another div 
    componentDidUpdate () {
        // check id
        if(this.props.id) { 
            // check if we don't have this.state.loadedPost or if we do have it but if it then also
            if(!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)) {
                // remove hard code ID and add props.id
                axios.get('/posts/' + this.props.id) 
                .then(response => {
                    this.setState({
                        loadedPost : response.data
                    })
                })
            }
        } 
    }

    // Delete Specific Post 
    deletePostHandler = () => {
        axios.delete('/posts/' + this.props.id)
            .then(response => {
                console.log(response)
            })
    }

    render () {
        let post = <p>Please select a Post!</p>;
        if(this.props.id) {
            // show msg when ajax load
            post = <p>Loading...!!!</p>
        }
        if(this.state.loadedPost) { // When loadedPost is true
            post = (
                <div className="FullPost border my-3 p-3">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button onClick={this.deletePostHandler} className="delete">Delete</button>
                    </div>
                </div>
            )
        }
        return post;
    }
}

export default FullPost;