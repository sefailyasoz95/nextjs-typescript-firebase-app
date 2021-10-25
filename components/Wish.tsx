import User from "./User";

type Props = {
	wish: string;
	userId: string;
};

const Wish = (props: Props) => {
	const { wish, userId } = props;
	return (
		<div className='gradient-card flex items-center bg-brand-dark border-none mb-4 rounded-md text-white text-lg'>
			<User userId={userId} />
			<span className='px-3 py-4'>{`${wish}`}</span>
		</div>
	);
};

export default Wish;
