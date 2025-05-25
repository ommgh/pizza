import { LoginForm } from "@/components/auth/login-form";
import { CircleArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const LoginPage = () => {
	return (
		<>
			<div className="w-full h-screen flex">
				<Link href={"/"}>
					<CircleArrowLeft className="hidden sm:flex mx-10 my-10 text-red-600" />
				</Link>
				<div className="flex-1 flex items-center justify-center p-8">
					<div className="w-full max-w-md space-y-8">
						<LoginForm />
					</div>
				</div>
				<div className="hidden lg:flex flex-1 items-center justify-center p-8">
					<Image
						src="https://res.cloudinary.com/dcwsgwsfw/image/upload/v1748181797/ChatGPT_Image_May_25__2025__06_44_40_PM-removebg-preview_f6lxt3.png"
						alt="Login Illustration"
						width={500}
						height={500}
						className="object-cover"
					/>
				</div>
			</div>
		</>
	);
};

export default LoginPage;
