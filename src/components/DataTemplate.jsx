import "../App.css";

function DataTemplate({ property, value }) {
  return (
    <div class="dataTemplate">
      <p className="text">{property}</p>
      <p className="text">{value}</p>
    </div>
  );
}

export default DataTemplate;
