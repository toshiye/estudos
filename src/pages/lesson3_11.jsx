import { useState } from "react";

function Lesson3_11() {
    const [formData, setFormData] = useState({
        name: "",
        email: ""
    });

    const [errors, setErrors] = useState({});

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

        let currentErrors = {};

        if (!formData.name.trim()) {
            currentErrors.name = "Name is required";
        }

        if (!formData.email.trim()) {
            currentErrors.email = "Email is required";
        }

        if (Object.keys(currentErrors).length > 0) {
            setErrors(currentErrors);
            setSubmittedData(null);
        } else {
            setErrors({});
            setSubmittedData(formData);
            setFormData({
                name: "",
                email: ""
            });
        }
    }


    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
            <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md border border-gray-200">
                <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">User Registration</h1>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-semibold text-gray-700">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            className={`px-4 py-2 border rounded-lg transition-all focus:outline-none focus:ring-2 
                ${errors.name
                                    ? 'border-red-500 bg-red-50 focus:ring-red-200'
                                    : 'border-gray-300 focus:ring-blue-200'
                                }`}
                        />
                        {errors.name && <span className="text-red-500 text-xs mt-1">{errors.name}</span>}
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-semibold text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className={`px-4 py-2 border rounded-lg transition-all focus:outline-none focus:ring-2 
                ${errors.email
                                    ? 'border-red-500 bg-red-50 focus:ring-red-200'
                                    : 'border-gray-300 focus:ring-blue-200'
                                }`}
                        />
                        {errors.email && <span className="text-red-500 text-xs mt-1">{errors.email}</span>}
                    </div>

                    <button
                        type="submit"
                        className="mt-2 bg-indigo-600 text-white py-2 px-4 rounded-lg font-bold hover:bg-indigo-700 transition-colors shadow-sm"
                    >
                        Submit
                    </button>
                </form>

                {submittedData && (
                    <div className="mt-8 p-4 bg-emerald-50 border border-emerald-200 rounded-lg animate-fade-in">
                        <h2 className="text-lg font-bold text-emerald-800 mb-2">✅ Success!</h2>
                        <div className="text-emerald-900 text-sm">
                            <p><strong>Name:</strong> {submittedData.name}</p>
                            <p><strong>Email:</strong> {submittedData.email}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Lesson3_11;