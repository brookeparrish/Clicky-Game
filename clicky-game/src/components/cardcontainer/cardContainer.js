import React, { Component } from 'react';
import wrapper from '../wrapper/wrapper';
import Navbar from '../navbar/Navbar';
import jumbotron from '../jumbotron/jumbotron';
import cards from '../cards/cards';
import footer from '../footer/footer';

class cardContainer extends Component {
    render () {
        return (
            <wrapper>
                <Navbar />
                    <jumbotron />
                        {
                            <cards />
                        }
                        <footer />
            </wrapper>
            
        );
    };
};

export default cardContainer;