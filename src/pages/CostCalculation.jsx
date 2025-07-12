import React, { useState } from 'react';

const CostCalculation = () => {
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [result, setResult] = useState(null);

  const handleCalculate = (e) => {
    e.preventDefault();
    const total = parseFloat(price) * parseInt(quantity);
    if (!isNaN(total)) {
      setResult(total);
    } else {
      setResult('Ошибка ввода');
    }
  };

  return (
    <div className="p-6 mx-auto mt-10 max-w-md bg-white rounded shadow">
      <h1 className="mb-4 text-2xl font-bold">Калькулятор стоимости</h1>
      <form onSubmit={handleCalculate} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Цена за единицу (₽):</label>
          <input
            type="number"
            value={price}
            onChange={e => setPrice(e.target.value)}
            className="px-3 py-2 w-full rounded border"
            min="0"
            step="0.01"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Количество:</label>
          <input
            type="number"
            value={quantity}
            onChange={e => setQuantity(e.target.value)}
            className="px-3 py-2 w-full rounded border"
            min="1"
            required
          />
        </div>
        <button
          type="submit"
          className="py-2 w-full text-white bg-blue-600 rounded transition hover:bg-blue-700"
        >
          Рассчитать
        </button>
      </form>
      {result !== null && (
        <div className="mt-6 text-lg font-semibold">
          Итоговая стоимость: {typeof result === 'number' ? `${result} ₽` : result}
        </div>
      )}
    </div>
  );
};

export default CostCalculation;
