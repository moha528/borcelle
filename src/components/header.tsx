import { Button, Navbar } from "flowbite-react";
import {FaUtensils} from "react-icons/fa";


export default function HeaderComponent(){
    return (
        <>
            <Navbar rounded theme={
                {
                    root: {
                        base:"bg-black px-2 py-2.5 sm:px-4"
                    }
                }
            }>
                <Navbar.Brand>
                    <FaUtensils className="icon mr-3 h-6 sm:h-9 text-primary/green" />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Borcelle</span>
                </Navbar.Brand>
                <div className="flex md:order-2 gap-3">
                    <Button color={'dark'}>Sign In</Button>
                    <Button className={'bg-primary/green hover:bg-primary/green/accent focus:ring-gray-400 focus:ring-1'}>Get started</Button>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <Navbar.Link href="#" active>
                        Home
                    </Navbar.Link>
                    <Navbar.Link href="#">Features</Navbar.Link>
                    <Navbar.Link href="#">Pricing</Navbar.Link>
                    <Navbar.Link href="#">Menu</Navbar.Link>
                    <Navbar.Link href="#">Contact</Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}
