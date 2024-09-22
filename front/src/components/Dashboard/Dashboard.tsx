"use client";

import React, { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/context/authContext";
import { Package, User, Mail, MapPin, Phone } from "lucide-react";
import Loading from "@/app/loading";
import moment from "moment-timezone";

const formatDate = (dateString: string) => {
  return moment(dateString)
    .tz("America/Sao_Paulo")
    .format("DD/MM/YYYY hh:mm a");
};

const Dashboard = () => {
  const router = useRouter();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (!user || !user.login) {
      router.push("/login");
    }
  }, [user, router]);

  if (!user?.user) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen p-4 sm:p-8">
      <div className="mx-auto mb-10 mt-10 max-w-4xl overflow-hidden rounded-lg bg-tertiary shadow-lg">
        <div className="bg-primary p-6 text-white">
          <h1 className="text-3xl font-bold text-quinary">Dashboard</h1>
        </div>

        <div className="p-6">
          <div className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold text-secondary">
              User Information
            </h2>
            <div className="rounded-lg bg-quinary p-4 shadow-sm">
              <div className="mb-3 flex items-center text-gray-700">
                <User className="mr-3 text-primary" size={20} />
                <span className="font-medium">{user.user.name}</span>
              </div>
              <div className="mb-3 flex items-center text-gray-700">
                <Mail className="mr-3 text-primary" size={20} />
                <span>{user.user.email}</span>
              </div>
              <div className="mb-3 flex items-center text-gray-700">
                <MapPin className="mr-3 text-primary" size={20} />
                <span>{user.user.address}</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Phone className="mr-3 text-primary" size={20} />
                <span>{user.user.phone}</span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold text-secondary">
              Orders
            </h2>
            <div className="space-y-4">
              {user.user.orders?.map((order, i) => (
                <div
                  key={i}
                  className="flex items-center rounded-lg bg-quinary p-4 shadow-sm transition duration-300 ease-in-out hover:shadow-md"
                >
                  <Package className="mr-4 text-primary" size={24} />
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
