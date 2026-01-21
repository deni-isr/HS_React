import type {MediaItem} from '../types/DBTypes.ts';
import { useEffect, useRef } from 'react';

const SingleView = (props: {
  item: MediaItem;
  setSelectedItem: (item: MediaItem | undefined) => void;
}) => {
  const {item, setSelectedItem} = props;
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  }, [item]);

  const closeDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
    setSelectedItem(undefined);
  };

  return (
    <dialog ref={dialogRef} onClose={closeDialog}>
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      {item.media_type === 'image' ? (
        <img src={`/uploads/${item.filename}`} alt={item.title} />
      ) : (
        <video controls>
          <source src={`/uploads/${item.filename}`} type="video/mp4" />
        </video>
      )}
      <button onClick={closeDialog}>Close</button>
    </dialog>
  );
};
export default SingleView;