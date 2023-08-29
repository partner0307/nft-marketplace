import React, { useState } from 'react';
import { Content, ExploreContainer, TabButton } from './style';
import { Flex, Heading, P } from '@/components/basic';
import { Button } from '@/components/custom';
import { GV } from '@/utils/style.util';
import { Link } from 'react-router-dom';
import Anime, {anime} from 'react-anime';
import { useInView } from 'react-intersection-observer';
import _ROUTERS from '@/constants/route.constant';
import MetaverseTable from './tables/metaverse';
import NftTable from './tables/nfts';
import DappTable from './tables/dapps';
import BlockchainTable from './tables/blockchains';

const Explore = () => {
	const [tabIndex, setTabIndex] = useState<number>(0);
	const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

	return (
		<ExploreContainer ref={ref}>
			{inView && <Flex $style={{
				fDirection: 'column',
				vAlign: 'center',
				gap: '32px',
			}}>
				<Anime
					easing="easeOutElastic"
					duration={1500}
					delay={anime.stagger(500, {start: 1000})}
					translateX={['-200%', '0']}
					opacity={[0, 1]}
				>
					<Heading level={1}><Content>Explore The Marketplace</Content></Heading>
					<Flex $style={{ maxW: '700px' }}>
						<P $style={{ size: '20px', align: 'center' }}>Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut vulputate nisi. Integer in felis </P>
					</Flex>
				</Anime>
			</Flex>}
			{inView && <Flex
				$style={{
					fDirection: 'column',
					hAlign: 'flex-start',
					gap: '8px'
				}}
			>
				<Flex $style={{
					fDirection: 'row',
					gap: '20px'
				}}>
					<Anime
						easing="easeOutBounce"
						duration={1000}
						delay={anime.stagger(200, {start: 2000})}
						translateY={['-5rem', '0rem']}
						opacity={[0, 1]}
					>
						<TabButton
							isSelected={tabIndex === 0}
							onClick={() => setTabIndex(0)}
						>Metaverses</TabButton>
						<TabButton
							isSelected={tabIndex === 1}
							onClick={() => setTabIndex(1)}
						>NFTs</TabButton>
						<TabButton
							isSelected={tabIndex === 2}
							onClick={() => setTabIndex(2)}
						>DApps</TabButton>
						<TabButton
							isSelected={tabIndex === 3}
							onClick={() => setTabIndex(3)}
						>Blockchains</TabButton>
					</Anime>
				</Flex>
				{tabIndex === 0 && (
					<Anime
						easing="linear"
						duration={500}
						delay={3000}
						translateY={['2rem', '0rem']}
						opacity={[0, 1]}
					>
						<MetaverseTable />
					</Anime>
				)}
				{tabIndex === 1 && (
					<NftTable />
				)}
				{tabIndex === 2 && (
					<DappTable />
				)}
				{tabIndex === 3 && (
					<BlockchainTable />
				)}
			</Flex>}
			{inView && <Flex $style={{
				hAlign: "center"
			}}>
				<Anime
					easing="linear"
					duration={500}
					delay={1000}
					translateY={['2rem', '0rem']}
					opacity={[0, 1]}
				>
					<Link to={_ROUTERS.marketplace}>
						<Button $style={{
							bg: GV('gradient'),
							radius: '4px',
							p: '8px 64px'
						}}>View All Marketplace</Button>
					</Link>
				</Anime>
			</Flex>}
		</ExploreContainer>
	)
}

export default Explore;