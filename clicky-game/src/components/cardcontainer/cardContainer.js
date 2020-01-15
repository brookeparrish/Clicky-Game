import React, { Component } from 'react';
import Wrapper from '../wrapper/wrapper';
import Navbar from '../navbar/Navbar';
import Jumbotron from '../jumbotron/jumbotron';
import Cards from '../cards/cards';
import Footer from '../footer/footer';
import cards from '../../cards.json';

class CardContainer extends Component {
    state = {
        cards
    };

    render () {
        return (
            <Wrapper>
                <Navbar />
                <Jumbotron />
                <div className="row mx-auto">
                    {
                        this.state.cards.map(card => (
                            <Cards
                            id={card.id}
                            key={card.id}
                            image={card.image} />

                        ))
                    }
                </div>
                <Footer />

            </Wrapper>
        );
    };
};

export default CardContainer;