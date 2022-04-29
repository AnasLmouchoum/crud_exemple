package crud.example.studentsysteme.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import crud.example.studentsysteme.model.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student, Integer> {

}
