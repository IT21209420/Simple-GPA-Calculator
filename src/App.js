import { useEffect, useState } from 'react';
import './App.css';
import Students from './components/Students';
import AddStudent from './components/AddStudent';
import * as api from "./network/api";
import {  deleteDoc, doc, } from 'firebase/firestore';
import { db } from './dbConfig/firebase';

function App() {
  const [students, setStudents] = useState([]); 
 
  const deleteUser = async(student)=>{
   
    setStudents(students.filter((existingStudent) => existingStudent.id !== student.id)); 
    await deleteDoc(doc(db, "students", student.id)); 
     //error handling should done
   
  }
  useEffect(() => {
    api.fetchStudents((studentArr) => {
      const copyArray = [...studentArr];
      copyArray.sort((a, b) => {
        return  b.gpa - a.gpa;
      });
      setStudents(copyArray);
    })
     //error handling should done
  }, []);


  
  return (
    <div >
     <AddStudent  setStudents={(newStudent) => {
              const copyArray = [...students, newStudent]
              copyArray.sort((a, b) => {
                return  b.gpa - a.gpa;
              });
              setStudents(copyArray);
            }} />
     <Students students={students} deleteUser={deleteUser}/>
    </div>
  );
}

export default App;
