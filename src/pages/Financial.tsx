
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { DollarSign, CreditCard, ArrowLeft, Download, AlertCircle, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Financial = () => {
  const financialData = {
    totalFees: 45000,
    paidAmount: 30000,
    remainingBalance: 15000,
    nextDueDate: "2024-02-15",
    scholarshipAmount: 5000
  };

  const transactions = [
    {
      id: "TXN001",
      date: "2024-01-15",
      description: "Tuition Fee - Spring 2024",
      amount: -15000,
      status: "completed",
      method: "Bank Transfer"
    },
    {
      id: "TXN002",
      date: "2024-01-10",
      description: "Merit Scholarship",
      amount: 5000,
      status: "completed",
      method: "Credit"
    },
    {
      id: "TXN003",
      date: "2023-12-20",
      description: "Library Fee",
      amount: -500,
      status: "completed",
      method: "Cash"
    },
    {
      id: "TXN004",
      date: "2023-12-15",
      description: "Lab Fee - Chemistry",
      amount: -1200,
      status: "completed",
      method: "Bank Transfer"
    }
  ];

  const upcomingPayments = [
    {
      description: "Tuition Fee - Spring 2024 (Final)",
      amount: 15000,
      dueDate: "2024-02-15",
      status: "pending"
    },
    {
      description: "Registration Fee",
      amount: 1000,
      dueDate: "2024-02-01",
      status: "pending"
    }
  ];

  const scholarships = [
    {
      name: "Academic Excellence Scholarship",
      amount: 5000,
      status: "Active",
      duration: "Academic Year 2023-24",
      criteria: "GPA > 3.5"
    },
    {
      name: "Need-Based Grant",
      amount: 3000,
      status: "Applied",
      duration: "Semester",
      criteria: "Family Income < $30,000"
    }
  ];

  const paymentProgress = (financialData.paidAmount / financialData.totalFees) * 100;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Financial Information</h1>
            <p className="text-gray-600">Manage your tuition, fees, and financial aid</p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Download Statement
            </Button>
            <Link to="/">
              <Button variant="outline">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Button>
            </Link>
          </div>
        </div>

        {/* Financial Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Total Fees</CardTitle>
            </CardHeader>
            <CardContent>
              <span className="text-2xl font-bold text-gray-900">
                ETB {financialData.totalFees.toLocaleString()}
              </span>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Paid Amount</CardTitle>
            </CardHeader>
            <CardContent>
              <span className="text-2xl font-bold text-green-600">
                ETB {financialData.paidAmount.toLocaleString()}
              </span>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Outstanding Balance</CardTitle>
            </CardHeader>
            <CardContent>
              <span className="text-2xl font-bold text-red-600">
                ETB {financialData.remainingBalance.toLocaleString()}
              </span>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Scholarships</CardTitle>
            </CardHeader>
            <CardContent>
              <span className="text-2xl font-bold text-blue-600">
                ETB {financialData.scholarshipAmount.toLocaleString()}
              </span>
            </CardContent>
          </Card>
        </div>

        {/* Payment Progress */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Payment Progress</CardTitle>
            <CardDescription>Track your fee payments for the current academic year</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Payment Completion</span>
                <span>{Math.round(paymentProgress)}%</span>
              </div>
              <Progress value={paymentProgress} className="w-full" />
              <div className="flex justify-between text-sm text-gray-600">
                <span>ETB {financialData.paidAmount.toLocaleString()} paid</span>
                <span>ETB {financialData.remainingBalance.toLocaleString()} remaining</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="transactions" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="transactions">Transactions</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming Payments</TabsTrigger>
            <TabsTrigger value="scholarships">Scholarships</TabsTrigger>
            <TabsTrigger value="payment">Make Payment</TabsTrigger>
          </TabsList>

          <TabsContent value="transactions" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Transaction History</CardTitle>
                <CardDescription>Your complete payment history</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {transactions.map((transaction) => (
                    <div key={transaction.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                      <div className="flex items-center space-x-4">
                        <div className={`p-2 rounded-full ${
                          transaction.amount > 0 ? 'bg-green-100' : 'bg-red-100'
                        }`}>
                          <DollarSign className={`h-4 w-4 ${
                            transaction.amount > 0 ? 'text-green-600' : 'text-red-600'
                          }`} />
                        </div>
                        <div>
                          <h4 className="font-medium">{transaction.description}</h4>
                          <p className="text-sm text-gray-600">
                            {transaction.date} • {transaction.method} • {transaction.id}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className={`text-lg font-semibold ${
                          transaction.amount > 0 ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {transaction.amount > 0 ? '+' : ''}ETB {Math.abs(transaction.amount).toLocaleString()}
                        </span>
                        <div className="flex items-center justify-end mt-1">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-1" />
                          <Badge variant="secondary">Completed</Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="upcoming" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertCircle className="h-5 w-5 mr-2 text-orange-600" />
                  Upcoming Payments
                </CardTitle>
                <CardDescription>Payments due in the coming months</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingPayments.map((payment, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border-l-4 border-l-orange-500 bg-orange-50 rounded-lg">
                      <div>
                        <h4 className="font-medium">{payment.description}</h4>
                        <p className="text-sm text-gray-600">Due: {payment.dueDate}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-lg font-semibold text-red-600">
                          ETB {payment.amount.toLocaleString()}
                        </span>
                        <div className="mt-1">
                          <Button size="sm">Pay Now</Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="scholarships" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Scholarships & Financial Aid</CardTitle>
                <CardDescription>Your current and applied scholarships</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {scholarships.map((scholarship, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium">{scholarship.name}</h4>
                          <p className="text-sm text-gray-600 mt-1">{scholarship.duration}</p>
                          <p className="text-xs text-gray-500 mt-1">Criteria: {scholarship.criteria}</p>
                        </div>
                        <div className="text-right">
                          <span className="text-lg font-semibold text-green-600">
                            ETB {scholarship.amount.toLocaleString()}
                          </span>
                          <div className="mt-1">
                            <Badge variant={scholarship.status === 'Active' ? 'default' : 'secondary'}>
                              {scholarship.status}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <Button className="w-full">Apply for New Scholarship</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="payment" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CreditCard className="h-5 w-5 mr-2" />
                  Make a Payment
                </CardTitle>
                <CardDescription>Pay your fees online securely</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium text-blue-900">Outstanding Balance</h4>
                  <p className="text-2xl font-bold text-blue-600">
                    ETB {financialData.remainingBalance.toLocaleString()}
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-medium">Payment Methods</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Button variant="outline" className="h-16 text-left justify-start">
                      <CreditCard className="h-6 w-6 mr-3" />
                      <div>
                        <p className="font-medium">Bank Transfer</p>
                        <p className="text-sm text-gray-600">Direct bank payment</p>
                      </div>
                    </Button>
                    <Button variant="outline" className="h-16 text-left justify-start">
                      <DollarSign className="h-6 w-6 mr-3" />
                      <div>
                        <p className="font-medium">Mobile Money</p>
                        <p className="text-sm text-gray-600">Pay via mobile wallet</p>
                      </div>
                    </Button>
                    <Button variant="outline" className="h-16 text-left justify-start">
                      <CreditCard className="h-6 w-6 mr-3" />
                      <div>
                        <p className="font-medium">Credit/Debit Card</p>
                        <p className="text-sm text-gray-600">Visa, Mastercard accepted</p>
                      </div>
                    </Button>
                    <Button variant="outline" className="h-16 text-left justify-start">
                      <DollarSign className="h-6 w-6 mr-3" />
                      <div>
                        <p className="font-medium">Cash Payment</p>
                        <p className="text-sm text-gray-600">Pay at finance office</p>
                      </div>
                    </Button>
                  </div>
                </div>

                <div className="pt-4">
                  <Button className="w-full" size="lg">
                    Proceed to Payment
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Financial;
