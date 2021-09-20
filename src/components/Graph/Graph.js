import "./Graph.css"
import {useEffect, useState} from "react"
import axios from 'axios';

const Graph = () => {

const [siteConfigOptions, setSiteConfigOptions] = useState() 

useEffect(() => {
  axios
      .get("https://raw.githubusercontent.com/sourcegraph/sourcegraph/main/schema/site.schema.json", {
        headers: {
          "Content-Type": "application/json"
        },
      })
      .then(response => {
        console.log(response.data.properties);
        setSiteConfigOptions(response.data.properties);
              })
      .catch(ex => {
        const error =
        ex.response.status === 404
          ? "Resource Not found"
          : "An unexpected error has occurred";
      });

  }, []);

    return (
<div>HI</div>
    )

    }

export default Graph;