import PropTypes from "prop-types"

const Student = (props) => {
  return (
    <div>
        <div className="Student">
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>Student: {props.isStudent ? "Yes" : "Not"}</p>
        <Student />
      </div>
    </div>
  )
}
Student.propType={
name : PropTypes.string,
age: PropTypes.number,
isStudent:PropTypes.bool,
}
Student.propType={
    name: "umran",
    age: 0,
    isStudent:false,
}
export default Student




  