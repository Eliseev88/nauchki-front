import { useEffect } from "react";

export const useEventListener = (event, ref, callback) => {
    useEffect(() => {
      ref.addEventListener(event, callback);
    
        return () => {
          ref.removeEventListener(event, callback);
        };
      }, []);
}
