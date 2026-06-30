export const ButtonSocialMedia = ({ icon, text }) => {
  const handleSocialLogin = async (
    provider: "google" | "facebook" | "github",
  ) => {
    /*     try {
    //   const res = await signIn(provider, {
    //     callbackUrl: "/",
    //     redirect: false,
    //   });

    //   if (res?.error) {
    //     console.error("Social login error:", res.error);
    //   }
    } catch (error) {
      console.error(`${provider} login error:`, error);
    } */
  };

  return (
    <button className="w-full flex items-center justify-center gap-3 p-4 bg-white/10 hover:bg-[#16a084]/20  backdrop-blur-md border border-white/20  rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#16a084]/20 group cursor-pointer">
      <span className="flex items-center justify-center shrink-0">{icon}</span>

      <span className="text-white  font-medium leading-none">
        {text}
      </span>
    </button>
  );
};
