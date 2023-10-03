import React from 'react'
import { ICharacter } from '../../hooks/useApi'

interface Props {
  character: ICharacter
}

export const CharacterCard = ({character }: Props) => {
  return (
    <div className="d-app_card">
      <img src={character.image}  />
      <span>{character.name}</span>
    </div>
  )
}
