import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, BookOpenIcon, UserGroupIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
import Layout from '@/components/layout/Layout';
import Card from '@/components/ui/Card';
import {
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

const recentActivity = [
  {
    id: 1,
    book: 'The Great Gatsby',
    member: 'John Doe',
    action: 'checked out',
    date: '2 hours ago',
  },
  {
    id: 2,
    book: 'To Kill a Mockingbird',
    member: 'Jane Smith',
    action: 'returned',
    date: '3 hours ago',
  },
  {
    id: 3,
    book: '1984',
    member: 'Mike Johnson',
    action: 'checked out',
    date: '5 hours ago',
  },
];

export default function Dashboard() {
  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        
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

        {/* Recent Activity */}
        <Card>
          <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h2>
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
                    Action
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recentActivity.map((activity) => (
                  <tr key={activity.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {activity.book}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {activity.member}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {activity.action}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {activity.date}
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
