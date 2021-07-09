import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faStop, faArrowDown } from '@fortawesome/free-solid-svg-icons';

function PlayerBtn() {
    return <div className="player-btn">
        <button className="btn play-btn run">
            <FontAwesomeIcon icon={faPlay} color="white" />
            <span className="btn-text">
                Run
            </span>
        </button>
        <button className="btn play-btn debug">
            <span className="btn-text">
                Debug
            </span>
            <FontAwesomeIcon icon={faArrowDown} color="grey" />
        </button>
        <button className="btn play-btn stop">
            <FontAwesomeIcon icon={faStop} color="white" />
            <span className="btn-text">
                Stop
            </span>
        </button>
    </div>
}

export default PlayerBtn;