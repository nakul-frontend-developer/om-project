import React from 'react';
import './HomePage.css';
import {Helmet} from 'react-helmet';
import Carousels from '../HomePage/Carousels/Carousels';
import SectionOne from '../HomePage/HomeSectionOne/HomeSectionOne';
import SectionTwo from '../HomePage/HomeSectionTwo/HomeSectionTwo';
import ClientCommendation from '../HomePage/ClientCommendation/ClientCommendation';
import WealthExperience from '../HomePage/WealthExperience/WealthExperience';
import ProjectBlogs from '../HomePage/ProjectsBlogs/ProjectBlogs';

export default class HomePage extends React.Component {
    render() {
        return (
          <React.Fragment>
          <Helmet>
          <title>Home</title>
          </Helmet>
          <section className="hero py-0">
            <Carousels></Carousels>
          </section>

          <section className="digital_transformation">
            <SectionOne></SectionOne>
          </section>

          <section className="innovating_industries">
            <SectionTwo ></SectionTwo>
          </section>

          <section className="clientCommentdation">
            <ClientCommendation></ClientCommendation>
          </section>

          <section className="ourClients">
            <WealthExperience></WealthExperience>
          </section>

          <section className="porjectBlogs">
            <ProjectBlogs></ProjectBlogs>
          </section>
          </React.Fragment>
        );
    }
}

