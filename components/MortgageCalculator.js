"use client";
import { useState, useEffect } from "react";

const MortgageCalculator = () => {
  const [formData, setFormData] = useState({
    homePrice: 500000,
    downPayment: 100000,
    interestRate: 5.5,
    loanTerm: 25,
  });

  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);

  const calculateMortgage = () => {
    const principal = formData.homePrice - formData.downPayment;
    const monthlyRate = formData.interestRate / 100 / 12;
    const numberOfPayments = formData.loanTerm * 12;

    const monthlyPaymentCalc =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    const totalPaymentCalc = monthlyPaymentCalc * numberOfPayments;
    const totalInterestCalc = totalPaymentCalc - principal;

    setMonthlyPayment(monthlyPaymentCalc);
    setTotalPayment(totalPaymentCalc);
    setTotalInterest(totalInterestCalc);
  };

  useEffect(() => {
    calculateMortgage();
  }, [formData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: parseFloat(value) || 0,
    }));
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-CA", {
      style: "currency",
      currency: "CAD",
    }).format(value);
  };

  return (
    <section className="py-8 sm:py-12 my-6 md:my-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl text-center text-gray-900 sm:text-5xl font-extrabold">
            Mortgage Calculator
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-600">
            Estimate your monthly mortgage payments
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2 max-w-lg mx-auto md:max-w-none">
            {/* Input Fields */}
            <div className="space-y-6 mx-auto w-full">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Home Price
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                    $
                  </span>
                  <input
                    type="number"
                    name="homePrice"
                    value={formData.homePrice}
                    onChange={handleInputChange}
                    className="block w-full pl-7 pr-12 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Down Payment
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                    $
                  </span>
                  <input
                    type="number"
                    name="downPayment"
                    value={formData.downPayment}
                    onChange={handleInputChange}
                    className="block w-full pl-7 pr-12 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Interest Rate (%)
                </label>
                <input
                  type="number"
                  name="interestRate"
                  value={formData.interestRate}
                  onChange={handleInputChange}
                  step="0.1"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Loan Term (years)
                </label>
                <select
                  name="loanTerm"
                  value={formData.loanTerm}
                  onChange={handleInputChange}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                >
                  {[15, 20, 25, 30].map((year) => (
                    <option key={year} value={year}>
                      {year} years
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Results */}
            <div className="bg-gray-50 p-6 rounded-lg space-y-6 mx-auto w-full">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Payment Summary
                </h3>
                <dl className="space-y-4">
                  <div className="flex justify-between">
                    <dt className="text-sm text-gray-600">Monthly Payment:</dt>
                    <dd className="text-lg font-semibold text-blue-600">
                      {formatCurrency(monthlyPayment)}
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-sm text-gray-600">Total Payment:</dt>
                    <dd className="text-sm text-gray-900">
                      {formatCurrency(totalPayment)}
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-sm text-gray-600">Total Interest:</dt>
                    <dd className="text-sm text-gray-900">
                      {formatCurrency(totalInterest)}
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="bg-blue-50 p-4 rounded-md">
                <p className="text-sm text-blue-700">
                  Down payment is{" "}
                  {((formData.downPayment / formData.homePrice) * 100).toFixed(
                    1
                  )}
                  % of the home price
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-gray-500">
          <p>
            This calculator provides estimates for informational purposes only.
            Actual payments may differ.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MortgageCalculator;
