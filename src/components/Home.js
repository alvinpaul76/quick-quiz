import { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import Instructions from './quiz/Instructions';
import Topics from './Topics';

import { ReactComponent as QuizIcon } from '../assets/img/quick-quiz-icon.svg';

function Header() {
    return (
        <Fragment>
            <div className="header">
                <QuizIcon width="80" height="80" className="quiz-icon" fill="orange"/>
                <h1>Quick Quiz</h1>
            </div>
        </Fragment>
    )
}

function Options() {
    return (
        <Fragment>
            <div className="home-option-container">
                <Link to="/quiz" className="home-option-buttons" id="start-button">Start</Link>
                <Link to="/quiz/instructions" className="home-option-buttons" id="instructions-button">Instructions</Link>
            </div>
        </Fragment>
    )
}

function Copyleft() {
    return (
        <Fragment>
            <div className="copyleft">
                <p>Copyleft &copy; 2021 by APLA</p>
            </div>
        </Fragment>
    )
}

function Home() {
    return (
        <Fragment>
            <Helmet>
                <title>Home - Quick Quiz</title>
            </Helmet>
            <div id="home">
                <section>
                    <Header />
                    <Topics />
                    <Options />
                    <Copyleft />
                </section>
            </div>
        </Fragment>
    )
}

export default Home;