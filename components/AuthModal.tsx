import { Auth } from "@supabase/auth-ui-react";
import Modal from "./Modal";
import {
  useSessionContext,
  useSupabaseClient,
} from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import { ThemeMinimal, ThemeSupa } from "@supabase/auth-ui-shared";
import useAuthModal from "@/hooks/useAuthModal";
import { useEffect } from "react";


const AuthModal = () => {
  const supabaseClient = useSupabaseClient();
  const router = useRouter();
  const { session } = useSessionContext();
  const { isOpen, closeModal } = useAuthModal(); 
  useEffect(() => {
    if (session) {
      router.refresh;
      closeModal();
    }
  }, [session, closeModal, router]);
  const onChange = (open: boolean) => {
    if (!open) {
      closeModal();
    }
  };
  return (
    <Modal
      title="Welcomeback"
      description="Login to your account"
      isOpen={isOpen}
      onChange={onChange}
    >
      <Auth
        theme="dark"
        magicLink
        providers={["google", "facebook"]}
        supabaseClient={supabaseClient}
        appearance={{
          theme: ThemeSupa,
          variables: {
            default: { colors: { brand: "#404040", brandAccent: "#22c55e" } },
          },
        }}
      />
    </Modal>
  );
};

export default AuthModal;
