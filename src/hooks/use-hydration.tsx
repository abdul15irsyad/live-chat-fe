import { useEffect, useState } from 'react';
import { UseBoundStore } from 'zustand';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useHydrationZustand = (store: UseBoundStore<any>) => {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const unsubHydrate = store.persist.onHydrate(() => setHydrated(false));

    const unsubFinishHydration = store.persist.onFinishHydration(() =>
      setHydrated(true),
    );

    setHydrated(store.persist.hasHydrated());

    return () => {
      unsubHydrate();
      unsubFinishHydration();
    };
  }, [store.persist]);

  return hydrated;
};
