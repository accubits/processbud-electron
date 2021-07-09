import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Draggable from "react-draggable";
import actions from './action.json';

function Actions() {
//     const actions = [{
//         id: 1,
//         name: 'Open Browser',
//         desc: 'Triggers browser open action'
//     }, {
//         id: 2,
//         name: 'Close Browser',
//         desc: 'Triggers browser close action'
//     }, {
//         id: 3,
//         name: 'Set SMTP',
//         desc: 'Triggers browser open action'
//     },  {
//         id: 4,
//         idname: "horizontal",
//         sourcePosition: "right",
//         type: "InputNode2",
//         targetPosition: "left",
//         name: "Set SMTP",
//         style: {
//             background: "#fff",
//             width: 200,
//             fontSize: "20px",
//             fontFamily: "Helvetica",
//             boxShadow: "5px 5px 5px 0px rgba(0,0,0,.10)"
//         }
//     }
// ]

    // const onDragStart = (event, nodeType) => {
    //     event.dataTransfer.setData("application/reactflow", nodeType);
    //     event.dataTransfer.effectAllowed = "move";
    //   };

    const onDragStart = (event, nodeType) => {
        event.dataTransfer.setData("application/reactflow", nodeType);
        event.dataTransfer.effectAllowed = "move";
    };

    return <div className="actions">
        <div className="actions-header">
            <h1 className="actions-title">Actions</h1>
            <span className="tag">Drag a new action</span>
        </div>
        <div className="actions-search">
            <input type="text" className="search-input" />
            <div className="search-icon">
                <FontAwesomeIcon icon={faSearch} color="grey" />
            </div>

        </div>
        <div className="actions-list">

            <div className="single-action-container">
                <h1 className="actions-list-title">Frequently Used</h1>
                {actions.map((action, i) => (
                    <div key={action.Name} className="single-action" onDragStart={(event) => onDragStart(event,`${i+1}`)}
                    draggable
                    >
                        <h4 className="single-action-title">{action.Name}</h4>
                        <span className="single-action-desc">{action.desc}</span>
                    </div>

                ))}
            </div>

            <div className="single-action-container">
                <h1 className="actions-list-title">All Actions</h1>
                {actions.map((action, i) => (
                    
                        <div key={action.Name} className="single-action" onDragStart={(event) => onDragStart(event,`${i+1}`)}
                        draggable>
                            <h4 className="single-action-title">{action.Name}</h4>
                            <span className="single-action-desc">{action.desc}</span>
                        </div>
                    
                ))}

            </div>
        </div>

    </div>
}

export default Actions;