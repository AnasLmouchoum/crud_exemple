package crud.example.studentsysteme.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import crud.example.studentsysteme.model.Student;
import crud.example.studentsysteme.repository.StudentRepository;

@Service
public class StudentServiceIml implements StudentService {

	@Autowired
	private StudentRepository studentRepository;
	
	@Override
	public Student saveStudent(Student student) {
		return studentRepository.save(student);
	}

	@Override
	public List<Student> getAllStudent() {
		return studentRepository.findAll();
	}

	@Override
	public void deleteStudent(int id) {
		studentRepository.deleteById(id);
	}

}
