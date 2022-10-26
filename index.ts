let userName: string = 'kim';

let test = 'kim';

//array
let userName2: string[] = ['kim', 'park'];
//type을 2가지 이상 사용할때 union type
let userName3: (string | number)[] = ['kim', 123];
// let userName4: string | number[] = [1,2,3];
//string | number[] 이렇게 작성하면 string 또는 number로된 array 이므로 array안에 number와 string으로 타입지정을 하려면 소괄호를 써줘야함

//object
let age: { age: number | string } = { age: 29 };

//속성을 옵션으로 사용할때
let age2: { age?: number } = { age: 29 };

//function
function plus(x: number): number {
  return x + 2;
}

//test1

/* project 변수 우측에 적으면 됩니다.
member 안엔 문자로 가득한 array만 들어올 수 있고
days는 숫자, started는 true/false만 들어올 수 있습니다. */

let project: { member: string[]; days: number; started: boolean } = {
  member: ['kim', 'park'],
  days: 30,
  started: true,
};
