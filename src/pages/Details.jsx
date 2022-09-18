import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {IoArrowBack} from "react-icons/io5";
import {searchByCountry} from "../config";
import axios from "axios";
import {Button} from "../components/Button";
import {Info} from "../components/Info";

export const Details = (props) => {
   const [country, setCountry] = useState(null)
   const { name } = useParams()
   const navigate = useNavigate()
    console.log(country)
    useEffect(() => {
        axios.get(searchByCountry(name)).then
        (({data}) => setCountry(data[0]))
    }, [name])
    return (
        <div>
            <Button onClick={() => navigate(-1)}>
                <IoArrowBack  /> Back
            </Button>
            { country &&
                <Info navigate={navigate} {...country}/>
            }
        </div>
    );
};

