import React, { useState, useEffect, useCallback } from "react";

import Button from "./Button";

export default function Form() {
  const [userData, setUserData] = useState({
    age: 18,
    height: 170,
    weight: 70, 
  });

  useEffect(() => {
    const heightInMeters = userData.height / 100;

    const BmiCalc = userData.weight / heightInMeters ** 2;

    setUserData((prevState) => ({
      ...prevState,
      Bmi: BmiCalc.toFixed(2),
      healthCondition: '',
    }));
  }, [userData.height, userData.weight]);

  const handleGetResult = () => {
    if (userData.Bmi < 18.5) {
      setUserData((prevState) => ({
        ...prevState,
        healthCondition: "Magro",
      }));
    } else if (userData.Bmi >= 18.5 && userData.Bmi <= 24.9) {
      setUserData((prevState) => ({
        ...prevState,
        healthCondition: "Normal",
      }));
    } else if (userData.Bmi >= 25 && userData.Bmi <= 29.9) {
      setUserData((prevState) => ({
        ...prevState,
        healthCondition: "Sobrepeso",
      }));
    } else if (userData.Bmi >= 30 && userData.Bmi <= 39.9) {
      setUserData((prevState) => ({
        ...prevState,
        healthCondition: "Obesidade",
      }));
    }
  };

  return (
    <form>
      <div>
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={(e) =>
            setUserData((prevState) => ({
              ...prevState,
              name: e.target.value,
            }))
          }
        />
      </div>

      <div>
        <label htmlFor="age">Idade: {userData.age}</label>
        <input
          type="range"
          min={1}
          max={70}
          value={userData.age}
          onChange={(e) =>
            setUserData((prevState) => ({
              ...prevState,
              age: e.target.value,
            }))
          }
        />
      </div>

      <div>
        <label htmlFor="height">Altura: {userData.height}</label>
        <input
          type="range"
          min={150}
          max={210}
          value={userData.height}
          onChange={(e) =>
            setUserData((prevState) => ({
              ...prevState,
              height: e.target.value,
            }))
          }
        />
      </div>

      <div>
        <label htmlFor="weight">Peso: {userData.weight}</label>
        <input
          type="range"
          min={40}
          max={120}
          value={userData.weight}
          onChange={(e) =>
            setUserData((prevState) => ({
              ...prevState,
              weight: e.target.value,
            }))
          }
        />
      </div>

      <Button onClick={handleGetResult} type="button">
        Calcular
      </Button>

      {userData.healthCondition && (
        <div className="calc-result">
          <h2>Seu IMC:</h2>

          <span>
            {userData.name}, seu IMC é {userData.Bmi} e você está{" "}
            {userData.healthCondition}!
          </span>
        </div>
      )}
    </form>
  );
}
