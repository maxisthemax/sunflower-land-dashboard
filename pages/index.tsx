import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import axios from "axios";
const queryClient = new QueryClient();

export default function Home() {
  const query = useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      const data = await axios.get("https://api.sunflower-land.com/visit/9458");
      return data;
    },
  });
  console.log(query.data);
  return <></>;
}
