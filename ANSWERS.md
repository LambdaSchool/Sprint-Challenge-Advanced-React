- [ ] Why would you use class component over function components (removing hooks from the question)?

A functional component is just a plain JavaScript function which accepts props as an argument and returns a React element. A class component requires you to extend from React. Component and create a render function which returns a React element

- [ ] Name three lifecycle methods and their purposes.

1) Birth/Mounting: when the component is being built out from the ground up and Whatever initial data you want access to will be defined on the constructor of this phase also Your render method is invoked and componentDidMount gets called as well.

2) Growth/Updating: it updating component data also setState can be used to change the component’s state data, forcing a call to render
and shouldComponentUpdate is a method one could use here to stop a component from calling render if necessary.

3) Death/Unmounting: it removes component from the screen also componentWillUnmount is called and can be used for any clean up you may need to do. 


- [ ] What is the purpose of a custom hook?

Custom hooks are building the hook to apply non-visual behavior and stateful logic throughout your components. 

- [ ] Why is it important to test our apps?

Testing are inportant to our apps bacause it,
Surfaces bugs faster,reduces the risk of regressions,allows us to trust the code,makes us think about the edge cases,
acts as a safety net when making changes or refactoring,acts as documentation for the code,encourages us to write more testable (better!) code.
