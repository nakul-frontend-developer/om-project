import React from 'react';
import './ProjectBlogs.scss';
import Project from '../ProjectsBlogs/Projects/Projects';
import { Container, Row, Col } from 'react-bootstrap';


export default class ProjectBlogs extends React.Component {
    render() {
    this.setState = ({
        infoPorject : [
            {
                id: '84bd8',
                title : 'Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC',
                content : '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
                anchor : <a href="#">Know More</a>
            },
            {
                id: '93l93ns',
                title : 'Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC',
                content : '"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.',
                anchor : <a href="#">Know More</a>
            }
        ]
    });
    let projectInfoStore = this.setState.infoPorject.map(getProjectInfo => {
        return (
            <Col sm={6} key={getProjectInfo.id}> 
            <Project   infoPorject={getProjectInfo}/>
            </Col>

        )
    });
    return (
        <React.Fragment>
            <Container>
                <Row>
                    
                    {projectInfoStore}

                </Row>
            </Container>
        </React.Fragment>
    ) 
    }
}
