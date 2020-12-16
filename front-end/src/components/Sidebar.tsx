import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import mapMarkerImg from "../images/map-marker.svg";
import "../styles/components/sidebar.css";
import { useHistory } from "react-router-dom";
import logoImg from "../images/logocao.svg";


export default function Sidebar() {
  const { goBack } = useHistory();
  return (
    <aside className="app-sidebar">
      <img src={logoImg} alt="auau" />

      <footer>
        <button type="button" onClick={goBack}>
          <FiArrowLeft size={24} color="#FFF" />
        </button>
      </footer>
    </aside>
  );
}
