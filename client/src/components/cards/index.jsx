import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams } from "react-router-dom";
import "./index.scss"
const Cards = () => {
    const [cards, setCards] = useState([])
    const [toggle, setToggle] = useState(true)
    const {_id} = useParams()

    useEffect(() => {
      axios.get(`http://localhost:8080/`).then((data) => setCards(data.data))
    }, [])
    
    const handleDelete = (_id) => {
      axios.delete(`http://localhost:8080/${_id}`).then((data) =>  axios.get(`http://localhost:8080/`).then((data) => setCards(data.data))
      )
    }

    const handleSearch = (value) => {
      axios.get(`http://localhost:8080/`).then((data) => {
        let searchByName = data.data.filter((card) => card.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()))
        setCards(searchByName)
      })
    }

   const handleSort = () => {
    setToggle(!toggle)
    if(toggle){
      let sortBySubject = cards.sort((a, b) => a.salary > b.salary ? 1: -1)
      setCards([...sortBySubject])
    }else{
      axios.get(`http://localhost:8080/`).then((data) => setCards(data.data))
    }
   }

  return (
    <div id='Cards'>
              <input type="text"  className='search' onChange={(e) => handleSearch(e.target.value)}/>
              <button onClick={() => handleSort()} className="sortBtn"> Sort </button>
        <div className="container">
            <div className="cards">
                {cards.map((card) => {
                    return (
                        <div className="card">
                          <Link to={`/details/${card._id}`}>
                            <div className="card-img">
                            <img src={card.img} alt="" width={"150px"}/>
                            </div>
                          </Link>
                            <div className="card-text">
                            <h3 className='cardH3'>{card.name}</h3>
                            <p className='cardSubParag'>{card.subject}</p>
                            <p className='cardDesParag'>{card.description}</p>
                            <p className='cardDesParag'>${card.salary}</p>
                            <button onClick={() => handleDelete(card._id)} className="deleteBtn">Delete</button>
                            </div>
                       </div>
                    )
                }  )}
            </div>
        </div>
    </div>
  )
}

export default Cards