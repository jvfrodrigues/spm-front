import { Password } from "@/domain/types/password";
import { useState } from "react";

interface PasswordFormProps {
  password?: Password;
  onClose?: () => void;
}

interface Errors {
  url?: string;
  name?: string;
  username?: string;
  password?: string;
}

const PasswordForm = (props: PasswordFormProps) => {
  const [url, setUrl] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({} as Errors);

  const handlePasswordToggle = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    const errors = {} as Errors;

    if (!url.trim()) {
      errors.url = "URL is required";
    }

    if (!name.trim()) {
      errors.name = "Name is required";
    }

    if (!username.trim()) {
      errors.username = "Username is required";
    }

    if (!password.trim()) {
      errors.password = "Password is required";
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    } else {
      // Add your form submission logic here
      console.log({ url, name, username, password });
    }
  };

  const passwordForm = () => {
    return (
      <div>
        <h2 className="text-xl font-semibold mb-4">Create password</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label htmlFor="url" className="block text-gray-700">
              URL:
            </label>
            <input
              type="text"
              id="url"
              className={`w-full p-2 border rounded ${
                errors.url ? "border-red-500" : ""
              }`}
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            {errors.url && (
              <p className="text-red-500 text-sm mt-1">{errors.url}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">
              Name:
            </label>
            <input
              type="text"
              id="name"
              className={`w-full p-2 border rounded ${
                errors.name ? "border-red-500" : ""
              }`}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700">
              Username:
            </label>
            <input
              type="text"
              id="username"
              className={`w-full p-2 border rounded ${
                errors.username ? "border-red-500" : ""
              }`}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {errors.username && (
              <p className="text-red-500 text-sm mt-1">{errors.username}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">
              Password:
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className={`w-full p-2 border rounded ${
                  errors.password ? "border-red-500" : ""
                }`}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
              <button
                type="button"
                className="absolute top-2 right-2 text-gray-600"
                onClick={handlePasswordToggle}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="mr-4 px-4 py-2 bg-gray-400 text-white rounded-md"
              onClick={props.onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    );
  };
};

export default PasswordForm;
