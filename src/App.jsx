import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Footer from "./components/Footer";
import "./App.css";
export default function App() {
    const students = [
   {
      id: 1,
      name: "Geetha",
      college: "Vignan University",
      skill: "React"
   },

   {
      id: 2,
      name: "Ram",
      college: "ABC Engineering College",
      skill: "Java"
   },

   {
      id: 3,
      name: "Sam",
      college: "XYZ Institute of Technology",
      skill: "Node.js"
   },

   {
      id: 4,
      name: "Ravi",
      college: "PQR College",
      skill: "Python"
   },

   {
      id: 5,
      name: "Anjali",
      college: "SRM University",
      skill: "UI/UX Design"
   },

   {
      id: 6,
      name: "Kiran",
      college: "JNTU",
      skill: "Machine Learning"
   }
];
  return (
    <div>
      <Navbar/>
  
      {
        students.map((student)=>(
          <Card name={student.name} college={student.college} skills={student.skill}/>
        ))
      }
   <Footer/>
    </div>
  )
}
