import React from 'react';
import {useParams} from "react-router-dom";

export const Details = (props) => {
   const { name } = useParams()
    return (
        <div>
            { name }
        </div>
    );
};

