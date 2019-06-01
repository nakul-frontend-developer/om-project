import React, {Component} from 'react';
import './NewPost.scss';
import axios from 'axios';


export default class NewPost extends Component {
    state = {
        title : '',
        content : '',
        author : 'Nakul'
    }

    postDataHandler = () => {
        const postData = {
            title : this.state.title,
            body : this.state.content,
            author : this.state.author
        }
        axios.post('/posts', postData )
            .then(response => {
                console.log(response);
            });
    }

    render () {
        return (
            <div className="newpostOuter text-center">
                <h3>Add New Post</h3>
                <hr></hr>
                    <label>Title</label>
                    <input type="text" name="title" 
                        value={this.state.title} 
                        onChange={(event) => this.setState({title : event.target.value})}/>

                    <label>Content</label>
                    <textarea rows="5" 
                        value={this.state.content}
                        onChange={(event) => this.setState({content : event.target.value})}/>

                    <label>Author</label>
                    <select value={this.state.author} onChange={(event) => this.setState({author : event.target.value})}>
                        <option value="Max">Max</option>
                        <option value="Nakul">Nakul</option>
                    </select>

                    <button onClick={this.postDataHandler}>ADD POST</button>
            </div>
        )
    }
}