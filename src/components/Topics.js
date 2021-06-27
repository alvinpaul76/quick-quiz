import { Dropdown } from 'semantic-ui-react'
import topics from '../assets/quiz/topics.json';

function Topics () {
    return (
        <div className="topics">
            <h2>Select Topic</h2>
            <Dropdown
                placeholder='Select Topic'
                floating
                search
                selection
                options={topics}
            />
        </div>
    )
}

export default Topics;