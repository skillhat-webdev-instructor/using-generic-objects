/* This is a simple example of creating a generic object in JavaScript */

/** The origin of objects is that they evolved from arrays.
 * In the early days of JavaScript, arrays were used to store collections 
 * of data.
 * However, arrays are not the best way to store collections of data.
 * A collection of data is a group of related data.
 * An example of a collection of data is a student's record.
 * A student's record can contain the student
 * name, age, and courses they are taking.
 * 
 * Using only arrays, information was often nested in other arrays.
 * For example, a student's record could be stored in an array like this:
 * 
 * let studentRecord = ["John Doe", 20, ["Math", "English", "Physics"]];
 * To access the student's name, you would use studentRecord[0].
 * To access the student's age, you would use studentRecord[1].
 * To access the student's courses, you would use studentRecord[2].
 * However, to access the first course, you would use studentRecord[2][0].

 * What if you had a property that was nested even further only using arrays?
 * For example, a student's record could be stored in an array like this:
 * let studentRecord = ["John Doe", 20, ["Math", "English", "Physics", [90, 80, 70]]];
 * To access the student's name, you would use studentRecord[0].
 * To access the student's age, you would use studentRecord[1].
 * To access the student's courses, you would use studentRecord[2].
 * To access the first course, you would use studentRecord[2][0].
 * To access the first score, you would use studentRecord[2][3][0].
    
 * As you can see, the further the information is nested, the more complex
 * it becomes to access it.
 * 
 * One solution that evolved from this problem was to use associative arrays.
 * Associative arrays are arrays that use strings as indexes instead of numbers.
 * For example, a student's record with only arrays could be stored in an associative array 
 * like this:
 * 
 * let studentRecord = [];
 * studentRecord["name"] = "John Doe";
 * studentRecord["age"] = 20;
 * studentRecord["courses"] = ["Math", "English", "Physics"];
 * studentRecord["scores"] = [90, 80, 70];
 * 
 * To access the student's name, you would use studentRecord["name"].
 * To access the student's age, you would use studentRecord["age"].
 * To access the student's courses, you would use studentRecord["courses"].
 * To access the first course, you would use studentRecord["courses"][0].
 * To access the first score, you would use studentRecord["scores"][0].

 * Associative arrays are better than regular arrays 
 * because they allow you to use strings as indexes.
 * However, associative arrays still have some limitations.
 * One limitation is that you cannot easily loop through 
 * the properties of an associative array.
 * Another limitation is that you cannot easily get the property names
 * of an associative array.
 * 
 * Note that both arrays and associative arrays are still used in JavaScript.
 * 
 * But an alternative, and effective, solution to the 
 * problem of storing collections of data is to use objects.
 * 
 * Objects are designed to store collections of data.
 * Objects are a better way to store collections of data 
 * because they have flexibility and are easy to use.
 * 
 */


// Here we see an example of creating a generic object
let genericObject = {
    property1: "value1", /* stores a string */
    property2: 100, /* stores a number */
    property3: ["value1", 2, new Date()],
    /* the above property3 stores an array of mixed values */
};

// access the properties of the object
console.log("Accessing the properties of the object");
console.log(genericObject.property1);
console.log(genericObject.property2);   
console.log(genericObject.property3);

// access the elements of the array stored in property3
console.log("Accessing the array elements in property3");
console.log(genericObject.property3[0]);
console.log(genericObject.property3[1]);
console.log(genericObject.property3[2]);

// loop through all the properties of the object 
// and print the property names
console.log("Looping through all the properties of the object");
for (let property in genericObject) {
    console.log(property);
}

// alternatatvely, you can use the Object.keys() method 
// to get the property names
console
let propertyNames = Object.keys(genericObject);
console.log(propertyNames);

// you can combine arrays and objects to get a more complex data structure
let complexObject = {
    property1: "value1",
    property2: 100,
    property3: ["value1", 2, new Date()],
    property4: {
        subProperty1: "value1",
        subProperty2: 200,
        subProperty3: ["value1", 2, new Date()],
    }
};

// access the properties of the object
console.log("Accessing the properties of a complex organized object");
console.log(complexObject.property1);
console.log(complexObject.property2);
console.log(complexObject.property3);
console.log(complexObject.property4);
console.log(complexObject.property4.subProperty1);
console.log(complexObject.property4.subProperty2);
console.log(complexObject.property4.subProperty3);
console.log(complexObject.property4.subProperty3[0]);


// how to loop through all the properties of an object as well
// as the properties of an object that is nested in another object
console.log("Looping through all the properties of a complex organized object");
for (let property in complexObject) {
    console.log(property);
    if (typeof complexObject[property] === "object") {
        for (let subProperty in complexObject[property]) {
            console.log(subProperty);
        }
    }
}

// using object.keys() to get the property names of all objects, 
// including nested objects
console.log("Using Object.keys() to get the property names of all objects, including nested objects");
let propertyNames2 = Object.keys(complexObject);
console.log(propertyNames2);
for (let property of propertyNames2) {
    console.log(property);
    if (typeof complexObject[property] === "object") {
        let subPropertyNames = Object.keys(complexObject[property]);
        console.log(subPropertyNames);
        for (let subProperty of subPropertyNames) {
            console.log(subProperty);
        }
    }
}





