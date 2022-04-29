import { Component } from "react";


class StudentForm extends Component {
    state = {
        id: null,
        name : "",
        address: "",
    }    
    handleChange = (e) => {
        this.setState({
            id : document.getElementById('id').value,
            name : document.getElementById('name').value,
            address : document.getElementById('adr').value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const student = this.state;
        console.log(student);
        fetch(
            "http://localhost:8080/student/add",
            {
                method : "POST",
                headers : {"Content-Type" : "application/json"},
                body : JSON.stringify(student),
            }
        ).then( () => {
            console.log("Student Added")
        });
        document.getElementById('id').value = "";
        document.getElementById('name').value = "";
        document.getElementById('adr').value = "";
        
    }
    render(){
        return(
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Student Name</label>
                        <input onChange={this.handleChange} type="text" className="form-control" id="name" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Student's address</label>
                        <input onChange={this.handleChange} type="text" className="form-control" id="adr" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <input type="hidden" id="id"></input>
                    <button type="submit" className="btn btn-primary">Add Student</button>
                </form>
            </div>
        )
    }
}

export default StudentForm