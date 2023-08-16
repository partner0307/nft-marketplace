import styled from "styled-components"

export const HeaderContainer = styled.header`
	position: fixed;
	left: 50%;
	transform: translate(-50%, 0);
	z-index: 8000;
	width: 100%;
	background: rgba(0, 0, 0, 0.3);
	backdrop-filter: blur(8px);
`

export const HeaderWrapper = styled.menu`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 64px;

	> div {
		> :not(:first-child) {
			@media screen and (max-width: 600px) {
				display: none;
			}
		}
	}

	@media (max-width: 768px) {
		padding: 0 1rem;
	}
`