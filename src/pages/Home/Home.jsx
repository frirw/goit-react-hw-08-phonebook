import css from './Home.module.css';

export default function Home() {
  return (
    <div className={css.containerMain}>
      <h1 className={css.title}>Welcome to your Phonebook</h1>
    </div>
  );
}
