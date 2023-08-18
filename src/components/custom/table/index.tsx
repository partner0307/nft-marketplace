import { Flex } from "@/components/basic";
import { StyledTable, StyledTd, StyledTh, StyledTr, TableContainer } from "./style";
import FilterSvg from "./FilterSvg";
import React from "react";

export interface TableFieldInterface {
	key: string
	label: string
	render: (data: any, value: any, index: number) => string | number | React.ReactNode,
	width?: number
	sort?: (data: any, value: any, index: number) => void,
	description?: string
}

interface TablePropsInterface {
	fields: TableFieldInterface[],
	data: object[]
}

const Table = ({ fields, data }: TablePropsInterface) => {
	return (
		<TableContainer>
			<StyledTable>
				<StyledTr>
					{fields.map((field, i) => (
						<StyledTh>
							{field.label}
							{field.sort !== null && (
								<FilterSvg />
							)}
						</StyledTh>
					))}
				</StyledTr>
				{data.map((item: { [key: string]: any }, di: number) => (
					<StyledTr>
						{fields.map((field, fi) => (
							<StyledTd>{field.render(item, item[field.key], di)}</StyledTd>
						))}
					</StyledTr>
				))}
			</StyledTable>
		</TableContainer>
	)
}

export default Table;
