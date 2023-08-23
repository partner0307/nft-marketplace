import React, { useState } from 'react';
import { AnimatedTableContainer, Content, ContentColor, ExploreContainer, TabButton } from './style';
import { Flex, Heading, P, Span } from '@/components/basic';
import { Button, Icon } from '@/components/custom';
import { GV } from '@/utils/style.util';
import Table, { TableFieldInterface } from '@/components/custom/table';
import { tokillo } from '@/utils/util';
import { motion } from "framer-motion"
import { Link } from 'react-router-dom';
import _ROUTERS from '@/constants/route.constant';
import { metaverses } from '@/constants/mockup/metaverses';
import MetaverseTable from './tables/metaverse';
import NftTable from './tables/nfts';
import DappTable from './tables/dapps';
import BlockchainTable from './tables/blockchains';

const Explore = () => {
	const [tabIndex, setTabIndex] = useState<number>(0);

	return (
		<ExploreContainer>
			<Flex $style={{
				fDirection: 'column',
				vAlign: 'center',
				gap: '32px',
			}}>
				<Heading level={1}><Content>Explore The Marketplace</Content></Heading>
				<Flex $style={{ maxW: '700px' }}>
					<P $style={{ size: '20px', align: 'center' }}>Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut vulputate nisi. Integer in felis </P>
				</Flex>
			</Flex>
			<Flex
				as={motion.div}
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 2, delay: 0.5 }}
				viewport={{ once: true }}
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
				</Flex>
				{tabIndex === 0 && (
					<MetaverseTable />
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
			</Flex>
			<Flex $style={{
				hAlign: "center"
			}}>
				<Link to={_ROUTERS.marketplace}>
					<Button $style={{
						bg: GV('gradient'),
						radius: '4px',
						p: '8px 64px'
					}}>View All Marketplace</Button>
				</Link>
			</Flex>
		</ExploreContainer>
	)
}

export default Explore;