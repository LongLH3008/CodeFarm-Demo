import styles from './_components.module.css';

const BannerMarquee = () => {
  return (
    <div className="max-sm:hidden flex flex-col w-full gap-4 overflow-hidden absolute bottom-12 left-0">
      <div className={`${styles.marquee_item} ${styles.right}`}></div>
      <div className={`${styles.marquee_item} ${styles.left}`}></div>
      <div className={`${styles.marquee_item} ${styles.right}`}></div>
      <div className={`${styles.marquee_item} ${styles.left}`}></div>
    </div>
  );
};

export default BannerMarquee;
