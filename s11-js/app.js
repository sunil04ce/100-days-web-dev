
let age = 35;
let userName = 'Jack';
let hobbies = ['Sports', 'Reading', 'Walking'];
// alert(hobbies[1]);

let job = {
    title: 'Developer',
    place: 'NY',
    salary: 50000,
};
// alert(job.title);

function calAdultAge(userAge) {
    return userAge - 18;
}

alert(calAdultAge(age));
age = 45;
alert(calAdultAge(age));

// let greetingText = 'Hi, I\'m Jack!';
// let age = 50;
// alert(greetingText);
// greetingText = "This is really Jack!";
// alert(greetingText);
// alert(age);
// age = 51;
// alert('Updated age : ' + age);