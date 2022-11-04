import styled from 'styled-components';

import Layout from '../layout/Layout';

const SiteContainer = styled.div`
  width: 100%;
  min-width: 100vh;
  clear: both;
  float: left
  position: relative
`;

export default function Home() {
	return (
		<Layout>
			<SiteContainer></SiteContainer>
		</Layout>
	);
}
