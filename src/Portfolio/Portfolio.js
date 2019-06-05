import React from 'react';
import {Helmet} from 'react-helmet';
import {Container , Row} from 'react-bootstrap';

export default class Portfolio extends React.Component  {
    constructor(props){
        super(props);
        this.state = {
            portfolioList : [
                {name : 'project test-1', CMS : 'Wordpress'},
                {name : 'project test-2', CMS : 'Zend'},
                {name : 'project test-3', CMS : 'Magento'},
                {name : 'project test-4', CMS : 'Drupal'},
                {name : 'project test-5', CMS : 'CI'}
            ],
            active : ''
        }

        this.activeStateHandler = this.activeStateHandler.bind(this)
    }
    

    activeStateHandler(e){
        // # Method 1 ===================================================
        const clicked = e.currentTarget.dataset.id
        if(this.state.active === clicked) { 
            this.setState({active: ''});
        } else {
            this.setState({active: clicked})
        }
        // ==============================================================


    }

    render () {
        const assignPortfolio = this.state.portfolioList.map((getPortfolio , index) => {
            return (
                <li key={index}
                    onClick={this.activeStateHandler}
                    className={this.state.active == index ? 'active' : ''}
                    data-id={index}>{getPortfolio.name} {getPortfolio.CMS}
                </li>
            )
        })
        return(
        <React.Fragment>
            <Helmet>
            <title>Portfolio</title>
            </Helmet>
            <Container>
                <Row>
                    <h5 style={{display:'block', width: '100%'}}><b>Portfolio page content here</b></h5>
                    <ul>{assignPortfolio}</ul>
                </Row>
            </Container>
        </React.Fragment>
        )
    }
   
 
}

