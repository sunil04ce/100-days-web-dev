let courseName = 'Js course';
let coursePrice = 99;
let courseGoals = ['Web Dev', 'Dev Ops', 'Solution Architect'];

// alert(courseName);
// alert(coursePrice);
// alert(courseGoals);

let onlineCourse = { name: courseName, price: coursePrice, goals: courseGoals };
alert(onlineCourse.name);
alert(onlineCourse.price);
alert(onlineCourse.goals);

function getListItem(array, arrayIndex) {
    let element = array[arrayIndex];
    return element;
}

alert(getListItem(onlineCourse.goals, 1));


