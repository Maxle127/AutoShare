import styles from './CarDetailsPage.module.css';

function CarDetailsPage() {
  return (
    <main className={styles.carDetails}>
      <div className={styles.breadcrumbs}>Каталог / Skoda Octavia</div>

      <h1>Skoda Octavia</h1>
      <p className={styles.city}>Ужгород</p>

      <div className={styles.detailsContent}>
        <section className={styles.carInformation}>
          <div className={styles.carImage}></div>

          <div className={styles.infoBlock}>
            <h2>Характеристики</h2>
            <div className={styles.characteristics}>
              <span>Легкові</span>
              <span>2018 рік</span>
              <span>Автомат</span>
              <span>5 місць</span>
            </div>
          </div>

          <div className={styles.infoBlock}>
            <h2>Опис</h2>
            <p>Комфортне авто для поїздок містом і подорожей Закарпаттям.</p>
          </div>

          <div className={styles.infoBlock}>
            <h2>Умови оренди</h2>
            <p>Передача авто та розрахунок — за домовленістю з власником.</p>
          </div>
        </section>

        <aside className={styles.bookingPanel}>
          <h2>1 200 грн / доба</h2>

          <div className={styles.bookingDates}>
            <div>
              <label htmlFor="pickup-date">Дата отримання</label>
              <input id="pickup-date" type="text" placeholder="10.10.2026" />
            </div>

            <div>
              <label htmlFor="return-date">Дата повернення</label>
              <input id="return-date" type="text" placeholder="12.10.2026" />
            </div>
          </div>

          <div className={styles.priceCalculation}>
            <span>1 200 грн × 2 доби</span>
            <span>2 400 грн</span>
          </div>

          <div className={styles.totalPrice}>
            <strong>Разом:</strong>
            <strong>2 400 грн</strong>
          </div>

          <button type="button" className={styles.bookingButton}>
            Надіслати заявку
          </button>

          <p className={styles.bookingNote}>Потребує підтвердження власника</p>

          <p className={styles.bookingNote}>Оплата поза платформою</p>
        </aside>
      </div>
    </main>
  );
}

export default CarDetailsPage;
