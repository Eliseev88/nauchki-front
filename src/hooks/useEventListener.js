import { useEffect } from "react";

export const useEventListener = (event, callback) => {
    useEffect(() => {
        window.addEventListener(event, callback);
    
        return () => {
          window.removeEventListener(event, callback);
        };
      }, []);
}
