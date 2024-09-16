import Link from 'next/link';

function Footer() {
  return (
    <footer>
      <p>
        <Link href="/">Home</Link> |{' '}
        <Link href="https://github.com/siebentod/">
          Github
          {/* <i
            className="fa-solid fa-arrow-up-right-from-square"
            style={{ fontSize: '9px' }}
          ></i> */}
        </Link>
        {/* {' '}
        | <a href="./about.html">About</a> */}
      </p>
    </footer>
  );
}

export default Footer;
