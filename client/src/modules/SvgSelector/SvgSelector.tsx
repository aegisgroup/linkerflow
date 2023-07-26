import {SvgElement} from "./SvgSelector.styled.tsx";

interface Props {
	data: string;
	feature?: boolean;
}

export const SvgSelector = ({data, feature}: Props) => {
	switch (data) {
		case 'brush':
			return (
				<SvgElement
					className={data}
					width="35"
					height="35"
					fill="none"
					viewBox="0 0 35 35"
					xmlns="http://www.w3.org/2000/svg">
					<path
						id="brush-main"
						d="M21.0661 24.7819L23.7782 22.0698L19.71 18.0016L24.2303 13.4815L21.5181 10.7694L16.998 15.2896L12.9298 11.2214L10.2178 13.9335L21.0661 24.7819ZM16.998 11.6735L20.6141 8.05733C21.1134 7.55804 21.9229 7.55804 22.4221 8.05733L26.9424 12.5775C27.4416 13.0768 27.4416 13.8863 26.9424 14.3855L23.3263 18.0016L26.4903 21.1658C26.9897 21.665 26.9897 22.4746 26.4903 22.9738L16.546 32.9182C16.0467 33.4174 15.2372 33.4174 14.7379 32.9182L2.0815 20.2617C1.58221 19.7625 1.58221 18.9529 2.0815 18.4537L12.0258 8.50934C12.5251 8.01006 13.3346 8.01006 13.8338 8.50934L16.998 11.6735Z"
						fill="white"/>
					<rect id="brush-border" x="0.25" y="5.37207" width="29.378" height="29.378" rx="3.75" stroke="white"
					      strokeWidth="0.5"/>
					<path
						className="brush-accent"
						d="M2.33691 18.2012L16.7961 32.6603L16.6479 32.8085C16.0622 33.3942 15.1124 33.3942 14.5266 32.8085L2.18879 20.4706C1.603 19.8848 1.603 18.9351 2.18879 18.3493L2.33691 18.2012Z"
						fill="#FC264D" fillOpacity="0.95"/>
					<rect className="brush-accent" x="24.7561" width="10.2439" height="10.2439" rx="5.12195" fill="#FC264D"/>
				</SvgElement>
			)
		case 'ua-flag':
			console.log(feature)
			return (
				<SvgElement className={data} width="35" height="25" viewBox="0 0 35 25" fill="none"
				            xmlns="http://www.w3.org/2000/svg">
					<path id={`${feature && "ua-feature-top"}`}
					      d="M0 7C0 3.13401 3.13401 0 7 0H28C31.866 0 35 3.13401 35 7V12.5H0V7Z" fill="#0B1BAE"/>
					<path id={`${feature && "ua-feature-bottom"}`}
					      d="M0 12.5H35V18C35 21.866 31.866 25 28 25H7C3.13401 25 0 21.866 0 18V12.5Z" fill="#FFD808"/>
				</SvgElement>

			)
		case 'uk-flag':
			return (
				<SvgElement width="35" height="25" viewBox="0 0 35 25" fill="none" xmlns="http://www.w3.org/2000/svg">
					<g clipPath="url(#clip0_228_26)">
						<path d="M35.0007 0H0V25.0005H35.0007V0Z" fill="#000066"/>
						<path
							d="M0 0V2.79514L31.0876 25.0006H35.0007V22.2055L3.91308 8.3335e-05L0 0ZM35.0007 0V2.79506L3.91308 25.0005H0V22.2054L31.0876 0H35.0007Z"
							fill="white"/>
						<path d="M14.5836 0V25.0005H20.4171V0H14.5836ZM0 8.3335V16.667H35.0007V8.3335H0Z" fill="white"/>
						<path d="M0 10.0002V15.0003H35.0007V10.0002H0ZM15.7503 0V25.0005H19.2504V0H15.7503Z" fill="#CC0000"/>
						<path
							d="M0 25.0005L11.6669 16.667H14.2756L2.60872 25.0005H0ZM0 0L11.6669 8.3335H9.05818L0 1.86345L0 0ZM20.7251 8.3335L32.392 0H35.0007L23.3338 8.3335H20.7251ZM35.0007 25.0005L23.3338 16.667H25.9425L35.0007 23.1371V25.0005Z"
							fill="#CC0000"/>
					</g>
					<defs>
						<clipPath id="clip0_228_26">
							<rect width="35" height="25" rx="7" fill="white"/>
						</clipPath>
					</defs>
				</SvgElement>
			)
		default:
			return <svg></svg>
	}
};
