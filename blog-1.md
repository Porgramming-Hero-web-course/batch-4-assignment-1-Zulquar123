//=================================== union-types ==========================================================

Union types are used when a value can be more than a single type.
A union type allows a variable to hold one of several types. It’s created using the | operator.
We can use it ,When we want a variable to accept multiple types,Such as when a property would be 
string or number or boolean or null or undefined.

Example:

function HelloUnion(value: string | number | boolean | null | undefined) {
    if (typeof value === 'string') {
        console.log(`I am ${typeof value}`);
    }
    if (typeof value === 'number') {
        console.log(`I am ${typeof value}`);
    }
    if (typeof value === 'boolean') {
        console.log(`I am ${typeof value}`);
    }
    if (value === null) {  
        console.log(`I am null`);
    }
    if (typeof value === 'undefined') {
        console.log(`I am undefined`);
    }
}

HelloUnion("Programming Hero"); // For string
HelloUnion(786); // For number
HelloUnion(true); // For boolean
HelloUnion(null); // For null
HelloUnion(undefined); // For undefined



//=================================== intersection-types ==========================================================

An intersection type is a type that merges(combines) several kinds into one. This allows you to combine many types to create a single type with all of the properties that you require. An object of this type will have members from all of the types given. The ‘&’ operator is used to create the intersection type.

Example :

interface Student { 
  student_id: number; 
  name: string; 
} 
  
interface Teacher { 
  course_name: string; 
  teacher_name: string; 
} 
  
type intersected_type = Student & Teacher; 
  
let school: intersected_type = { 
  student_id: 3232, 
  name: "Zulquar Nain Ansari", 
  course_name: "Programming Hero - Level - 2.0", 
  teacher_name: "Jhankar Mahbub", 
}; 
 
console.log(school.student_id);
console.log(school.name);
console.log(school.course_name); 
console.log(school.teacher_name); 