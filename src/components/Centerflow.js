import React, { useState, useRef, useContext } from "react";
import ReactFlow, { ReactFlowProvider, addEdge, removeElements, Controls, Handle } from "react-flow-renderer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faStop, faArrowDown, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import actions from "./action.json"
import Properties from "./properties";


import "./Centerflow.css";
import Actions from "./actions";
import { AuthContext } from "./Context/context";


const InputNode = ({ type, data }) => {
  // const [showResults, setShowResults] = React.useState(false)

  // // const onClick = () => setShowResults(true)

  // const openBrowser = async()=>{
  //   setShowResults(!showResults);
  // }
  const { dispatch } = useContext(AuthContext);


  return (
    <>
      <Handle type="target" position="left" />
      
      <div className="box-container node-1 input"  onClick={()=>dispatch({type:"propertiesOpen"})}>
        <ul>
          <li>Open Browser</li>
          <li>
            <FontAwesomeIcon icon={faEdit} color="#D6D9DE" />
            <span>EDIT</span> &nbsp;&nbsp;&nbsp;
            <FontAwesomeIcon icon={faTrash} color="#D6D9DE" />
            <span>DELETE</span>
          </li>
        </ul>
      </div>
      <Handle type="source" position="left" id="a" />

     
    </>
  );

};

const InputNode2 = ({ type, data }) => {
  const { dispatch } = useContext(AuthContext);
  return (
    <>
      <Handle type="target" position="left"  />
      <div className="box-container node-2 output"  onClick={()=>dispatch({type:"propertiesCloseOpen"})}>
        <ul>
          <li>Close Browser</li>
          <li>
            <FontAwesomeIcon icon={faEdit} color="#D6D9DE" />
            <span>EDIT</span> &nbsp;&nbsp;&nbsp;
            <FontAwesomeIcon icon={faTrash} color="#D6D9DE" />
            <span>DELETE</span>
          </li>
        </ul>
      </div>
      <Handle type="source" position="right" id="a" />
    </>
  );

};

const InputNode3 = ({ type, data }) => {
  return (
    <>
      <Handle type="target" position="left" />
      <div className="box-container node-3">
        <ul>
          <li>Set SMTP</li>
          <li>
            <FontAwesomeIcon icon={faEdit} color="#D6D9DE" />
            <span>EDIT</span> &nbsp;&nbsp;&nbsp;
            <FontAwesomeIcon icon={faTrash} color="#D6D9DE" />
            <span>DELETE</span>
          </li>
        </ul>
      </div>
      <Handle type="source" position="right" id="a" />
    </>
  );

};

const InputNode4 = ({ type, data }) => {
  return (
    <>
      <Handle type="target" position="left" />
      <div className="box-container node-4">
        <ul>
          <li>Set SMTP</li>
          <li>
            <FontAwesomeIcon icon={faEdit} color="#D6D9DE" />
            <span>EDIT</span> &nbsp;&nbsp;&nbsp;
            <FontAwesomeIcon icon={faTrash} color="#D6D9DE" />
            <span>DELETE</span>
          </li>
        </ul>
      </div>
      <Handle type="source" position="right" id="a" />
    </>
  );

};

const nodeTypes = {
  InputNode: InputNode,
  InputNode2: InputNode2,
  InputNode3: InputNode3,
  InputNode4: InputNode4,
};

const initialElements = [
  // {
  //   id: 'horizontal-1',
  //   sourcePosition: 'right',
  //   type: 'InputNode',
  //   className: 'dark-node',
  //   data: {},
  //   position: { x: 0, y: 50 },
  //   animated:true,
  //   style: { background: "#fff", width: 200, fontSize: "20px", fontFamily: "Helvetica", boxShadow: "5px 5px 5px 0px rgba(0,0,0,.10)" }
  // },

  // {
  //   id: 'horizontal-2',
  //   sourcePosition: 'right',
  //   type: 'InputNode2',
  //   targetPosition: 'left',
  //   data: { label: 'Set SMTP' },
  //   position: { x: 300, y: 50 },
  //   style: { background: "#fff", width: 200, fontSize: "20px", fontFamily: "Helvetica", boxShadow: "5px 5px 5px 0px rgba(0,0,0,.10)" }
  // },

  // {
  //   id: 'horizontal-3',
  //   sourcePosition: 'right',
  //   type: 'InputNode3',
  //   targetPosition: 'left',
  //   data: { label: 'Set SMTP' },
  //   position: { x: 650, y: 25 },
  //   style: { background: "#fff", width: 200, fontSize: "20px", fontFamily: "Helvetica", boxShadow: "5px 5px 5px 0px rgba(0,0,0,.10)" }
  // },
  // {
  //   id: 'horizontal-4',
  //   sourcePosition: 'right',
  //   type: 'InputNode4',
  //   targetPosition: 'left',
  //   data: { label: 'Set SMTP' },
  //   position: { x: 650, y: 200 },
  //   style: { background: "#fff", width: 200, fontSize: "20px", fontFamily: "Helvetica", boxShadow: "5px 5px 5px 0px rgba(0,0,0,.10)" }
  // },
  // {
  //   id: 'horizontal-e1-3',
  //   source: 'horizontal-1',
  //   type: 'smoothstep',
  //   target: 'horizontal-2',
  //   animated: true,
  // },

  // {
  //   id: 'horizontal-e3-5',
  //   source: 'horizontal-2',
  //   type: 'smoothstep',
  //   target: 'horizontal-3',
  //   animated: true,
  // },
  // {
  //   id: 'horizontal-e3-6',
  //   source: 'horizontal-2',
  //   type: 'smoothstep',
  //   target: 'horizontal-4',
  //   animated: true,
  // },

];


let id = 0;
const getId = () => `${id++}`;

export default function App() {

  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [elements, setElements] = useState(initialElements);
  const onConnect = (params) => setElements((els) => addEdge(params, els));
  const onElementsRemove = (elementsToRemove) =>
    setElements((els) => removeElements(elementsToRemove, els));
  const onLoad = (_reactFlowInstance) =>
    setReactFlowInstance(_reactFlowInstance);
  const onDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  };

  // const InputTypee = async() =>{

  // }

  const onDrop = async(event) => {
    event.preventDefault();
    const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
    const types = event.dataTransfer.getData("application/reactflow");
    const position = reactFlowInstance.project({
      x: event.clientX - reactFlowBounds.left,
      y: event.clientY - reactFlowBounds.top
    });
    const findIndex= await actions.findIndex(x=> Number(x.id)===Number(types));
    let { idname, sourcePosition, targetPosition, Name, style, type, className,animated, properties, desc } =actions[findIndex]
    const newNode = {
      id: `${idname}-${elements.length}`,
      type,
      sourcePosition,
      targetPosition,
      position,
      animated,
      className,
      data: { label: `${Name} ` },
      style,
      properties,
      desc
    };
    setElements((es) => es.concat(newNode));
    console.log(elements, event.dataTransfer.getData("application/reactflow"), "elements")
  };
  return (
    <div className="dndflow">
      <ReactFlowProvider>
        
        <div
          className="reactflow-wrapper"
          style={{ height: "900px", width: "780px" }}
          ref={reactFlowWrapper}
        >
          <ReactFlow
            elements={elements}
            onConnect={onConnect}
            onElementsRemove={onElementsRemove}
            onLoad={onLoad}
            onDrop={onDrop}
            onDragOver={onDragOver}
            nodeTypes={nodeTypes}
          >
            <Controls />
          </ReactFlow>
        </div>
      </ReactFlowProvider>
    </div>
  );
}
