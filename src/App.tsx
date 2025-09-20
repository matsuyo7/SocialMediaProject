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

import { Route, Routes } from 'react-router-dom';

import './globals.css'; // Importing global css file
import SigninForm from './_auth/SigninForm';
import Home from './_root/pages/Home';
import SignupForm from './_auth/forms/SignupForm';
import AuthLayout from './_auth/AuthLayout';
import RootLayout from './_root/RootLayout';

// to make comments in JSX, use {}
// rafce - a shortcut to create a react arrow function component
const App = () => {
  return (
    // h-screen mean it takes over 100% of the screen
    <main className="flex h-screen">
      <Routes>
        {/* public routes 
          everybody can access these routes, like sign up and sing in pages
        */}
        <Route element={<AuthLayout />}> {/* Using the same layout for the forms, such as same logo in the same spot in both forms */}
          <Route path="/sigh-in" element={<SigninForm />} />
          <Route path="/sigh-in" element={<SignupForm />} />
        </Route>

        {/* private routes 
        only logged in users can access these routes, like home and profile
        */}
        <Route element={<RootLayout />}> {/* Using the same layout for the private routes, such as same header and sidebar in all private pages */}
          <Route index element={<Home />} /> {/* index mean it is the default/starting page*/}
        </Route>
      </Routes>
    </main>
  )
}

export default App

// An element in the route is a component that will be rendered when the user navigates to that route.
// For example, when the user navigates to /sign-in, the SigninForm component will be rendered.
// If it has a parent route, the parent component will be rendered first, then the child component will be rendered inside the parent component.