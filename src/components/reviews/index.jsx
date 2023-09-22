import React, { useState } from "react";
import { LiaStarSolid } from "react-icons/lia";
import { AiFillDislike } from "react-icons/ai";
import "./index.css";

function Reviews() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Pollo Tip Top",
      body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit ipsum dolor.",
      list: 1,
    },
    {
      id: 2,
      title: "Pizza Hut",
      body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit ipsum dolor.",
      list: 1,
    },
    {
      id: 3,
      title: "Valentis Pizza",
      body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit ipsum dolor.",
      list: 3,
    },
    {
      id: 4,
      title: "Gambei Arroz chino",
      body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit ipsum dolor.",
      list: 2,
    },
    {
      id: 5,
      title: "Toro Asado",
      body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit ipsum dolor.",
      list: 2,
    },
  ]);

  const getList = (list) => {
    return tasks.filter((item) => item.list === list);
  };

  const startDrag = (evt, item) => {
    evt.dataTransfer.setData("itemID", item.id);
    console.log(item);
  };

  const draggingOver = (evt) => {
    evt.preventDefault();
  };

  const onDrop = (evt, list) => {
    const itemID = evt.dataTransfer.getData("itemID");
    const item = tasks.find((item) => item.id == itemID);
    item.list = list;

    const newState = tasks.map((task) => {
      if (task.id === itemID) return item;
      return task;
    });

    setTasks(newState);
  };

  return (
    <>
      <h2 className="title__reviews">Críticas</h2>
      <div className="drag-and-drop" id="critic">
        <div className="column column--1">
          <h3>A</h3>
          <div className="content__icon stars">
            <LiaStarSolid />
            <LiaStarSolid />
            <LiaStarSolid />
            <h4>Excelente</h4>
            <LiaStarSolid />
            <LiaStarSolid />
            <LiaStarSolid />
          </div>
          <div
            className="dd-zone"
            droppable="true"
            onDragOver={(evt) => draggingOver(evt)}
            onDrop={(evt) => onDrop(evt, 1)}
          >
            {getList(1).map((item) => (
              <div
                className="dd-element"
                key={item.id}
                draggable
                onDragStart={(evt) => startDrag(evt, item)}
              >
                <strong className="title">{item.title}</strong>
                <p className="body">{item.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="column column--2">
          <h3>B</h3>
          <div className="content__icon stars">
            <LiaStarSolid />
            <LiaStarSolid />
            <h4>Muy Bueno</h4>
            <LiaStarSolid />
            <LiaStarSolid />
          </div>
          <div
            className="dd-zone"
            droppable="true"
            onDragOver={(evt) => draggingOver(evt)}
            onDrop={(evt) => onDrop(evt, 2)}
          >
            {getList(2).map((item) => (
              <div
                className="dd-element"
                key={item.id}
                draggable
                onDragStart={(evt) => startDrag(evt, item)}
              >
                <strong className="title">{item.title}</strong>
                <p className="body">{item.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="column column--3">
          <h3>C</h3>
          <div className="content__icon stars">
            <LiaStarSolid />
            <h4>Bueno</h4>
            <LiaStarSolid />
          </div>
          <div
            className="dd-zone"
            droppable="true"
            onDragOver={(evt) => draggingOver(evt)}
            onDrop={(evt) => onDrop(evt, 3)}
          >
            {getList(3).map((item) => (
              <div
                className="dd-element"
                key={item.id}
                draggable
                onDragStart={(evt) => startDrag(evt, item)}
              >
                <strong className="title">{item.title}</strong>
                <p className="body">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="column column--4">
          <h3>D</h3>
          <div className="content__icon dislike">
            <AiFillDislike />
            <h4>Deficiente</h4>
            <AiFillDislike />
          </div>
          <div
            className="dd-zone"
            droppable="true"
            onDragOver={(evt) => draggingOver(evt)}
            onDrop={(evt) => onDrop(evt, 4)}
          >
            {getList(4).map((item) => (
              <div
                className="dd-element"
                key={item.id}
                draggable
                onDragStart={(evt) => startDrag(evt, item)}
              >
                <strong className="title">{item.title}</strong>
                <p className="body">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Reviews;
