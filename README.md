<h1 align="center">react-translation-firebase-errors</h1>

<p align="center" >
  <img alt="NPM package" src="https://img.shields.io/npm/v/react-translation-firebase-errors">
  
  <img alt="GitHub last commit" src="https://img.shields.io/github/downloads/hmdarkfir3/react-translation-firebase-errors/total">
  
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/hmdarkfir3/react-translation-firebase-errors">
  
  <img alt="Repository issues size" src="https://img.shields.io/github/issues/hmdarkfir3/react-translation-firebase-errors">
  
  <img alt="License" src="https://img.shields.io/badge/license-MIT-blue.svg" />
</p>

---

## About
Function that returns errors generated by firebase, in the pt-br language.

---

## Installing

```bash
npm install react-translation-firebase-errors
or
yarn add react-translation-firebase-errors
```

---

## API

### translationFirebaseErrors(error)
This method it for translating firebase errors.

#### Parameters
**error** - Passing the error as a parameter.

#### Example
```js
import { translationFirebaseErrors } from 'react-translation-firebase-errors';

...
.catch((error) => {
  const err = translationFirebaseErrors(error.code);
  alert(err);
});
```

---

## Author

<img style="border-radius: 50%;" src="https://github.com/HMDarkFir3.png" width="100px;" alt=""/>
 <h4>Henrique Luís Oliveira Marques</h4>

[![Linkedin Badge](https://img.shields.io/badge/-Henrique-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/henrique-luís-oliveira-marques-3406361a7/)](https://www.linkedin.com/in/henrique-luís-oliveira-marques-3406361a7/) 

---

## License
This project is under the MIT license. See the [LICENSE](./LICENSE) to learn more.
<br>
[Contact!](https://www.linkedin.com/in/henrique-luís-oliveira-marques-3406361a7/)
