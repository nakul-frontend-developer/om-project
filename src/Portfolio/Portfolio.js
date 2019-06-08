import React from 'react';
import '../Portfolio/Portfolio.scss';
import {Helmet} from 'react-helmet';
import {Container , Row, Button} from 'react-bootstrap';
import PortfolioModal from '../Portfolio/PortfolioModal/PortfolioModal';

export default class Portfolio extends React.Component  {
    constructor(props , ...args){
        super(props , ...args);
        this.state = {
            portfolioList : [
                {img: 'images/360x150.png', name : 'project test-1', CMS : 'Wordpress'},
                {img: 'images/360x150.png', name : 'project test-2', CMS : 'Zend'},
                {img: 'images/360x150.png', name : 'project test-3', CMS : 'Magento'},
                {img: 'images/360x150.png', name : 'project test-4', CMS : 'Drupal'},
                {img: 'images/360x150.png', name : 'project test-5', CMS : 'CI'}
            ],
            modalShow: false,
            modalActive : '',
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
            modalShow: true, 
        })
    }

    



    render () {
        let modalClose = () => this.setState({ modalShow: false });
        var assignPortfolio = this.state.portfolioList.map((getPortfolio , index) => {
            return (
                <li key={index} data-id={index}
                    // # Method 1 ===================================================
                        //onClick={this.activeStateHandler} 
                        //className={this.state.active == index ? 'active' : ''} 

                    // # Method 2 ===================================================
                        onClick={this.activeListHandler.bind(this, index)} 
                        className={this.state.activeItem === index ? 'active col-sm-4 mb-4' : 'col-sm-4 mb-4'}>

                        <div className="card">
                            <img className="card-img-top" src={getPortfolio.img} alt=""/>
                            <div className="card-body">
                                <h4>{getPortfolio.name}</h4>
                                <p className="card-text"><b>{getPortfolio.CMS}</b></p>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout... </p>
                                <Button variant="secondary" >Show More</Button>
                            </div>
                        </div>
                </li>
            )
        })
        //console.log(JSON.stringify(this.state.portfolioList[0].name))

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
                        <div>{this.state.portfolioList.img}</div>
                        
                        {this.state.portfolioList.map((storeFolios , index) => (
                            <PortfolioModal id={index}
                            name={storeFolios.name}
                            show={this.state.modalShow} 
                            onHide={modalClose}
                            >
                            </PortfolioModal>
                        ))} 

                        
                    </div>
                </Row>
            </Container>
        </React.Fragment>
        )
    }
   
 
}

