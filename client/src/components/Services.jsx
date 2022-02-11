import { BsShieldFillCheck } from 'react-icons/bs';
import { BiSearchAlt } from 'react-icons/bi';
import { RiHeart2Fill } from 'react-icons/ri';

const ServiceCard = ({ color, title, icon, subtitle }) => (
	<div className="flex flex-row justify-start items-center white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
		<div
			className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}
		>
			{icon}
		</div>
		<div className="ml-5 flex flex-col flex-1">
			<h1 className="mt-2 text-white text-lg">{title}</h1>
			<p className="mt-2 text-white text-sm md:w-9/12">{subtitle}</p>
		</div>
	</div>
);

const Services = () => {
	return (
		<div className="flex flex-col md:flex-row w-full justify-center items-center gradient-bg-services">
			<div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
				<div className="flex-1 flex flex-col justify-start items-start">
					<h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient">
						Services that we
						<br />
						continue to improve
					</h1>
				</div>
			</div>
			<div className="flex-1 flex flex-col justify-start items-center">
				<ServiceCard
					color="bg-[#2952E3]"
					title="Secure"
					icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
					subtitle="Security is guaranteed using blockchain. No logins, use your Metamask wallet and stay private and decentralized."
				/>
				<ServiceCard
					color="bg-[#7e7e7e]"
					title="Great Exchange rates"
					icon={<BiSearchAlt fontSize={21} className="text-white" />}
					subtitle="You will only get charged the gas + the amount you sent! We want our users to have the best experience possible."
				/>
				<ServiceCard
					color="bg-[#FD5DA8]"
					title="Fastest Ethereum Transactions"
					icon={<RiHeart2Fill fontSize={21} className="text-white" />}
					subtitle="By interacting directly with the smart contract. Send money,  messages and funny GIFs through the blockchain..."
				/>
			</div>
		</div>
	);
};

export default Services;
