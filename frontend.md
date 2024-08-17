## React Assignment

1. How can you implement shared functionality across a component tree?

Answer : To share functionality across a component tree in React:

           a: Context API: Create a context to hold shared state or functions and use Provider to supply them to the component tree.

           b: Custom Hooks: Create reusable hooks to encapsulate shared logic and use them in multiple components.

           c: Higher-Order Components (HOCs): Wrap components with an HOC that injects shared functionality or state.

           d: Render Props: Pass functions as props to components to provide shared functionality.


2. Why is the `useState` hook appropriate for handling state in a complex component?

Answer : The useState hook is suitable for complex components because it:

        a: Manages local state directly within the component.
        b: Provides a simple syntax and automatic re-rendering.
        c: Supports functional updates for complex state changes.
        d: Keeps state logic encapsulated and easy to maintain.

3. Design a user interface resembling the provided page. Fetch the data from the server and dynamically map the information cards to the fetched data. Ensure that the search functionality is also implemented.

![Logo](UI-Screen-1.png)
