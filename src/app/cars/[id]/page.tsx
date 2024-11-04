import { fetchCarsByBrand } from '@utils/fetchData';
import Image from 'next/image';
import { Brands } from '../../../types/types';

const CarPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const [brand, _id] = id.split('-');

  const cars = await fetchCarsByBrand(brand);

  const car = cars.find((car) => car.car_id === _id.trim());
  if (!car) {
    return <div>Car not found</div>;
  }
  return (
    <div>
      <>
        <h1>{car.modelName}</h1>
        <Image
          src={car.photos.imgs[0].url}
          alt={car.brandName}
          width={440}
          height={292}
          priority
        />
      </>
    </div>
  );
};
export async function generateStaticParams() {
  const brands = Object.values(Brands);
  const params: { id: string }[] = [];

  for (const brand of brands) {
    const cars = await fetchCarsByBrand(brand);
    cars.forEach((car) => {
      params.push({ id: `${brand}-${car.car_id}` });
    });
  }

  return params;
}
export default CarPage;
