import { useState } from "react"
import Row from "./row"
function AddEmployee() {
    const [person, setPerson] = useState({
        firstName: '',
        gender: '',
        age: '',
        designation: '',
        department: '',
        joiningDate: '',
        available: true
    });
    const [people, setPeople] = useState([]);

    const handleChange = (e) => {
        const {name, value, type, checked} = e.target
        setPerson({ ...person, [name]: type === "checkbox" ? checked : value});
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (person.firstName 
            && person.gender 
            && isFinite(person.age)
            && person.designation 
            && person.department 
            && person.joiningDate) {
            const newPerson = { ...person, id: new Date().getTime().toString() };
            setPeople([...people, newPerson]);
            setPerson({
                firstName: '',
                gender: '',
                age: '',
                designation: '',
                department: '',
                joiningDate: ''
            })
        }
    };
    
    const handleEdit = (id) => {
        setPeople(people => people.map(findId => {
            return id === findId.id ? {...findId, firstName: "Changed"} : findId
        }))
        // people.forEach(findID => {
        //     id === findID.id ? console.log("found") : console.log("Not found")
        // })
    }

    const peoples = people.map(val =>
        <Row key={val.id}
            // id={val.id}
            // name={val.firstName}
            // department={val.department}
            editVal={() => handleEdit(val.id)}
            // editCheck={() => handleChange(val.id)}
            data={val}
        />
    )

    return (
        <div>
            <div className="modal fade" id="addEmployeeModal" role="dialog" aria-labelledby="addEmployeeModal"
                aria-hidden="true">
                {/* tabindex="-1" */}
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header pt-3 pb-2">
                            <h5 className="modal-title" id="exampleModalCenterTitle">Add Employee</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-row ">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="firstName" className="mb-1">Name</label>
                                        <input type="text"
                                            className="form-control"
                                            id="firstName"
                                            name='firstName'
                                            value={person.firstName}
                                            onChange={handleChange}
                                            placeholder="Enter" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="gender" className="mb-1">Gender</label>
                                        <select className="form-control"
                                            id="gender"
                                            name='gender'
                                            value={person.gender}
                                            onChange={handleChange}
                                        >
                                            <option value="Select">Select</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="age" className="mb-1">Age</label>
                                        <input type="text"
                                            className="form-control"
                                            id="age"
                                            name='age'
                                            value={person.age}
                                            onChange={handleChange}
                                            placeholder="Enter" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="designation" className="mb-1">Designation</label>
                                        <input type="text"
                                            className="form-control"
                                            id="designation"
                                            name='designation'
                                            value={person.designation}
                                            onChange={handleChange}
                                            placeholder="Enter" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="department" className="mb-1">Department</label>
                                        <input type="text"
                                            className="form-control"
                                            id="department"
                                            name='department'
                                            value={person.department}
                                            onChange={handleChange}
                                            placeholder="Enter" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="joiningDate" className="mb-1">Joining Date</label>
                                        <input type="date"
                                            className="form-control"
                                            id="joiningDate"
                                            name='joiningDate'
                                            value={person.joiningDate}
                                            onChange={handleChange}
                                            placeholder="" />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline-danger btn-sm" data-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-success btn-sm" onClick={handleSubmit}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="question-dashboard">
                            <div className="card mt-4 mb-3 mb-md-4">
                                <div className="card-body p-3">
                                    <h5 className="text-secondary mb-2">Available: <span
                                        className="font-weight-bold ml-1 text-dark">08</span></h5>
                                    <h5 className="text-secondary">Total: <span className="font-weight-bold ml-1 text-dark">{people.length}</span>
                                    </h5>

                                    <button className="btn btn-primary mt-4" data-toggle="modal" data-target="#addEmployeeModal">
                                        <i className="fa fa-plus"></i>&nbsp; Add Employee</button>
                                </div>
                            </div>
                            <div className="table-responsive mt-3 mt-md-4 mb-2">
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Department</th>
                                            <th>Available</th>
                                            <th>View Details</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {peoples}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddEmployee