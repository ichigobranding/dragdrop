import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import "./App.css";
function App() {
  const onDragEnd = (result) => {
    console.log(result.source.index);
    console.log(result.destination.index);
  }
  return (
    <div className="dragDropArea">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
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
                  item0
                </div>
              )}
            </Draggable>
            {provided.placeholder}
            </div>
          )}
        </Droppable>
        <Droppable droppableId="droppable">
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
                  item1
                </div>
              )}
            </Draggable>
            {provided.placeholder}
            </div>
          )}
        </Droppable>
        <Droppable droppableId="droppable">
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
                  item2
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
