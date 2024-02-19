# Web API: Using Generic Objects

Edward Apostol, for SkillHat, February 2024

This repository demonstrates using JavaScript Objects,their history and relationship to arrays, and some example uses of generic JavaScript Object.

## How to Use

Simply `git clone` this repository to a local working folder and open up the using-generic-objects folder in visual code. From there, open up both the index.html and main.js to explore.

## About Arrays

The origin of objects is that they evolved from arrays. In the early days of JavaScript, arrays were used to store collections of data.

However, arrays are not the best way to store complex collections of data. Recall that a collection of data is a simply a group of data that is related to other by some human defined category.

An example of a collection of data is a student's record. A student's record can contain the student's name, age, and courses they are taking. Using only arrays, in order to store data with more complex relationships, information was often nested in other arrays.

For example, a student's record could be stored in an array like this:

```javascript
let studentRecord = ["John Doe", 20, ["Math", "English", "Physics"]];
```

* To access the student's name, you would use studentRecord[0].
* To access the student's age, you would use studentRecord[1].
* To access the student's courses, you would use studentRecord[2].

However, to access the first course, you would use:

```javascript
let firstCourse = studentRecord[2][0];
```

Which is good if you only have one-level of nested data, (i.e. an array inside an array).

## The problem with Organizing Data with Arrays

What if you had a property that was nested even further only using arrays? For example, a student's record could be stored in an array like this:

 ```javascript
 let studentRecord = ["John Doe", 20, ["Math", "English", "Physics", [90, 80, 70]]];
 ```

* To access the student's name, you would use `studentRecord[0]`.

* To access the student's age, you would use `studentRecord[1]`.

* To access the student's courses, you would use `studentRecord[2]`.

* To access the first course, you would use `studentRecord[2][0]`.

* To access the first score, you would use `studentRecord[2][3][0]`.
  
As one can see, the further the information is nested, the more complex it becomes to access it. One solution that evolved from this problem was to use *associative arrays*.

## About Associative Arrays

But what of Associative arrays? They are arrays that use strings as indexes instead of numbers. For example, a student's record with only arrays could be stored in an associative array like this:

 ```javascript
let studentRecord = [];
studentRecord["name"] = "John Doe";
studentRecord["age"] = 20;
studentRecord["courses"] = ["Math", "English", "Physics"];
studentRecord["scores"] = [90, 80, 70];
 ```
  
* To access the student's name, you would use `studentRecord["name"]`.
* To access the student's age, you would use `studentRecord["age"]`.
* To access the student's courses, you would use `studentRecord["courses"]`.
* To access the first course, you would use `studentRecord["courses"][0]`.
* To access the first score, you would use `studentRecord["scores"][0]`.

Associative arrays are better than regular arrays because they allow you to use strings as indexes.

However, associative arrays still have some limitations. One limitation is that you cannot easily loop through the properties of an associative array. Another limitation is that you cannot easily get the property names of an associative array.

Note that both arrays and associative arrays are still used in JavaScript.

## Introducing Objects

But an alternative, and effective, solution to the problem of storing collections of data is to use objects.

Objects are designed to store collections of data
Objects are a better way to store collections of data because they have flexibility and are easy to use.

## Exploring Objects and they Syntax

Explore the file main.js and review the commentary there, along with running the index.html file locally in your web browser, which will load up main.js and execute it. The contents are outputted to the console.

A sample object looks like this

```javascript
let sampleObject = {
    firstName: "Edward",
    lastName: "Apostol"
}
```

Additional information would be find in the main.js file.
