import React from 'react';
import { Minus, Plus } from 'lucide-react';

type QuantitySelectorProps = {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  min?: number;
};

export function QuantitySelector({ 
  quantity, 
  onIncrease, 
  onDecrease,
  min = 1 
}: QuantitySelectorProps) {
  return (
    <div className="flex items-center gap-3 glass-card rounded-lg px-3 py-2 w-fit">
      <button
        onClick={onDecrease}
        disabled={quantity <= min}
        className="w-8 h-8 flex items-center justify-center rounded-md bg-white/50 hover:bg-white/80 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
        aria-label="Decrease quantity"
      >
        <Minus className="w-4 h-4 text-[#3b2f2f]" />
      </button>
      <span className="w-8 text-center text-[#3b2f2f] select-none">
        {quantity}
      </span>
      <button
        onClick={onIncrease}
        className="w-8 h-8 flex items-center justify-center rounded-md bg-white/50 hover:bg-white/80 transition-all"
        aria-label="Increase quantity"
      >
        <Plus className="w-4 h-4 text-[#3b2f2f]" />
      </button>
    </div>
  );
}
