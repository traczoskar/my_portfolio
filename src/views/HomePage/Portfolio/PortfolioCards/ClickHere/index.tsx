import { AnimatedDiv, Button } from "./styled";
import { ReactComponent as ClickArrow } from "../../../../../assets/click.svg";

const ClickHere = () => {
  return (
    <Button>
      <AnimatedDiv>
        <ClickArrow width={15} height={15} />
      </AnimatedDiv>
      Click here for more details!
    </Button>
  );
};

export default ClickHere;
