# Recipe Book CRUD App

This is a simple CRUD (Create, Read, Update, Delete) application for managing recipes. The application allows users to list recipes, view recipe details, create new recipes, update existing recipes, and delete recipes. It uses React.js with TypeScript and interacts with a mock API provided by JSONPlaceholder.

## Features

- List all recipes
- View details of a specific recipe
- Create a new recipe
- Update an existing recipe
- Delete a recipe

## Setup

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/recipe-book-crud.git
   cd recipe-book-crud
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Run the Application:**

   ```bash
   npm start
   ```

   The app will be accessible at `http://localhost:3000`.

## Project Structure

- `src/`: Contains the source code for the React application.
  - `components/`: Reusable React components.
  - `App.tsx`: Main entry point for the application.
  - `Home.tsx`: Page for listing recipes.
  - `Details.tsx`: Page for viewing and updating recipe details.
  - `Create.tsx`: Page for creating new recipes.
  - `theme.ts`: Theme configuration using Material-UI.

## Dependencies

- `react`: JavaScript library for building user interfaces.
- `react-router-dom`: React bindings for declarative routing.
- `@mui/material`: React components implementing Google's Material Design.
- `axios`: Promise-based HTTP client for making requests.

## Notes

- This application uses the JSONPlaceholder API for simulating CRUD operations. Note that updates and deletions are faked and won't persist on the server.

## Contributing

Feel free to contribute to this project by submitting pull requests. If you encounter any issues or have suggestions, please open an issue.

## License

This project is licensed under the [MIT License](LICENSE).
