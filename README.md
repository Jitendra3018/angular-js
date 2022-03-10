# Angular JS

## What is Angular?

Angular is an application design framework and development platform for creating efficient and sophisticated single-page apps.

- Angular, like any other front-end framework, is generally used to create a single-page app, that runs on the client, but can be used to create full-stack applications by making an HTTP request to a backend server, like MEAN stack applications.
- Angular can be run on the server-side with something called Angular Universal.

## Why use Angular?

- Creates a dynamic frontend app and UIs
- Fully featured framework (router, HTTP, etc)
- Integrated TypeScript (optional to use)
- RxJS library is used which allows us to use the observables and they are used to write efficient and asynchronous programming.
- Test-friendly, w.r.t., unit test, and end-to-end tests
- Popular in enterprise business

## What to know at first?

Like any other framework, one should be comfortable with the JavaScript and that too with the below-mentioned concepts ->

- JavaScript fundamentals
- Async Programming (promises)
- Array Methods (forEach, map, filter)
- Fetch API/HTTP requests
- NPM (Node Package Manager)

## Angular Components

Components are the piece of the UI including the template(HTML), logic, and styling.
They are reusable and can be embedded into the template as an XML-like tag.

```javascript
@Component({
  selector: "app-hero-list",
  templateUrl: "./hero-list.component.html",
  providers: [HeroService],
})
export class HeroListComponent implements onInit {
  /* . . . */
}
```

## Angular Services

Angular distinguishes the components from services to increase modularity and reusability.

By separating a components' view-related functionality from other kinds of processing, we can make our component classes lean and efficient.

A component can delegate certain tasks to services, such as fetching the data from the server, validating the input, or logging directly into the console.

## Angular CLI

It is the standard tooling for the Angular development

- Command line interface for installing the angular cli globally

```java
    npm install -g @angular/cli

    or

    yarn add @angular/cli
```

- Command line interface for creating Angular apps

```java
    ng new my-app
```

- It is a dev server

- It also allows us to build our static assets for the production

- Commands to generate the components, services, models, etc
