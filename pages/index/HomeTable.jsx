function HomeTable({ section, pages }) {
  return (
    <div className="table">
      {pages.map((obj) => {
        if (obj.class === section)
          return (
            <>
              <span>
                <div
                  className="author"
                  key={obj.author}
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  {obj.author}
                </div>
              </span>
              <a className="title" href={obj.path} key={obj.title}>
                {obj.title}
              </a>
              <span className="year" key={obj.year} title={obj.year}>
                {obj.year}
              </span>
            </>
          );
      })}
    </div>
  );
}

export default HomeTable;
