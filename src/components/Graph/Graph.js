
import "./Graph.css"

const Graph = (props) => {
    let hasOptions=""
    if (props.options) hasOptions = Object.entries(props.options.properties).map(([key, value]) => {
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
            <table id="options">
                {/* <thead><tr>hi</tr></thead> */}
                <tbody>
                    {hasOptions}
                </tbody>
            </table>
</div>
    )
    }

export default Graph;