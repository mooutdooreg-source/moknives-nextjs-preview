'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import styles from './VaultRecordRail.module.css';

type RecordItem = {
  id: string;
  label: string;
  title: string;
  world: string;
  status: string;
  video: string;
  poster: string;
};

const records: RecordItem[] = [
  {
    id: '042',
    label: 'Record 042',
    title: 'Expedition Pattern',
    world: 'Expedition',
    status: 'Archived / Sold',
    video: '/assets/media/pages/expedition/hero/expedition-hero-bg-desktop-v1.mp4',
    poster: '/assets/media/pages/the-vault/hero/vault-hero-alt-desktop-v1.avif',
  },
  {
    id: '043',
    label: 'Record 043',
    title: 'Culinary Pattern',
    world: 'Culinary',
    status: 'Archived / Sold',
    video: '/assets/media/pages/culinary/hero/culinary-hero-bg-desktop-v1.mp4',
    poster: '/assets/media/pages/the-vault/hero/vault-hero-alt-desktop-v1.avif',
  },
  {
    id: '044',
    label: 'Record 044',
    title: 'Vanguard Pattern',
    world: 'Vanguard',
    status: 'Archived / Sold',
    video: '/assets/media/pages/vanguard/hero/vanguard-hero-bg-desktop-v1.mp4',
    poster: '/assets/media/pages/the-vault/hero/vault-hero-alt-desktop-v1.avif',
  },
  {
    id: '045',
    label: 'Record 045',
    title: 'Singularis Pattern',
    world: 'Singularis',
    status: 'Archived / Sold',
    video: '/assets/media/pages/singularis/hero/singularis-hero-bg-desktop-v1.mp4',
    poster: '/assets/media/pages/the-vault/hero/vault-hero-alt-desktop-v1.avif',
  },
];

export default function VaultRecordRail() {
  const railRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [viewerIndex, setViewerIndex] = useState<number | null>(null);

  const viewerRecord = useMemo(
    () => (viewerIndex === null ? null : records[viewerIndex]),
    [viewerIndex]
  );

  const scrollToIndex = (index: number) => {
    const rail = railRef.current;
    const clamped = Math.max(0, Math.min(index, records.length - 1));
    const card = rail?.querySelector<HTMLElement>(`[data-index="${clamped}"]`);

    if (card) {
      card.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }

    setActiveIndex(clamped);
  };

  const openViewer = (index: number) => {
    setViewerIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeViewer = () => {
    setViewerIndex(null);
    document.body.style.overflow = '';
  };

  const viewerPrev = () => {
    if (viewerIndex === null) return;
    setViewerIndex(viewerIndex === 0 ? records.length - 1 : viewerIndex - 1);
  };

  const viewerNext = () => {
    if (viewerIndex === null) return;
    setViewerIndex(viewerIndex === records.length - 1 ? 0 : viewerIndex + 1);
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    const onScroll = () => {
      const cards = Array.from(rail.querySelectorAll<HTMLElement>('[data-index]'));
      const center = rail.getBoundingClientRect().left + rail.clientWidth / 2;
      let closest = 0;
      let distance = Number.POSITIVE_INFINITY;

      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.left + rect.width / 2;
        const nextDistance = Math.abs(cardCenter - center);
        if (nextDistance < distance) {
          distance = nextDistance;
          closest = index;
        }
      });

      setActiveIndex(closest);
    };

    rail.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => rail.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <section className={styles.section}>
        <div className={styles.header}>
          <div>
            <p className={styles.eyebrow}>Archive System</p>
            <h2 className={styles.title}>THE RECORD <span>LOG</span></h2>
            <p className={styles.copy}>Every piece carries a permanent record of its build, specifications, and field documentation.</p>
          </div>

          <div className={styles.controls}>
            <button type="button" className={styles.arrow} onClick={() => scrollToIndex(activeIndex - 1)}>Back</button>
            <button type="button" className={styles.arrow} onClick={() => scrollToIndex(activeIndex + 1)}>Next</button>
          </div>
        </div>

        <div className={styles.railWrap}>
          <div ref={railRef} className={styles.rail}>
            {records.map((item, index) => (
              <article
                key={item.id}
                data-index={index}
                className={styles.card}
                role="button"
                tabIndex={0}
                onClick={() => openViewer(index)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    openViewer(index);
                  }
                }}
              >
                <div className={styles.cardMedia}>
                  <video className={styles.video} src={item.video} poster={item.poster} muted loop playsInline autoPlay preload="metadata" />
                  <div className={styles.mediaOverlay} />
                  <span className={styles.cardLabel}>{item.label}</span>
                </div>

                <div className={styles.cardBody}>
                  <p className={styles.cardMeta}>Verified Entry</p>
                  <h3 className={styles.cardTitle}>{item.title}</h3>

                  <div className={styles.specs}>
                    <div className={styles.specRow}><span>World</span><strong>{item.world}</strong></div>
                    <div className={styles.specRow}><span>Status</span><strong>{item.status}</strong></div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <p className={styles.mobileHint}>Tap a record to open full screen</p>

        <div className={styles.pagination}>
          {records.map((item, index) => (
            <button
              key={item.id}
              type="button"
              className={`${styles.dot} ${index === activeIndex ? styles.dotActive : ''}`}
              onClick={() => scrollToIndex(index)}
              aria-label={`Go to ${item.label}`}
            />
          ))}
        </div>
      </section>

      {viewerRecord && (
        <div className={styles.viewer} role="dialog" aria-modal="true">
          <div className={styles.viewerShell}>
            <button type="button" className={styles.close} onClick={closeViewer}>Close</button>

            <div className={styles.viewerMedia}>
              <video
                key={viewerRecord.id}
                className={styles.viewerVideo}
                src={viewerRecord.video}
                poster={viewerRecord.poster}
                controls
                autoPlay
                playsInline
                preload="metadata"
              />
            </div>

            <div className={styles.viewerBody}>
              <p className={styles.cardMeta}>Verified Entry</p>
              <h3 className={styles.viewerTitle}>{viewerRecord.title}</h3>

              <div className={styles.specs}>
                <div className={styles.specRow}><span>World</span><strong>{viewerRecord.world}</strong></div>
                <div className={styles.specRow}><span>Status</span><strong>{viewerRecord.status}</strong></div>
              </div>

              <div className={styles.viewerActions}>
                <button type="button" className={styles.viewerNav} onClick={viewerPrev}>Back</button>
                <button type="button" className={styles.viewerNav} onClick={viewerNext}>Next</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
