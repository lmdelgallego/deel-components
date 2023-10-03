# QUESTIONS

## 1. What is the difference between Component and PureComponent? Give an example where it might break my app

**PureComponent** don't have any internal state like `CharacterCard` and **Component** should be have.

## 2. Context + ShouldComponentUpdate might be dangerous. Why is that?

That because it can lead to unexpected behavior

## 3. Describe 3 ways to pass information from a component to its PARENT.

The common ways are:

- Using **callback function**, the child component call de callback function. Like in the app on `App.tsx:17`, in this line the child component `Autocomplete` use the callback function to pass the selected item
- Using **ContextAPI**, creating a context in the parent component and provide it, this object should be provided to either the father component or wrapper of the entire app.
- Using a **State Management** like **REDUX**

## 4. Give 2 ways to prevent components from re-rendering.

- Using **react memo**

## 5. What is a fragment and why do we need it? Give an example where it might break my app.

Using `react fragment` allows grouping multiples component without create a new element in the DOM

## 6. Give 3 examples of the HOC pattern.

- React Router
- React Context

## 7. What's the difference in handling exceptions in promises, callbacks and async...await?

Promises provide a structure that you can handler a errors, `.catch(function)`
and `async ... await` is more traditional, using a try/catch block statement.

What use, depends of the code style.

## 8. How many arguments does setState take and why is it async.

It has 2 arguments, one the value(value to update) and the other one is a callback function.
It async to optimize performance

## 9. List the steps needed to migrate a Class to Function Component

1. Create a functional component
2. useState and move the state.
3. useEffect to update the lifecycle
4. Convert class methods to functions
5. if use `this.props`, refactor to props function component params
6. remplace `render` for `return()`

## 10. List a few ways styles can be used with components

- Global Styles
- CSS Modules
- Styled-component third-party library

## 11. How to render an HTML string coming from the server

We can use `dangerouslySetInnerHTML`, but we need to sanitize the string because it can introduce a security risk.