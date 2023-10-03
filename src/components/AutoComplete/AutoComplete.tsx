import React, { useState } from 'react'
import { useApi, useDebounce } from '../../hooks';
import { ICharacter } from '../../hooks/useApi';

import './AutoComplete.css'
import { HighlightText } from '..';

interface AutoCompleteProps {
  onChange: (value: ICharacter) => void;
}

export const AutoComplete = ({ onChange }: AutoCompleteProps) => {

  const [value, setValue] = useState("")
  const debouncedInputValue = useDebounce(value, 500);
  const {data: suggestions, loading, error, clearData} = useApi(debouncedInputValue)

  const handlerOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  const handlerClick = (character: ICharacter) => {
    setValue('')
    clearData()
    onChange(character)
  }

  return (
    <div className="d-autocomplete">
      <input type="text"
        className="d-autocomplete_input"
        value={value}
        onChange={handlerOnChange}
        placeholder="Type something..."
      />
      {loading && <div className="d-autocomplete_loading"></div>}
      {error && <div className="d-autocomplete_error">{error}</div>}
      {value && (
        <ul className='d-autocomplete_suggestions' >
          {suggestions.map((item) => (
            <li key={item.id} onClick={() => handlerClick(item)}>
              <img src={item.image} alt={item.name} />
              <HighlightText text={item.name} query={value} />
            </li>
          ))}
        </ul>
      )}

    </div>
  )
}
