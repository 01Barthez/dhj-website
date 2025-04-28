
import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layout
import Layout from "./components/Layout";

// Eager loaded page
import Home from "./pages/Home";
import { PageLoading } from "./components/Loading";

// Lazy loaded pages for code splitting
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<PageLoading />} />
              <Route path="/about" element={<Suspense fallback={<PageLoading />}>
                <About />
              </Suspense>} />

              <Route path="/services" element={<Suspense fallback={<PageLoading />}>
                <Services />
              </Suspense>} />

              <Route path="/contact" element={<Suspense fallback={<PageLoading />}>
                <Contact />
              </Suspense>} />

              <Route path="*" element={<Suspense fallback={<PageLoading />}>
                <NotFound />
              </Suspense>} />
            </Route>
          </Routes>
        </BrowserRouter>

      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
