import {SvgElement} from "./SvgSelector.styled.tsx";
import cn from "classnames";

interface Props {
	data: string;
	feature?: boolean;
}

export const SvgSelector = ({data, feature}: Props) => {
	switch (data) {
		case 'brush':
			return (
				<SvgElement
					className={cn(data, 'icon')}
					width="35"
					height="35"
					fill="none"
					viewBox="0 0 35 35"
					xmlns="http://www.w3.org/2000/svg">
					<path
						id="brush-main"
						d="M21.0661 24.7819L23.7782 22.0698L19.71 18.0016L24.2303 13.4815L21.5181 10.7694L16.998 15.2896L12.9298 11.2214L10.2178 13.9335L21.0661 24.7819ZM16.998 11.6735L20.6141 8.05733C21.1134 7.55804 21.9229 7.55804 22.4221 8.05733L26.9424 12.5775C27.4416 13.0768 27.4416 13.8863 26.9424 14.3855L23.3263 18.0016L26.4903 21.1658C26.9897 21.665 26.9897 22.4746 26.4903 22.9738L16.546 32.9182C16.0467 33.4174 15.2372 33.4174 14.7379 32.9182L2.0815 20.2617C1.58221 19.7625 1.58221 18.9529 2.0815 18.4537L12.0258 8.50934C12.5251 8.01006 13.3346 8.01006 13.8338 8.50934L16.998 11.6735Z"
						fill="white"/>
					<path
						className="brush-accent"
						d="M2.33691 18.2012L16.7961 32.6603L16.6479 32.8085C16.0622 33.3942 15.1124 33.3942 14.5266 32.8085L2.18879 20.4706C1.603 19.8848 1.603 18.9351 2.18879 18.3493L2.33691 18.2012Z"
						fill="#FC264D" fillOpacity="0.95"/>
					<rect className="brush-accent" x="24.7561" width="10.2439" height="10.2439" rx="5.12195" fill="#FC264D"/>
				</SvgElement>
			)
		case 'ua-flag':
			return (
				<SvgElement className={cn(data, 'icon')} width="35" height="25" viewBox="0 0 35 25" fill="none"
				            xmlns="http://www.w3.org/2000/svg">
					<path id={`${feature && "ua-feature-top"}`}
					      d="M0 7C0 3.13401 3.13401 0 7 0H28C31.866 0 35 3.13401 35 7V12.5H0V7Z" fill="#0B1BAE"/>
					<path id={`${feature && "ua-feature-bottom"}`}
					      d="M0 12.5H35V18C35 21.866 31.866 25 28 25H7C3.13401 25 0 21.866 0 18V12.5Z" fill="#FFD808"/>
				</SvgElement>
			)
		case 'uk-flag':
			return (
				<SvgElement className={cn(data, 'icon')} width="35" height="25" viewBox="0 0 35 25" fill="none" xmlns="http://www.w3.org/2000/svg">
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
		case 'logo':
			return (
				<SvgElement className={cn(data, 'logo')} width="84" height="92" viewBox="0 0 84 92" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M17.5115 27.9479L41.9997 13.8934L66.488 27.9479V56.0518L41.9997 70.1063L17.5115 56.0518V27.9479Z"
						fill="#BB334C" stroke="black"/>
					<g filter="url(#filter0_d_275_7)">
						<path
							d="M41.9997 0L51.3703 5.37805V16.1342L41.9997 21.5122L32.6291 16.1342V5.37805L41.9997 0Z"
							fill="#FC264D"/>
						<path
							d="M33.1291 5.66758L41.9997 0.576497L50.8703 5.66758V15.8446L41.9997 20.9357L33.1291 15.8446V5.66758Z"
							stroke="black"/>
					</g>
					<g filter="url(#filter1_d_275_7)">
						<path
							d="M45.0917 10.7563C45.0917 12.4535 43.7076 13.8295 42.0002 13.8295C40.2928 13.8295 38.9087 12.4535 38.9087 10.7563C38.9087 9.05901 40.2928 7.68311 42.0002 7.68311C43.7076 7.68311 45.0917 9.05901 45.0917 10.7563Z"
							fill="#0C0C0C"/>
					</g>
					<g filter="url(#filter2_d_275_7)">
						<path d="M41.9998 62.4878L51.3704 67.8658V78.6219L41.9998 84L32.6292 78.6219V67.8658L41.9998 62.4878Z"
						      fill="#FC264D"/>
						<path
							d="M33.1292 68.1554L41.9998 63.0643L50.8704 68.1554V78.3324L41.9998 83.4235L33.1292 78.3324V68.1554Z"
							stroke="black"/>
					</g>
					<g filter="url(#filter3_d_275_7)">
						<path
							d="M45.0918 73.2441C45.0918 74.9413 43.7077 76.3172 42.0003 76.3172C40.2929 76.3172 38.9088 74.9413 38.9088 73.2441C38.9088 71.5468 40.2929 70.1709 42.0003 70.1709C43.7077 70.1709 45.0918 71.5468 45.0918 73.2441Z"
							fill="#0C0C0C"/>
						<path
							d="M44.5918 73.2441C44.5918 74.6624 43.4344 75.8172 42.0003 75.8172C40.5663 75.8172 39.4088 74.6624 39.4088 73.2441C39.4088 71.8257 40.5663 70.6709 42.0003 70.6709C43.4344 70.6709 44.5918 71.8257 44.5918 73.2441Z"
							stroke="black"/>
					</g>
					<path d="M41.4847 10.4812H42.5152V72.7317H41.4847V10.4812Z" fill="#0C0C0C"/>
					<g filter="url(#filter4_d_275_7)">
						<path
							d="M78.5898 21.0001L78.5898 31.7562L69.2192 37.1343L59.8486 31.7562L59.8486 21.0001L69.2192 15.6221L78.5898 21.0001Z"
							fill="#FC264D"/>
						<path
							d="M69.2203 16.1979L78.0887 21.2877L78.0887 31.4673L69.2181 36.5584L60.3497 31.4686L60.3497 21.289L69.2203 16.1979Z"
							stroke="black"/>
					</g>
					<g filter="url(#filter5_d_275_7)">
						<path
							d="M70.7646 29.0392C69.286 29.8878 67.3953 29.3842 66.5416 27.9143C65.6879 26.4444 66.1945 24.5649 67.6731 23.7163C69.1518 22.8676 71.0425 23.3713 71.8962 24.8411C72.7499 26.311 72.2433 28.1905 70.7646 29.0392Z"
							fill="#0C0C0C"/>
						<path
							d="M70.5135 28.6068C69.2732 29.3187 67.6895 28.8953 66.9752 27.6654C66.2609 26.4355 66.6839 24.8605 67.9243 24.1486C69.1646 23.4368 70.7483 23.8601 71.4626 25.09C72.1769 26.3199 71.7539 27.8949 70.5135 28.6068Z"
							stroke="black"/>
					</g>
					<g filter="url(#filter6_d_275_7)">
						<path
							d="M24.1515 52.244L24.1515 63.0001L14.7809 68.3782L5.41025 63.0001L5.41025 52.244L14.7809 46.866L24.1515 52.244Z"
							fill="#FC264D"/>
						<path
							d="M14.782 47.4418L23.6503 52.5316L23.6503 62.7112L14.7797 67.8023L5.91136 62.7125L5.91136 52.5329L14.782 47.4418Z"
							stroke="black"/>
					</g>
					<g filter="url(#filter7_d_275_7)">
						<path
							d="M16.3263 60.2833C14.8477 61.1319 12.9569 60.6283 12.1032 59.1584C11.2495 57.6886 11.7562 55.809 13.2348 54.9604C14.7134 54.1118 16.6042 54.6154 17.4579 56.0853C18.3116 57.5551 17.8049 59.4347 16.3263 60.2833Z"
							fill="#0C0C0C"/>
						<path
							d="M16.0752 59.8509C14.8348 60.5628 13.2512 60.1394 12.5369 58.9096C11.8226 57.6797 12.2456 56.1047 13.4859 55.3928C14.7263 54.6809 16.3099 55.1043 17.0242 56.3342C17.7385 57.564 17.3155 59.1391 16.0752 59.8509Z"
							stroke="black"/>
					</g>
					<path d="M69.2012 25.7971L69.7164 26.6843L15.4844 57.8095L14.9692 56.9224L69.2012 25.7971Z" fill="#0C0C0C"/>
					<g filter="url(#filter8_d_275_7)">
						<path
							d="M78.5899 63.0001L69.2193 68.3782L59.8487 63.0001L59.8487 52.244L69.2193 46.866L78.5899 52.244L78.5899 63.0001Z"
							fill="#FC264D"/>
					</g>
					<g filter="url(#filter9_d_275_7)">
						<path
							d="M67.6733 60.2834C66.1947 59.4347 65.6881 57.5552 66.5418 56.0853C67.3955 54.6155 69.2862 54.1119 70.7648 54.9605C72.2435 55.8091 72.7501 57.6886 71.8964 59.1585C71.0427 60.6284 69.152 61.132 67.6733 60.2834Z"
							fill="#0C0C0C"/>
					</g>
					<g filter="url(#filter10_d_275_7)">
						<path
							d="M78.5899 63.0001L69.2193 68.3782L59.8487 63.0001L59.8487 52.244L69.2193 46.866L78.5899 52.244L78.5899 63.0001Z"
							fill="#FC264D"/>
						<path
							d="M78.0888 52.5329L78.0888 62.7125L69.2204 67.8023L60.3498 62.7112L60.3498 52.5316L69.2182 47.4418L78.0888 52.5329Z"
							stroke="black"/>
					</g>
					<g filter="url(#filter11_d_275_7)">
						<path
							d="M67.6733 60.2834C66.1947 59.4347 65.6881 57.5552 66.5418 56.0853C67.3955 54.6155 69.2862 54.1119 70.7648 54.9605C72.2435 55.8091 72.7501 57.6886 71.8964 59.1585C71.0427 60.6284 69.152 61.132 67.6733 60.2834Z"
							fill="#0C0C0C"/>
						<path
							d="M67.9244 59.851C66.6841 59.1391 66.2611 57.5641 66.9754 56.3342C67.6897 55.1044 69.2734 54.681 70.5137 55.3929C71.7541 56.1047 72.177 57.6798 71.4627 58.9096C70.7484 60.1395 69.1648 60.5629 67.9244 59.851Z"
							stroke="black"/>
					</g>
					<g filter="url(#filter12_d_275_7)">
						<path
							d="M24.1514 31.756L14.7808 37.134L5.4102 31.756L5.4102 20.9999L14.7808 15.6218L24.1514 20.9999L24.1514 31.756Z"
							fill="#FC264D"/>
						<path
							d="M23.6503 21.2888L23.6503 31.4684L14.7819 36.5582L5.91131 31.4671L5.91132 21.2875L14.7797 16.1977L23.6503 21.2888Z"
							stroke="black"/>
					</g>
					<g filter="url(#filter13_d_275_7)">
						<path
							d="M13.2344 29.0392C11.7557 28.1906 11.2491 26.3111 12.1028 24.8412C12.9565 23.3713 14.8472 22.8677 16.3259 23.7163C17.8045 24.565 18.3111 26.4445 17.4574 27.9144C16.6037 29.3843 14.713 29.8879 13.2344 29.0392Z"
							fill="#0C0C0C"/>
					</g>
					<path d="M69.7163 57.3157L69.2011 58.2028L14.9691 27.0776L15.4843 26.1904L69.7163 57.3157Z" fill="#0C0C0C"/>
					<g filter="url(#filter14_d_275_7)">
						<path
							d="M45.6064 42.0002C45.6064 43.9803 43.9916 45.5855 41.9997 45.5855C40.0077 45.5855 38.3929 43.9803 38.3929 42.0002C38.3929 40.02 40.0077 38.4148 41.9997 38.4148C43.9916 38.4148 45.6064 40.02 45.6064 42.0002Z"
							fill="white"/>
					</g>
					<rect width="3.44525" height="19.9604" rx="1.72263"
					      transform="matrix(1 8.64744e-08 8.83816e-08 -1 33.4912 51.2048)"
					      fill="white"/>
					<rect width="2.92104" height="10.8279" rx="1.46052"
					      transform="matrix(7.77695e-08 -1 -1 -2.17297e-08 44.3193 34.1653)"
					      fill="white"/>
					<rect x="51.0176" y="51.2048" width="3.44525" height="19.9604" rx="1.72262"
					      transform="rotate(180 51.0176 51.2048)"
					      fill="white"/>
					<rect x="40.1897" y="34.1653" width="2.92104" height="10.8279" rx="1.46052"
					      transform="rotate(-90 40.1897 34.1653)"
					      fill="white"/>
					<rect x="40.1897" y="43.415" width="2.92104" height="10.8279" rx="1.46052"
					      transform="rotate(-90 40.1897 43.415)"
					      fill="white"/>
					<defs>
						<filter id="filter0_d_275_7" x="28.629" y="0" width="26.7412" height="29.5122"
						        filterUnits="userSpaceOnUse"
						        colorInterpolationFilters="sRGB">
							<feFlood floodOpacity="0" result="BackgroundImageFix"/>
							<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							               result="hardAlpha"/>
							<feOffset dy="4"/>
							<feGaussianBlur stdDeviation="2"/>
							<feComposite in2="hardAlpha" operator="out"/>
							<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
							<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_275_7"/>
							<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_275_7" result="shape"/>
						</filter>
						<filter id="filter1_d_275_7" x="34.9087" y="7.68311" width="14.183" height="14.1462"
						        filterUnits="userSpaceOnUse"
						        colorInterpolationFilters="sRGB">
							<feFlood floodOpacity="0" result="BackgroundImageFix"/>
							<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							               result="hardAlpha"/>
							<feOffset dy="4"/>
							<feGaussianBlur stdDeviation="2"/>
							<feComposite in2="hardAlpha" operator="out"/>
							<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
							<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_275_7"/>
							<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_275_7" result="shape"/>
						</filter>
						<filter id="filter2_d_275_7" x="28.6292" y="62.4878" width="26.7412" height="29.5122"
						        filterUnits="userSpaceOnUse"
						        colorInterpolationFilters="sRGB">
							<feFlood floodOpacity="0" result="BackgroundImageFix"/>
							<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							               result="hardAlpha"/>
							<feOffset dy="4"/>
							<feGaussianBlur stdDeviation="2"/>
							<feComposite in2="hardAlpha" operator="out"/>
							<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
							<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_275_7"/>
							<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_275_7" result="shape"/>
						</filter>
						<filter id="filter3_d_275_7" x="34.9088" y="70.1709" width="14.183" height="14.1462"
						        filterUnits="userSpaceOnUse"
						        colorInterpolationFilters="sRGB">
							<feFlood floodOpacity="0" result="BackgroundImageFix"/>
							<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							               result="hardAlpha"/>
							<feOffset dy="4"/>
							<feGaussianBlur stdDeviation="2"/>
							<feComposite in2="hardAlpha" operator="out"/>
							<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
							<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_275_7"/>
							<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_275_7" result="shape"/>
						</filter>
						<filter id="filter4_d_275_7" x="55.8486" y="15.6221" width="26.7412" height="29.5122"
						        filterUnits="userSpaceOnUse"
						        colorInterpolationFilters="sRGB">
							<feFlood floodOpacity="0" result="BackgroundImageFix"/>
							<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							               result="hardAlpha"/>
							<feOffset dy="4"/>
							<feGaussianBlur stdDeviation="2"/>
							<feComposite in2="hardAlpha" operator="out"/>
							<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
							<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_275_7"/>
							<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_275_7" result="shape"/>
						</filter>
						<filter id="filter5_d_275_7" x="62.1268" y="23.304" width="14.1841" height="14.1475"
						        filterUnits="userSpaceOnUse"
						        colorInterpolationFilters="sRGB">
							<feFlood floodOpacity="0" result="BackgroundImageFix"/>
							<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							               result="hardAlpha"/>
							<feOffset dy="4"/>
							<feGaussianBlur stdDeviation="2"/>
							<feComposite in2="hardAlpha" operator="out"/>
							<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
							<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_275_7"/>
							<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_275_7" result="shape"/>
						</filter>
						<filter id="filter6_d_275_7" x="1.41028" y="46.866" width="26.7412" height="29.5122"
						        filterUnits="userSpaceOnUse"
						        colorInterpolationFilters="sRGB">
							<feFlood floodOpacity="0" result="BackgroundImageFix"/>
							<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							               result="hardAlpha"/>
							<feOffset dy="4"/>
							<feGaussianBlur stdDeviation="2"/>
							<feComposite in2="hardAlpha" operator="out"/>
							<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
							<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_275_7"/>
							<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_275_7" result="shape"/>
						</filter>
						<filter id="filter7_d_275_7" x="7.68848" y="54.5481" width="14.1841" height="14.1475"
						        filterUnits="userSpaceOnUse"
						        colorInterpolationFilters="sRGB">
							<feFlood floodOpacity="0" result="BackgroundImageFix"/>
							<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							               result="hardAlpha"/>
							<feOffset dy="4"/>
							<feGaussianBlur stdDeviation="2"/>
							<feComposite in2="hardAlpha" operator="out"/>
							<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
							<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_275_7"/>
							<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_275_7" result="shape"/>
						</filter>
						<filter id="filter8_d_275_7" x="55.8486" y="46.866" width="26.7412" height="29.5122"
						        filterUnits="userSpaceOnUse"
						        colorInterpolationFilters="sRGB">
							<feFlood floodOpacity="0" result="BackgroundImageFix"/>
							<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							               result="hardAlpha"/>
							<feOffset dy="4"/>
							<feGaussianBlur stdDeviation="2"/>
							<feComposite in2="hardAlpha" operator="out"/>
							<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
							<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_275_7"/>
							<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_275_7" result="shape"/>
						</filter>
						<filter id="filter9_d_275_7" x="62.1271" y="54.5483" width="14.184" height="14.1472"
						        filterUnits="userSpaceOnUse"
						        colorInterpolationFilters="sRGB">
							<feFlood floodOpacity="0" result="BackgroundImageFix"/>
							<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							               result="hardAlpha"/>
							<feOffset dy="4"/>
							<feGaussianBlur stdDeviation="2"/>
							<feComposite in2="hardAlpha" operator="out"/>
							<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
							<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_275_7"/>
							<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_275_7" result="shape"/>
						</filter>
						<filter id="filter10_d_275_7" x="55.8486" y="46.866" width="26.7412" height="29.5122"
						        filterUnits="userSpaceOnUse"
						        colorInterpolationFilters="sRGB">
							<feFlood floodOpacity="0" result="BackgroundImageFix"/>
							<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							               result="hardAlpha"/>
							<feOffset dy="4"/>
							<feGaussianBlur stdDeviation="2"/>
							<feComposite in2="hardAlpha" operator="out"/>
							<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
							<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_275_7"/>
							<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_275_7" result="shape"/>
						</filter>
						<filter id="filter11_d_275_7" x="62.1271" y="54.5483" width="14.184" height="14.1472"
						        filterUnits="userSpaceOnUse"
						        colorInterpolationFilters="sRGB">
							<feFlood floodOpacity="0" result="BackgroundImageFix"/>
							<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							               result="hardAlpha"/>
							<feOffset dy="4"/>
							<feGaussianBlur stdDeviation="2"/>
							<feComposite in2="hardAlpha" operator="out"/>
							<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
							<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_275_7"/>
							<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_275_7" result="shape"/>
						</filter>
						<filter id="filter12_d_275_7" x="1.41016" y="15.6218" width="26.7412" height="29.5122"
						        filterUnits="userSpaceOnUse"
						        colorInterpolationFilters="sRGB">
							<feFlood floodOpacity="0" result="BackgroundImageFix"/>
							<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							               result="hardAlpha"/>
							<feOffset dy="4"/>
							<feGaussianBlur stdDeviation="2"/>
							<feComposite in2="hardAlpha" operator="out"/>
							<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
							<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_275_7"/>
							<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_275_7" result="shape"/>
						</filter>
						<filter id="filter13_d_275_7" x="7.68811" y="23.3042" width="14.184" height="14.1472"
						        filterUnits="userSpaceOnUse"
						        colorInterpolationFilters="sRGB">
							<feFlood floodOpacity="0" result="BackgroundImageFix"/>
							<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							               result="hardAlpha"/>
							<feOffset dy="4"/>
							<feGaussianBlur stdDeviation="2"/>
							<feComposite in2="hardAlpha" operator="out"/>
							<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
							<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_275_7"/>
							<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_275_7" result="shape"/>
						</filter>
						<filter id="filter14_d_275_7" x="34.3929" y="38.4148" width="15.2135" height="15.1707"
						        filterUnits="userSpaceOnUse"
						        colorInterpolationFilters="sRGB">
							<feFlood floodOpacity="0" result="BackgroundImageFix"/>
							<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							               result="hardAlpha"/>
							<feOffset dy="4"/>
							<feGaussianBlur stdDeviation="2"/>
							<feComposite in2="hardAlpha" operator="out"/>
							<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
							<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_275_7"/>
							<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_275_7" result="shape"/>
						</filter>
					</defs>
				</SvgElement>
			)
		default:
			return <svg></svg>
	}
};
