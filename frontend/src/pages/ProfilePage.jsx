import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Camera, Mail, User } from "lucide-react";

const ProfilePage = () => {
  const { authUser, isUpdatingProfile, updateProfile } = useAuthStore();
  const [selectedImg, setSelectedImg] = useState(null);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = async () => {
      const base64Image = reader.result;
      setSelectedImg(base64Image);
      await updateProfile({ profilePic: base64Image });
    };
  };

  return (
    <div className="h-screen bg-gradient-to-b from-indigo-50 via-teal-100 to-blue-200 dark:bg-gradient-to-b dark:from-gray-800 dark:via-gray-900 dark:to-gray-700 pt-16">
      <div className="max-w-3xl mx-auto px-6 py-10 space-y-8">
        
        {/* Profile Header */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold text-indigo-600 dark:text-teal-300">Your Profile</h1>
          <p className="text-lg text-gray-600 dark:text-zinc-400">Freshen up your profile and photo!</p>
        </div>

        {/* Avatar Section */}
        <div className="flex justify-center gap-6 items-center">
          <div className="relative">
            <img
              src={selectedImg || authUser.profilePic || "/avatar.png"}
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-indigo-500 dark:border-teal-500 shadow-lg object-cover"
            />
            <label
              htmlFor="avatar-upload"
              className={`absolute bottom-0 right-0 bg-indigo-600 hover:bg-indigo-700 p-2 rounded-full cursor-pointer transition-all duration-200 ${isUpdatingProfile ? "animate-pulse pointer-events-none" : ""}`}
            >
              <Camera className="w-6 h-6 text-white" />
              <input
                type="file"
                id="avatar-upload"
                className="hidden"
                accept="image/*"
                onChange={handleImageUpload}
                disabled={isUpdatingProfile}
              />
            </label>
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-zinc-400">
              {isUpdatingProfile ? "Uploading..." : "Click the camera icon to change your photo"}
            </p>
          </div>
        </div>

        {/* Profile Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Full Name */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 dark:bg-gray-800 dark:border-teal-600 space-y-4">
            <div className="text-sm text-gray-600 dark:text-zinc-400 flex items-center gap-2">
              <User className="w-5 h-5 text-indigo-500 dark:text-teal-500" />
              Full Name
            </div>
            <p className="text-lg font-semibold text-gray-700 dark:text-white">{authUser?.fullName}</p>
          </div>

          {/* Email */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 dark:bg-gray-800 dark:border-teal-600 space-y-4">
            <div className="text-sm text-gray-600 dark:text-zinc-400 flex items-center gap-2">
              <Mail className="w-5 h-5 text-indigo-500 dark:text-teal-500" />
              Email Address
            </div>
            <p className="text-lg font-semibold text-gray-700 dark:text-white">{authUser?.email}</p>
          </div>
        </div>

        {/* Account Info Section */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 dark:bg-gray-800 dark:border-teal-600">
          <h2 className="text-xl font-semibold text-indigo-600 dark:text-teal-300 mb-4">Account Information</h2>
          <div className="text-sm text-gray-600 dark:text-zinc-400 space-y-4">
            <div className="flex justify-between py-3 border-b border-gray-200 dark:border-teal-600">
              <span>Joined</span>
              <span>{authUser.createdAt?.split("T")[0]}</span>
            </div>
            <div className="flex justify-between py-3">
              <span>Account Status</span>
              <span className="text-green-500 font-medium">Active</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
