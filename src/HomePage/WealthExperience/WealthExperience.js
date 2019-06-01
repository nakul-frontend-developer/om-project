import React from 'react';
import './WealthExperience.scss';
import Slider from "react-slick";
import {Row,Image,Col} from 'react-bootstrap';


export default class WealthExperience extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            slidesNo : [
                'logoImg.png',
                'logoImg.png',
                'logoImg.png',
                'logoImg.png',
                'logoImg.png',
                'logoImg.png'
            ]
        };
    }
 
    render() {
        const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 1,
          
        };
        let sectionTitle = 'Wealth of Experience';
        return (
            <React.Fragment>
            <Row>
                <Col><hgroup className="w-100 text-center mb-4"><h2>{sectionTitle}</h2></hgroup></Col>
            </Row>
              <div className="container">
            <Slider className="text-center"
            {...settings}>
           
            {this.state.slidesNo.map(function(slides){
                return (
                    <div key={slides}>
                        <Image src={'images/'+slides}/>
                    </div>
                )
            })}

              {/* <div>
              <Image src="images/logoImg.png"/>
              </div>
              <div>
              <Image src="images/logoImg.png"/>
              </div>
              <div>
              <Image src="images/logoImg.png"/>
              </div>
              <div>
              <Image src="images/logoImg.png"/>
              </div>
              <div>
              <Image src="images/logoImg.png"/>
              </div>
              <div>
              <Image src="images/logoImg.png"/>
              </div> */}
              
            </Slider>
            </div>
            </React.Fragment>
        );
      }
      
}
