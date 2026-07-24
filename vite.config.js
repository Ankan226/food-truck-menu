import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vite config: this file tells Vite (our build tool) to use React.
export default defineConfig({
  plugins: [react()],
});