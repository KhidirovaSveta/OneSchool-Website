import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from "react-router-dom";
import "./index.scss"
import { useNavigate } from "react-router-dom";
import {Helmet} from "react-helmet";

const Detail = () => {
    const [detail, setDetail] = useState([])
    const {_id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8080/${_id}`).then((data) => setDetail(data.data))
      }, [])
      

      const handleDelete = () => {
        axios.delete(`http://localhost:8080/${_id}`).then((data) =>  axios.get(`http://localhost:8080/${_id}`).then((data) => setDetail(data.data)))
        navigate("/")
      }
  return (
    <div id='Detail'>
        <div className="container">
            <Helmet>
                <meta charSet="utf-8" />
                <title>{detail.name}</title>
            </Helmet>
            <div className="detail">
               <img src={detail.img} alt="" width={"350px"}/>
               <div className="detail-info">
                <h2>{detail.name}</h2>
                <p className='subParag'>{detail.subject}</p>
                <p>{detail.description}</p>
                <p className='salary'>${detail.salary}</p>

                <button onClick={() => handleDelete(detail._id)} className="delDetailBtn"> Delete </button><br/>
                <button onClick={() => navigate(-1)} className="goBackBtn"> Go Back </button>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Detail