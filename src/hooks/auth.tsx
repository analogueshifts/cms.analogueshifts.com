import axios from "@/lib/axios";

import Cookies from "js-cookie";

import { useUser } from "@/contexts/user";
import { useToast } from "@/contexts/toast";
import { useRouter } from "next/navigation";

interface GetUserParams {
  setLoading: (loading: boolean) => void;
}

interface LoginParams {
  email: string;
  password: string;
  setLoading: (value: boolean) => void;
}

export const useAuth = () => {
  const router = useRouter();
  const { setUser } = useUser();
  const { notifyUser } = useToast();

  const login = async ({ email, password, setLoading }: LoginParams) => {
    setLoading(true);
    try {
      const response = await axios.request({
        method: "POST",
        url: "/login",
        data: { email, password },
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "x-api-secret-key": process.env.NEXT_PUBLIC_SECRET_KEY,
          "x-api-public-key": process.env.NEXT_PUBLIC_PUBLIC_KEY,
        },
      });

      if (response?.data?.success) {
        notifyUser("success", "Logged In successful", "center");
        Cookies.set("analogueshiftsCmsToken", response.data.data.token);
        setUser(response.data.data.user);
        router.push("/admin/users");
      }

      setLoading(false);
    } catch (error: any) {
      setLoading(false);

      notifyUser(
        "error",
        error?.response?.data?.message || error?.message || "Failed to Login",
        "center"
      );
    }
  };

  const getUser = async ({ setLoading }: GetUserParams) => {
    const token = Cookies.get("analogueshiftsCmsToken");
    setLoading(true);
    try {
      const response = await axios.request({
        url: "/user",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + token,
        },
      });
      console.log(response);
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      if (error?.response?.status === 401) {
        Cookies.remove("analogueshiftsCmsToken");
        router.push("/");
      }
    }
  };

  const logout = async () => {
    Cookies.remove("analogueshiftsCmsToken");
    router.push("/");
  };

  return {
    logout,
    getUser,
    login,
  };
};
