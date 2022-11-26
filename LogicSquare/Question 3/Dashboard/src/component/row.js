
function row(props) {
    // console.log(props)
    return (
        <tr>
            <td>{props.data.firstName}</td>
            <td>{props.data.department}</td>
            <td>
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id={props.data.id}
                    // checked={props.data.available}
                    // onChange={props.editCheck}
                    />
                    <label className="custom-control-label" htmlFor={props.data.id}></label>
                </div>
            </td>
            <td>
                <button type="button" 
                className="btn btn-outline-info btn-sm" 
                data-toggle="modal" 
                data-target="#addEmployeeModal"
                id={props.data.id}
                onClick={props.editVal}
                >
                    <i className="fa fa-edit"></i>&nbsp; Edit
                </button>
                <button type="button" className="btn btn-outline-danger btn-sm" id={props.data.id}>
                    <i className="fa fa-trash"></i>&nbsp; Delete
                </button>
            </td>
        </tr>
    )
}

export default row