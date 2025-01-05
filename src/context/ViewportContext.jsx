import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  useCallback,
} from "react";

// Create a Context for the viewport
export const ViewportContext = createContext();

// Provider component
export const ViewportProvider = ({ children }) => {
  // Initialize state for viewport dimensions and breakpoints
  const [viewport, setViewport] = useState(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    return {
      width,
      height,
      isMobile: width <= 768,
      isTablet: width > 768 && width <= 1024,
      isDesktop: width > 1024,
    };
  });

  // Function to handle window resize
  const handleResize = useCallback(() => {
    console.log("Resize event triggered");
    const width = window.innerWidth;
    const height = window.innerHeight;
    setViewport({
      width,
      height,
      isMobile: width <= 768,
      isTablet: width > 768 && width <= 1024,
      isDesktop: width > 1024,
    });
  }, []);

  // Set up event listener for window resize
  useEffect(() => {
    console.log("ViewportProvider mounted");
    handleResize(); // Call handleResize to set initial state
    window.addEventListener("resize", handleResize);

    return () => {
      console.log("ViewportProvider unmounted");
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  // Provide the viewport state to children
  return (
    <ViewportContext.Provider value={viewport}>
      {children}
    </ViewportContext.Provider>
  );
};

// Custom hook to use the viewport context
export const useViewport = () => {
  const context = useContext(ViewportContext);
  if (!context) {
    throw new Error("useViewport must be used within a ViewportProvider");
  }
  return context;
};
