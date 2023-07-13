import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Destination from "../components/Destination";


export default function Home() {
    return (
        <div>
            <Navbar />
            <Hero cName="hero"
            heroImg="https://images.unsplash.com/photo-1682686581854-5e71f58e7e3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            title="Your Journey Your Story"
            text="Choose Your Favourite Destination"
            buttonText="Travel Plan"
            url="/"
            btnClass="show"/>
            <Destination />
        </div>
    )
}