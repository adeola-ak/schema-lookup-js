import "./Graph.css"
import {useEffect, useState} from "react"
import axios from 'axios';

const Graph = (props) => {
    let hasOptions=""
    if (props.options) hasOptions = Object.entries(props.options).map(([key, value]) => { return <div><h6>{key}</h6> <p>{value.description}</p> <p>{value.type}</p> <p>{value.group}</p></div>} )

    return (
        <div>
{hasOptions}</div>
    )
    }

export default Graph;