import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

export const useSignupForm=  () => {
    const {toast}= useToast()
    const [loading, setLoading] = useState();


}