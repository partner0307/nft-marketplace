import React, { useState } from 'react';
import { Content, ContentColor, ExploreContainer, TabButton } from './style';
import { Flex, Heading, P, Span } from '@/components/basic';
import { Button, Icon } from '@/components/custom';
import { GV } from '@/utils/style.util';
import Table, { TableFieldInterface } from '@/components/custom/table';
import { metaverses } from './mockdata';
import { tokillo } from '@/utils/util';
import { motion } from "framer-motion"
import { Link } from 'react-router-dom';
import _ROUTERS from '@/constants/route.constant';

const Explore = () => {

	const fields: TableFieldInterface[] = [
		{
			key: "name",
			label: "Name",
			render: (i, v, n) => (
				<Flex $style={{
					vAlign: "center",
					gap: "1rem"
				}}>
					<Span>{n + 1}</Span>
					<Flex $style={{
						vAlign: "center"
					}}>
						<Flex $style={{
							gap: "0.75rem",
							vAlign: "center"
						}}>
							<img src={`public/imgs/${i.avatar}`} width={40} height={40} />
							<Flex $style={{
								fDirection: "column"
							}}>
								<Flex>
									<Span $style={{
										weight: "bold"
									}}>{v}</Span>
								</Flex>
								<Flex>
									{i.networks.map((network: string, i: number) => (
										<React.Fragment key={i}>
											<Flex $style={{
												gap: "0.25rem",
												vAlign: "center"
											}}>
												<img src={`public/imgs/chains/ethereum.png`} width={12} height={12} />
												<Span $style={{
													size: "12px"
												}}>{network}</Span>
											</Flex>
										</React.Fragment>
									))}
								</Flex>
							</Flex>
						</Flex>
					</Flex>
				</Flex>
			),
			sort: (i: any, v: any) => v,
			description: "This field is ..."
		},
		{
			key: "balance",
			label: "Balance",
			render: (i, v) => (<Span $style={{ weight: "bold" }}>${tokillo(v)}</Span>),
			sort: (i: any, v: any) => v,
			description: "This field is ...",
			width: "150px"
		},
		{
			key: "uaw",
			label: "UAW",
			render: (i, v) => (<Span $style={{ weight: "bold" }}>${tokillo(v)}</Span>),
			sort: (i: any, v: any) => v,
			description: "This field is ...",
			width: "150px"
		},
		{
			key: "prouaw",
			label: "%UAW",
			render: (i, v) => (<Span $style={{ weight: "bold", color: v > 0 ? v === 0 ? "white" : "success" : "danger" }}>{v}%</Span>),
			sort: (i: any, v: any) => v,
			description: "This field is ...",
			width: "150px"
		},
		{
			key: "volume",
			label: "Volume",
			render: (i, v) => (<Span $style={{ weight: "bold" }}>${tokillo(v)}</Span>),
			sort: (i: any, v: any) => v,
			description: "This field is ...",
			width: "150px"
		},
		{
			key: "provolume",
			label: "%Volume",
			render: (i, v) => (<Span $style={{ weight: "bold", color: v > 0 ? v === 0 ? "white" : "success" : "danger" }}>{v}%</Span>),
			description: "This field is ...",
			width: "150px"
		},
		{
			key: "uaw24h",
			label: "24HUAW",
			render: (i, v) => (v),
			sort: (i: any, v: any) => v,
			description: "This field is ...",
			width: "150px"
		},
	]

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
				{tabIndex ===1 && <Flex $style={{
					fDirection: 'column',
					p: '24px 0 0',
					gap: '4px'
				}}>

					<Table
						data={metaverses}
						fields={fields}
					/>
				</Flex>}
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