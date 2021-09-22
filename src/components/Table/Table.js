import "./Table.css"

const Table = (props) => {
    let optionsLoaded=""
    let changesetOptions=""
        if (props.options && props.options.allowComments ) optionsLoaded = Object.entries(props.options.properties).map(([key, value]) => {
        return (
            
        <tr>
        <td>{key}</td>
        <td>{value.description}</td> 
        <td>{value.type}</td> 
        <td>{value.group}</td>
        </tr>
    )})

    //changeset data is sctructured dofferently and needs to be mapped differently. still unsure of this data
    if (props.options && props.options.oneOf) changesetOptions = Object.entries(props.options.oneOf).map(([key, value]) => {
        return (
            <tr>
        <td>1</td>
        <td>2</td> 
        <td>3</td> 
            </tr>
        )
    })

    return (
        <div>
            <table id="options">
                { props.options && (
                <thead>
                    <td>Properties</td>
                    <td>Description</td>
                    <td>Type</td>
                    <td>Group</td>
                </thead> ) }
                <tbody>
                    {optionsLoaded}
                    {changesetOptions}
                </tbody>
            </table>
</div>
    )
    }

export default Table;