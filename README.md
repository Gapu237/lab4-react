
# LAB 4 - MULTI-ROUTE SPA ARCHITECTURE

React + Vite + React Router v7

## Exercise List

### Exercise 1.1 - Performance & Resiliency
- React.lazy()
- Suspense
- Skeleton Loading with the same heading and detail rows as the loaded view
- Route-level Code Splitting

[View Exercise 1.1](src/exercises/exercise-1.1/README.md)

### Exercise 1.2 - React Router v7
- Routes and Route
- Declarative Routing
- Element Prop Syntax

[View Exercise 1.2](src/exercises/exercise-1.2/README.md)

### Exercise 1.2.1 - Layout Architecture
- Nested Routes
- Outlet
- NavLink
- Active Link Styling

[View Exercise 1.2.1](src/exercises/exercise-1.2.1/README.md)

### Exercise 1.2.2 - Master-Detail View
- Two-column CSS Grid that stacks at viewport widths of 700px and below
- useParams()
- Dynamic Person Details
- 404 Handling

[View Exercise 1.2.2](src/exercises/exercise-1.2.2/README.md)

### Exercise 1.3 - Validation Anti-Patterns
- InputField
- SimpleForm
- Controlled Components
- Derived State Validation
- Avoiding useEffect Chains

[View Exercise 1.3](src/exercises/exercise-1.3/README.md)

## Project Structure

- src/components - Shared React components
- src/context - Form context, hook, and provider
- src/pages - Application pages
- src/data - Sample data
- src/exercises - Documentation for each exercise
- src/App.jsx - React Router configuration
- src/App.css - Application styling

## Installation

Install dependencies:

    npm install

Start the development server:

    npm run dev

Build for production:

    npm run build

## Demo Routes

| Exercise | Route |
|---|---|
| 1.1 | /people/1 |
| 1.2 | / |
| 1.2.1 | /people |
| 1.2.2 | /people/1 |
| 1.3 | /form |

## Technologies

- React
- Vite
- React Router v7
- JavaScript JSX
- CSS Grid
