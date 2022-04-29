package crud.example.studentsysteme.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import crud.example.studentsysteme.model.Student;
import crud.example.studentsysteme.service.StudentService;

@RestController
@CrossOrigin
public class StudentController {

	@Autowired
	private StudentService studentService;
	
	@PostMapping("/student/add")
	public String add(@RequestBody Student student) {
		studentService.saveStudent(student);
		return "New Student is added";
	}
	
	@GetMapping("/student/getall")
	public List<Student> getAllStudents() {
		return studentService.getAllStudent();
	}
	
	@DeleteMapping("/student/delete/{id}")
	public void deleteStudent(@PathVariable(name = "id") int id) {
		studentService.deleteStudent(id);
	}
}
