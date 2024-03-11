import { useState } from "react";

export const AddCategories = ( {onNewCategory} ) => {
  //manejo el estado de mi componente
  const [inputValue, setInputValue] = useState('');

  //el valor va a ser igual a lo que se escribe
  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmit = ( event ) => {
    event.preventDefault();
    if( inputValue.trim().length <= 1) return; 

    onNewCategory( inputValue )
    setInputValue('');
    // setCategories( categories => [...categories, inputValue])
    

    
  }

  return (
    <form onSubmit={ onSubmit }>
        <input
          type="text"
          placeholder="Buscar gifs"
          value={inputValue}
          onChange={onInputChange}
        />
    </form>
      );
};
