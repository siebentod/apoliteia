function LiCollapsible({ title, href, children }) {
  return (
    <li className="collapsible">
      <label className="collapsibleItem">
        <input type="checkbox" />
        <a href={href}>{title}</a>
      </label>
      <ul>{children}</ul>
    </li>
  );
}

export default LiCollapsible;
