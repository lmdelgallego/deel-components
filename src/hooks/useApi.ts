import {useState, useEffect} from 'react'

export interface ICharacter {
  id: number;
  name: string;
  status: string;
  image: string;
}

const useApi = (inputValue: string) => {
  const [data, setData] = useState<ICharacter[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try{
        if(!inputValue) return;
        if(inputValue.length < 3) return;
        setLoading(true)
        const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${inputValue}`)
        const json = await response.json()
        if(json.error) throw new Error(json.error)
        setData(json.results as ICharacter[])
        setLoading(false)
        setError(null)
      }
      catch(e : any | { message: string }  ) {
        setLoading(false)
        setData([])
        setError(e.message)
      }
    }
    fetchData();
  }, [inputValue])

  const clearData = () => {
    setData([])
  }

  return {
    data,
    loading,
    error,
    clearData
  }
}

export default useApi