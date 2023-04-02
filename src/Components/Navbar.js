import React from "react";
import "./Css/Navbar.css";
import logo from "./assets/brain.png";
import Russian from "./assets/Ru.png";
import { Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";


export default function Navbar() {
  const items = [
    {
      key: "1",
      danger: true,
      label: "EN",
    },
    {
        key: "2",
        danger: true,
        label: "UZ",
      },
  ];

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <div className="logoImg">
              <img src={logo} />
            </div>
            <div className="logoText">
              <h3>АКАДЕМИЯ ИСКУССТВА </h3>
              <h3>ПУБЛИЧНЫХ ВЫСТУПЛЕНИЙ</h3>
              <h4>ТИМУРА АРИПОВА</h4>
            </div>
          </div>
          <div className="nav-link">
            <ul className="links">
              <li>
                <a href="#">О НАС</a>
                <hr className="red"/>
              </li>
              <li>
                <a href="#">КУРСЫ</a>
              </li>
              <li>
                <a href="#">НОВОСТИ</a>
              </li>
              <li>
                <a href="#" style={{color:"#D90E3C"}}>НАСТАВНИКИ ✨</a>
              </li>
              <li>
                <div className="dropdown">
                  <img src={Russian} />
                  <Dropdown
                    menu={{
                      items,
                    }}
                  >
                    <a onClick={(e) => e.preventDefault()}>
                      <Space>
                        RU
                        <DownOutlined />
                      </Space>
                    </a>
                  </Dropdown>
                </div>
              </li>
              <li>
                <a href="#">КОНТАКТЫ</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <hr className="bottomLine"/>
    </>
  );
}
