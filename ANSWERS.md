- [ ] Why would you use class component over function components (removing hooks from the question)?
 
Generally it's easier to build off of the react.js framework with class components then writing function components. The only benefits of writing function components is readability since functions are written in vanilla javascript and finding best coding practices. Class components are written with the ability to call states within the react library, while function components are "stateless".
 
- [ ] Name three lifecycle methods and their purposes.
 
render() will render components to the User Interface. It returns the JSX of your actual component.
 
componentDidMount() is called as soon as the component is mounted and ready. This is a good place to initiate API calls, if you need to load data from a remote endpoint. This method allows the useState hook
 
componentWillUnmount() is called just before the component is unmounted and destroyed. This is useful for clearing data and resetting timers.
 
 
- [ ] What is the purpose of a custom hook?
 
Building your own hooks in react can be useful reusing logic multiple times in a project. Hooks can be basically used as logic mixins so you can practice DRY.
 
- [ ] Why is it important to test our apps?

It's impossible to test every feature of your program, so it's important to make sure users don't run into any bugs while they're using your program. Testing our apps simulates the user experience and will smooth out the experience for the user.
