import imageLeft from '../../assets/background.png'

export default function SectionDaftar() {
  return (
    <div className="flex h-screen">
      {/* Left Section */}
      <div className="w-1/2 hidden md:block">
        <img
          src={imageLeft}  
          alt="imageLeft"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-gray-100 px-8">
        <div className="max-w-md w-full">
          <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">
            Welcome to <span className="text-green-600">VertiGrow</span>
          </h1>

          {/* Form Login */}
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Nama
              </label>
              <div className="flex items-center border rounded-lg bg-gray-200">
                <span className="px-3 text-gray-500">
                  <i className="fas fa-envelope"></i>
                </span>
                <input
                  id="name"
                  type="name"
                  placeholder="Nama anda"
                  className="w-full bg-transparent py-2 px-2 text-gray-700 outline-none"
                />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <div className="flex items-center border rounded-lg bg-gray-200">
                <span className="px-3 text-gray-500">
                  <i className="fas fa-envelope"></i>
                </span>
                <input
                  id="email"
                  type="email"
                  placeholder="Email anda"
                  className="w-full bg-transparent py-2 px-2 text-gray-700 outline-none"
                />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Kata Sandi
              </label>
              <div className="flex items-center border rounded-lg bg-gray-200">
                <span className="px-3 text-gray-500">
                  <i className="fas fa-key"></i>
                </span>
                <input
                  id="password"
                  type="password"
                  placeholder="Kata sandi anda"
                  className="w-full bg-transparent py-2 px-2 text-gray-700 outline-none"
                />
                <span className="px-3 text-gray-500">
                  <i className="fas fa-eye"></i>
                </span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white font-semibold py-2 rounded-lg text-lg hover:bg-green-700"
            >
              Daftar
            </button>
          </form>

          {/* Masuk */}
          <p className="text-center text-gray-600 mt-6">
            Sudah Punya Akun?{" "}
            <a href="/Masuk" className="text-orange-600 font-medium">
              Masuk
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
