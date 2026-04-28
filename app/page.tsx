"use client"
import use from "../public/use.png"
import React, { useState } from "react";
import { FaRegMoon, FaMoon } from "react-icons/fa";
import "./globals.css";

const Page = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");

    const arr = [
      {name:"Germany", Population:"Population: 81,770,900", Region:"Europe", Capital:"Capital:Berlin", img:"/germany.jpg"},
      {name:"United States of Ame", Population:"Population: 323,947,000", Region:"Americas", Capital:"Capital: Washington,", img:"/use.png"},
      {name:"Brazil", Population:"Population: 206,135,893", Region:"Americas", Capital:"Capital: Brasília", img:"/brasil.png"},
      {name:"Iceland", Population:"Population: 334,300", Region:"Europe", Capital:"Capital: Reykjavík", img:"/lceland.png"},
      {name:"Afghanistan", Population:"Population: 27,657,145", Region:"Asia", Capital:"Capital: Kabul", img:"/afgon.png"},
      {name:"Åland Islands", Population:"Population: 28,875", Region:"Europe", Capital:"Capital: Mariehamn", img:"/aland.png"},
      {name:"Albania", Population:"Population: 2,886,026", Region:"Europe", Capital:"Capital: Tirana", img:"/albania.png"},
      {name:"Algeria", Population:"Population: 40,400,000", Region:"Africa", Capital:"Capital: Algiers", img:"/algeria.png"}
   ];

  return (
    <div className="container"
      style={{
        backgroundColor: darkMode ? "#202C36" : "#FAFAFA",
        color: darkMode ? "#fff" : "#000",
        minHeight: "100vh",
        transition: "0.3s"
      }}
    >

      <div
        className="header-box"
        style={{
          backgroundColor: darkMode ? "#2B3844" : "#FFFFFF",
          color: darkMode ? "#fff" : "#000",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1"
        }}
      >
        <p className="text-1">
          Where in the world?
        </p>

        <button
          onClick={() => setDarkMode(!darkMode)}
          style={{
            padding: "8px 15px",
            cursor: "pointer",
            background: "transparent",
            border: "none",
            color: darkMode ? "#fff" : "#000"
          }}
        >
          {darkMode ? <FaMoon /> : <FaRegMoon />}
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>

      </div>
      <div>
        <div className="box">
          <div>
          <input style={{backgroundColor: darkMode ? "#2B3844" : "#FFFFFF", color: darkMode ? "#fff" : "#000", width:"280px", height:"46px", fontSize:"14px", border:"none", boxShadow: "0 5px 5px rgba(0,0,0,0.1)", borderRadius:"5px", paddingLeft:"12px"}} type="text" placeholder="sreeach" onChange={(e) => setSearch(e.target.value)}/>
          </div>
          <select className="section" style={{backgroundColor: darkMode ? "#2B3844" : "#FFFFFF", color: darkMode ? "#fff" : "#000", width:"200px", border:"none", borderRadius:"5px", boxShadow: "0 5px 5px rgba(0,0,0,0.1)",paddingLeft:"12px", paddingRight:"12px"}} onChange={(e) => setRegion(e.target.value)}>
            <option value="">Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </div>
        <div className="bayroq">
              {arr
                .filter(item =>
                  (region === "" || item.Region === region) &&
                  item.name.toLowerCase().includes(search.toLowerCase())
                )
                .map((item, i) => (
                  <div className="by" key={i}>
                    <img className="img" src={item.img} alt={item.name} />
                    <h3 className="by-text-1">{item.name}</h3>
                    <p className="by-text-2">{item.Population}</p>
                    <p className="by-text-3">{item.Region}</p>
                    <p className="by-text-4">{item.Capital}</p>
                  </div>
                ))
              }
           </div>
    </div>
  );
};

export default Page;