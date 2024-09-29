import { useContext } from "react";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { imageUpload } from "../Api";
const Register = () => {
  const { createUser, signInWithGoogle, updateUserProfile } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const image = form.image.files[0];

    try {
      const image_url = await imageUpload(image);
      const result = await createUser(email, password);
      console.log(result);

      await updateUserProfile(name, image_url);
      navigate("/");
      toast.success("SignUp Successful");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();
      navigate("/");
      toast.success("SignUp Successful");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div className="py-16  flex bg-gray-100 justify-center items-center min-h-screen">
      {/* Login Section */}
      <div className=" bg-white p-8 py-16 w-full max-w-md mx-auto rounded-lg shadow-lg">
        <h2 className="text-5xl font-bold text-green-500 mb-6 text-center">
          Register
        </h2>
        <form onSubmit={handleSubmit} action="#">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-xl font-semibold text-gray-700 mb-2"
            >
              Name
            </label>
            <input
              type="name"
              id="name"
              name="name"
              placeholder="Enter you name"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div>
            <label htmlFor="image" className="block mb-2 text-xl">
              Select Image:
            </label>
            <input
              required
              type="file"
              id="image"
              name="image"
              accept="image/*"
              className="mb-2 w-full py-[1px]"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-xl font-semibold text-gray-700 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter you gmail account"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-xl font-semibold text-gray-700 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="******"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div className="flex justify-between items-center mb-4">
            <div>
              <input type="checkbox" id="remember" className="mr-2" />
              <label htmlFor="remember" className="text-sm text-gray-700">
                Remember me
              </label>
            </div>
            <a href="#" className="text-sm text-green-500 hover:underline">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-lg font-semibold hover:bg-green-600 transition"
          >
            Login
          </button>

          {/* Divider */}
          <div className="flex items-center justify-center my-4">
            <div className="border-t border-gray-300 w-full"></div>
            <span className="px-2 text-gray-500">or</span>
            <div className="border-t border-gray-300 w-full"></div>
          </div>

          {/* Social Login Icons */}
          <div className="flex justify-center space-x-4">
            <button
              onClick={handleGoogleLogin}
              className="flex items-center border-2 border-green-500  p-2 rounded-md hover:bg-gray-100 transition"
            >
              <FaGoogle className="text-3xl text-blue-500" />
              <h1 className="text-3xl font-semibold text-red-500">
                o<span className="text-yellow-500">o</span>
                <span className="text-blue-500">g</span>
                <span className="text-green-500">l</span>
                <span className="text-red-500">e</span>
              </h1>
            </button>
          </div>
        </form>
        <div className="text-center mt-5">
          <p>
            Already have a account..? please{" "}
            <Link to="/login">
              <span className="text-blue-500 underline">login</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
