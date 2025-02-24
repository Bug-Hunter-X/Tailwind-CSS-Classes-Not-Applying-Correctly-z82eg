```javascript
// Ensure your Tailwind configuration is correct and your CSS is built correctly.
// This example assumes you are using a bundler like Webpack or Vite.

// Correctly import Tailwind into your CSS
// ... your CSS import ...
@tailwind base;
@tailwind components;
@tailwind utilities;

// Verify your import statement in your javascript file
import './styles.css'; // Replace with your stylesheet path

<div class="bg-red-500 hover:bg-blue-700 p-4">
  <p>This text should be red, and blue on hover.</p>
</div>
```