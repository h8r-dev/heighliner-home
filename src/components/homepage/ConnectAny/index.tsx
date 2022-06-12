/**
 * Create by ze.zhang on 2022.4.27
 */
import React from 'react';

import styles from './index.module.css';
import clsx from "clsx";
import FadeIn from '../../Animation/FadeIn';

export function ConnectAny() {
  return (
    <div>
      <FadeIn>
        <div className={styles.titleWrapper}>
          <div
              className={clsx("homepage-section-title", styles.titleConnectAny)}
          >
            Built to <span className={styles.power}>power</span> an open ecosystem
          </div>
        </div>
      </FadeIn>
      <FadeIn>
        <div className={styles.imgWrapper}>
          <img
            src={require('@site/static/img/homepage/connectany/connect-any-5.webp').default}
            alt="Connect Any"
            className={styles.connectAny}
          />
        </div>
      </FadeIn>
      <FadeIn>
        <div className={clsx("homepage-section-title", styles.titleCommunity)}>Community collaboration</div>
      </FadeIn>
    </div>
  )
}


