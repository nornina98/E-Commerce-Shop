import "./categories.styles.scss";

const App = () => {
  const category = [
    {
      id: 1,
      title: "Shop 1",
    },
    {
      id: 2,
      title: "Shop 2",
    },
    {
      id: 3,
      title: "Shop 3",
    },
    {
      id: 4,
      title: "Shop 4",
    },
    {
      id: 5,
      title: "Shop 5",
    },
  ];
  return (
    <div className="categories-container">
      {category.map(({ title, id }) => (
        <div key={id} className="category-container">
          <div className="background-image" />
          <div className="category-body-container">
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
