import styled from "@emotion/styled";
import { sanitizeStyleProps } from "is-style-prop-valid";

const View = styled.div({}, sanitizeStyleProps);

export default View;
