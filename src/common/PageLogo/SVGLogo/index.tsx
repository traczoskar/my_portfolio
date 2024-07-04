import { SVGProps, useEffect, useRef, useState } from "react";
import styled from "styled-components";

const StyledSvg = styled.svg`
  fill: ${({ theme }) => theme.colors.textBasic};
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  &.logo-fill {
    transition: 0.3s;
    &:hover {
      fill: ${({ theme }) => theme.colors.basic};
    }
  }
`;

const LogoSVG = ({ fill, width, height }: SVGProps<SVGSVGElement>) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [viewBox, setViewBox] = useState("0 0 384 384");

  useEffect(() => {
    const updateViewBox = () => {
      if (svgRef.current) {
        const bbox = svgRef.current.getBBox();
        if (bbox.width > 0 && bbox.height > 0) {
          setViewBox(`${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}`);
        } else {
          setTimeout(updateViewBox, 100);
        }
      }
    };

    updateViewBox();
  }, []);

  return (
    <StyledSvg
      ref={svgRef}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className="logo-fill"
      viewBox={viewBox}
      fill={fill}
    >
      <defs>
        <clipPath id="680d06c421">
          <path
            d="M 115.199219 113.152344 L 268.949219 113.152344 L 268.949219 227.152344 L 115.199219 227.152344 Z M 115.199219 113.152344 "
            clipRule="nonzero"
          />
        </clipPath>
      </defs>
      <g clipPath="url(#680d06c421)">
        <path
          d="M 183.953125 227.152344 C 183.953125 203.472656 172.105469 182.5 153.832031 170.324219 C 172.105469 157.804688 183.953125 137.171875 183.953125 113.492188 L 159.921875 113.492188 C 159.921875 138.1875 139.957031 158.144531 115.25 158.144531 L 115.25 182.5 C 139.957031 182.5 159.921875 202.460938 159.921875 227.152344 Z M 229.980469 170.324219 C 211.703125 182.839844 199.859375 203.472656 199.859375 227.152344 L 223.886719 227.152344 C 223.886719 202.460938 243.855469 182.5 268.5625 182.5 L 268.5625 158.144531 C 243.855469 158.144531 223.886719 138.1875 223.886719 113.492188 L 199.859375 113.492188 C 199.859375 137.171875 211.703125 158.144531 229.980469 170.324219 Z M 229.980469 170.324219 "
          fillOpacity="1"
          fillRule="evenodd"
        />
      </g>
    </StyledSvg>
  );
};

export default LogoSVG;
