import Link from 'next/link';

export const BackHomeBtn = (props) => <div className={props.class}>
  <Link href="/">
    <a>← Back to home</a>
  </Link>
</div>;
