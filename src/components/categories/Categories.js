import { useSelector } from 'react-redux';

export default function Categories() {
  const { status } = useSelector((state) => state.categories);
  return (
    <div>{status}</div>
  );
}
