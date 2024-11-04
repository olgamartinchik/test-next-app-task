import { fetchCarsByBrand } from '@utils/fetchData';
import CarGallery from '@components/CarGallery';

export default async function Home() {
  const initialCars = await fetchCarsByBrand();

  return (
    <>
      <div>
        <div>
          <CarGallery initialCars={initialCars} />
        </div>
      </div>
    </>
  );
}
