# User Dashboard

A simple project to showcase how a responsive user dashboard with minimal 3rd-party dependencies could be built using React + TS + SCSS

## Running

This project was set up with Vite. To run, do `npm i`, then `npm run dev`

## Structure
- `src`
- - `assets` - Assets to be used, when expansion is needed
- - `interfaces` - Types and interfaces for data structures, internal and external
- - `ui` - Reusable UI components
- - `pages` - Pages of the application
- - `styles` - Currently containing mixins and vars, can be expanded to contain common styles to facilitate reuse
- - `utils` - Misc helper functions


## Dependencies

The application contains following 3rd-party dependencies: 
- `axios` - Preferred HTTP client of choice, easy to use and popular with React developers
- `swr` - Hooks for interacting with API, reduces a lot of boilerplate when handling different states of an API call
- `react-transition-group` - For some simple transition animations
