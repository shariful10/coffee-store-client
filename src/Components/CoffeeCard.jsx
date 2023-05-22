import { FaArchive, FaEye, FaPen } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
	const { _id, name, quantity, supplier, photo } = coffee;

	const handleDelete = (_id) => {
		console.log(_id);
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#9333EA",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then((result) => {
			if (result.isConfirmed) {
				fetch(`http://localhost:5000/coffee/${_id}`, {
					method: "DELETE",
				})
					.then((res) => res.json())
					.then((data) => {
						console.log(data);
						if (data.deletedCount > 0) {
							Swal.fire("Deleted!", "Your Coffee has been deleted.", "success");
							const remaining = coffees.filter((cof) => cof._id !== _id);
							setCoffees(remaining);
						}
					});
			}
		});
	};

	return (
		<div className="flex items-center bg-[#F5F4F1] px-[39px] py-6 rounded-xl">
			<figure>
				<img className="w-[153.64px] h-[200px]" src={photo} alt="Movie" />
			</figure>
			<div className="flex justify-between items-center w-full">
				<div>
					<p className="text-[20px] font-semibold">
						Name: <span className="font-normal">{name}</span>
					</p>
					<p className="text-[20px] font-semibold my-[10px]">
						Chef: <span className="font-normal">{supplier}</span>
					</p>
					<p className="text-[20px] font-semibold">
						Price: <span className="font-normal">{quantity} Taka</span>
					</p>
				</div>
				<div>
					<div className="bg-[#D2B48C] p-[10px] rounded-md">
						<FaEye className="text-white h-5 w-5" />
					</div>{" "}
					<br />
					<Link to={`/update-coffee/${_id}`}>
						<div className="bg-[#3C393B] p-[10px] rounded-md">
							<FaPen className="text-white h-5 w-5" />
						</div>
					</Link>
					<br />
					<div
						onClick={() => handleDelete(_id)}
						className="bg-[#EA4744] p-[10px] rounded-md">
						<FaArchive className="text-white h-5 w-5" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default CoffeeCard;
