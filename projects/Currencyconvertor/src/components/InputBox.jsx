export default function InputBox({
  label,
  amount,
  currency,
  onAmountChange,
  onCurrencyChange,
  disableAmount = false,
}) {
  const currencyList = ["USD", "INR", "EUR", "GBP", "JPY"];

  return (
    <div className="my-3">
      <label className="font-medium">{label}</label>

      <div className="flex gap-3 mt-2">
        <input
          type="number"
          value={amount}
          disabled={disableAmount}
          onChange={(e) => onAmountChange?.(Number(e.target.value))}
          className="border p-2 rounded w-full"
        />

        <select
          value={currency}
          onChange={(e) => onCurrencyChange(e.target.value)}
          className="border p-2 rounded"
        >
          {currencyList.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
