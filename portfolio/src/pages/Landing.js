import React, { Component } from "react";
import ImageFadeIn from "react-image-fade-in";
import Typewriter from "typewriter-effect";

import { FooterBar } from '../components/FooterBar';

class Landing extends Component {
    render() {
        return (
            <div className="App">

                <header className="App-header">
                    <ImageFadeIn opacityTransition='5' src='https://raw.githubusercontent.com/dhaliwalg/dhaliwal.github.io/master/oldsite/profpic.jpg' className="App-logo" alt="logo" />
                </header>

                <div className='typer'>
                    <Typewriter onInit={(typewriter) => {
                        typewriter
                            .typeString("hi i'm gurjit")
                            .pauseFor(8000)
                            .deleteAll()
                            .typeString("take a look around")
                            .pauseFor(5000)
                            .deleteAll()
                            .typeString("webpage built on react + typescript")
                            .start();
                    }}
                    />
                </div>

                <FooterBar className="App-logo-spin" />
            </div>
        );
    }
}

export default Landing;