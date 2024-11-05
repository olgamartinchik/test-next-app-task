import { API_URL, BASE_BRAND } from '../constants/constants';
import { CarResponse } from '../types/types';

export async function fetchCarsByBrand(
  brand = BASE_BRAND
): Promise<CarResponse[]> {
  const res = await fetch(`${API_URL}/${brand}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    const errorBody = await res.text();
    console.error('Error API:', errorBody);
    throw new Error('Smt went wrong');
  }
  return res.json();
}
