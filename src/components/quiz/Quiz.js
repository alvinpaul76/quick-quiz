import { Fragment } from 'react';
import { Helmet } from 'react-helmet';

import Status from '../quiz/Status';
import Questions from './Questions';

function Topic() {
    return (
        <Fragment>
            <h1 className="topic">Data Migration</h1>
        </Fragment>
    )
}

function Quiz() {
    return (
        <Fragment>
            <Helmet>
                <title>Quiz - Quick Quiz</title>
            </Helmet>
            <div id="quiz">
                <section>
                    <Status />
                    <Topic />
                    <Questions />
                </section>
            </div>
        </Fragment>
    )
}

export default Quiz;