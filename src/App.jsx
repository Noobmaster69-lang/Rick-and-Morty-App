import { useEffect, useRef, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import getRandomNumbers from './utils/getRandomNumbers'
import LocationInfo from './components/LocationInfo'
import ResidentCard from './components/ResidentCard'

function App() {
  
  const [inputValue, setInputValue] = useState(getRandomNumbers(126))
  
  const url = `https://rickandmortyapi.com/api/location/${inputValue || 'hola'}`
  const [ location, getLocation, hasError  ] = useFetch(url)

  useEffect(() => {
    getLocation()
  },[inputValue])

  const inputSearch = useRef()

  const handleSubmit = e => {
      e.preventDefault()
      setInputValue(inputSearch.current.value.trim())
  }

  return (
    
    <div className='principal'> 
      <h1></h1>
      <form onSubmit={handleSubmit}>
        <input ref={inputSearch} type="text" />
        <button>Search</button>
      </form>
      { (
        hasError
          ? <h2>😤 hey! you must provide an id from 1 to 126😅</h2>
          : 
       <>
      <LocationInfo 
        location = {location}
      />
      <div className='second'>
        {
          location?.residents.map(url => (
            <ResidentCard 
              key={url}
              url={url}
                 />
               ))
            }
        </div>
        </>
        )
      }
    </div>
    )
}

export default App
