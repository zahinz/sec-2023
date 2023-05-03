import { useLocation } from "react-router-dom";

type DefinitionType = null | any;

function Definition() {
  const location = useLocation();

  return (
    <div>
      <div>Definition</div>
      <pre>{JSON.stringify(location.state, null, 4)}</pre>
    </div>
  );
}

export default Definition;
