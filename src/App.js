/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-no-undef */

import './App.css';
import React from 'react';
import styled from 'styled-components';
import DatePicker from "react-multi-date-picker"
import { useState } from 'react';
import CreatableSelect from "react-select/creatable";
import image1 from './images/image1.webp'
import image2 from './images/image2.png'
import image4 from './images/image4.png'
import image5 from './images/image5.webp'




const Title = styled.div`
    display : flex;
    justify-content : space-between;
    margin-top: 20px;
    margin-bottom : 50px;
    margin-left : 30px;
    width : 630px;
    font-size: 30px;
`
const Template  = styled.div`
    width : 1350px;
    height : 700px;
    border: 1px #0c8af8 solid;
    box-shadow: 0 0 2px #0074d9;
    background-color : white;
    margin : 2% auto;   
    border-radius : 30px;
    box-sizing: block;

`
const Image  = styled.img`
    margin: 2% auto;
    height: 55px;
    width: 55px;
    margin-left: 15px;
   margin-top: 40px;
   display: block;
    

`
const Title1 = styled.p`
    display : flex;
    margin-left : 60px;
    margin-top: -70px;
    font-size: 20px;
`
const Title2 = styled.label`
    margin-left: 220px;
    display : flex;
    margin-top: -60px;

`
const Title3 = styled.label`
    margin-left: 220px;
    display : flex;
    margin-top: -60px;

`


const IconTitle = styled.title`
     font-size: 20px;
     display: flex;
     margin-left: 90px;
     margin-top: -40px;

`







function App() {
  const [value, setValue] = useState(new Date())
  const [value1, setValue1] = useState(new Date())
  const options = [
    { value: "1", label: "스키", color: "#FF8B00" },
    { value: "2", label: "키즈놀거리", color: "#36B37E" },
    { value: "3", label: "테마파크", color: "#0052CC" },
    { value: "4", label: "수상레포츠", color: "#F00000" },
    { value: "5", label: "등산", color: "#36B" },
    { value: "6", label: "실내스포츠", color: "#0052CC" },
    { value: "7", label: "실외스포츠", color: "#36B37E" },
    { value: "8", label: "공예/DIY", color: "#0052CC" },
  ];
  const colorStyles = {
    control: (styles) => ({ ...styles, backgroundColor: "white" }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return { ...styles, color: data.color };
    },
    multiValue: (styles, { data }) => {
      return {
        ...styles,
        backgroundColor: data.color,
        color: "#fff",
      };
    },
    multiValueLabel: (styles, { data }) => {
      return {
        ...styles,
        color: "#fff",
      };
    },
    multiValueRemove: (styles, { data }) => {
      return {
        ...styles,
        color: "#fff",
        cursor: "pointer",
        ":hover": {
          color: "#fff",
        },
      };
    },
  };
  const handleChange = (selectedOption, actionMeta) => {
    console.log("handleChange", selectedOption, actionMeta);
  };
  const handleInputChange = (inputValue, actionMeta) => {
    console.log("handleInputChange", inputValue, actionMeta);
  };

  const options1 = [
    { value: "1", label: "한식", color: "#FF8B00" },
    { value: "2", label: "중식", color: "#36B37E" },
    { value: "3", label: "양식", color: "#0052CC" },
    { value: "4", label: "일식", color: "#F00000" },
    { value: "5", label: "지역음식", color: "#36B" }
  ];
  const colorStyles1 = {
    control: (styles) => ({ ...styles, backgroundColor: "white" }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return { ...styles, color: data.color };
    },
    multiValue: (styles, { data }) => {
      return {
        ...styles,
        backgroundColor: data.color,
        color: "#fff",
      };
    },
    multiValueLabel: (styles, { data }) => {
      return {
        ...styles,
        color: "#fff",
      };
    },
    multiValueRemove: (styles, { data }) => {
      return {
        ...styles,
        color: "#fff",
        cursor: "pointer",
        ":hover": {
          color: "#fff",
        },
      };
    },
  };
  const handleChange1 = (selectedOption, actionMeta) => {
    console.log("handleChange", selectedOption, actionMeta);
  };
  const handleInputChange1 = (inputValue, actionMeta) => {
    console.log("handleInputChange", inputValue, actionMeta);
  };

  
    const options3 = [
    { value: "1", label: "차", color: "#FF8B00" },
    { value: "2", label: "대중교통", color: "#36B37E" },

  ];
  const colorStyles3 = {
    control: (styles) => ({ ...styles, backgroundColor: "white" }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return { ...styles, color: data.color };
    },
    multiValue: (styles, { data }) => {
      return {
        ...styles,
        backgroundColor: data.color,
        color: "#fff",
      };
    },
    multiValueLabel: (styles, { data }) => {
      return {
        ...styles,
        color: "#fff",
      };
    },
    multiValueRemove: (styles, { data }) => {
      return {
        ...styles,
        color: "#fff",
        cursor: "pointer",
        ":hover": {
          color: "#fff",
        },
      };
    },
  };
  const handleChange3 = (selectedOption, actionMeta) => {
    console.log("handleChange", selectedOption, actionMeta);
  };
  const handleInputChange3 = (inputValue, actionMeta) => {
    console.log("handleInputChange", inputValue, actionMeta);
  };
  return (

    <><>
      <Title>
        <div>여행 프로필</div>
      </Title>
    </>
      <Template >
        <Image src={image1}></Image>
        <Title1>
          <p>인원 - 1명</p>
        </Title1>
        <Title2>
          <label>도착</label>
          <DatePicker 
          value={value}
          onChange={setValue}
          />
        </Title2>
        <Title3>
          <label>출발</label>
         <DatePicker 
          value={value1}
          onChange={setValue1}
          />
        </Title3>
        <div style={{
          marginLeft: '900px',
          display: 'flex',
          fontSize: '18px',
          marginTop: '-20px',
        }}>
         <label for="pet-select">출발지</label>

         <select name="pets" id="pet-select">
         <option value="">도시 선택하기</option>
         <option value="dog">대구광역시</option>
         <option value="cat">부산광역시</option>
          <option value="hamster">울산</option>
          <option value="hamster">포항</option>
          <option value="hamster">경주</option>
         </select>
        </div>

       <div style={{
          marginLeft: '900px',
          display: 'flex',
          fontSize: '18px',
          marginTop: '5px'
        }}>
         <label for="pet-select">도착지</label>

         <select name="pets" id="pet-select">
         <option value="">도시 선택하기</option>
         <option value="dog">대구광역시</option>
         <option value="cat">부산광역시</option>
          <option value="hamster">울산</option>
          <option value="hamster">포항</option>
          <option value="hamster">경주</option>
         </select>
        </div>

      

        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1, backgroundColor: "#6F38C5", height: "2px"}} />
        <div>
            <Image src={image2}></Image>
            <IconTitle>교통수단</IconTitle>
            <br/>
            <CreatableSelect 
              options={options3}
              onChange={handleChange3}
              onInputChange={handleInputChange3}
              isMulti
              styles={colorStyles3}
            />

        </div> 
        <div style={{ flex: 1, backgroundColor: "#6F38C5", height: "2px" }} />
        </div>



        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1, backgroundColor: "#6F38C5", height: "2px" }} />
          <div>
            <Image src={image4}></Image>
            <IconTitle>체험</IconTitle>
            <br/>
            <CreatableSelect
              options={options}
              onChange={handleChange}
              onInputChange={handleInputChange}
              isMulti
              styles={colorStyles}
            />
          </div>
        <div style={{ flex: 1, backgroundColor: "#6F38C5", height: "2px" }} />
        </div>

        
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1, backgroundColor: "#6F38C5", height: "2px" }} />
         <div>
          <Image src={image5}></Image>
            <IconTitle>맛집</IconTitle>
            <br/>
              <CreatableSelect 
              options={options1}
              onChange={handleChange1}
              onInputChange={handleInputChange1}
              isMulti
              styles={colorStyles1}
            />
        </div>
        <div style={{ flex: 1, backgroundColor: "#6F38C5", height: "2px" }} />
        </div>

        <button type="button" class="btn btn-danger" style={{marginLeft: "500px", marginBottom: "-90px", fontSize: "15px"}}>최소하다</button> 
        <button type="button" class="btn btn-success" style={{marginLeft: "150px", marginBottom: "-90px", fontSize: "15px"}}>계속하다</button>


      </Template></>
 
    
  );
}

export default App;
