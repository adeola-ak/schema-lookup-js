
import "./Graph.css"
import {useEffect, useState} from "react"
import axios from 'axios';

const Graph = (props) => {
    let hasOptions=""
    if (props.options) hasOptions = Object.entries(props.options).map(([key, value]) => { 
        return (
        <tr>
            <td>{key}</td>
         <td>{value.description}</td> 
        <td>{value.type}</td> 
        <td>{value.group}</td>
        </tr>
    )})

    return (
        <div>
            <table>
                <tbody>
                    {hasOptions}
                </tbody>
            </table>
</div>
    )
    }

export default Graph;