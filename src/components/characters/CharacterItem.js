import React from "react";

const CharacterItem = ({ characterItem }) => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={characterItem.img} alt="" />
        </div>
        <div className="card-back">
          <h1>{characterItem.name}</h1>
          <ul>
            <li>
              <strong>Actor Name:</strong> {characterItem.portrayed}
            </li>
            <li>
              <strong>Nickname:</strong> {characterItem.nickname}
            </li>
            <li>
              <strong>Birthday:</strong> {characterItem.birthday}
            </li>
            <li>
              <strong>Status:</strong> {characterItem.status}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CharacterItem;
