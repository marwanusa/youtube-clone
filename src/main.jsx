import { createRoot } from "react-dom/client";
import AppRouter from "./routes/AppRouter";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
    <QueryClientProvider client={queryClient}>
      <AppRouter />
      <ReactQueryDevtools/>
    </QueryClientProvider>
);
