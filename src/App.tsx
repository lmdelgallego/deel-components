import { useState } from 'react'
import { AutoComplete, CharacterCard } from './components'
import './App.css'
import { ICharacter } from './hooks/useApi';

function App() {

  const [characterSelected, setCharacterSelected] = useState<ICharacter | null >(null)

  const handlerOnChange = (character: ICharacter) => {
    setCharacterSelected(character)
  }

  return (
    <>
      <h1>Rick&Morty<br/><small>Search your favorite character</small></h1>
      <AutoComplete onChange={handlerOnChange} />
      {characterSelected && (
        <CharacterCard character={characterSelected} />
      )}
    </>
  )
}

export default App
