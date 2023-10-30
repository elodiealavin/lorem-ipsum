import "./App.css";
import Content from "./components/Content";

function App() {
  return (
    <>
      <div class="container">
        <h1> Lorem</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam
          recusandae nulla, omnis itaque dolore facere, nisi accusamus incidunt
          enim modi repudiandae voluptatum, numquam porro. Corporis nostrum sit
          praesentium vitae aperiam. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Expedita officia placeat distinctio mollitia
          similique, accusantium molestiae, ipsa nam ab dolore neque vero, saepe
          eaque voluptatibus reiciendis quaerat sit repellendus omnis.
        </p>
      </div>

      <Content name="lorem" />
      <Content text="ipsum" />
    </>
  );
}
export default App;
