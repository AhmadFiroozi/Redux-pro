import { useState } from "react";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { MdMail, MdPhone, MdLocationOn } from "react-icons/md";
import "./ContactPage.css";

const info = [
  { icon: <MdPhone />, label: "تلفن", value: "۰۲۱-۱۲۳۴۵۶۷۸" },
  { icon: <MdMail />, label: "ایمیل", value: "info@example.com" },
  { icon: <MdLocationOn />, label: "نشانی", value: "تهران، ایران" },
];

function ContactPage() {
  const { theme } = useSelector((store) => store.global);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  // فرم نمایشی است و جایی ارسال نمی‌شود
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("پیام شما ثبت شد. به‌زودی پاسخ می‌دهیم.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className={`contactPage ${theme}`}>
      <div className="container">
        <h1>تماس با ما</h1>

        <div className="contactGrid">
          <div className="contactInfo">
            {info.map((item) => (
              <div className="contactRow" key={item.label}>
                <span className="contactIcon">{item.icon}</span>
                <div>
                  <p className="contactLabel">{item.label}</p>
                  <p className="contactValue">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          <form className="contactForm" onSubmit={handleSubmit}>
            <input
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="نام و نام خانوادگی"
              required
            />
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="ایمیل"
              required
            />
            <textarea
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              placeholder="متن پیام"
              required
            />
            <button type="submit">ارسال پیام</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
