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
                {img: 'images/360x150.png', name : 'project test-1', CMS : 'Wordpress', content : '1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'},

                {img: 'images/360x150.png', name : 'project test-2', CMS : 'Zend', content : '2 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'},

                {img: 'images/360x150.png', name : 'project test-3', CMS : 'Magento', content : '3 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'},

                {img: 'images/360x150.png', name : 'project test-4', CMS : 'Drupal', content : '4 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'},

                {img: 'images/360x150.png', name : 'project test-5', CMS : 'CI', content : '5 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'}
            ],
            modalShow: false,
            active : '',    // # Method 1 - If we use -1 so active state remove in all (li) onLoad
            activeItem: '0', // # Method 2 - If we use -1 so active state remove in all (li) onLoad
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
                                <p className="card-text"><strong>{getPortfolio.CMS}</strong></p>
                                <p maxLength = {10}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout... </p>
                                <Button variant="secondary" >Show More</Button>
                            </div>
                        </div>
                </li> 
       
            )
        })
        //console.log(JSON.stringify(this.state.portfolioList[0].name))

        const ModalContent = assignPortfolio
        var activeItem = parseInt(this.state.activeItem)
        //console.log(ModalContent[0]._self.state.portfolioList[0].name)
        //console.log(ModalContent)
        //console.log(activeItem)

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

                        <PortfolioModal 
                            data-id={activeItem}
                            name={ModalContent[activeItem]._self.state.portfolioList[activeItem].name}
                            CMS={ModalContent[activeItem]._self.state.portfolioList[activeItem].CMS}
                            content={ModalContent[activeItem]._self.state.portfolioList[activeItem].content}
                            show={this.state.modalShow} 
                            onHide={modalClose}>
                        </PortfolioModal>
              
                    
                        {/* {this.state.portfolioList.map((storeFolios , index) => (
                            <PortfolioModal id={index}
                            name={storeFolios.name}
                            show={this.state.modalShow} 
                            onHide={modalClose}
                            >
                            </PortfolioModal>
                        ))}  */}

                        
                    </div>
                </Row>
            </Container>
        </React.Fragment>
        )
    }
   
 
}

