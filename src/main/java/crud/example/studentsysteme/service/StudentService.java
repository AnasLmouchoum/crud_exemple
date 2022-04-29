package crud.example.studentsysteme.service;

import java.util.List;

import crud.example.studentsysteme.model.Student;

public interface StudentService {

	public Student saveStudent(Student student);
	public List<Student> getAllStudent();
	public void deleteStudent(int id);
	
}
