import { Fragment } from "react";
import { ImRadioUnchecked as RadioUnmarked } from "react-icons/im";

function Question() {
    return (
        <Fragment>
            <h4 className="question">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus praesentium quidem obcaecati veritatis? Fuga rem ut ipsam dolores tempora optio officia tempore unde vitae eaque veniam, molestias, porro quasi nisi.
            </h4>
        </Fragment>
    )
}

function OptionList() {
    return (
        <div className="options-container">
            <Option value="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, aperiam." />
            <Option value="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, aperiam." />
            <Option value="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, aperiam." />
            <Option value="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, aperiam." />
            <Option value="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, aperiam." />
        </div> 
    )
}

function Option(props) {
    return (
        <p className="option">
            <RadioUnmarked className="radio-icon"/>
            {props.value}
        </p>
    )
}

function Questions() {
    return (
        <Fragment>
            <div className="questions">
                <Question />
                <OptionList />
            </div>
        </Fragment>
    )
}

export default Questions;