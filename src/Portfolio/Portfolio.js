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
            activeState : false
        }

        this.activeStateHandler = this.activeStateHandler.bind(this)
    }
    

    activeStateHandler(e){
        this.setState((prevState)=>{
            return {activeState : !prevState.activeState}
        })
        //let getId = e.currentTarget.dataset.id
        //console.log('clicked', getId)
    }

    render () {
        const listActiveClass = (this.state.activeState ? 'active' : '');
        const assignPortfolio = this.state.portfolioList.map((getPortfolio , index) => {
            return (
                <li key={index}
                    onClick={this.activeStateHandler} 
                    className={listActiveClass}
                    // className={index === 0 ? 'active' : ''}
                    data-id={index + 1}>{getPortfolio.name} {getPortfolio.CMS}
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

