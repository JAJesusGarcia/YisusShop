'use client';

import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { AuthContext } from '@/context/authContext';
import { Package, User, Mail, MapPin, Phone } from 'lucide-react';
import Loading from '@/app/loading';
import moment from 'moment-timezone';

const formatDate = (dateString: string) => {
  return moment(dateString)
    .tz('America/Sao_Paulo')
    .format('DD/MM/YYYY hh:mm a');
};

const Dashboard = () => {
  const router = useRouter();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (!user || !user.login) {
      router.push('/login');
    }
  }, [user, router]);

  if (!user?.user) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen  p-4 sm:p-8">
      <div className="max-w-4xl mt-10 mb-10 mx-auto bg-tertiary rounded-lg shadow-lg overflow-hidden">
        <div className="bg-primary p-6 text-white">
          <h1 className="text-3xl text-quinary font-bold">Dashboard</h1>
        </div>

        <div className="p-6">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-secondary">
              User Information
            </h2>
            <div className="bg-quinary p-4 rounded-lg shadow-sm">
              <div className="flex items-center text-gray-700 mb-3">
                <User className="text-primary mr-3" size={20} />
                <span className="font-medium">{user.user.name}</span>
              </div>
              <div className="flex items-center text-gray-700 mb-3">
                <Mail className="text-primary mr-3" size={20} />
                <span>{user.user.email}</span>
              </div>
              <div className="flex items-center text-gray-700 mb-3">
                <MapPin className="text-primary mr-3" size={20} />
                <span>{user.user.address}</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Phone className="text-primary mr-3" size={20} />
                <span>{user.user.phone}</span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-secondary">
              Orders
            </h2>
            <div className="space-y-4">
              {user.user.orders?.map((order, i) => (
                <div
                  key={i}
                  className="bg-quinary p-4 rounded-lg shadow-sm flex items-center transition duration-300 ease-in-out hover:shadow-md"
                >
                  <Package className="text-primary mr-4" size={24} />
                  <div>
                    <p className="font-medium text-gray-800">
                      Order {order.id}
                    </p>
                    <p className="text-gray-600">{formatDate(order.date)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
