import React, {Component} from 'react';
import Title from "./Title";
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from "react-icons/all";

class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: 'free cocktails',
                info: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, rerum!\n'
            },
            {
                icon: <FaHiking />,
                title: 'Endless Hiking',
                info: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, rerum!\n'
            },
            {
                icon: <FaShuttleVan />,
                title: 'Free shitle',
                info: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, rerum!\n'
            },
            {
                icon: <FaBeer />,
                title: 'Strongest Bear',
                info: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, rerum!\n'
            }

        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        );
    }
}

export default Services;
