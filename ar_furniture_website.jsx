import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sofa, Building2, Phone, Mail, Image as ImageIcon, ShoppingCart } from "lucide-react";

// 👉 All content below is editable from the CONFIG section

const CONFIG = {
  brandName: "AR Furniture",
  tagline: "Luxury Office Furniture & Premium Home Sofa Collections",
  phone: "+92-XXX-XXXXXXX",
  email: "info@arfurniture.com",
  whatsapp: "https://wa.me/92XXXXXXXXXX",
  aboutText:
    "AR Furniture specializes in luxury and premium-quality office furniture and home sofa designs. We blend modern craftsmanship with timeless elegance to elevate your living and working spaces.",
  products: [
    { title: "Office Furniture", desc: "Executive desks, chairs & workstations" },
    { title: "Home Sofas", desc: "Luxury sofas designed for comfort" },
    { title: "Online Orders", desc: "Coming soon e-commerce experience" }
  ],
  galleryItems: 4
};

export default function ARFurnitureWebsite() {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white px-6">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl">
          <h1 className="text-5xl font-bold mb-4">AR Furniture</h1>
          <p className="text-lg mb-6">Luxury Office Furniture & Premium Home Sofa Collections</p>
          <div className="flex gap-4 justify-center">
            <Button className="rounded-2xl">Explore Products</Button>
            <Button variant="outline" className="rounded-2xl">Contact Us</Button>
          </div>
        </motion.div>
      </section>

      {/* About Us */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}>
            <h2 className="text-3xl font-semibold mb-4">About AR Furniture</h2>
            <p className="text-gray-600 leading-relaxed">
              AR Furniture specializes in luxury and premium-quality office furniture and home sofa designs. We blend modern craftsmanship with timeless elegance to elevate your living and working spaces.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} className="bg-white rounded-2xl shadow-lg p-6">
            <p className="text-sm text-gray-500">Quality • Comfort • Luxury</p>
          </motion.div>
        </div>
      </section>

      {/* Services / Products */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-10">Our Products</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="rounded-2xl shadow-md">
              <CardContent className="p-6 text-center">
                <Building2 className="mx-auto mb-4" />
                <h3 className="font-semibold text-lg">Office Furniture</h3>
                <p className="text-gray-500 text-sm">Executive desks, chairs & workstations</p>
              </CardContent>
            </Card>
            <Card className="rounded-2xl shadow-md">
              <CardContent className="p-6 text-center">
                <Sofa className="mx-auto mb-4" />
                <h3 className="font-semibold text-lg">Home Sofas</h3>
                <p className="text-gray-500 text-sm">Luxury sofas designed for comfort</p>
              </CardContent>
            </Card>
            <Card className="rounded-2xl shadow-md">
              <CardContent className="p-6 text-center">
                <ShoppingCart className="mx-auto mb-4" />
                <h3 className="font-semibold text-lg">Online Orders</h3>
                <p className="text-gray-500 text-sm">Coming soon e‑commerce experience</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-10">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white rounded-2xl shadow flex items-center justify-center h-40">
                <ImageIcon className="text-gray-400" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 px-6 bg-black text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8">Contact Us</h2>
          <form className="grid md:grid-cols-2 gap-4">
            <input className="p-3 rounded-xl text-black" placeholder="Your Name" />
            <input className="p-3 rounded-xl text-black" placeholder="Your Email" />
            <textarea className="md:col-span-2 p-3 rounded-xl text-black" placeholder="Your Message" rows="4" />
            <Button className="md:col-span-2 rounded-2xl">Send Message</Button>
          </form>
          <div className="flex justify-center gap-6 mt-6 text-sm">
            <span className="flex items-center gap-2"><Phone size={16} /> +92-XXX-XXXXXXX</span>
            <span className="flex items-center gap-2"><Mail size={16} /> info@arfurniture.com</span>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <a href="https://wa.me/92XXXXXXXXXX" className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg">WA</a>
    </div>
  );
}
