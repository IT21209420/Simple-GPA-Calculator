import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    onSnapshot,
    query,
    updateDoc,
  } from "firebase/firestore";
import { db } from "../dbConfig/firebase";

export async function addStudent(studentName , gpa){
    const docRef  = await addDoc(collection(db, "students"), {
        studentName: studentName,
        gpa: gpa,
      });
     return docRef

     //error handling should done
}
export async function fetchStudents(setStudents){
    const q = query(collection(db, "students"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let studentsArr = [];
      querySnapshot.forEach((doc) => {
        studentsArr.push({ ...doc.data(), id: doc.id });
      });
      setStudents(studentsArr);
    });
    return () => unsubscribe();
 //error handling should done
}