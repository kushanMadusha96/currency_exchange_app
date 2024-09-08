import Image from "next/image";
import Button from "./(components)/button/button";
import Navbar from "./(components)/navbar/navbar";
import HomePage from "./(pages)/home/homepage";
import Dropdown from "./(components)/dropdown/dropdown";
import ToggleButton from "./(components)/toggle_button/toggleButton";
import Test from "../../test/test";
import Footer from "./(components)/footer/footer";
import Chart from "./(pages)/charts/page";
import AuthForm from "./(components)/authform/authform";
import SignUp from "./auth/signup/page";
import SignIn from "./auth/signin/page";

export default function Home() {
  return (
    <SignIn />
  );
}
