# ๐ ํ์์คํฌ๋ฆฝํธ ์ค์นํ๊ธฐ

`npm install -g typescript`

\*๋งฅ๋ถ์ ๊ฒฝ์ฐ ๋ณด์์๋ฌ๊ฐ ๋จ๋ฉด `sudo npm install ~`

์น๋ธ๋ผ์ฐ์ ๋ tsํ์ผ์ ์์๋ฃ์ง ๋ชปํด jsํ์ผ๋ก ๋ณํ ์์์ ํด์ผํ๋ค.

Terminal์ `tsc -w` ์๋ ฅํด๋๋ฉด ์๋์ผ๋ก tsํ์ผ์ jsํ์ผ๋ก ๋ณํํด์ค

HTMLํ์ผ ๋ฑ์์ ํ์์คํฌ๋ฆฝํธ๋ก ์์ฑํ ์ฝ๋๋ฅผ ์ด์ฉํ๋ ค๋ฉด
.ts๊ฐ ์๋ ๋ณํ๋ .js ํ์ผ์ ์ฌ์ฉํด์ผํจ

`<script src='๋ณํ๋ํ์ผ.js'></script>`
<br>
<br>

### ํ์์คํฌ๋ฆฝํธ ์ปดํ์ผ

**โผ ํ์์คํฌ๋ฆฝํธ ์ฌ์ฉ ์ tscofig.json ํ์ผ์ ๋ง๋ค์ด ์๋ ๋ด์ฉ์ ์์ฑํด์ผํจ!**

```json
{
  "compilerOptions": {
    "target": "ES5",
    "module": "commonjs",
    "noImplicitAny": true,
    "strictNullChecks": true
  }
}
```

`'target'` ์ Tsํ์ผ์ ์ด๋ค ๋ฒ์ ์ Js๋ก ๋ฐ๊ฟ์ง ์ ํ๋ ๋ถ๋ถ<br>
`'module'` ์ Js ํ์ผ๊ฐ import ๋ฌธ๋ฒ์ ๊ตฌํํ  ๋ ์ด๋ค ๋ฌธ๋ฒ์ ์ธ์ง ์ ํ๋ ๋ถ๋ถ
<br>commonjs๋ require ๋ฌธ๋ฒ es2015, esnext๋ import ๋ฌธ๋ฒ์ ์ฌ์ฉ

~~IE ํธํ์ฑ์ ์ํ๋ฉด es5, commonjs๋ฅผ ์ฌ์ฉ~~<br>
_IE๋ ์ฃฝ์๋ค..._

`'noImplicitAny'` ๋ anyํ์์ด ์๋์น ์๊ฒ ๋ฐ์ํ  ๊ฒฝ์ฐ ์๋ฌ๋ฅผ ๋์์ค<br>
`'strictNullChecks'` ๋ `null` `undefined` ํ์์ด ์ด์ํ ์กฐ์ํ๋ฉด ์๋ฌ๋ฅผ ๋์
<br>
<br>

### tsconfig์ ๋ค์ด๊ฐ๋ ๊ธฐํ ํญ๋ชฉ๋ค

```json
{
  "compilerOptions": {
    "target": "es5", // 'es3', 'es5', 'es2015', 'es2016', 'es2017','es2018', 'esnext' ๊ฐ๋ฅ
    "module": "commonjs", //๋ฌด์จ import ๋ฌธ๋ฒ ์ธ๊ฑด์ง 'commonjs', 'amd', 'es2015', 'esnext'
    "allowJs": true, // js ํ์ผ๋ค ts์์ importํด์ ์ธ ์ ์๋์ง
    "checkJs": true, // ์ผ๋ฐ js ํ์ผ์์๋ ์๋ฌ์ฒดํฌ ์ฌ๋ถ
    "jsx": "preserve", // tsx ํ์ผ์ jsx๋ก ์ด๋ป๊ฒ ์ปดํ์ผํ  ๊ฒ์ธ์ง 'preserve', 'react-native', 'react'
    "declaration": true, //์ปดํ์ผ์ .d.ts ํ์ผ๋ ์๋์ผ๋ก ํจ๊ป์์ฑ (ํ์ฌ์ฐ๋ ๋ชจ๋  ํ์์ด ์ ์๋ ํ์ผ)
    "outFile": "./", //๋ชจ๋  tsํ์ผ์ jsํ์ผ ํ๋๋ก ์ปดํ์ผํด์ค (module์ด none, amd, system์ผ ๋๋ง ๊ฐ๋ฅ)
    "outDir": "./", //jsํ์ผ ์์ํ ๊ฒฝ๋ก๋ฐ๊พธ๊ธฐ
    "rootDir": "./", //๋ฃจํธ๊ฒฝ๋ก ๋ฐ๊พธ๊ธฐ (js ํ์ผ ์์ํ ๊ฒฝ๋ก์ ์ํฅ์ค)
    "removeComments": true, //์ปดํ์ผ์ ์ฃผ์์ ๊ฑฐ

    "strict": true, //strict ๊ด๋ จ, noimplicit ์ด์ฉ๊ตฌ ๊ด๋ จ ๋ชจ๋ ์ ๋ถ ์ผ๊ธฐ
    "noImplicitAny": true, //anyํ์ ๊ธ์ง ์ฌ๋ถ
    "strictNullChecks": true, //null, undefined ํ์์ ์ด์ํ ์ง ํ ์ ์๋ฌ๋ด๊ธฐ
    "strictFunctionTypes": true, //ํจ์ํ๋ผ๋ฏธํฐ ํ์์ฒดํฌ ๊ฐํ๊ฒ
    "strictPropertyInitialization": true, //class constructor ์์ฑ์ ํ์์ฒดํฌ ๊ฐํ๊ฒ
    "noImplicitThis": true, //this ํค์๋๊ฐ any ํ์์ผ ๊ฒฝ์ฐ ์๋ฌ๋ด๊ธฐ
    "alwaysStrict": true, //์๋ฐ์คํฌ๋ฆฝํธ "use strict" ๋ชจ๋ ์ผ๊ธฐ

    "noUnusedLocals": true, //์ฐ์ง์๋ ์ง์ญ๋ณ์ ์์ผ๋ฉด ์๋ฌ๋ด๊ธฐ
    "noUnusedParameters": true, //์ฐ์ง์๋ ํ๋ผ๋ฏธํฐ ์์ผ๋ฉด ์๋ฌ๋ด๊ธฐ
    "noImplicitReturns": true, //ํจ์์์ return ๋นผ๋จน์ผ๋ฉด ์๋ฌ๋ด๊ธฐ
    "noFallthroughCasesInSwitch": true //switch๋ฌธ ์ด์ํ๋ฉด ์๋ฌ๋ด๊ธฐ
  }
}
```

<br>
<br>

# ๐ React ํ๋ก์ ํธ์์ ํ์์คํฌ๋ฆฝํธ ์ฌ์ฉํ๊ธฐ

### ์ด๋ฏธ ์๋ React ํ๋ก์ ํธ์ ์ค์น

`npm install --save typescript @types/node @types/react @types/react-dom @types/jest `

### React ํ๋ก์ ํธ๋ฅผ ์๋ก ๋ง๋ค๋

`npx create-react-app my-app --template typescript`

<br>
<br>

# ๐ ํ์์คํฌ๋ฆฝํธ ๊ธฐ๋ณธ ๋ถ๋ฒ

<br>

## ํ์์คํฌ๋ฆฝํธ ๋ณ์

```ts
let userName: string = 'Kim';
```

๋ณ์๋ฅผ ๋ง๋ค ๋ ํ์์ง์ ์ด ๊ฐ๋ฅํ๋ค. <br>
๋ณ์๋ช: ํ์๋ช
ํ์์ผ๋ก ์ธ ์ ์๋ ๊ฒ๋ค์ string, number, boolean, bigint, null, undefined,[], {} ๋ฑ์ด ์๋ค.

![](img/2022-10-21-15-58-30.png)

![](img/2022-10-21-16-30-43.png) <br>
ํ์์ ์ง์ ํด ๋์ผ๋ฉด ํ์์ด ๋ณ๊ฒฝ๋  ๊ฒฝ์ฐ ์๋ฌ๋ฉ์ธ์ง๋ฅผ ๋์์ค๋ค.<br>
<br>
![](img/2022-10-25-17-59-16.png) <br>
ํ์์ง์ ์ ์๋ต์ด ๊ฐ๋ฅ! ์๋์ผ๋ก ์ง์ ๋๋ค.
<br>
<br>

## array, object ์๋ฃ ํ์์ง์  ๋ฐฉ๋ฒ

```ts
let userName: string[] = ['kim', 'park'];
let age: { age: number } = { age: 29 };
```

- `let age : { age : number } = { age : 29 }` ์ด๋ ๊ฒ ์์ฑํ๋ฉด ์ค๋ธ์ ํธ์๋ `{ age : number }` ์ด๋ ๊ฒ ์๊ธด object๋ง ๋ค์ด์ฌ ์ ์๋ค.

- `let age : { age? : number } = { age : 29 }` key๊ฐ ๋ค์ ?๋ฅผ ์์ฑํ๋ฉด age๋ ์ต์์ผ๋ก ๋์ด age๊ฐ์ด ์์ด๋ ์๋ฌ๊ฐ ๋ฐ์ ์ํ๋ค.
  <br>

- **`age? : number` ๋ `age : number | undefined`์ ๊ฐ๋ค (์ค์)**
  <br>
  <br>

## Union Type

```ts
let userName: string | number = 'Kim';
```

type์ ์ง์ ํ ๋ or ๊ธฐํธ๋ฅผ ์ฌ์ฉํ์ฌ ๋ค์ํ ํ์์ ์ง์  ํ  ์ ์๋ค.

```ts
let userName: string[] | number = 'Kim';
```

์ด๋ฐ์์ผ๋ก ์คํธ๋ง์ด ๋ด๊ธด array ๋๋ ์ซ์๋ก ์ง์  ๊ฐ๋ฅ

```ts
let userName3: (string | number)[] = ['kim', 123];
let userName4: string | number[] = [1, 2, 3];
```

`string | number[]` ์ด๋ ๊ฒ ์์ฑํ๋ฉด string ๋๋ number๋ก๋ array ์ด๋ฏ๋ก<br>
array์์ number์ string์ผ๋ก ํ์์ง์ ์ ํ๋ ค๋ฉด ์๊ดํธ๋ฅผ ์จ์ค์ผํจ<br>
`(string | number)[]` ์ด๋ ๊ฒ!
<br>
<br>

## Any Type

```ts
let userName: any;
userName = 123;
userName = 'kim';
userName = true;
userName = [];

let userInfo: string = userName;
```

anyํ์์ ๋ชจ๋  ์๋ฃํ์ ํ์ฉํด์ค๋ค. ํ์ง๋ง anyํ์์ ์ฐ๋ฉด ํ์์คํฌ๋ฆฝํธ๋ฅผ ์ฌ์ฉํ๋ ์๋ฏธ๊ฐ ์์ด์ง<br>
**anyํ์์ ํ์์ ํด์ ํ๋ ์ฉ๋๋ก ์ฐ์ธ๋ค.** (์ผ๋ฐ js๋ณ์๋ก ๋ง๋ค๊ณ  ์ถ์๋)
<br>
<br>

## Unknown Type

```ts
let userName: unknown;
userName = 123;
userName = 'kim';
userName = true;
userName = [];

let userInfo: string = userName;
```

unknownํ์์ anyํ์๊ณผ ๊ฐ์ ์ญํ ์ ํ์ง๋ง anyํ์๋ณด๋ค ์์ ํ๋ค.

![](img/2022-10-26-16-38-40.png)<br>
anyํ์์ `userInfo` ์ ํ์์ `string`์ผ๋ก ์ง์ ํ๋๋ฐ๋ `userName`์ ํ ๋น์ด ๊ฐ๋ฅํ๋ค.

![](img/2022-10-26-16-40-28.png)<br>
unknownํ์์ `userInfo` ์ `userName`์ ํ ๋นํ๋ฉด ์๋ฌ๊ฐ ๋ฐ์ํ๋ค.<br>
๋ฒ๊ทธ๋ฅผ ๋ฐฉ์งํ๊ธฐ์ํด `any` ํ์๋ณด๋จ `unknown` ํ์์ ์ฌ์ฉํ์
<br>
<br>

## Type alias

```ts
type UserInfo = string;

let userName: UserInfo = 'kim';
```

- ํ์์ ๋ณ์์ ์ ์ฅํด ์ฌ์ฉํ  ์ ์๋ค.
- `type`๋ช์ ์ฒซ ๊ธ์๋ ๋๋ถ๋ถ ๋๋ฌธ์๋ก ์๋ชํ๋ค.
- ํ์๋ณ์๋ ์ฌ์ ์๊ฐ ๋ถ๊ฐ๋ฅํ๋ค.
  <br>
  <br>

## Type alias extend

```ts
//type ํฉ์น๊ธฐ
type Name = string;
type Age = number;
type User = Name | Age;

//object type ํฉ์น๊ธฐ
type PositionX = { x: number };
type PositionY = { Y: number };

type Position = PositionX & PositionY; // { x: number, y: number }
```

`type alias`๋ `union type`์ผ๋ก ๋ง๋ค์ด ์ฌ์ฉ ํ  ์ ์๋ค. <br>
`object ํ์`์ ๊ฒฝ์ฐ `& ์ฐ์ฐ์`๋ก ํ์์ extend ํ  ์ ์์

  <br>
  <br>

## ํจ์์ ํ์ ์ง์ ํ๋ ๋ฐฉ๋ฒ

```ts
function plus(x: number): number {
  return x + 2;
}
```

- ํ๋ผ๋ฏธํฐ์ ๋ฆฌํด๊ฐ์์ ํ์์ ์ง์ ํ  ์ ์๋ค.
- ์ ํจ์๋ ํ๋ผ๋ฏธํฐ์ number, retun ๊ฐ์ผ๋ก number๋ก ์ง์ ํ ๊ฒ
- return๊ฐ์ ํ์์ ํ๋ผ๋ฏธํฐ ๋ค์ ์จ์ค๋ค.
- ํ์์ด ์ง์ ๋ ํ๋ผ๋ฏธํฐ๋ ํ์๋ก ์ฌ์ฉํด์ผํ๋ค. (์ฌ์ฉ์ํ๋ฉด ์๋ฌ๋ฐ์)

![](img/2022-10-22-02-32-04.png)<br>
์ธ์์ string๊ฐ์ ๋ฃ์ผ๋ฉด ์๋ฌ๊ฐ ๋ฌ๋ค.
<br>
<br>

## ํจ์์ ์ธ ์ ์๋ Void Type

```ts
function plus(x: number): viod {
  return x + 1;
}

plus(1); //error
```

voidํ์์ ๋ฆฌํด ํ  ์ผ์ด ์์๋ ๋ฆฌํด์ด ์์ผ๋ฉด ์๋ฌ๋ฅผ ๋ฐ์ํ๋ค.
`:void` ๋ถ๋ถ์ ๋น์๋๋ ๋์ง๋ฉด ์๊ฒฉํ๊ฒ ๊ด๋ฆฌํ๊ธฐ ์ํด ์ด๋ค.
<br>
<br>

## Type Narrowing

```ts
function plus(x: number | string) {
  return x + 1;
}

plus(1);
```

- ์ ํจ์๋ฅผ ์คํํ๋ฉด ์๋ฌ๊ฐ ๋ฌ๋ค.
- x ํ๋ผ๋ฏธํฐ์ ํ์์ด `number | string` ์ผ๋ก ๋์ด ์๋๋ฐ ์ ์๋ฌ๊ฐ ๋ ๊น?
- `number | string` ์ `number`๋ ์๋๊ณ  `string`๋ ์๋ `union type` ์ด๊ธฐ๋๋ฌธ.

์ด์ ๊ฐ์ ๊ฒฝ์ฐ์ Type Narrowing์ ์ฌ์ฉํด์ผํ๋ค.

```ts
function plus(x: number | string) {
  if (typeof x === 'string') {
    return x + '1';
  } else if (typeof x === 'number') {
    return x + 1;
  } else {
    return 0;
  }
}

plus(1);
```

Type Narrowing์ if๋ฌธ ๋ฑ์ผ๋ก ํ์์ ํ๋๋ก ์ ํด์ฃผ๋ ๊ฒ์ ๋ปํ๋ค.<br>
์ ์ฝ๋์ฒ๋ผ `if๋ฌธ`๊ณผ `typeof` ์ฐ์ฐ์๋ฑ์ ์ฌ์ฉํ์ฌ type์ด string์ผ ๊ฒฝ์ฐ, number์ผ ๊ฒฝ์ฐ์ ์คํํ  ๋ก์ง ์ง์ค์ผํ๋ค.
<br>
<br>

## Type Assertion

```ts
function plus(x: number | string) {
  return (x as number) + '1';
}

plus(1);
```

assertion๋ฌธ๋ฒ์ ํ์์ ๋ฎ์ด ์์์ค๋ค. <br>
์ ์ฝ๋์์ `x: number | string`์ผ๋ก ํ์์ ์ง์ ํด ์คฌ๋ค.<br>
ํ๋ผ๋ฏธํฐ x๋ `union type` ์ด๊ธฐ์ narrowing์ ํด์ค์ผ ํ์ง๋ง as ๋ฌธ๋ฒ์ ์ฌ์ฉํ์ฌ ํ์์ ๋ฎ์ด ์์ธ ์ ์๋ค.

```ts
let userName: string = 'kim';
userName as number;
```

as๋ฌธ๋ฒ์ ๋ณต์กํ ํ์(ํ์์ด 2๊ฐ ์ด์) ์ผ๋ ํ๋์ ํ์์ผ๋ก ํ์  ์์ผ์ฃผ๋ ๋ฌธ๋ฒ์ด๋ฏ๋ก<br>
์ ์ฝ๋์ ๊ฐ์ด ํ์์ด 1๊ฐ์ผ๋ ์ฌ์ฉ ๋ถ๊ฐํ๋ค.

```ts
function plus(x: number | string) {
  return (x as number) + '1';
}

plus('1'); // result = 11
```

assertion์ ์ฌ์ฉ์ ์ํ๋๊ฒ ๋ซ๋ค. plus์ string ํ์์ ์ธ์๋ฅผ ๋๊ฒจ๋ assertion์ ํ๋ฉด ๋ฒ๊ทธ ์บ์น๋ฅผ ๋ชปํ๋ค.<br>
assertion์ ๋จ์ ์ฝ๋ ์์ ํ ๋, ์๋ฌ๊ฐ ์๋๋์ง ๋ชจ๋ฅด๊ฒ ์๋ ๋ฑ ๋น์์ฉ or ๋๋ฒ๊น์ฉ์ผ๋ก ์ฐ์. (Narrowing ํ ๋ ์ฌ์ฉ X)
<br>
<br>

## array์ ์ธ ์ ์๋ tuple ํ์

```ts
type Member = [number, boolean];
let john: Member = [123, true];
let john: Member = ['kim', true]; //error
let john: Member = [true, 'kim']; //error
```

array ์๋ฃ ์์ ์์๋ฅผ ํฌํจํด์ ์ด๋ค ์๋ฃ๊ฐ ๋ค์ด์ฌ์ง ์ ํํ ์ง์ ํ ๋ ์ฌ์ฉ
`[]` ์์ ๋ค์ด์ฌ ์๋ฃ์ ํ์์ ์ฐจ๋ก๋ก ์์ฑํ๋ค.
<br>
<br>

## object์ ๋ฃ์ด์ผ ํ  ์์ฑ์ด ๋ง์๋

```ts
type Member = {
  name: string;
  age: string;
  //...x100
};

let john: Member = { name: 'Kim' /* ...x100 */ };
```

object์ ๋ค์ด๊ฐ์ผ ํ  ๊ฐ์ด ๋ง์ผ๋ฉด ํ๋ํ๋ ํ์์ ์ง์ ํด ์ฃผ๊ธฐ ์ด๋ ต๋ค.
๊ทธ๋ด๋ key๊ฐ์ ํ์์ ์ง์ ํด์ฃผ๋ฉด ๋๋ค.

```ts
type Member = {
  [key: string]: string;
};

let john: Member = { name: 'Kim', age: '123' };
```

`[key : string] : string` = string์ผ๋ก๋ key๊ฐ์ value์ ํ์์ string์ผ๋ก ์ง์ 
<br>
<br>

## object ์๋ฃ ์์  ๋ง๋ ๋ฐฉ๋ฒ (readonly)

```ts
const user = {
  name: 'kim',
};

user.name = 'park';
```

const ๋ณ์๋ ์ฌํ ๋น์ ๋ง๋ ๊ฒ์ด์ง object ์์ ์ ๋ง์ ์ ์๋ค.<br>
์ ์ฝ๋๋ ์ ์์ ์ผ๋ก `user`์ `name`์ `'park'`์ผ๋ก ๋ณ๊ฒฝ๋๋ค.<br>
ํ์์คํฌ๋ฆฝํธ์์  object ์์ ์ ๋ง๋ ๋ฐฉ๋ฒ๋ ์์<br>

```ts
type UserName = {
  readonly name: string;
};

const user: UserName = {
  name: 'kim',
};

user.name = 'park'; //error
```

`readonly` ๋ฅผ ์ฌ์ฉํ๋ฉด ๋ค์์๋ ํ์์ `์ฝ๊ธฐ ์ ์ฉ`์ผ๋ก ๋ณ๊ฒฝํด์ค๋ค<br> `user` ์ `name`์ ๋ณ๊ฒฝํ๋ฉด ์ด์  ์๋ฌ๋ฅผ ๋ฐ์ํ๋ค.

**ํ์์คํฌ๋ฆฝํธ ์๋ฌ๋ ์๋ํฐ & ํฐ๋ฏธ๋์์๋ง ์กด์ฌํ๋ค. ์ค์ ๋ก ๋ณํ๋ jsํ์ผ์ ์๋ฌ ์์ด ์ ๋์๊ฐ๋ ์ฐธ๊ณ !**
<br>
<br>

## Literal Types

```ts
let userName: 'kim';
userName = 'kim';
userName = 'park'; // error

function userInfo(a: 'hello'): 1 | 0 {
  return 1;
}
```

๋ฆฌํฐ๋ดํ์์ ๋ณ์์ ๋ญ๊ฐ ๋ค์ด์ฌ์ง ๋ ์๊ฒฉํ๊ฒ ๊ด๋ฆฌ ๊ฐ๋ฅํ๋ค.<br>
ํ์์ ์ง์ ํ๋๊ฒ ์๋ ํน์  ๊ฐ์ ์ง์ ํ  ์ ์๋ค.

### ๋ฆฌํฐ๋ดํ์์ ๋ฌธ์ ์ 

```ts
let userName = {
  name: 'kim',
};

function userInfo(a: 'kim') {}
userInfo(userName.name); //error
```

๋ฆฌํฐ๋ดํ์์ `'kim' ์ด๋ผ๋ ์๋ฃ๋ง ๋ค์ด์ฌ ์ ์์ต๋๋ค` ๊ฐ ์๋<br>
`'kim' ์ด๋ผ๋ ํ์๋ง ๋ค์ด์ฌ ์ ์์ต๋๋ค` ์ด์ฌ์ ์ ์ฝ๋์์  ์๋ฌ๊ฐ ๋๋ค.

### ํด๊ฒฐ๋ฐฉ๋ฒ

```ts
let userName = {
  name: 'kim',
} as const;

function userInfo(a: 'kim') {}
userInfo(userName.name);
```

`as const`๋ฅผ ์ฌ์ฉํ๋ฉด object value ๊ฐ์ ๊ทธ๋๋ก ํ์์ผ๋ก ์ง์ ํด์ค๋ค.<br>
`as const`๋ฅผ ์ฌ์ฉํ๋ฉด userName.name์ string ํ์์ด ์๋ 'kim' ํ์์ด ๋๋ค.<br>
๋ํ object ์์ฑ๋ค์ ๋ชจ๋ readonly๋ฅผ ๋ถ์ฌ์ค๋ค.
