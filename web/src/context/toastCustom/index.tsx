import { createContext, ReactNode, useContext } from "react";
import { toast, Toaster } from "sonner";

type ToastCustomType = {
  children: ReactNode;
};

type ITypeMessage = "success" | "error";

type ToastCustomContextType = {
  useToastCustom: (message: string, type: ITypeMessage) => void;
};

const ToastCustomContext = createContext({} as ToastCustomContextType);

export function ToastCustomProvider({ children }: ToastCustomType) {
  function useToastCustom(message: string, typeMessage: ITypeMessage) {
    if (typeMessage === "success") {
      return toast.success(message);
    }

    if (typeMessage === "error") {
      return toast.error(message);
    }

    return toast(message);
  }

  return (
    <ToastCustomContext.Provider value={{ useToastCustom }}>
      {children}
      <Toaster position="top-left" />
    </ToastCustomContext.Provider>
  );
}

export function useToastCustomContext() {
  return useContext(ToastCustomContext);
}
