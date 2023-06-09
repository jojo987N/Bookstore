import Form from '../form/Form';
import List from '../list/List';
import './home.css';

export default function Home() {
  return (
    <>
      <section>
        <List />
      </section>
      <div className="horizontal-divider" />
      <section>
        <Form />
      </section>
    </>
  );
}
