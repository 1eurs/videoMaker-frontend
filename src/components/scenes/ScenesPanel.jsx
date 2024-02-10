import React, { useContext, useState } from "react";
import ScenesContext from "../context/ScenesContext";
import { useEditor } from "@layerhub-io/react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Menu, Item, contextMenu } from "react-contexify";
import "react-contexify/dist/ReactContexify.css";

const ScenesPanel = () => {
  const { scenes, setCurrentSceneId, setScenes } = useContext(ScenesContext);
  const editor = useEditor();

  const loadScene = (scene) => {
    editor.scene.importFromJSON(scene.data);
    setCurrentSceneId(scene.id);
  };

  const onDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) return;

    const items = Array.from(scenes);
    const [reorderedItem] = items.splice(source.index, 1);
    items.splice(destination.index, 0, reorderedItem);

    setScenes(items);
  };

  const handleContextMenu = (event, sceneId) => {
    event.preventDefault();
    contextMenu.show({
      id: "scene-context-menu",
      event: event,
      props: {
        sceneId: sceneId,
      },
    });
  };

  const handleDeleteScene = (sceneId) => {
    setScenes(scenes.filter((scene) => scene.id !== sceneId));
  };

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="scenes">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="flex flex-col gap-4 py-4 px-2 shadow-md rounded-lg h-full"
            >
              {scenes?.map((scene, index) => (
                <Draggable
                  key={scene.id}
                  draggableId={scene.id.toString()}
                  index={index}
                >
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      onContextMenu={(event) =>
                        handleContextMenu(event, scene.id)
                      }
                      className="p-2 bg-white rounded-lg shadow border border-[#747264] cursor-move"
                    >
                      <img
                        onClick={() => loadScene(scene)}
                        src={scene.preview}
                        alt={`Scene ${index + 1}`}
                        className="w-full h-auto rounded-md"
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <Menu id="scene-context-menu">
        <Item onClick={({ props }) => handleDeleteScene(props.sceneId)}>
          Delete
        </Item>
      </Menu>
    </>
  );
};

export default ScenesPanel;
