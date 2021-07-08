import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import {TouchBackend} from "react-dnd-touch-backend";

// React Dnd is used for the drag and drop feature. 
// Have wrapped the entire component using HTML5Backend, Can be done using Touch Backend too (for mobile)

ReactDOM.render(
  // <React.StrictMode>
    <DndProvider backend={HTML5Backend}>
      {/* <DndProvider backend ={TouchBackend}> */}
      <App />
      {/* </DndProvider> */}
    </DndProvider>,
  // </React.StrictMode>,
  document.getElementById('root')
);
