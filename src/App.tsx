
import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

// Layout
import Layout from "./components/Layout";

// Eager loaded page
import Home from "./pages/Home";
import { PageLoading } from "./components/Loading";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Pricing from "./pages/Pricing";
import Registration from "./pages/Registration";

// Lazy loaded pages for code splitting
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />

          <BrowserRouter>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<Suspense fallback={<PageLoading />}>
                  <About />
                </Suspense>} />

                <Route path="/services" element={<Suspense fallback={<PageLoading />}>
                  <Services />
                </Suspense>} />

                <Route path="/contact" element={<Suspense fallback={<PageLoading />}>
                  <Contact />
                </Suspense>} />

                <Route path="/blog" element={<Suspense fallback={<PageLoading />}>
                  <Blog />
                </Suspense>} />

                <Route path="/blog/:id" element={<Suspense fallback={<PageLoading />}>
                  <BlogPost />
                </Suspense>} />

                <Route path="/tarifs" element={<Suspense fallback={<PageLoading />}>
                  <Pricing />
                </Suspense>} />

                <Route path="/inscription" element={<Suspense fallback={<PageLoading />}>
                  <Registration />
                </Suspense>} />

                <Route path="*" element={<Suspense fallback={<PageLoading />}>
                  <NotFound />
                </Suspense>} />
              </Route>
            </Routes>
          </BrowserRouter>

        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;
