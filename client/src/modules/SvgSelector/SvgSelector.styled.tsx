import styled from "@emotion/styled";

export const SvgElement = styled.svg`
  &.brush {
    #brush-main {
      fill: #000;
    }

    .brush-accent {
      fill: #00FF94;
    }

    #brush-border {
      stroke: #000;
    }
  }
	&.ua-flag {
		#ua-feature-top {
			fill: #ce0808;
		}
    #ua-feature-bottom {
      fill: #080808;
    }
	}
`;
