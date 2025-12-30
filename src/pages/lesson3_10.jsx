import { useState } from "react";

function Lesson3_10() {
    const [formData, setFormData] = useState({
        name: "",
        email: ""
    });

    const [submittedData, setSubmittedData] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedData(formData);
        setFormData({
            name: "",
            email: ""
        });
    }

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">User information</h1>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-medium text-gray-600">Name </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-medium text-gray-600">Email </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="mt-2 bg-blue-600 text-white py-2 px-4 rounded-md font-semibold hover:bg-blue-700 transition-colors"
                    >
                        Submit
                    </button>
                </form>

                {submittedData && (
                    <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-md">
                        <h2 className="text-lg font-semibold text-green-800 mb-2">Submitted Data:</h2>
                        <p className="text-gray-700"><strong>Name:</strong> {submittedData.name} </p>
                        <p className="text-gray-700"><strong>Email:</strong> {submittedData.email} </p>
                    </div>
                )}

            </div>
        </div>
    );
}

export default Lesson3_10;