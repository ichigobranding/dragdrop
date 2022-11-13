import { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import "./App.css";
function App() {
  const [items] = useState(["item0", "item1", "item2"]);
  const onDragEnd = (result) => {
    console.log(result.source.index);
    console.log(result.destination.index);
    const removed = items.splice(result.source.index, 1); //スタート地点を消す
    console.log(removed[0]);
    const check = items.splice(result.destination.index, 0, removed[0]); // エンド地点に消したものを追加
    console.log(check);
  }
  return (
    <div className="dragDropArea">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="item0">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
            <Draggable draggableId="item0" index={0}>
              {(provided) => (
                <div
                  className="item"
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  {items[0]}
                </div>
              )}
            </Draggable>
            {provided.placeholder}
            </div>
          )}
        </Droppable>
        <Droppable droppableId="item1">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
            <Draggable draggableId="item1" index={1}>
              {(provided) => (
                <div
                  className="item"
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                 {items[1]}
                </div>
              )}
            </Draggable>
            {provided.placeholder}
            </div>
          )}
        </Droppable>
        <Droppable droppableId="item2">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
            <Draggable draggableId="item2" index={2}>
              {(provided) => (
                <div
                  className="item"
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                 {items[2]}
                </div>
              )}
            </Draggable>
            {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default App;
