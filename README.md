# First Class-Based Component

In this project, we will create a class-based component in React that displays a person's profile information. This component will showcase the use of state and component lifecycle methods. 

## Getting Started

1. Create a new project using `create-react-app`:
  a. `npx create-react-app my-app`
  b. `cd my-app`
  c. `code .`

2. Transform the `App.js` file into a class-based component. In the class, create a state object that contains the following properties:
   * fullName
   * bio
   * imgSrc
   * profession
   * shows (boolean)

3. Add a button that toggles the `shows` state. When `shows` is true, the person's profile information should be displayed.

4. Implement a field that shows the time interval since the last component was mounted using the component lifecycle. To do this, utilize the `setInterval` method within the `componentDidMount` lifecycle method.

5. Serve the project locally for testing.

## Conclusion

This project highlights the use of class-based components in React and demonstrates how to create a state and utilize component lifecycle methods to show the time interval since the last component was mounted. The code serves as a foundation for building more complex and dynamic components.



