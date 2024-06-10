import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import Modal from "react-modal";
import "./VideoPlayer.css"; // CSS dosyasını dahil edin
import img from "../../../assets/1415042.jpg";
Modal.setAppElement("#root");

const Video = () => {

  return (
    <>
      <a href="https://youtu.be/QK8mJJJvaes?si=hC5YONVraK1FGWi-" target="_blank">
        <div className="video-player-container">
          <img src={img} alt="Preview" className="preview-image" />
          <div className="play-button">
            <FaPlay className="play-icon" />
            <div className="ripple-container">
              <div className="ripple"></div>
              <div className="ripple"></div>
              <div className="ripple"></div>
            </div>
          </div>
        </div>
      </a>
    </>
  );
};

export default Video;
