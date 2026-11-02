import styles from './AccountPage.module.css';

function AccountPage() {
  return (
    <main className={styles.account}>
      <h1>Особистий кабінет</h1>
      <p className={styles.description}>
        Керуйте автомобілями та заявками на оренду
      </p>

      <nav className={styles.tabs}>
        <button type="button">Мої авто</button>
        <button type="button">Мої бронювання</button>
        <button type="button" className={styles.activeTab}>
          Вхідні заявки
        </button>
      </nav>

      <section className={styles.requests}>
        <h2>Вхідні заявки</h2>
        <p className={styles.requestCount}>1 заявка</p>

        <div className={styles.requestCard}>
          <div className={styles.carImage}></div>

          <div className={styles.requestInfo}>
            <h3>Skoda Octavia</h3>
            <p>Орендар: Лоскоріг Марія</p>
            <p className={styles.requestDates}>10.10.2026 — 12.10.2026</p>
            <p className={styles.requestPrice}>Разом: 2 400 грн · 2 доби</p>
            <p className={styles.requestNote}>
              Підтвердження заблокує ці дати для інших бронювань.
            </p>
          </div>

          <div className={styles.requestActions}>
            <div className={styles.status}>Очікує підтвердження</div>

            <div className={styles.actionButtons}>
              <button type="button" className={styles.confirmButton}>
                Підтвердити
              </button>
              <button type="button" className={styles.rejectButton}>
                Відхилити
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AccountPage;
