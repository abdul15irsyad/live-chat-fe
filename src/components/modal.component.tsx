import React, { ReactNode } from 'react';
import { X } from 'lucide-react';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-3"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="relative bg-white rounded-lg shadow-lg w-full md:w-3/12 p-6">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:bg-gray-50 rounded-md p-1"
        >
          <X size={20} />
        </button>
        {children}
      </div>
    </div>
  );
};
