import { useState } from "react";
import "../style/styles.css";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const validate = () => {
        let newErrors = {};

        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors.email = "Invalid email format";
        }

        if (!formData.subject.trim()) newErrors.subject = "Subject is required";
        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
        } else if (formData.message.length < 10) {
            newErrors.message = "Message must be at least 10 characters";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validate()) return;

        setLoading(true);
        setTimeout(() => {
            alert("Message sent successfully!");
            setFormData({ name: "", email: "", subject: "", message: "" });
            setErrors({});
            setLoading(false);
        }, 1500);
    };

    return (
        <div className="contact-container">
            <h2 className="contact-title">Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="contact-input"
                />
                <p className="contact-error">{errors.name}</p>

                <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="contact-input"
                />
                <p className="contact-error">{errors.email}</p>

                <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="contact-select"
                >
                    <option value="">Select Subject</option>
                    <option value="Coach">Coach</option>
                    <option value="Institute">Institute/Organisation</option>
                    <option value="Trainee">Trainee/Coach</option>
                </select>
                <p className="contact-error">{errors.subject}</p>

                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    className="contact-textarea"
                />
                <p className="contact-error">{errors.message}</p>

                <button type="submit" className="contact-btn" disabled={loading}>
                    {loading ? "Submitting..." : "Send Message"}
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
