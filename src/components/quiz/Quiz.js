import { Fragment } from 'react';
import { Helmet } from 'react-helmet';

function Quiz() {
    return (
        <Fragment>
            <Helmet>
                <title>Quiz - Quick Quiz</title>
            </Helmet>
            <div id="quiz">
                <section>
                </section>
            </div>
        </Fragment>
    )
}

export default Quiz;