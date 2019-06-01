import React from 'react';
import { Container, Row, Carousel,Col } from 'react-bootstrap';
import './ClientCommendation.scss'

export default class ClientCommendation extends React.Component {
    constructor(props, context, itemContent) {
        super(props, context, itemContent);
    
        this.handleSelect = this.handleSelect.bind(this);
    
        this.state = {
          index: 0,
          direction: null,
        };
        

      }
    
      handleSelect(selectedIndex, e) {
        this.setState({
          index: selectedIndex,
          direction: e.direction,
        });
      }

      render() {
        const { index, direction } = this.state;
        let style = {
            backgroundColor: '#eee',
        }
        let sectionTitle = 'Client CommenDations';
        return (
           
          <Container>
          <Row>
              <hgroup className="text-center w-100 mb-4"><h2>{sectionTitle}</h2></hgroup>
          </Row>
          <Row>
          <Carousel className="w-100" activeIndex={index} direction={direction} onSelect={this.handleSelect}>

            <Carousel.Item>
            <Row>
                <Col sm={6} xs={12} className="pr-0">
                <img alt="" src="images/slider-img.jpg"/>
                </Col>
                <Col sm={6} xs={12} style={style}>
                <Carousel.Caption className="text-left px-4">
                <h3>Lorem Ipsum is simply dummy text?</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </Carousel.Caption>
                </Col>
            </Row>
            </Carousel.Item>
            <Carousel.Item>
            <Row>
                <Col sm={6} xs={12} className="pr-0">
                <img alt="" src="images/slider-img.jpg"/>
                </Col>
                <Col sm={6} xs={12} style={style}>
                <Carousel.Caption className="text-left px-4">
                <h3>Lorem Ipsum is simply dummy text?</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </Carousel.Caption>
                </Col>
            </Row>
            </Carousel.Item>
            <Carousel.Item>
            <Row>
                <Col sm={6} xs={12} className="pr-0">
                <img alt="" src="images/slider-img.jpg"/>
                </Col>
                <Col sm={6} xs={12} style={style}>
                <Carousel.Caption className="text-left px-4">
                <h3>Lorem Ipsum is simply dummy text?</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </Carousel.Caption>
                </Col>
            </Row>
            </Carousel.Item>
           
          </Carousel>
          </Row>
          </Container>
        );
      }
}
