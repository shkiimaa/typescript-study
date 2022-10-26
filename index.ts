let userName: string = 'kim';

let test = 'kim';

//array
let userName2: string[] = ['kim', 'park'];
//type을 2가지 이상 사용할때
let userName3: (string | number)[] = ['kim', 123];

//object
let age: { age: number } = { age: 29 };
//속성을 옵션으로 사용할때
let age2: { age?: number } = { age: 29 };

//function
function plus(x: number): number {
  return x + 2;
}

let project: { member: string[]; days: number; started: boolean } = {
  member: ['kim', 'park'],
  days: 30,
  started: true,
};

// project 변수 우측에 적으면 됩니다.

// member 안엔 문자로 가득한 array만 들어올 수 있고

// days는 숫자, started는 true/false만 들어올 수 있습니다.
