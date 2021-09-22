import {useState} from "react"
import axios from "axios"
import Graph from "./components/Graph/Graph"
import Button from "./components/Button/Button"

import logo_light from "./assets/Sourcegraph_Logo_light.png"
import './App.css';


function App() {
  const [options, setOptions] = useState();

  const apiCall = (url) => {
    axios
      .get(url)
       .then(response => setOptions(response.data))
       .catch(error => {console.log(error);})
        console.log(options);
        console.log(options);

      };
    
  const handleGetJson = (url) => {
    apiCall(url);
  }

  return (
    <div className="App">
      <img
				alt="sourcegraph-logo light"
				src={logo_light}
				className="logo"
			/>

      <div className="button-container">
      <h4>Please choose the file you wish to explore configuration options for</h4>
      <Button label="Site Config" handleClick={() => handleGetJson("https://raw.githubusercontent.com/sourcegraph/sourcegraph/main/schema/site.schema.json") }/>
      <Button label="GitHub Config" handleClick={() => handleGetJson("https://raw.githubusercontent.com/sourcegraph/sourcegraph/main/schema/github.schema.json") }/>
      <Button label="GitLab Config" handleClick={() => handleGetJson("https://raw.githubusercontent.com/sourcegraph/sourcegraph/main/schema/gitlab.schema.json") }/>
      <Button label="Gitolite Config" handleClick={() => handleGetJson("https://raw.githubusercontent.com/sourcegraph/sourcegraph/main/schema/gitolite.schema.json") }/>
      <Button label="Changeset Config" handleClick={() => handleGetJson("https://raw.githubusercontent.com/sourcegraph/sourcegraph/main/schema/changeset_spec.schema.json") }/>
      </div>
      <Graph options={options}/>
    </div>
  );
}

export default App;



// signs: {
//   adeola: {
//     sun: cancer,
//     moon: test,
//     rising: test 
//   },
//   vonte: {
//     sun: virgo,
//     moon: test,
//     rising: test
//   },


// }