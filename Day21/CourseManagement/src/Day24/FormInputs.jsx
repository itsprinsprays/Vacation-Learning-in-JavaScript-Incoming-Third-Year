export default function FormInputs({ formData, setFormData }) {

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }


    return (
        <>
                <input 
                    placeholder="Name"
                    name="courseName"
                    value={formData.courseName}
                    onChange={handleChange}
                />

                <input
                    placeholder="Unit"
                    name="unit"
                    value={formData.unit}
                    onChange={handleChange}
                />

    
        </>
    )
}