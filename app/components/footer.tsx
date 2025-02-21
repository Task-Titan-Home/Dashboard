export default function Footer({ title = "", url = "" }) {
  return (
    <footer>
      <a
        href="https://www.framer.com/motion/"
        target="_blank"
        rel="noreferrer"
      ></a>
      <a href={url} target="_blank" rel="noreferrer">
        <code>{title}</code>
      </a>
    </footer>
  );
}
