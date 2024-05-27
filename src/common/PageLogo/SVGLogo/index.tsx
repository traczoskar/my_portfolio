import { SVGProps } from "react";
import styled from "styled-components";

interface LogoProps extends SVGProps<SVGSVGElement> {
  strokeColor?: string;
}
const StyledSvg = styled.svg`
  stroke: ${({ theme }) => theme.colors.textBasic};
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  &.logo-stroke {
    transition: 0.3s;
    &:hover {
      stroke: ${({ theme }) => theme.colors.basic};
    }
  }
`;

const Logo = ({ stroke, width, height }: LogoProps) => (
  <StyledSvg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    className="logo-stroke"
    viewBox="0 0 512 512"
    stroke={stroke}
  >
    <g>
      <g id="Browser_1_">
        <line
          style={{
            fill: "none",
            strokeWidth: "40",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: "10",
          }}
          x1="11"
          y1="149.257"
          x2="501"
          y2="149.257"
        />
        <path
          style={{
            fill: "none",
            strokeWidth: "40",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: "10",
          }}
          d="&#10;&#9;&#9;&#9;M470.502,484.734c16.844,0,30.498-13.654,30.498-30.498V57.764c0-16.844-13.654-30.498-30.498-30.498H41.498&#10;&#9;&#9;&#9;C24.654,27.266,11,40.92,11,57.764v396.473c0,16.844,13.654,30.498,30.498,30.498H470.502z"
        />

        <line
          style={{
            fill: "none",
            strokeWidth: "40",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: "10",
          }}
          x1="254.983"
          y1="88.261"
          x2="440.004"
          y2="88.261"
        />
        <g>
          <g>
            <line
              style={{
                fill: "none",
                strokeWidth: "40",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: "10",
              }}
              x1="286.887"
              y1="255.593"
              x2="226.811"
              y2="376.924"
            />

            <polyline
              style={{
                fill: "none",
                strokeWidth: "40",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: "10",
              }}
              points="&#10;&#9;&#9;&#9;&#9;&#9;163.913,255.593 103.223,316.284 163.913,376.975 &#9;&#9;&#9;&#9;"
            />

            <polyline
              style={{
                fill: "none",
                strokeWidth: "40",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: "10",
              }}
              points="&#10;&#9;&#9;&#9;&#9;&#9;348.086,376.975 408.777,316.284 348.086,255.593 &#9;&#9;&#9;&#9;"
            />
          </g>
        </g>
      </g>

      <line
        style={{
          fill: "none",
          strokeWidth: "40",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: "10",
        }}
        x1="195.004"
        y1="89.278"
        x2="195.004"
        y2="89.278"
      />

      <line
        style={{
          fill: "none",
          strokeWidth: "40",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: "10",
        }}
        x1="132.992"
        y1="89.278"
        x2="132.992"
        y2="89.278"
      />

      <line
        style={{
          fill: "none",
          strokeWidth: "40",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: "10",
        }}
        x1="70.979"
        y1="89.278"
        x2="70.979"
        y2="89.278"
      />
    </g>
  </StyledSvg>
);

export default Logo;
