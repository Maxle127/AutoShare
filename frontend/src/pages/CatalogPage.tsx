import styles from './CatalogPage.module.css';

function CatalogPage() {
  return (
    <main className={styles.catalog}>
      <section className={styles.banner}>
        <h1>Оренда автомобілів у Закарпатті</h1>
        <p>Авто від місцевих власників для ваших подорожей</p>
      </section>

      <form className={styles.searchForm}>
        <div>
          <label htmlFor="city">Місто</label>
          <input id="city" type="text" placeholder="Ужгород" />
        </div>
        <div>
          <label htmlFor="start-date">Дата отримання</label>
          <input id="start-date" type="text" placeholder="10.10.2026" />
        </div>
        <div>
          <label htmlFor="end-date">Дата повернення</label>
          <input id="end-date" type="text" placeholder="12.10.2026" />
        </div>
        <div>
          <button type="button">Знайти авто</button>
        </div>
      </form>

      <section className={styles.catalogContent}>
        <form className={styles.filterForm}>
          <h2>Фільтри</h2>
          <h3>Категорія</h3>

          <div>
            <input id="sedan" type="checkbox" />
            <label htmlFor="sedan">Легкові</label>
          </div>
          <div>
            <input id="suv" type="checkbox" />
            <label htmlFor="suv">Позашляховики</label>
          </div>
          <div>
            <input id="minivan" type="checkbox" />
            <label htmlFor="minivan">Мінівени</label>
          </div>

          <h3>Ціна за добу</h3>

          <div className={styles.priceRange}>
            <div>
              <label htmlFor="min-price">Від</label>
              <input id="min-price" type="number" placeholder="0 грн" />
            </div>
            <div>
              <label htmlFor="max-price">До</label>
              <input id="max-price" type="number" placeholder="3000 грн" />
            </div>
          </div>
        </form>

        <section className={styles.carList}>
          <div className={styles.carCard}>
            <div className={styles.carImage}></div>
            <div className={styles.carInfo}>
              <div>
                <h3>Skoda Octavia</h3>
                <p>Ужгород</p>
              </div>
              <div className={styles.carPrice}>
                <p>1 200 грн / доба</p>
                <button type="button">Переглянути</button>
              </div>
            </div>
          </div>

          <div className={styles.carCard}>
            <div className={styles.carImage}></div>
            <div className={styles.carInfo}>
              <div>
                <h3>Volkswagen Golf</h3>
                <p>Мукачево</p>
              </div>
              <div className={styles.carPrice}>
                <p>1 100 грн / доба</p>
                <button type="button">Переглянути</button>
              </div>
            </div>
          </div>

          <div className={styles.carCard}>
            <div className={styles.carImage}></div>
            <div className={styles.carInfo}>
              <div>
                <h3>Toyota RAV4</h3>
                <p>Ужгород</p>
              </div>
              <div className={styles.carPrice}>
                <p>1 800 грн / доба</p>
                <button type="button">Переглянути</button>
              </div>
            </div>
          </div>

          <div className={styles.carCard}>
            <div className={styles.carImage}></div>
            <div className={styles.carInfo}>
              <div>
                <h3>Renault Trafic</h3>
                <p>Хуст</p>
              </div>
              <div className={styles.carPrice}>
                <p>2 000 грн / доба</p>
                <button type="button">Переглянути</button>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}

export default CatalogPage;
