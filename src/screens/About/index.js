import { Sidebar } from "../../components/Sidebar";

export default function About() {
  return (
    <div className="grid md:grid-cols-3 xl:grid-cols-12">
      <Sidebar menu="about-us"/>
      <div
        className="md:col-span-2 px-12 bg-gray-300 xl:col-span-10"
        style={{ minHeight: "100vh" }}
      >
        <h1 className="text-4xl font-semibold mt-16">About Us</h1>
      </div>
    </div>
  );
}
