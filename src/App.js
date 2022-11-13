import { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import "./App.css";

function App() {
  const [items] = useState([
    {id: 0, text: "item0"},
    {id: 1, text: "item1"},
    {id: 2, text: "item2"},
  ]);
  const onDragEnd = (result) => {
  const removed = items.splice(result.source.index, 1); //スタート地点を消す
  items.splice(result.destination.index, 0, removed[0]); // エンド地点に消したものを追加
  }
  return (
    <div className="dragDropArea">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="drap">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef} >
            {items.map((item, index) =>
              <Draggable draggableId={item.text} index={index} key={item.id}>
                {(provided) => (
                  <div
                    className="item"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    {item.text}
                  </div>
                )}
              </Draggable>
            )}
            {provided.placeholder}
            </div>
          )}
        </Droppable>
        </DragDropContext>
    </div>
  );
}

export default App;