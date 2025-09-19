/*
This is our primaary router component.
It defines all the routes in our application.

A component is a reusable piece of code that represents a part of
the user interface (UI). It can be a function or a class that
returns a React element. It can also manage its own state and
handle user interactions. It is used to build complex UIs by
combining smaller, reusable components.

A react element is a plain object that represents a DOM node or 
a component. A dom node is an element in the HTML document, such as a
<div>, <span>, <h1>, etc. A component is a custom element that you
define using a function or a class. React elements are created using
the React.createElement() method or the JSX syntax.
*/

import './globals.css'; // Importing global css file

// rafce - a shortcut to create a react arrow function component
const App = () => {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello FakeInstagram!
    </h1>
  )
}

export default App