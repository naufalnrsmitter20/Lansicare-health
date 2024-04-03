import User from "../../src/models/userModel"; // Asumsi path ke model User Anda

export async function loginWithGoogle(data: any, callback: any) {
  try {
    let user = await User.findOne({ email: data.email });

    if (user) {
      // User ditemukan, perbarui data user
      Object.assign(user, data);
      await user.save();
    } else {
      // User tidak ditemukan, buat user baru
      data.role = "member"; // Atau role default lain yang Anda inginkan
      user = await User.create(data);
    }

    callback({ status: true, data: user });
  } catch (error) {
    console.error("Error during loginWithGoogle:", error);
    callback({ status: false, data: error });
  }
}
