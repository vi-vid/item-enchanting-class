# Item Enchanting Class

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

# Answers

## Question 1

JSON web tokens (or JWT-s for short) are a common way of authorizing for resources from an API.
Some applications even use this not only for logged-in, but for guest users as well, to limit API accesses even more.

JWTs can (and often do) contain information regarding the authentication (for example the type of the login: admin / user / guest), and is sent in the request headers (preferably in the "Access" header), to maintain a stateless session and access for the user.

As long as the signing key used to decode is not leaked, and only accessible for the backend services, it is safe to use, so they are best not to generate them client-side and keep the signing key secure.

## Question 2

**Potential risks of HTML injection & XSS**

When we allow the application to directly display unsanitized HTML snippets, we provide the chance to inject HTML code into our application.

1. THe injected HTML give hackers the chance to alter the appearance and functionality of the application, leading to potential harms for the customer and the owner of the website as well.

2. But most importantly, it can contain JavaScript code as well, which from the visitors browser can access their stored data (from cookies, local & session storage, etc.), exposing authorization data to websites (JWT tokens) and personal information (similarly how SQL injection can do quite the same).

### Solution

With content sanitization we can limit the types of the displayed code to HTML tags, their attributes & scripts, allowed characters and so forth (commonly known as SafeHTML).
Most of the frontend frameworks contain this feature built-in (DomSanitizer).

## Question 3

**Mutable & Immutable objects**

Mutable objects are instances of data-structures, that we can directly modify the properties & state of.
Immutable objects however are (as the name suggests) cannot be altered, instead we create new instances with the desired changes, and the original instance is untouched.

Therefore the immutability ensures us that the objects state won't change due to unintended side-effects and the values remain predictable.

```javascript
/* immutable object */
let applicationName = 'Item Enchanting Class';

/* when we perform some operations on it */
let applicationNamUppercase = applicationName.toUpperCase();
/* which returns a new instance with the value 'ITEM ENCHANTING CLASS' and keeping the original the same */
```

So the pros are quite obvious, it gives a pretty good way to prevent unintended things happening to the state of our objects.
But on the other side, it is extremely common that we want to modify properties of objects and arrays, and when every time we create the new version of the data with the desired alterations, we create new instances and use more memory and computing power, than we would've used with the mutable objects.

So there are a couple of operators for objects and arrays to ensure us that the original value is not modifies, like Object.assign, spread operator, and I'll bet there's a million libraries giving similar tools.

```javascript
/* array and object spread */
let applicationConfig = {
  theme: 'dark',
  createdAt: Date.now(),
  anagrams: ['item enchanting class'],
};

let furtherAnagrams = ['silent mechanic angst', 'clean semantic things'];

/* this way the original values are kept the same */
let extendedApplicationConfig = {
  ...applicationConfig,
  anagrams: [...applicationConfig.anagrams, ...furtherAnagrams, 'technical assignment'],
};
/* and the extended object returns a merge of all the values above */
```

Furthermore, there are ways of freezing objects (Object.freeze), so when we later try to modify the state of the object, the javascript return with a new object, and keeps the original the same.

```javascript
/* object to freeze */
const applicationConfig = {
  theme: 'dark',
  createdAt: Date.now(),
  anagrams: Object.freeze(['item enchanting class']),
};

Object.freeze(applicationConfig);

applicationConfig.anagrams = ['item enchanting class', 'silent mechanic angst', 'clean semantic things'];
/* and the original still remains the same */

/* and when we try to use the array push, it throws an error "object is not extensible" */
applicationConfig.anagrams.push('technical assignment');
```

## Question 4

**Improving performance of website**

0. first of all I'd check some performance testing tools (Google Lighthouse) to see what causes the application to load slowly, and act accordingly
1. for SPA webapps one of the most common step is to reduce the size of the resource bundles, by loading only the relevant parts first, and the rest on demand (lazy module loading, preloading, prefetching resources), enable minification and compression as well
2. in some cases there are a lot of unused resources present in the application, so it is a safe-bet to check those out as well, most commonly unused CSS classes
3. when dealing with big amounts of graphical elements (images, videos), it's worth considering lazy-loading them, and paying attention that they are loaded in the appropriate resolution (for example using picture and source tags to define different resolutions for different devices with media queries) and file format
4. it's also worth to check out how fast the server responds and serves the client, to determine that the issue is due to some operational causes (misconfiguration of the server, cache configurations)
5. browsers often limit the numbers of parallel requests that can be made, so that's also worts the investigation, if some measures could be taken there
6. and also it can greatly enhance user experience to prioritize the content that is upper on the page, loading what the user sees first, and what is out of the viewport later.
