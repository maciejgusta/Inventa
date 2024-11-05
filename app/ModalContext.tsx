// ModalContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

type ModalContextType = {
  isModalVisible: boolean;
  showModal: () => void;
  hideModal: () => void;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);

  return (
    <ModalContext.Provider value={{ isModalVisible, showModal, hideModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModalContext must be used within ModalProvider");
  }
  return context;
};
