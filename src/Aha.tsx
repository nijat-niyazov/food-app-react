import { useState } from "react";
import { CustomButton } from "./components/ui";

const Aha = () => {
  const [state, setState] = useState(1);
  return (
    <CustomButton variant="primary" onClick={() => setState((p) => p + 1)}>
      {state}
    </CustomButton>
  );
};

export default Aha;
