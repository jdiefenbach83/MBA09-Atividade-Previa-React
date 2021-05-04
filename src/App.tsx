import React, { useState } from 'react';

function App() {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);

  const handleHeightChange = (event: { target: { value: string | number; }; }) => {
    setHeight(+event.target.value);
  }

  const handleWeightChange = (event: { target: { value: string | number; }; }) => {
    setWeight(+event.target.value);
  }

  const calculateIMC = (): string => {    
    const imc: number = weight / ((height / 100) ** 2);
    const imcToReturn = imc.toFixed(2);
    
    if (imc >= 16 && imc < 17) {
      return `${imcToReturn} kg/m²: Muito abaixo do peso`;
    }

    if (imc >= 17 && imc < 18.5) {
      return `${imcToReturn} kg/m²: Abaixo do peso`;
    }

    if (imc >= 18.5 && imc < 25) {
      return `${imcToReturn} kg/m²: Peso normal`;
    }

    if (imc >= 25 && imc < 30) {
      return `${imcToReturn} kg/m²: Acima do peso`;
    }

    if (imc >= 30 && imc < 35) {
      return `${imcToReturn} kg/m²: Obesidade grau 1`;
    }

    if (imc >= 35 && imc <= 40) {
      return `${imcToReturn} kg/m²: Obesidade grau 2`;
    }

    if (imc > 40) {
      return `${imcToReturn} kg/m²: Obesidade grau 3`;
    }
    
    return '';
  }

  return (
    <div className="row">
      <form className="col s8">
        <div className="row">       
          <div className="input-field col s4">
            <input 
              id="height" 
              name="height" 
              type="number" 
              className="validate" 
              min="0" 
              step="any"
              value={height}
              onChange={handleHeightChange}
            />
            <label 
              htmlFor="height"
              className="active"
            >Altura (cm)</label>
          </div>
          <div className="input-field col s4">
            <input 
              id="weight" 
              name="weight" 
              type="number" 
              className="validate" 
              min="0" 
              step="any"
              value={weight}
              onChange={handleWeightChange}
            />
            <label 
              htmlFor="weight"
              className="active"
            >Peso (kg)</label>
          </div>        
        </div>
        <div className="row">
          <div className="input-field col s8">
            <input 
              disabled 
              name="result" 
              id="result" 
              type="text" 
              className="validate" 
              value={calculateIMC()}
            />
            <label 
              htmlFor="result"
              className="active "
            >IMC</label>
          </div>        
        </div>        
      </form>
    </div>
  );
}

export default App;
