import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const SelectInput = ({
	label,
	labelId,
	filter,
	items,
	value,
	onChange,
	setItems,
	sx,
}) => {
	return (
		<FormControl fullWidth variant="standard" sx={sx}>
			<InputLabel id={labelId}>{label}</InputLabel>
			<Select labelId={labelId} value={value} onChange={onChange}>
				{filter && (
					<MenuItem value="">
						<em>None</em>
					</MenuItem>
				)}

				{!items && !setItems && (
					<MenuItem value={'Todo'}>To-do</MenuItem>
				)}
				{!items && !setItems && (
					<MenuItem value={'In-Progress'}>In-Progress</MenuItem>
				)}
				{!items && !setItems && (
					<MenuItem value={'Completed'}>Completed</MenuItem>
				)}

				{items &&
					items.length > 0 &&
					items.map((item) => (
						<MenuItem key={item.name} value={item.value}>
							{item.name}
						</MenuItem>
					))}

				{setItems &&
					Array.from(setItems).map((item) => (
						<MenuItem key={item} value={item}>
							{item}
						</MenuItem>
					))}
			</Select>
		</FormControl>
	);
};

export default SelectInput;
