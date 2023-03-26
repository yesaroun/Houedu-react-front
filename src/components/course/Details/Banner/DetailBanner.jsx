import React from 'react';
import styles from './DetailBanner.module.scss';
import { Link } from 'react-router-dom';
import { useCourse } from '../../../hooks/useCourse';

export default function DetailBanner() {
   const data = useCourse();

   return (
      <section className={styles.container}>
         <div className={styles.banner}>
            <div className={styles.banner__info}>
               <h3>{data?.crs_name}</h3>
               <p>{data?.crs_goal}</p>
               <p>{data?.crs_info}</p>
               <Link to='/lecture'>
                  <button className={styles.banner_btn}>보러가기</button>
               </Link>
            </div>
            <div className={styles.banner__image}>
               <img className={styles.banner__img} src={data?.thumbnail} />
            </div>
         </div>
      </section>
   );
}
