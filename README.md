# React Data Fetching App

## Description

This React application fetches data from an external API (`https://jsonplaceholder.typicode.com/users`) and displays it using a reusable `ListComponent` component. It demonstrates asynchronous data fetching with error handling and a loading state.

## Features

* **Data Fetching:** Fetches user data from the specified API endpoint.
* **Loading State:** Displays a "Loading..." message while fetching data.
* **Error Handling:** Displays an error message if the data fetching fails.
* **Data Display:** Uses a reusable `ListComponent` to render the fetched data.
* **Reusable Component:** Includes a `ListComponent` component that can be used to display any list of data.

## Technologies Used

* React
* `useState` for state management
* `useEffect` for handling side effects (data fetching)
* `fetch` API for making HTTP requests

## Installation

1.  **Clone the repository:**
    ```bash
    git clone <https://github.com/Rita2024/fetch-list-project.git>
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd <fetch-list-project>
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```

## How to Run the App

1.  **Start the development server:**
    ```bash
    npm start
    ```
2.  **Open your browser:** The app will be running at `http://localhost:5173` (or a similar address).

## Code Overview

### `App.js`

* **State Management:**
    * `data`: Stores the fetched data (initially an empty array).
    * `loading`:  Indicates whether the data is being fetched (initially `true`).
    * `error`: Stores any error message that occurs during the fetch.
* **Data Fetching (`useEffect`):**
    * The `useEffect` hook fetches data from the API when the component mounts.
    * It updates the `data`, `loading`, and `error` states accordingly.
* **Rendering:**
    * Displays "Loading..." while `loading` is `true`.
    * Displays an error message if `error` is not `null`.
    * Renders the fetched data using the `ListComponent` component.

### `ListComponent.jsx`

* **Props:**
    * `items`:  An array of data to display.
    * `renderItem`:  A function that takes a single item from the `items` array and returns a React element to render that item.
* **Functionality:**
    * Maps over the `items` array and uses the `renderItem` function to render each item.
    * Displays "No items to display" if the `items` array is empty.
* **Reusability:** This component can be used to display any type of data, as long as a suitable `renderItem` function is provided.

## Example Usage

In `App.js`, the `ListComponent` is used like this:

```jsx
<ListComponent
    items={data}
    renderItem={(item) => <p>{item.name}</p>}
/>
This will display a list of names fetched from the API.  The renderItem function simply