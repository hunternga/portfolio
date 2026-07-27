import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-28">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          Contact Me
        </h2>

        <div className="grid lg:grid-cols-2 gap-20 mt-20">

          <div>

            <div className="flex gap-4 mb-8">
              <Mail className="text-blue-600" />
              <div>
                <h3 className="font-bold">Email</h3>
                <p>your@email.com</p>
              </div>
            </div>

            <div className="flex gap-4 mb-8">
              <Phone className="text-blue-600" />
              <div>
                <h3 className="font-bold">Phone</h3>
                <p>+91 XXXXX XXXXX</p>
              </div>
            </div>

            <div className="flex gap-4">
              <MapPin className="text-blue-600" />
              <div>
                <h3 className="font-bold">Location</h3>
                <p>Chennai, Tamil Nadu</p>
              </div>
            </div>

          </div>

          <form className="space-y-6">

            <input
              className="w-full border rounded-xl p-4"
              placeholder="Name"
            />

            <input
              className="w-full border rounded-xl p-4"
              placeholder="Email"
            />

            <textarea
              rows={6}
              className="w-full border rounded-xl p-4"
              placeholder="Message"
            />

            <button className="bg-blue-600 text-white px-8 py-4 rounded-xl">
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}