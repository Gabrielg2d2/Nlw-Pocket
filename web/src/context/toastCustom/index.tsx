import { createContext, ReactNode, useContext } from "react";
import { toast, Toaster } from "sonner";

type ToastCustomType = {
  children: ReactNode;
};

type ITypeMessage = "success" | "error";

type ToastCustomContextType = {
  useToast: (message: string, type: ITypeMessage) => void;
};

const ToastCustomContext = createContext({} as ToastCustomContextType);

export function ToastCustomProvider({ children }: ToastCustomType) {
  function useToast(message: string, typeMessage: ITypeMessage) {
    if (typeMessage === "success") {
      return toast.success(message);
    }

    if (typeMessage === "error") {
      return toast.error(message);
    }

    return toast(message);
  }

  return (
    <ToastCustomContext.Provider value={{ useToast }}>
      {children}
      <Toaster position="top-left" richColors />
    </ToastCustomContext.Provider>
  );
}

export function useToastCustomContext() {
  return useContext(ToastCustomContext);
}
