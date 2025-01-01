import './Footer.scss';

export const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer__instruction">
        <div>Double-click to edit a todo.</div>
      </div>
      <div className="Footer__copying">© 2024 abratsiuk</div>
      <div className="Footer__thanks">
        I thank the TodoMVC team for their inspiring{' '}
        <a
          className="Footer__example"
          href="https://todomvc.com/examples/typescript-react/#/"
          target="_blank"
        >
          example
        </a>{' '}
        of interface and design mockup.
      </div>
    </div>
  );
};
