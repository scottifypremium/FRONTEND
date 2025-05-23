'use client';

import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import NewBorrowingModal from '@/components/borrowing/NewBorrowingModal';

const checkouts = [
  {
    id: 1,
    book: 'The Great Gatsby',
    member: 'John Doe',
    checkoutDate: '2024-03-01',
    dueDate: '2024-03-15',
    returnDate: null,
    status: 'Active',
  },
  {
    id: 2,
    book: 'To Kill a Mockingbird',
    member: 'Jane Smith',
    checkoutDate: '2024-02-15',
    dueDate: '2024-03-01',
    returnDate: '2024-03-01',
    status: 'Returned',
  },
  {
    id: 3,
    book: '1984',
    member: 'Mike Johnson',
    checkoutDate: '2024-02-20',
    dueDate: '2024-03-06',
    returnDate: null,
    status: 'Overdue',
  },
];

export default function Checkouts() {
  const [isNewBorrowingModalOpen, setIsNewBorrowingModalOpen] = useState(false);

  const handleNewBorrowing = (data: any) => {
    console.log('New borrowing:', data);
    setIsNewBorrowingModalOpen(false);
    // Here you would typically make an API call to record the borrowing
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Book Checkouts</h1>
          <Button 
            variant="primary"
            onClick={() => setIsNewBorrowingModalOpen(true)}
          >
            New Checkout
          </Button>
        </div>

        {/* Search and Filter */}
        <div className="flex gap-4">
          <div className="flex-1">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Search checkouts..."
              />
            </div>
          </div>
          <select
            className="block w-48 pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            <option>All Status</option>
            <option>Active</option>
            <option>Returned</option>
            <option>Overdue</option>
          </select>
        </div>

        {/* Checkouts Table */}
        <Card>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Book
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Member
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Checkout Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Due Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Return Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {checkouts.map((checkout) => (
                  <tr key={checkout.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {checkout.book}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {checkout.member}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {checkout.checkoutDate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {checkout.dueDate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {checkout.returnDate || '-'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          checkout.status === 'Active'
                            ? 'bg-blue-100 text-blue-800'
                            : checkout.status === 'Returned'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-red-100 text-red-800'
                        }`}
                      >
                        {checkout.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      {checkout.status === 'Active' && (
                        <Button variant="outline" size="sm">
                          Return Book
                        </Button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* New Borrowing Modal */}
        <NewBorrowingModal
          isOpen={isNewBorrowingModalOpen}
          onClose={() => setIsNewBorrowingModalOpen(false)}
          onSubmit={handleNewBorrowing}
        />
      </div>
    </Layout>
  );
} 