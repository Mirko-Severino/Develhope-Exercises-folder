import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function useGithubUser(username) {
  const { data, error, isLoading, mutate } = useSWR(
    username ? `https://api.github.com/users/${username}` : null,
    fetcher,
    {
      onError: {
        data: null,
        error: "Errore",
        isLoading: false,
      },
    }
  );

  const refetch = () => {
    mutate();
  };
  return { user: data, error, loading: isLoading, refetch };
}
