export function LogoMark({ size = 32 }: { size?: number }) {
  const width = Math.round((size * 412) / 357);

  return (
    <svg
      width={width}
      height={size}
      viewBox="0 0 412 357"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className="shrink-0 text-text"
    >
      <path d="M0 0h58l132 228-29 51z" />
      <path d="M88 0h235l-73 126-29-51 14-24H176l102 178-72 127-29-51 44-76-103-178z" />
      <path d="M354 0h57L294 203l-29-50z" />
    </svg>
  );
}

export function Wordmark() {
  return (
    <span className="vs-wordmark">
      <span className="vs-wordmark-vita">Vita</span>
      <span className="vs-wordmark-soft">Soft</span>
    </span>
  );
}
