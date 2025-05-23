import Layout from '@/components/layout/Layout';
import Card from '@/components/ui/Card';
import {
  BookOpenIcon,
  UsersIcon,
  ArrowPathIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/24/outline';

const stats = [
  {
    name: 'Total Books',
    value: '12,345',
    icon: BookOpenIcon,
    change: '+12%',
    changeType: 'increase',
  },
  {
    name: 'Active Members',
    value: '2,345',
    icon: UsersIcon,
    change: '+8%',
    changeType: 'increase',
  },
  {
    name: 'Books Checked Out',
    value: '456',
    icon: ArrowPathIcon,
    change: '-3%',
    changeType: 'decrease',
  },
  {
    name: 'Overdue Books',
    value: '23',
    icon: ExclamationTriangleIcon,
    change: '+2',
    changeType: 'increase',
  },
];

const popularBooks = [
  { title: 'The Great Gatsby', checkouts: 156 },
  { title: 'To Kill a Mockingbird', checkouts: 143 },
  { title: '1984', checkouts: 128 },
  { title: 'Pride and Prejudice', checkouts: 112 },
  { title: 'The Catcher in the Rye', checkouts: 98 },
];

const monthlyStats = [
  { month: 'Jan', books: 120, members: 45 },
  { month: 'Feb', books: 150, members: 52 },
  { month: 'Mar', books: 180, members: 60 },
  { month: 'Apr', books: 160, members: 55 },
  { month: 'May', books: 190, members: 65 },
  { month: 'Jun', books: 210, members: 70 },
];

export default function Reports() {
  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-gray-900">Library Reports</h1>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.name} variant="stats">
              <div className="flex-shrink-0">
                <stat.icon className="h-6 w-6 text-indigo-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                <p
                  className={`text-sm ${
                    stat.changeType === 'increase'
                      ? 'text-green-600'
                      : 'text-red-600'
                  }`}
                >
                  {stat.change} from last month
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Popular Books */}
        <Card>
          <h2 className="text-lg font-medium text-gray-900 mb-4">Most Popular Books</h2>
          <div className="space-y-4">
            {popularBooks.map((book, index) => (
              <div key={book.title} className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="text-sm font-medium text-gray-500 w-6">{index + 1}.</span>
                  <span className="text-sm font-medium text-gray-900">{book.title}</span>
                </div>
                <span className="text-sm text-gray-500">{book.checkouts} checkouts</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Monthly Statistics */}
        <Card>
          <h2 className="text-lg font-medium text-gray-900 mb-4">Monthly Statistics</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Month
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Books Added
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    New Members
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {monthlyStats.map((stat) => (
                  <tr key={stat.month} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {stat.month}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {stat.books}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {stat.members}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </Layout>
  );
} 