import { fetchCarsByBrand } from '@utils/fetchData';
import Image from 'next/image';
import { Brands } from '../../../types/types';
import styles from '@styles/components/CarPage.module.scss';
import Footer from '@components/Footer';
import CarCarousel from '@components/CarCarousel';

const CarPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const [brand, _id] = id.split('-');

  const cars = await fetchCarsByBrand(brand);

  const car = cars.find((car) => car.car_id === _id.trim());
  if (!car) {
    return <div>Car not found</div>;
  }
  const formattedNumber = car.price.toLocaleString('ru-RU');
  return (
    <>
      <main>
        <div className={styles.headline}>
          <h1 className={styles.title}>
            {car.brandName} {car.modelName}
          </h1>
          <p className={styles.vin}>{car.vin}</p>
        </div>
        <div className={styles.content}>
          <div className={styles.about}>
            <div className={styles.details}>
              <h3 className={styles.price}>{formattedNumber} ₽</h3>
              <div className={styles.guarantee}>
                <div></div>
                <h4>Гарантия юр. чистоты</h4>
              </div>
            </div>
            <div className={styles.property}>
              <h2>Характеристики</h2>
              <div className={styles.block}>
                <div>
                  <div className={styles.icon}></div>
                  <h4>{car.modelYear} год выпуска</h4>
                </div>
                <div>
                  <div className={styles.icon1}></div>
                  <h4>
                    {car.modificationName
                      .replace(' л. ', ' л. / ')
                      .replace(' л.с. ', ' л.с. / ')}
                  </h4>
                </div>
                <div>
                  <div className={styles.icon2}></div>
                  <h4>КП - {car.Transmission}</h4>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.image}>
            <Image
              src={car.photos.imgs[0].url}
              alt={car.brandName}
              width={876}
              height={719}
              priority
            />
          </div>
        </div>

        <CarCarousel imageSet={car.photos.imgs} />
      </main>
      <Footer name={`${car.brandName} ${car.modelName}`} />
    </>
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
