import { useState } from 'react';
import SingleView from './components/SingleView';
import MediaRow from './components/MediaRow.tsx';
import type { MediaItem } from './types/DBTypes';

const Home = () => {
  const [selectedItem, setSelectedItem] = useState<MediaItem | undefined>();

  return (
    <div>
      <MediaRow setSelectedItem={setSelectedItem} />
      {selectedItem && <SingleView item={selectedItem} setSelectedItem={setSelectedItem} />}
    </div>
  );
};

export default Home;