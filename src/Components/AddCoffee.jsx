import React from 'react';
import Swal from "sweetalert2";

const AddCoffee = () => {
	const handleAddCoffee = (e) => {
		e.preventDefault();
		const form = e.target;
		const name = form.name.value;
		const quantity = form.quantity.value;
		const supplier = form.supplier.value;
		const taste = form.taste.value;
		const category = form.category.value;
		const details = form.details.value;
		const photo = form.url.value;
		const newCoffee = { name, quantity, supplier, taste, category, details, photo };
		console.log(newCoffee);

		// Send data to the server
		fetch("http://localhost:5000/coffee", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(newCoffee),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.insertedId) {
					Swal.fire({
						title: "Success!",
						text: "Coffee added successfully",
						icon: "success",
						confirmButtonText: "Ok",
						confirmButtonColor: "#9333EA",
					});
				}
			});
	};

	return (
		<div className="my-container">
			<div className="bg-[#F4F3F0] p-24 rounded-xl">
				<h2 className="text-3xl font-extrabold text-center mb-5">Add Coffee</h2>
				<form onSubmit={handleAddCoffee}>
					{/* Form Name & Price Row */}
					<div className="md:flex gap-6 mb-6">
						<div className="form-control md:w-1/2">
							<label className="label">
								<span className="label-text">Your Email</span>
							</label>
							<label className="input-group">
								<input
									type="text"
									name="name"
									placeholder="Coffee Name"
									className="input input-bordered w-full"
								/>
							</label>
						</div>
						<div className="form-control md:w-1/2">
							<label className="label">
								<span className="label-text">Price</span>
							</label>
							<label className="input-group">
								<input
									type="text"
									name="quantity"
									placeholder="Price"
									className="input input-bordered w-full"
								/>
							</label>
						</div>
					</div>
					{/* Form Chef & Taste Row */}
					<div className="md:flex gap-6 mb-6">
						<div className="form-control md:w-1/2">
							<label className="label">
								<span className="label-text">Chef Name</span>
							</label>
							<label className="input-group">
								<input
									type="text"
									name="supplier"
									placeholder="Chef Name"
									className="input input-bordered w-full"
								/>
							</label>
						</div>
						<div className="form-control md:w-1/2">
							<label className="label">
								<span className="label-text">Taste</span>
							</label>
							<label className="input-group">
								<input
									type="text"
									name="taste"
									placeholder="Taste"
									className="input input-bordered w-full"
								/>
							</label>
						</div>
					</div>
					{/* Form Category & Details Row */}
					<div className="md:flex gap-6 mb-6">
						<div className="form-control md:w-1/2">
							<label className="label">
								<span className="label-text">Category</span>
							</label>
							<label className="input-group">
								<input
									type="text"
									name="category"
									placeholder="Category"
									className="input input-bordered w-full"
								/>
							</label>
						</div>
						<div className="form-control md:w-1/2">
							<label className="label">
								<span className="label-text">Details</span>
							</label>
							<label className="input-group">
								<input
									type="text"
									name="details"
									placeholder="Details"
									className="input input-bordered w-full"
								/>
							</label>
						</div>
					</div>
					{/* Form Photo URL Row */}
					<div className="mb-6">
						<div className="form-control md:w-full">
							<label className="label">
								<span className="label-text">Photo URL</span>
							</label>
							<label className="input-group">
								<input
									type="text"
									name="url"
									placeholder="Photo URL"
									className="input input-bordered w-full"
								/>
							</label>
						</div>
					</div>
					<input className="btn btn-block mt-4" type="submit" value="Add Coffee" />
				</form>
			</div>
		</div>
	);
};

export default AddCoffee;
