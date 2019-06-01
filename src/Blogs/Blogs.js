import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Post from '../Blogs/Post/Post';
import FullPost from '../FullPost/FullPost';
import NewPost from '../NewPost/NewPost';
// Instance file import form src
import axios from 'axios';

class Blogs extends Component {
    state = {
        posts : [],
        selectedPostId : null,
        error : false
    }

    componentDidMount () {
        axios.get('/posts')
        .then(response => {
            const posts = response.data.slice(0, 3);
            const updatedPosts = posts.map(post => {
                return {
                    ...post,
                    author : "Nakul Kumar"
                }
            })
            this.setState({
                posts : updatedPosts
            })
            //console.log(response)
        })
        .catch(error => {
            this.setState({error : true})
            //console.log(error);
        })
    }


    postSelectedHandler = (id) => {
        this.setState({ selectedPostId : id });
    }

    render () {
        let posts = <p>Something went wrong! </p>
        if(!this.state.error) {
            posts = this.state.posts.map(post => {
                return <Post 
                    key={post.id} 
                    title={post.title} 
                    content={post.body} 
                    author={post.author}
                    clicked={() => this.postSelectedHandler(post.id)}
                    />
            })
        }

        return (
            <Container>
                <Row>
                    {posts}
                </Row>
                <Row>
                    <Col sm={12} className="my-4">
                        <FullPost id={this.state.selectedPostId}/>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} className="my-4">
                        <NewPost/>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Blogs;