import { useEffect, useState } from "react";
import InputBox from "./components/InputBox.jsx";


export default function App() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [result, setResult] = useState(0);
  const [rates, setRates] = useState({});

  // Fetch API rates on mount
  useEffect(() => {
    async function fetchRates() {
      const res = await fetch("https://api.exchangerate-api.com/v4/latest/USD");
      const data = await res.json();
      setRates(data.rates);
    }
    fetchRates();
  }, []);

  // Convert when any input changes
  useEffect(() => {
    if (rates[from] && rates[to]) {
      const base = amount / rates[from];
      const converted = base * rates[to];
      setResult(converted);
    }
  }, [amount, from, to, rates]);

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl shadow-lg w-96">
        <h1 className="text-xl font-bold mb-4 text-center">Currency Converter</h1>

        <InputBox
          label="From"
          amount={amount}
          currency={from}
          onAmountChange={setAmount}
          onCurrencyChange={setFrom}
        />

        <InputBox
          label="To"
          amount={result.toFixed(2)}
          currency={to}
          onCurrencyChange={setTo}
          disableAmount={true}
        />
      </div>
    </div>
  );
}
