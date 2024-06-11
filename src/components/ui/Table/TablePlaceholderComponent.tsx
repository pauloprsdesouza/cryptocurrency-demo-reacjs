import React from 'react';

type TablePlaceholderComponentProps = {
	rows: number;
	cols: number;
	isLoading: boolean;
}

const TablePlaceholderComponent: React.FC<TablePlaceholderComponentProps> = ({ rows, cols, isLoading }) => {
	return (
		<>
			{
				isLoading && <div className='table-responsive'>
					<table className='table'>
						<thead className='placeholder-glow'>
							<tr>
								{Array.from(Array(cols).keys()).map((col) => (
									<th key={col} >
										<span className='placeholder col-6'></span>
									</th>
								))}
							</tr>
						</thead>
						<tbody className='placeholder-glow'>
							{Array.from(Array(rows).keys()).map((row) => (
								<tr key={row}>
									{Array.from(Array(cols).keys()).map((col) => (
										<td key={col} >
											<span className='placeholder col-12'></span>
										</td>
									))}
								</tr>
							))}
						</tbody>
					</table>
				</div>
			}
		</>
	)
};

export default TablePlaceholderComponent;