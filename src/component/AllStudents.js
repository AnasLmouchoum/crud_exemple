import React, { useEffect, useState } from "react";

// const getStudent  = async () => {
//     const a = await loadData();
//     return a;
// }

// const loadPgae = () => {
//     const student = getStudent();
//     console.log(student);
//     const std = student.length ? (
//         student.map(st => {
//             return(
//                 <tr key={st.id}>
//                     <td>{st.name}</td>
//                     <td>{st.address}</td>
//                     <td><button className="btn btn-primary" onClick={() => {handleUpdate(st.id, st.name, st.address)}}>Update</button> <button className="btn btn-danger" onClick={() => handleDelete(st.id)}>Delete</button></td>
//                 </tr>
//             )
//         })
//     ) : null;
//     document.getElementById('students').value = std;
// }

const handleUpdate = (id, name, address) => {
    document.getElementById('name').value = name;
    document.getElementById('adr').value = address;
    document.getElementById('id').value = id;
}

const handleDelete = (id) => {
    fetch("http://localhost:8080/student/delete/"+id,
    {
        method : "DELETE",
    }).then(() => {console.log("Student Deleted")})
    // const std = loadPgae();
    // console.log(std);
    // document.getElementById('students').value = {std};
}

// const loadData = async () => {
//     return fetch("http://localhost:8080/student/getall").then(res => res.json());
// }

const  AllStudents = () => {
    
    const[student, setStudents] = useState([]);
    

    useEffect(() => {
        fetch("http://localhost:8080/student/getall").then(res => res.json()).then((result)=>{
                setStudents(result);
            }
        )
    }, [])
    
    const std = student.length ? (
        student.map(st => {
            return(
                <tr key={st.id}>
                    <td>{st.name}</td>
                    <td>{st.address}</td>
                    <td><button className="btn btn-primary" onClick={() => {handleUpdate(st.id, st.name, st.address)}}>Update</button> <button className="btn btn-danger" onClick={() => handleDelete(st.id)}>Delete</button></td>
                </tr>
            )
        })
    ) : null;
    return(

        <div className="container">
            <h4>Students list</h4>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Operation</th>
                    </tr>
                </thead>
                <tbody id="students">
                    {std}
                </tbody>
            </table>
        </div>

    );
}

export default AllStudents