# Multi-step Form:
We are building a multi-step form (wizard) where user can fill in information, get price and buy an insurance policy.

# How to install and run:
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev
```

### Compiles and minifies for production
```
npm run build
```

# Technical choices:
### Vite
- Build time and Hot Module Replacement (HMR) of Vite is blazing fast compared to than tools like webpack, Rollup, Parcel.
- Out-of-the-box support for Typescript. Setting up Typescript manually is a hassle for if not supported.

### Vue 3
- Vue has been one of the most popular frontend frameworks as it is easy to learn and implement.
- Vue 3 offers new core APIs, better performance, and improved Typescript support. The new APIs include composition API, custom event API, custom renderer API, etc...

### Typescript
- Typescript is more suitable for large corporate applications as it defines clearly the contracts between components and api request and reponse.
- It is a wrapper of Javascript which has features such as:
    - Static type-checking
    - ES6 Feature Support
    - Clear Library API definition
    - Build-in Support for Javascript Packaging

### Tailwind
- Tailwind CSS is a highly customizable, low level CSS framework that allows developers to custom-build designs. It is simple to override default configuration with `tailwind.config.js`.
- It is easy to use. The most common way to put styles in class attribute of a HTML element, or you can use `@apply` to use in style tag.
- It enables building complex responsive layouts.
- It has a large communtity.

### Conclusion
- Because of all the advantages above, I believe these technologies are perfect for large and complex corporate applications such as yours.


# Architecture:
![](https://i.imgur.com/tg4KGAm.png)

- High Order Components are contained in views as they will be lazy loaded to Router later.
- Components are to contain basic UI component such as Input, Button, and pages of the multipage wizard.
- Assets such as images will be stored in assets.
- Constants are for storing constants such as country and currency mapping.
- Types are where I define as many as possible the types and interfaces that should be used in this project.
- As this is a fairly simple application, I would not use state management tool such as Vuex or Pinia in this project.
- Style is for importing tailwindCSS basic style, and define style variables if the project grow larger and has more requirements.

# Approach:
- I research the most modern frontend tech stacks to offers speed and stability for large corporate project as I mentioned in `Technology choices`. Vue has been my go-to framework for years now and Vue 3 offer composition api and script setup which make our code organized and concise.
- I first defines the routes that would need to be used such as `/wizard` and `/wizard-error`. Then I build the pages and they are all control by wizard to flow properly according to the requirements.
- I use TailwindCSS to develop UI in this project as it is simply, fast and scalable.
- I would use simple condition directive v-if for controlling page flow as this is fairly simple project. If there's more form pages. I would do a different approach by controlling pages using vue router such as `/page1`.
- Thank you for viewing my project.