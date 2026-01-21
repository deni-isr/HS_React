import type { MediaItem } from '../types/DBTypes.ts';

type Props = {
  setSelectedItem: (item: MediaItem | undefined) => void;
};

const MediaRow = ({ setSelectedItem }: Props) => {
  // Dummy data for demonstration
  const mediaItems: MediaItem[] = [
    {
      _id: '1',
      title: 'Sample Image',
      description: 'A beautiful image',
      filename: 'image1.jpg',
      media_type: 'image',
      filesize: 12345,
      created_at: '2023-01-01',
    },
    {
      _id: '2',
      title: 'Sample Video',
      description: 'An interesting video',
      filename: 'video1.mp4',
      media_type: 'video',
      filesize: 67890,
      created_at: '2023-01-02',
    },
  ];

  return (
    <div>
      <h2>Media Items</h2>
      {mediaItems.map((item) => (
        <div key={item._id}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <button onClick={() => setSelectedItem(item)}>View</button>
        </div>
      ))}
    </div>
  );
};

export default MediaRow;