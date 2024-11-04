import { CarResponse } from '../types/types';

export async function fetchCarsByBrand(
  brand = 'Chery'
): Promise<CarResponse[]> {
  const res = await fetch(
    `https://test2.maximum-haval.ru/public/test-task/v1/brand/${brand}`,
    {
      cache: 'no-store',
    }
  );

  if (!res.ok) {
    const errorBody = await res.text();
    console.error('Error API:', errorBody);
    throw new Error('Smt went wrong');
  }
  return res.json();
}
