import React from 'react';
import '../Portfolio/Portfolio.scss';
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
            
            active : '',    // # Method 1 - If we use -1 so active state remove in all (li) onLoad
            activeItem: '', // # Method 2 - If we use -1 so active state remove in all (li) onLoad
        }
        this.activeStateHandler = this.activeStateHandler.bind(this)
    }
    
    // # Method 1 Handler ===================================================
    activeStateHandler(e){
        const clicked = e.currentTarget.dataset.id
        if(this.state.active === clicked) { 
            this.setState({active: ''});
        } else {
            this.setState({active: clicked})
        }
    }

    // # Method 2 Handler ===================================================
    activeListHandler (currentIndex) {
        this.setState({
            activeItem: currentIndex,
        })
    }

    render () {
        const assignPortfolio = this.state.portfolioList.map((getPortfolio , index) => {
            return (
                <li key={index} data-id={index}
                    // # Method 1 ===================================================
                        //onClick={this.activeStateHandler} 
                        //className={this.state.active == index ? 'active' : ''} 

                    // # Method 2 ===================================================
                        onClick={this.activeListHandler.bind(this, index)} 
                        className={this.state.activeItem == index ? 'active col-sm-4 mb-4' : 'col-sm-4 mb-4'}>

                        <div class="card">
                            <img class="card-img-top" src="..." alt="Card image cap"/>
                            <div class="card-body">
                                <h4>{getPortfolio.name}</h4>
                                <p class="card-text">{getPortfolio.CMS}</p>
                            </div>
                        </div>
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
                    <div className="porfolios w-100">
                        <hgroup className="pt-4 pb-2">All Porfolios</hgroup> <hr></hr>
                        <ul className="row p-0 mt-4">{assignPortfolio}</ul>
                    </div>
                </Row>
            </Container>
        </React.Fragment>
        )
    }
   
 
}

