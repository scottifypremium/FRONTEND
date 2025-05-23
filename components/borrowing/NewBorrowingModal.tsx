'use client';

import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Button from '../ui/Button';

interface NewBorrowingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
}

export default function NewBorrowingModal({ isOpen, onClose, onSubmit }: NewBorrowingModalProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    onSubmit({
      book: 'test',
      member: 'Daniel Diaz',
      dueDate: new Date().toISOString().split('T')[0],
    });
  };

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-gray-800 px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                  <button
                    type="button"
                    className="rounded-md bg-gray-800 text-gray-400 hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                    onClick={onClose}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                    <Dialog.Title as="h3" className="text-lg font-semibold leading-6 text-white mb-6">
                      Record New Borrowing
                    </Dialog.Title>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Book Selection */}
                      <div>
                        <label htmlFor="book" className="block text-sm font-medium text-gray-300">
                          Book
                        </label>
                        <div className="mt-1">
                          <div className="flex items-center justify-between rounded-md border border-gray-600 bg-gray-700 px-3 py-2">
                            <span className="text-sm text-white">test</span>
                            <span className="text-xs text-gray-400">Available: 12422</span>
                          </div>
                        </div>
                      </div>

                      {/* Member Selection */}
                      <div>
                        <label htmlFor="member" className="block text-sm font-medium text-gray-300">
                          Member
                        </label>
                        <div className="mt-1">
                          <div className="flex items-center justify-between rounded-md border border-gray-600 bg-gray-700 px-3 py-2">
                            <span className="text-sm text-white">Daniel Diaz</span>
                            <span className="text-xs text-gray-400">pedro@gmail.com</span>
                          </div>
                        </div>
                      </div>

                      {/* Due Date */}
                      <div>
                        <label htmlFor="dueDate" className="block text-sm font-medium text-gray-300">
                          Due Date
                        </label>
                        <div className="mt-1">
                          <input
                            type="date"
                            name="dueDate"
                            id="dueDate"
                            className="block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            min={new Date().toISOString().split('T')[0]}
                          />
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="mt-6 flex justify-end gap-3">
                        <Button
                          type="button"
                          variant="outline"
                          onClick={onClose}
                          className="bg-gray-700 text-white hover:bg-gray-600 border-gray-600"
                        >
                          Cancel
                        </Button>
                        <Button
                          type="submit"
                          variant="primary"
                          className="bg-indigo-600 text-white hover:bg-indigo-500"
                        >
                          Add Transaction
                        </Button>
                      </div>
                    </form>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
} 