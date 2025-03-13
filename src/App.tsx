import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Suspense, useEffect, useState } from "react";
import Index from "./pages/Index";
import FAQ from "./pages/FAQ";
import Waitlist from "./pages/Waitlist";
import Contact from "./pages/Contact";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import LoadingScreen from "./components/LoadingScreen";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Show loading for at least 1 second

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {isLoading && <LoadingScreen />}
      <div style={{ visibility: isLoading ? 'hidden' : 'visible' }}>
        {children}
      </div>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={
            <Suspense fallback={<LoadingScreen />}>
              <PageTransition><Index /></PageTransition>
            </Suspense>
          } />
          <Route path="/faq" element={
            <Suspense fallback={<LoadingScreen />}>
              <PageTransition><FAQ /></PageTransition>
            </Suspense>
          } />
          <Route path="/waitlist" element={
            <Suspense fallback={<LoadingScreen />}>
              <PageTransition><Waitlist /></PageTransition>
            </Suspense>
          } />
          <Route path="/contact" element={
            <Suspense fallback={<LoadingScreen />}>
              <PageTransition><Contact /></PageTransition>
            </Suspense>
          } />
          <Route path="/about" element={
            <Suspense fallback={<LoadingScreen />}>
              <PageTransition><About /></PageTransition>
            </Suspense>
          } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
