import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import PostCard from '../components/PostCard';

vi.mock('../store/useMediaStore', () => ({
  useMediaStore: () => vi.fn(),
}));

describe('PostCard Component', () => {
  const mockPost = {
    id: 1,
    type: 'image' as const,
    url: 'https://test.com/image.jpg',
    user: 'testi_useri',
    caption: 'Tämä on testi-caption',
    likes: 10,
  };

  it('renders user name and caption correctly', () => {
    render(<PostCard post={mockPost} />);
    
    expect(screen.getByText('testi_useri')).toBeInTheDocument();
    
    expect(screen.getByText('Tämä on testi-caption')).toBeInTheDocument();
  });

  it('displays the correct number of likes', () => {
    render(<PostCard post={mockPost} />);
    expect(screen.getByText('10 tykkäystä')).toBeInTheDocument();
  });
});