function TocContent({ children, styleSpecial, hasContents, TextToc }) {
  return (
    <>
      <div
        className="toc"
        id="tocPanel__toc"
        style={{
          ...(typeof styleSpecial === 'string' &&
            styleSpecial.includes('smallToc') && {
              resize: 'none',
              padding: '2px 1px',
            }),
        }}
      >
        {children}
        <div className="toc__contents">{hasContents && TextToc}</div>
      </div>
    </>
  );
}

export default TocContent;
