import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useRef,
} from "react";

const SnackbarContext = createContext();

export const SnackbarProvider = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState("");
  const timerRef = useRef(null);
  const showSnackbar = (msg) => {
    setIsVisible(true);
    setMessage(msg);
  };

  const closeSnackbar = () => {
    setIsVisible(false);
    setMessage("");
  };

  useEffect(() => {
    if (isVisible) {
      timerRef.current = setTimeout(closeSnackbar, 3000);
    } else {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    }
  }, [isVisible]);

  return (
    <SnackbarContext.Provider value={{ isVisible, showSnackbar, message }}>
      {children}
    </SnackbarContext.Provider>
  );
};

export const useSnackbar = () => useContext(SnackbarContext);
